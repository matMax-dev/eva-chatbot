import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {extractFormulas} from '../src/source.js';
const source=readFileSync(new URL('../source/chat-screen.txt',import.meta.url),'utf8');
const formulas=extractFormulas(source);
test('preserves multiline formulas, accents and the final statement',()=>{
 assert.ok(formulas['chat.OnVisible'].startsWith('ClearCollect('));
 assert.ok(formulas['chat.OnVisible'].includes('¿Cómo mejorar mi Speaking?'));
 assert.ok(formulas['chat.OnVisible'].endsWith('    )\n)'));
 assert.equal(formulas['galConversacion.Height'],'If(varMostrarOpciones || varEscribiendo, 850, 935)');
});
test('decodes quoted YAML without changing the send action',()=>{
 const raw=source.split(/\r?\n/).find(l=>l.includes('OnSelect: "='));
 const expected=JSON.parse(raw.trim().slice('OnSelect: '.length)).slice(1).replace(/\r\n/g,'\n');
 assert.equal(formulas['btnEnviar.OnSelect'],expected);
 assert.ok(expected.endsWith('Reset(txtMensaje);'));
});
test('all documented properties exist, including both response paths',()=>{
 for(const key of ['btn_choices.OnSelect','btn_choices.Text','galOpcionesRapidas.Items','galOpcionesRapidas.Visible','galConversacion.Items','galConversacion.Default','lbl_message.Text','lbl_message.Color','lbl_message.Fill','lbl_message.X','txtMensaje.Default','txtMensaje.HintText','btnEnviar.Text','tmr_escribiendo.Duration','tmr_escribiendo.Start','tmr_escribiendo.OnTimerEnd','tmr_puntitos.OnTimerEnd','tmr_puntitos.Duration','tmr_puntitos.Repeat','tmr_puntitos.Start','thinking.Text','thinking.Visible']) assert.ok(formulas[key],key);
 assert.ok(formulas['tmr_escribiendo.OnTimerEnd'].includes('SortByColumns('));
 assert.ok(formulas['btn_choices.OnSelect'].includes('SortOrder.Ascending'));
 assert.ok(!formulas['tmr_escribiendo.OnTimerEnd'].includes('PressedBorderColor'));
});
