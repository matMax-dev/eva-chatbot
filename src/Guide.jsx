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
export function GuidedApp({lessons,Content,Badge}) {
 const [route,setRoute]=useState(readRoute);
 const [menu,setMenu]=useState(false);
 const [selectedFormula,setSelectedFormula]=useState('');
 const focusRef=useRef(null);
 const index=route.lesson;
 const pages=React.Children.toArray(Content({index}).props.children);
 const step=Math.min(route.step,pages.length-1);
 const last=step===pages.length-1;
 const formulaOptions=pages.flatMap(collectFormulas);
 useEffect(()=>{const sync=()=>{if(location.hash==='#lesson-content')return;setRoute(readRoute());setMenu(false);setSelectedFormula('')};window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync)},[]);
 useEffect(()=>{window.scrollTo(0,0);focusRef.current?.focus({preventScroll:true})},[index,step]);
 function go(lesson,next){setSelectedFormula('');setMenu(false);location.hash=`${lesson+1}/${next+1}`;}
 function jump(target){const next=pages.findIndex(page=>containsFormula(page,target));if(next<0)return;history.pushState(null,'',`#${index+1}/${next+1}`);setRoute({lesson:index,step:next});setSelectedFormula(target);}
 return <><a className="skip" href="#lesson-content">Saltar al contenido</a><aside className={`sidebar ${menu?'open':''}`}><a href="#1/1" className="brand"><span className="brand-icon">E</span><div>EVA <span>Lab</span><small>APRENDE POWER APPS</small></div></a><div className="sidebar-label">ELIGE TU LECCIÓN</div><nav aria-label="Lecciones">{lessons.map((lesson,i)=><a key={lesson[0]} href={`#${i+1}/1`} onClick={()=>setMenu(false)} className={i===index?'active':''} aria-current={i===index?'page':undefined}><span className="nav-number">0{i+1}</span><span>{lesson[0]}</span></a>)}</nav><div className="sidebar-bottom"><span className="mini-mark">✦</span><strong>Una idea a la vez.</strong><p>Explora, prueba y avanza a tu ritmo.</p><div>06 lecciones · Guía de clase</div></div></aside><div className="workspace"><header className="topbar"><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Mostrar lecciones" aria-expanded={menu}>☰</button><span>Tu espacio para aprender <span className="crumb">/</span><strong>Power Apps</strong></span><span className="top-tag">MODO PASO A PASO</span></header><main id="lesson-content"><div className="lesson-meta"><span className="eyebrow">LECCIÓN 0{index+1} / 06</span><Badge level={index===3?2:[0,2,5].includes(index)?1:0}/></div><h1>{lessons[index][0]}</h1><p className="lead">{lessons[index][1]}</p><div className="journey"><div className="journey-top"><span>Paso {step+1} de {pages.length}</span><label><span className="sr-only">Ir a una fórmula</span><select aria-label="Ir a una fórmula" value="" onChange={e=>jump(e.target.value)}><option value="" disabled>Buscar una propiedad ↗</option>{formulaOptions.map(f=><option key={f} value={f}>{f}</option>)}</select></label></div><div className="step-track" aria-label="Pasos de la lección">{pages.map((_,i)=><button key={i} className={i===step?'current':i<step?'earlier':''} aria-label={`Paso ${i+1}: ${titles[index][i]}`} aria-current={i===step?'step':undefined} onClick={()=>go(index,i)} title={titles[index][i]}/>)}</div></div><article className="learning-stage" key={`${index}-${step}`}><div className="stage-header"><span className="step-index">{String(step+1).padStart(2,'0')}</span><h2 ref={focusRef} tabIndex="-1">{titles[index][step]}</h2></div><FormulaContext.Provider value={selectedFormula}><div className="step-body">{pages[step]}</div></FormulaContext.Provider>{last&&<Check index={index}/>}</article><div className="step-controls"><button className="back-button" disabled={index===0&&step===0} onClick={()=>step?go(index,step-1):go(index-1,titles[index-1].length-1)}>← Anterior</button><span>{last?'Llegaste al final de esta lección':'Sin prisa. Tú marcas el ritmo.'}</span><button className="primary" onClick={()=>last?go(index<5?index+1:0,0):go(index,step+1)}>{last?(index===5?'Volver al inicio ↗':'Siguiente lección →'):'Continuar →'}</button></div><footer className="page-foot"><span>EVA LAB / Aprende construyendo</span><span>Fórmulas originales · Power Fx</span></footer></main></div></>;
}
