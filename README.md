# EVA · Guía de Power Apps

Guía estática en español, con seis lecciones divididas en pasos. Muestra una sección a la vez, permite explorar conceptos y secuencias, desplegar fórmulas copiables y responder una pregunta breve al final de cada lección. Diseño azul oscuro y violeta con acentos coral. React, Vite y CSS; sin servidor de datos ni autenticación.

La barra segmentada permite saltar de paso; Anterior y Continuar recorren la lección. El selector de propiedad lleva al paso correspondiente y abre su fórmula. Las direcciones `#1/4`, por ejemplo, abren directamente el cuarto paso de la primera lección. Las respuestas de práctica son temporales y no se califican ni guardan.

## Abrir localmente

```sh
npm install
npm run dev
```

Abre la dirección que muestra Vite. Para comprobar y preparar la versión publicada:

```sh
npm test
npm run build
npm run preview
```

## Fórmulas originales

`source/chat-screen.txt` es la fuente de verdad. Se importa durante la compilación. `src/source.js` extrae sus propiedades sin reescribir las fórmulas: decodifica las cadenas del archivo y retira el `=` del formato de exportación. Los botones copian solo la fórmula. Las actualizaciones del archivo requieren volver a compilar el sitio.

## Antes de usarla en clase

- En Power Apps, conectar `respuestasBot` con `Title`, `PalabrasClave`, `Respuesta` y `Orden`. El archivo no contiene los registros de ese origen; el sitio no inventa respuestas.
- Revisar `tmr_escribiendo.OnTimerEnd`: el `If` contiene una coma entre el `Set(varRespuesta, ...)` de la coincidencia y el `Collect` siguiente. En sintaxis internacional, las acciones de una misma rama se encadenan con `;`. La guía muestra el original y destaca esta incidencia; no afirma que la fórmula haya sido ejecutada en Power Apps. Referencia: https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-if
- Probar en Power Apps una pregunta con coincidencias, otra sin ellas, Agradecimiento y Despedida; comprobar la espera y la reaparición de las opciones.
- Las opciones rápidas responden inmediatamente y priorizan `Orden`; el temporizador calcula `Puntaje`. Esta diferencia está documentada.
- El archivo no evita mensajes vacíos ni envíos simultáneos, y no inicializa todos los estados al volver a la pantalla. Las fórmulas se conservan para revisar esos detalles por separado.
- Las funciones usan comas entre argumentos y punto y coma entre acciones. La configuración regional del editor Power Apps debe corresponder a esa sintaxis.

## GitHub Pages

El resultado en `dist/` es estático. `base: './'` permite servirlo bajo un nombre de repositorio; las seis lecciones usan fragmentos `#1` a `#6` y no requieren redirecciones del servidor.

Repositorio público: https://github.com/matMax-dev/eva-chatbot

Sitio: https://matmax-dev.github.io/eva-chatbot/

GitHub Pages usa GitHub Actions. El flujo `.github/workflows/pages.yml` prueba, compila y publica automáticamente cada actualización de `main`. También puede ejecutarse manualmente con **Publicar guía EVA** desde Actions.

Las fuentes de Google son opcionales: si no hay red se usan las fuentes del sistema. Para copiar mediante Clipboard API, sirve el sitio por HTTPS o localhost. No abras `dist/index.html` mediante `file://`; usa un servidor estático.
