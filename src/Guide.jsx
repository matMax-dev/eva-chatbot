import React, {useState, useEffect, useRef, createContext} from 'react';

export const FormulaContext = createContext('');
const titles = [
 ['El punto de partida','Conoce las colecciones','Prepara tus datos','Abre la fórmula','Pruébalo en clase','Un detalle importante'],
 ['Conoce los controles','Conecta la galería','Distingue los mensajes','Prepara la entrada','Comprueba lo aprendido'],
 ['Sigue el mensaje','Explora la fórmula','Conoce las funciones','Piensa antes de copiar','Prueba con cuidado'],
 ['Antes de empezar','Sigue la búsqueda','Prepara y compara','Calcula el puntaje','Sin coincidencias','Explora la fórmula','Comprueba lo aprendido'],
 ['Prueba la animación','Dos relojes diferentes','El reloj de la respuesta','El ciclo de los puntos','La burbuja de espera'],
 ['Las preguntas iniciales','Conecta las opciones','Compara los recorridos','Explora la acción','Comprueba lo aprendido']
];
const questions = [
 ['¿Qué ocurre al volver a la pantalla chat?',['Se reinicia la conversación','Se conservan todos los mensajes'],0,'OnVisible ejecuta ClearCollect y vuelve a crear el saludo inicial.'],
 ['¿Qué propiedad conecta la galería con los mensajes?',['Height','Items','Color'],1,'Items = colConversacion conecta la galería con los registros del chat.'],
 ['¿Para qué guardar varUltimoMensaje antes de Reset?',['Para conservar la pregunta','Para cambiar el color'],0,'Reset vacía el cuadro; la variable conserva la pregunta para buscar la respuesta.'],
 ['¿Qué respuesta debería quedar primero?',['La de Puntaje 1','La de Puntaje 3'],1,'El temporizador ordena Puntaje de mayor a menor. Recuerda revisar la incidencia del If en Power Apps.'],
 ['¿Los puntos representan procesamiento de inteligencia artificial?',['Sí','No, son un efecto visual'],1,'El temporizador cambia varPuntitos; Switch decide cuántos puntos mostrar.'],
 ['¿Qué criterio usan las opciones rápidas?',['Mayor Puntaje','Menor Orden'],1,'btn_choices filtra coincidencias y ordena por Orden ascendente.']
];
function containsFormula(node, target) {
 if (!React.isValidElement(node)) return false;
 if (`${node.props.control}.${node.props.property}` === target) return true;
 return React.Children.toArray(node.props.children).some(child => containsFormula(child,target));
}
function collectFormulas(node) {
 if (!React.isValidElement(node)) return [];
 if (node.props.control && node.props.property) return [`${node.props.control}.${node.props.property}`];
 return React.Children.toArray(node.props.children).flatMap(collectFormulas);
}
function readRoute(){const parts=location.hash.slice(1).split('/').map(Number);return {lesson:Number.isInteger(parts[0])&&parts[0]>=1&&parts[0]<=6?parts[0]-1:0,step:Number.isInteger(parts[1])&&parts[1]>0?parts[1]-1:0};}
function Check({index}) {
 const [answer,setAnswer]=useState(null);
 const [question,options,correct,explanation]=questions[index];
 return <div className="knowledge-check"><span className="eyebrow">UNA PAUSA PARA PENSAR</span><h3>{question}</h3><div className="answer-options">{options.map((option,i)=><button key={option} aria-pressed={answer===i} className={answer===i?'chosen':''} onClick={()=>setAnswer(i)}>{option}</button>)}</div>{answer!==null&&<p role="status" className="answer-feedback">{answer===correct?'¡Exacto!':'Inténtalo de nuevo.'} {answer===correct?explanation:'Vuelve a mirar la explicación de este paso.'}</p>}</div>
}
export function GuidedApp({lessons,Content,Badge,onComplete,completed=[]}) {
 const [route,setRoute]=useState(readRoute);

 const [selectedFormula,setSelectedFormula]=useState('');
 const focusRef=useRef(null);
 const previousLesson=useRef(route.lesson);
 const initialView=useRef(true);
 const index=route.lesson;
 const pages=React.Children.toArray(Content({index}).props.children);
 const step=Math.min(route.step,pages.length-1);
 const last=step===pages.length-1;
 const formulaOptions=pages.flatMap(collectFormulas);
 useEffect(()=>{const sync=()=>{if(location.hash==='#lesson-content')return;setRoute(readRoute());setSelectedFormula('')};window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[]);
 useEffect(()=>{if(initialView.current||previousLesson.current!==index){window.scrollTo(0,0)}else{document.querySelector(".detail-workbench")?.scrollIntoView({block:"start"})}initialView.current=false;previousLesson.current=index;focusRef.current?.focus({preventScroll:true})},[index,step]);
 function go(lesson,next){setSelectedFormula('');location.hash=`${lesson+1}/${next+1}`;}
 function jump(target){const next=pages.findIndex(page=>containsFormula(page,target));if(next<0)return;history.pushState(null,'',`#${index+1}/${next+1}`);setRoute({lesson:index,step:next});setSelectedFormula(target);}
 const categories=['Fundamentos de conversación','Diseño de la conversación','Interacción del usuario','Lógica de respuestas','Estados de la conversación','Opciones y cierre'];
 function advance(){if(last){onComplete(index);if(index===5)location.hash='lecciones';else go(index+1,0)}else go(index,step+1)}
 return <main id="lesson-content" className="lesson-detail">
  <div className="detail-topline"><a href="#lecciones">← Volver a Lecciones</a><div><span className="detail-time">◷ LECCIÓN 0{index+1} · {[5,7,5,6,4,5][index]} MIN</span><Badge level={index===3?2:[0,2,5].includes(index)?1:0}/></div></div>
  <header className="detail-heading"><p className="detail-category"><strong>0{index+1}</strong><span>/</span>{categories[index]}</p><h1>{lessons[index][0]}</h1><p className="detail-description">{lessons[index][2]}</p></header>
  <p className="lesson-index-label">CONTENIDO DE ESTA LECCIÓN <span>Selecciona un paso para ir directamente</span></p><nav className="detail-steps" aria-label="Pasos de la lección">{pages.map((_,i)=><button key={i} className={i===step?'current':''} aria-current={i===step?'step':undefined} aria-label={`Paso ${i+1}: ${titles[index][i]}`} onClick={()=>go(index,i)}><span className="detail-step-number">{i+1}</span><span><small>PASO {i+1}</small><span>{titles[index][i]}</span></span></button>)}</nav>
  <div className="detail-tools"><span>Usa los botones al final para avanzar.</span><label><span className="sr-only">Ir a una fórmula</span><select aria-label="Ir a una fórmula" value="" onChange={e=>jump(e.target.value)}><option value="" disabled>Buscar una propiedad ↗</option>{formulaOptions.map(f=><option key={f} value={f}>{f}</option>)}</select></label></div>
  <div className="detail-workbench">
   <article className="detail-panel">
    <div className="detail-panel-bar"><span className="detail-step-pill">PASO {step+1} DE {pages.length}</span><strong>{titles[index][step]}</strong><div className="detail-dots" aria-hidden="true">{pages.map((_,i)=><span key={i} className={i===step?'active':''}/>)}</div></div>
    <div className="detail-panel-content" key={`${index}-${step}`}>
     <div className="detail-content-heading"><span className="detail-content-icon" aria-hidden="true">{String(step+1).padStart(2,'0')}</span><div><span className="eyebrow">{lessons[index][1]}</span><h2 ref={focusRef} tabIndex="-1">{titles[index][step]}</h2></div><span className="detail-studio">Power Apps Studio</span></div>
     <FormulaContext.Provider value={selectedFormula}><div className="step-body">{pages[step]}</div></FormulaContext.Provider>
     {last&&<Check index={index}/>}
    </div>
    <div className="detail-controls"><button className="detail-back" onClick={()=>step?go(index,step-1):location.hash='lecciones'}>← {step?'Paso anterior':'Volver a Lecciones'}</button><span>Tu progreso: <strong>Paso {step+1} de {pages.length}</strong></span><button className="primary" onClick={advance}>{last?(index===5?'Completar curso ✓':'Completar lección y seguir →'):`Paso ${step+2}: ${titles[index][step+1]} →`}</button></div>
   </article>
  </div>
  <section className="detail-lesson-footer" aria-label="Navegación entre lecciones"><span className="detail-footer-icon" aria-hidden="true">{completed.includes(index)?'✓':'◎'}</span><div><strong>Lección 0{index+1} de 06</strong><p>{completed.includes(index)?'Lección completada · Puedes repasar cada paso.':`${completed.length} de 6 lecciones completadas · Avanza a tu ritmo.`}</p></div><a href="#lecciones">Volver al índice</a>{index<5?<a className="detail-next-lesson" href={`#${index+2}/1`}>Ir directo a Lección 0{index+2} →</a>:<a className="detail-next-lesson" href="#recursos">Explorar recursos →</a>}</section>
 </main>;
}

