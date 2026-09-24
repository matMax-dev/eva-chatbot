import React, {useEffect, useState} from 'react';
import {GuidedApp} from './Guide';

const cards = [
 ['Preparando a EVA', 'Inicializa tu aplicación y define el mensaje de bienvenida con OnVisible.', 5, 'rocket'],
 ['Construyendo el chat', 'Crea la galería de mensajes y el diseño visual de la conversación.', 7, 'chat'],
 ['Enviar mensajes', 'Configura la caja de texto y el botón de envío para añadir mensajes.', 5, 'send'],
 ['Buscar respuestas', 'Conecta las respuestas automáticas de EVA según lo que pregunte el usuario.', 6, 'search'],
 ['EVA está escribiendo…', 'Añade realismo con indicadores de carga y estados de espera reactivos.', 4, 'dots'],
 ['Opciones rápidas y cierre', 'Incorpora sugerencias con un clic y completa el recorrido de tu chatbot.', 5, 'check']
];
const paths = {
 rocket: <><path d="M14 5c3-3 7-3 7-3s0 4-3 7l-7 7-5-5 8-8Z"/><path d="m6 11-4 1 4-6 6-1M11 16l-1 6 6-4 1-5M5 16c-2 1-3 5-3 5s4-1 5-3"/><circle cx="16" cy="7" r="1"/></>,
 chat: <><path d="M4 4h14v12H7l-4 3V4ZM18 9h3v13l-5-3h-5"/></>,
 send: <><path d="m3 3 19 9-19 9 4-9-4-9ZM7 12h15"/></>,
 search: <><circle cx="14" cy="10" r="5"/><path d="m18 14 4 5M2 6h4M2 12h4M2 18h9"/></>,
 dots: <><circle cx="12" cy="12" r="9"/><path d="M7 12h.01M12 12h.01M17 12h.01"/></>,
 check: <><path d="m12 2 3 3 4 0 0 4 3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3Z"/><path d="m8 12 3 3 5-6"/></>,
 book: <><path d="M4 3h16v18H4zM8 7h8M8 11h8M8 15h5"/></>
};
export function Icon({name, ...props}) {return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.chat}</svg>}
function readCompleted() {try {const value=JSON.parse(localStorage.getItem('eva-completed') || '[]');return Array.isArray(value)?value.filter(i=>Number.isInteger(i)&&i>=0&&i<6):[];} catch {return [];}}
export default function App(props) {
 const [hash,setHash]=useState(location.hash);
 const [completed,setCompleted]=useState(readCompleted);
 useEffect(()=>{const update=()=>{setHash(location.hash);if(!/^#[1-6](\/|$)/.test(location.hash))window.scrollTo(0,0)};window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update)},[]);
 const isLesson=/^#[1-6](\/|$)/.test(hash);
 const resources=hash==='#recursos';
 function complete(index) {setCompleted(previous=>{const next=[...new Set([...previous,index])];try {localStorage.setItem('eva-completed',JSON.stringify(next))} catch {}return next;});}
 const nextLesson=Array.from({length:6},(_,i)=>i).find(i=>!completed.includes(i)) ?? 0;
 return <div className={isLesson?'site lesson-view':'site catalog-view'}>
  <a className="skip" href="#main-content" onClick={event=>{event.preventDefault();const main=document.querySelector('main');main?.setAttribute('tabindex','-1');main?.focus();}}>Saltar al contenido</a>
  <header className="site-header">
   <a className="site-brand" href="#lecciones"><span className="site-logo"><Icon name="chat"/></span><span>Chatbot EVA <span className="brand-subtitle">· Guía de Power Apps</span></span></a>
   <span className="brand-pill">{isLesson?'MODO ESTUDIO':'APRENDE PASO A PASO'}</span>
   {isLesson?<nav className="site-nav detail-site-nav" aria-label="Navegación principal"><a href="#lecciones">← Volver a Lecciones</a><span className="current-lesson-label">Lección 0{hash.slice(1,2)} de 06</span><a href="#recursos">Recursos & Fórmulas</a></nav>:<nav className="site-nav" aria-label="Navegación principal">
    <a href={`#${nextLesson+1}/1`} className={isLesson?'selected':''} aria-current={isLesson?'page':undefined}>Laboratorio</a>
    <a href="#lecciones" className={!isLesson&&!resources?'selected':''} aria-current={!isLesson&&!resources?'page':undefined}>Lecciones</a>
    <a href="#recursos" className={resources?'selected':''} aria-current={resources?'page':undefined}>Recursos</a>
   </nav>}
  </header>
  {isLesson?<div id="main-content"><GuidedApp {...props} onComplete={complete} completed={completed}/></div>:resources?
   <main id="main-content" className="catalog-main resources-main">
    <div className="catalog-hero"><span className="course-pill"><Icon name="book"/> TU CAJA DE HERRAMIENTAS</span><h1>Recursos para construir con EVA</h1><p>Vuelve a las fórmulas y los conceptos que necesitas, a tu ritmo.</p></div>
    <div className="lesson-grid">{props.lessons.map((lesson,i)=><article className="lesson-card" key={lesson[0]}><div className="card-meta"><span className="lesson-pill">Lección 0{i+1}</span><span className={`lesson-icon icon-${i}`}><Icon name={cards[i][3]}/></span></div><h2>{lesson[0]}</h2><p>{lesson[2]}</p><code>{lesson[3]}.{lesson[4]}</code><a className="card-action" href={`#${i+1}/1`}>Explorar conceptos <span>→</span></a></article>)}</div>
   </main>:
   <main id="main-content" className="catalog-main">
    <section className="catalog-hero" aria-labelledby="catalog-title"><span className="course-pill"><i/> CURSO INTERACTIVO · POWER APPS</span><h1 id="catalog-title">Aprende a crear tu Chatbot EVA</h1><p>6 lecciones prácticas y sencillas para construir tu propio asistente en Power Apps desde cero.</p><div className="course-summary"><span><span className="summary-progress">◷</span> <strong>{completed.length} de 6</strong> completadas</span><b>·</b><span><span className="summary-clock">◷</span> ~30 min total</span></div></section>
    <section className="lesson-grid" aria-label="Lecciones del curso">{cards.map(([title,description,minutes,icon],i)=><article className="lesson-card" key={title}><div className="card-meta"><span className="lesson-pill">Lección 0{i+1} · {minutes} min</span><span className={`lesson-icon icon-${i}`}><Icon name={completed.includes(i)?'check':icon}/></span></div><h2>{title}</h2><p>{description}</p><a className={`card-action ${i===nextLesson?'featured':''}`} href={`#${i+1}/1`}>{completed.includes(i)?'Repasar lección':i===nextLesson?'Comenzar lección':'Ver lección'}<span>→</span></a>{completed.includes(i)&&<span className="completion-label">✓ Completada</span>}</article>)}</section>
   </main>}
  <footer className="site-footer"><span>{isLesson?<><strong>Chatbot EVA · Laboratorio Educativo</strong><br/>Aprende Power Apps y Power Fx paso a paso.</>:'Chatbot EVA · Guía educativa interactiva para Power Apps.'}</span><a href="#recursos">Explorar recursos <span>↗</span></a></footer>
 </div>;
}

