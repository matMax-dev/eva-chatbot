// Reads only the control/property structure used by the supplied Power Apps export.
// No formula rewriting: decode YAML strings and remove the export's leading '='.
export function extractFormulas(source) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const result = {};
  let control = 'chat';
  for (let i = 0; i < lines.length; i++) {
    const child = lines[i].match(/^\s*- ([\w]+):\s*$/);
    if (child) control = child[1];
    const property = lines[i].match(/^(\s+)(\w+): (.*)$/);
    if (!property) continue;
    let value = property[3];
    if (value.startsWith('|')) {
      const block = [];
      while (i + 1 < lines.length && (!lines[i + 1].trim() || lines[i + 1].match(/^ */)[0].length > property[1].length)) block.push(lines[++i]);
      const indent = Math.min(...block.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
      value = block.map(l => l.slice(indent)).join('\n').trimEnd();
    } else if (value.startsWith('"')) {
      try { value = JSON.parse(value); } catch { continue; }
    }
    if (value.startsWith('=')) result[`${control}.${property[2]}`] = value.slice(1).replace(/\r\n/g, '\n');
  }
  return result;
}
