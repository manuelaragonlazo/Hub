// Edit the text below to personalize your website in both languages.
const translations = {
  en: {
    skip:'Skip to content', navAbout:'About', navInterests:'Interests', navProjects:'Projects', navContact:'Contact',
    eyebrow:'FINANCE · IDEAS · GROWTH', heroTitle:'Curious about markets.<br><em>Focused on the future.</em>',
    heroLead:"I'm Manuel Aragón, a future finance student exploring how capital, business, and ideas shape our world.",
    discover:'Discover my story', explore:'Explore my projects', artLabel:'PERSPECTIVE', artFooter:'A LONG-TERM VIEW', heroBottom:'A PERSONAL JOURNEY IN FINANCE',
    aboutTag:'01 / ABOUT ME', aboutTitle:'Every journey starts with <em>curiosity.</em>',
    aboutP1:"I'm Manuel, currently finishing school and preparing to study finance. I created this space to document what I'm learning and share the questions, ideas, and projects that interest me.",
    aboutP2:"I believe that understanding finance is about more than numbers — it's about understanding decisions, opportunities, and the world around us.",
    aboutQuote:'Learning in public. Thinking independently. Building for the long term.',
    interestsTag:'02 / AREAS OF INTEREST', interestsTitle:'What I’m exploring<span class="gold-text">.</span>', interestsNote:'The topics guiding my learning.',
    interest1Title:'Financial Markets',interest1Text:'How markets operate, how people invest, and what drives financial decisions.',
    interest2Title:'Business & Strategy',interest2Text:'How organizations create value, grow, and make long-term decisions.',
    interest3Title:'Economics & Ideas',interest3Text:'The forces and ideas that influence industries, societies, and our future.',
    projectsTag:'03 / MY WORK',projectsTitle:'A portfolio in <em>progress.</em>',projectsNote:'This section will grow as I learn and build.',comingSoon:'COMING SOON',
    projectTitle:'My first finance project',projectText:"I'm preparing this space for my first analysis, research notes, and academic projects. I want each piece to reflect real learning and thoughtful work.",
    projectFootnote:"No published projects yet — and that's where the journey begins.",contactTag:'04 / CONNECT',contactTitle:"Let's exchange <em>ideas.</em>",
    contactText:"Interested in finance, business, or a thoughtful conversation? I'd love to connect.",emailBtn:'Get in touch',
    emailNote:'The contact address is a placeholder. Replace it with your real email before publishing.',footer:'Built with curiosity. © 2026 Manuel Aragón.',top:'Back to top ↑'
  },
  es: {
    skip:'Ir al contenido',navAbout:'Sobre mí',navInterests:'Intereses',navProjects:'Proyectos',navContact:'Contacto',
    eyebrow:'FINANZAS · IDEAS · CRECIMIENTO',heroTitle:'Curiosidad por los mercados.<br><em>Visión de futuro.</em>',
    heroLead:'Soy Manuel Aragón, futuro estudiante de Finanzas. Me interesa descubrir cómo el capital, los negocios y las ideas transforman nuestro mundo.',
    discover:'Conoce mi historia',explore:'Explora mis proyectos',artLabel:'PERSPECTIVA',artFooter:'UNA VISIÓN A LARGO PLAZO',heroBottom:'MI CAMINO EN LAS FINANZAS',
    aboutTag:'01 / SOBRE MÍ',aboutTitle:'Todo camino comienza con <em>curiosidad.</em>',
    aboutP1:'Soy Manuel, estoy terminando el colegio y me preparo para estudiar Finanzas. Creé este espacio para documentar lo que aprendo y compartir las preguntas, ideas y proyectos que despiertan mi interés.',
    aboutP2:'Creo que comprender las finanzas va más allá de los números: también implica entender decisiones, oportunidades y el mundo que nos rodea.',
    aboutQuote:'Aprender y compartir. Pensar con independencia. Construir a largo plazo.',
    interestsTag:'02 / ÁREAS DE INTERÉS',interestsTitle:'Lo que estoy explorando<span class="gold-text">.</span>',interestsNote:'Los temas que orientan mi aprendizaje.',
    interest1Title:'Mercados financieros',interest1Text:'Cómo funcionan los mercados, cómo se invierte y qué impulsa las decisiones financieras.',
    interest2Title:'Negocios y estrategia',interest2Text:'Cómo las organizaciones crean valor, crecen y toman decisiones de largo plazo.',
    interest3Title:'Economía e ideas',interest3Text:'Las fuerzas y las ideas que influyen en las industrias, las sociedades y nuestro futuro.',
    projectsTag:'03 / MI TRABAJO',projectsTitle:'Un portafolio en <em>construcción.</em>',projectsNote:'Esta sección crecerá mientras aprendo y desarrollo proyectos.',comingSoon:'PRÓXIMAMENTE',
    projectTitle:'Mi primer proyecto de finanzas',projectText:'Estoy preparando este espacio para mis primeros análisis, apuntes de investigación y proyectos académicos. Quiero que cada publicación refleje aprendizaje real y trabajo reflexivo.',
    projectFootnote:'Aún no hay proyectos publicados. Aquí comienza el camino.',contactTag:'04 / CONTACTO',contactTitle:'Intercambiemos <em>ideas.</em>',
    contactText:'¿Te interesan las finanzas, los negocios o una buena conversación? Me gustaría conectar contigo.',emailBtn:'Escríbeme',
    emailNote:'El correo de contacto es provisional. Reemplázalo por tu correo real antes de publicar.',footer:'Hecho con curiosidad. © 2026 Manuel Aragón.',top:'Volver arriba ↑'
  }
};
const toggle = document.getElementById('languageToggle');
function setLanguage(lang){
  const t=translations[lang];
  for(const el of document.querySelectorAll('[data-i18n]')){
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.innerHTML=t[key];
  }
  document.documentElement.lang=lang;
  document.title=lang==='es'?'Manuel Aragón — Finanzas, Ideas y Crecimiento':'Manuel Aragón — Finance, Ideas & Growth';
  document.querySelector('meta[name="description"]').content=lang==='es'?'Manuel Aragón: explorando las finanzas, los negocios y las ideas que transforman el futuro.':'Manuel Aragón — Exploring finance, business and the ideas shaping tomorrow.';
  toggle.innerHTML=(lang==='en'?'ES':'EN')+' <span aria-hidden="true">↗</span>';
  toggle.setAttribute('aria-label',lang==='en'?'Cambiar a español':'Switch to English');
  try{localStorage.setItem('manuelLanguage',lang)}catch(e){}
}
let current='en';
try{current=localStorage.getItem('manuelLanguage')==='es'?'es':'en'}catch(e){}
setLanguage(current);
toggle.addEventListener('click',()=>{current=current==='en'?'es':'en';setLanguage(current)});
const menu=document.querySelector('.menu-button');
const nav=document.getElementById('navigation');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
