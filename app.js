/**
 * TECNORED — app.js
 * SPA Navigation · Módulos interactivos · Accesibilidad · TTS
 * JavaScript Vanilla — Sin frameworks
 */

'use strict';

/* ═══════════════════════════════════════════
   DATOS DE MÓDULOS DE APRENDIZAJE
═══════════════════════════════════════════ */
const MODULES = [
  {
    id: 'celular',
    icon: '📱',
    title: 'Cómo usar un celular',
    desc: 'Aprende los botones, aplicaciones y funciones básicas de tu teléfono.',
    color: '#E8834A',
    badge: 'Principiante',
    steps: [
      {
        icon: '📱',
        title: '¿Qué es un celular?',
        text: 'Un celular o teléfono móvil es un aparato pequeño que te permite llamar, enviar mensajes y conectarte a Internet. Es tu ventana al mundo digital.',
        tip: '💡 La mayoría de personas ya tienen un celular. ¡Con este tutorial aprenderás a sacarle el máximo provecho!',
        sim: null
      },
      {
        icon: '🔘',
        title: 'Los botones principales',
        text: 'Tu celular tiene botones importantes: el botón de encendido (para prender y apagar), el botón de volumen (para subir o bajar el sonido), y la pantalla táctil (donde tocas con el dedo).',
        tip: '💡 Toca la pantalla suavemente con la yema de los dedos. ¡No necesitas presionar fuerte!',
        sim: { label: 'Toca el botón de encendido', feedback: '✅ ¡Perfecto! El celular encendió.' }
      },
      {
        icon: '🏠',
        title: 'La pantalla de inicio',
        text: 'Cuando enciendes el celular, ves la "pantalla de inicio". Ahí están los iconos de las aplicaciones (apps). Cada icono abre una app diferente cuando lo tocas.',
        tip: '💡 Si te pierdes en el celular, siempre puedes presionar el botón de "inicio" (generalmente un círculo o casa) para volver.',
        sim: { label: 'Ir a la pantalla de inicio', feedback: '🏠 ¡Regresaste al inicio!' }
      },
      {
        icon: '📞',
        title: 'Hacer una llamada',
        text: 'Para llamar a alguien: (1) Busca el ícono del teléfono verde. (2) Tócalo para abrir el marcador. (3) Escribe el número de la persona. (4) Toca el botón verde para llamar. (5) Cuando termines, toca el botón rojo para colgar.',
        tip: '💡 También puedes ir a "Contactos" y buscar el nombre de la persona para llamarla más fácil.',
        sim: { label: 'Simular una llamada', feedback: '📞 ¡Llamada iniciada! Recuerda tocar el rojo para colgar.' }
      }
    ]
  },
  {
    id: 'internet',
    icon: '🌐',
    title: 'Cómo usar Internet seguro',
    desc: 'Navega por la web de forma segura y encuentra información confiable.',
    color: '#3A7BD5',
    badge: 'Principiante',
    steps: [
      {
        icon: '🌐',
        title: '¿Qué es Internet?',
        text: 'Internet es una red gigante que conecta computadoras y celulares de todo el mundo. Es como una biblioteca enorme donde puedes encontrar información, hablar con personas, ver videos y mucho más.',
        tip: '💡 Para conectarte a Internet necesitas WiFi (en casa o en lugares públicos) o datos móviles de tu compañía de celular.',
        sim: null
      },
      {
        icon: '🔍',
        title: 'Buscar en Google',
        text: 'Google es el buscador más usado del mundo. Para buscar algo: (1) Abre el navegador (Chrome, Firefox). (2) Escribe lo que quieres saber en la barra de búsqueda. (3) Toca "Buscar" o presiona Enter. (4) Lee los resultados.',
        tip: '💡 Sé específico al buscar. En vez de "receta", escribe "receta de arroz con leche fácil".',
        sim: { label: 'Probar una búsqueda', feedback: '🔍 ¡Búsqueda realizada! Encontraste 10 resultados.' }
      },
      {
        icon: '🛡️',
        title: 'Navegar con seguridad',
        text: 'Para navegar seguro: Fíjate que la dirección del sitio empiece con "https://" (el candadito 🔒). No hagas clic en ventanas que aparecen solas. No descargues archivos de sitios desconocidos.',
        tip: '⚠️ Si ves "¡GANASTE UN PREMIO!" en una página, es casi seguro una trampa. Cierra esa ventana.',
        sim: { label: '¿Este sitio es seguro?', feedback: '✅ El sitio tiene https:// ¡Es seguro!' }
      },
      {
        icon: '📡',
        title: 'Conectarse a WiFi',
        text: 'Para conectarte a WiFi: (1) Ve a Ajustes de tu celular. (2) Busca "WiFi" o "Redes". (3) Actívalo con el interruptor. (4) Elige el nombre de tu red WiFi. (5) Escribe la contraseña y toca "Conectar".',
        tip: '💡 El WiFi de tu casa tiene una contraseña. Usualmente está escrita en el router (la cajita con luces).',
        sim: { label: 'Conectar a WiFi', feedback: '📶 ¡Conectado! Ahora tienes Internet.' }
      }
    ]
  },
  {
    id: 'correo',
    icon: '✉️',
    title: 'Crear correo electrónico',
    desc: 'Crea tu primera dirección de email y aprende a enviar y recibir mensajes.',
    color: '#E74C6B',
    badge: 'Básico',
    steps: [
      {
        icon: '✉️',
        title: '¿Qué es el correo electrónico?',
        text: 'El correo electrónico (o email) es como una carta, pero digital y llega en segundos a cualquier parte del mundo. Es necesario para registrarse en aplicaciones, recibir documentos y comunicarse.',
        tip: '💡 El correo más usado es Gmail, de Google. Es gratis y muy fácil de usar.',
        sim: null
      },
      {
        icon: '📝',
        title: 'Crear tu cuenta Gmail',
        text: '(1) Abre el navegador y escribe "gmail.com". (2) Toca "Crear cuenta". (3) Escribe tu nombre y apellido. (4) Elige un nombre de usuario (será tu@gmail.com). (5) Crea una contraseña segura. (6) Escribe tu número de celular para recuperar la cuenta.',
        tip: '💡 Elige un nombre de usuario serio como juan.perez o maria.garcia. Lo usarás para siempre.',
        sim: { label: 'Ver cómo crear la cuenta', feedback: '📧 ¡Tu cuenta fue creada! Ahora tienes email.' }
      },
      {
        icon: '🔐',
        title: 'Contraseña segura',
        text: 'Una buena contraseña tiene: letras mayúsculas y minúsculas, números y símbolos como ! o @. Ejemplo: "MiPerro2024!" es buena. "123456" o "password" son muy inseguras.',
        tip: '⚠️ Nunca compartas tu contraseña con nadie, ni siquiera con familiares. Guárdala en un lugar seguro.',
        sim: { label: 'Probar mi contraseña', feedback: '🔒 ¡Contraseña segura! Bien hecho.' }
      },
      {
        icon: '📨',
        title: 'Enviar tu primer email',
        text: '(1) En Gmail, toca el botón "+ Redactar". (2) En "Para" escribe el email del destinatario. (3) En "Asunto" escribe de qué se trata. (4) Escribe tu mensaje. (5) Toca el ícono de enviar (avión de papel).',
        tip: '💡 Si te equivocas, puedes borrar lo que escribiste. Toca la "X" para cancelar.',
        sim: { label: 'Enviar un mensaje', feedback: '✈️ ¡Mensaje enviado! Tu primer email fue a otro lado del mundo.' }
      }
    ]
  },
  {
    id: 'estafas',
    icon: '🛡️',
    title: 'Evitar estafas digitales',
    desc: 'Protégete de fraudes, engaños y personas malintencionadas en Internet.',
    color: '#F5A623',
    badge: 'Importante',
    steps: [
      {
        icon: '⚠️',
        title: '¿Qué son las estafas digitales?',
        text: 'Las estafas digitales son engaños por Internet o celular para robarte dinero o información personal. Son cada vez más comunes y cualquiera puede caer si no está informado.',
        tip: '💡 Conocer cómo funcionan las estafas es la mejor protección. ¡Este módulo podría salvarte de perder dinero!',
        sim: null
      },
      {
        icon: '🎣',
        title: 'El "phishing" - el anzuelo digital',
        text: 'El phishing es cuando alguien te manda un mensaje falso haciéndose pasar por tu banco, una empresa o el gobierno. El mensaje dice que hay un problema y te pide tus datos. ¡ES UNA TRAMPA!',
        tip: '⚠️ Tu banco NUNCA te pedirá tu contraseña por mensaje o llamada. Si te la piden, es una estafa.',
        sim: { label: 'Identificar mensaje falso', feedback: '🚨 ¡Correcto! Ese mensaje era una estafa. Bien detectado.' }
      },
      {
        icon: '🏆',
        title: '"Ganaste un premio" - ¡NO!',
        text: 'Si ves mensajes como "¡FELICIDADES! Ganaste un iPhone" o "Eres el visitante número 1,000,000", son mentiras. Quieren que hagas clic en un enlace y des tus datos. Nunca hagas clic.',
        tip: '💡 Regla de oro: Si no participaste en ningún concurso, NO puedes ganar nada. Cierra esa ventana.',
        sim: { label: '¿Es real este premio?', feedback: '✅ ¡Bien! Reconociste que es falso y no hiciste clic.' }
      },
      {
        icon: '📱',
        title: 'Protege tu celular',
        text: 'Para proteger tu celular: (1) Pon un pin o patrón de desbloqueo. (2) No descargues apps de fuera de la tienda oficial (Play Store o App Store). (3) No conectes a WiFi desconocidas en lugares públicos. (4) Actualiza el sistema cuando te lo pida.',
        tip: '💡 Si pierdes tu celular, desde otro dispositivo puedes bloquearlo con tu cuenta de Google.',
        sim: { label: 'Activar seguridad del celular', feedback: '🔐 ¡Celular protegido! Tu información está segura.' }
      }
    ]
  },
  {
    id: 'apps',
    icon: '📲',
    title: 'Uso básico de aplicaciones',
    desc: 'Descarga y usa las apps más útiles para tu vida diaria.',
    color: '#9B59B6',
    badge: 'Básico',
    steps: [
      {
        icon: '📲',
        title: '¿Qué son las aplicaciones?',
        text: 'Las aplicaciones (apps) son programas en tu celular para hacer cosas específicas: chatear, ver videos, escuchar música, pedir comida, y mucho más. La mayoría son gratuitas.',
        tip: '💡 Tu celular ya tiene apps instaladas. Busca íconos en la pantalla de inicio.',
        sim: null
      },
      {
        icon: '🏪',
        title: 'La tienda de apps',
        text: 'Para descargar apps nuevas: Si tienes Android, usa "Play Store" (ícono de triángulo de colores). Si tienes iPhone, usa "App Store" (ícono con letra "A"). Busca el nombre de la app y toca "Instalar".',
        tip: '💡 Siempre descarga apps de la tienda oficial. Nunca de páginas web desconocidas.',
        sim: { label: 'Buscar una app', feedback: '🔍 ¡Encontrada! Toca Instalar para descargarla.' }
      },
      {
        icon: '💬',
        title: 'WhatsApp — Mensajes gratis',
        text: 'WhatsApp es la app de mensajes más usada. Con ella puedes: enviar mensajes gratis, hacer llamadas gratis por WiFi, enviar fotos y videos, y hacer grupos familiares. Solo necesitas número de celular.',
        tip: '💡 Con WhatsApp puedes hablar con familia que está lejos sin gastar en llamadas tradicionales.',
        sim: { label: 'Enviar un mensaje de WhatsApp', feedback: '💬 ¡Mensaje enviado gratis!' }
      },
      {
        icon: '🎵',
        title: 'Apps útiles para ti',
        text: 'Apps muy útiles: YouTube (videos gratis), Maps (para no perderte), Duolingo (aprender idiomas), BancoSol/Tigo Money (pagos), CIV/SEGIP (trámites), Spotify (música). ¡Todas gratuitas para descargar!',
        tip: '💡 Empieza con solo 2 o 3 apps. Cuando las domines, descarga más.',
        sim: { label: 'Ver apps recomendadas', feedback: '✅ ¡Tienes una lista perfecta para empezar!' }
      }
    ]
  },
  {
    id: 'videollamadas',
    icon: '📹',
    title: 'Videollamadas',
    desc: 'Habla cara a cara con familia y amigos aunque estén lejos.',
    color: '#2EAD6E',
    badge: 'Fácil',
    steps: [
      {
        icon: '📹',
        title: '¿Qué es una videollamada?',
        text: 'Una videollamada te permite hablar cara a cara con alguien por el celular, viendo su imagen en vivo. Es como estar juntos aunque estén en ciudades o países diferentes.',
        tip: '💡 Las videollamadas por WiFi son gratis. Solo necesitas la app y conexión a Internet.',
        sim: null
      },
      {
        icon: '📱',
        title: 'Videollamada por WhatsApp',
        text: '(1) Abre WhatsApp. (2) Toca el nombre de la persona con quien quieres hablar. (3) Toca el ícono de cámara de video (🎥) en la esquina superior. (4) Espera que conteste. (5) ¡Ahora pueden verse!',
        tip: '💡 Asegúrate de estar en un lugar con buena luz para que te vean bien.',
        sim: { label: 'Iniciar videollamada', feedback: '📹 ¡Conectando...! Tu familiar ya puede verte.' }
      },
      {
        icon: '💡',
        title: 'Consejos para videollamadas',
        text: 'Para una buena videollamada: Conecta a WiFi si puedes. Pon luz en tu cara (ventana o lámpara adelante, no atrás). Habla con voz normal y clara. Si no te escuchan bien, revisa el volumen.',
        tip: '💡 Si la imagen se congela, es problema de Internet. Espera unos segundos o muévete a otro lugar.',
        sim: null
      },
      {
        icon: '👥',
        title: 'Grupos familiares',
        text: 'Puedes hacer videollamadas grupales con toda la familia. En WhatsApp, crea un grupo familiar y toca el ícono de videollamada. ¡Pueden verse todos juntos aunque estén en diferentes ciudades!',
        tip: '💡 Las reuniones familiares por video son perfectas para fechas especiales cuando no pueden verse en persona.',
        sim: { label: 'Crear grupo familiar', feedback: '👨‍👩‍👧‍👦 ¡Grupo creado! Toda la familia conectada.' }
      }
    ]
  },
  {
    id: 'educacion',
    icon: '🎓',
    title: 'Educación digital básica',
    desc: 'Aprende sobre el mundo digital: qué es, cómo funciona y cómo aprovecharlo.',
    color: '#1ABC9C',
    badge: 'Básico',
    steps: [
      {
        icon: '🎓',
        title: '¿Por qué aprender tecnología?',
        text: 'En el mundo de hoy, saber tecnología te abre puertas: encontrar trabajos mejores, comunicarte con el gobierno, estudiar desde casa, pagar facturas sin hacer filas, y vender tus productos en línea.',
        tip: '💡 ¡Ya estás dando el primer paso aprendiendo en TecnoRed!',
        sim: null
      },
      {
        icon: '💻',
        title: '¿Qué es una computadora?',
        text: 'Una computadora es una máquina que procesa información. Puede ser una laptop (portátil), una de escritorio, o tu celular. Todas tienen: pantalla, teclado (físico o táctil), y procesador (el cerebro).',
        tip: '💡 Tu celular es una computadora pequeña y poderosa. ¡Ya tienes tecnología en tus manos!',
        sim: null
      },
      {
        icon: '🌍',
        title: 'El mundo digital',
        text: 'El mundo digital incluye: Internet (la red global), redes sociales (Facebook, TikTok), comercio en línea (comprar y vender), gobierno digital (trámites en línea), educación virtual, y salud digital (citas médicas en línea).',
        tip: '💡 Cada año más servicios se vuelven digitales. Aprender hoy te prepara para el mañana.',
        sim: { label: 'Ver servicios digitales', feedback: '🌐 ¡Hay mucho por descubrir en el mundo digital!' }
      },
      {
        icon: '🚀',
        title: 'Tu próximo paso',
        text: '¡Felicidades por completar este módulo! Tu próximo paso: (1) Practica lo aprendido cada día. (2) Pide ayuda cuando no entiendas algo. (3) No tengas miedo de equivocarte. (4) Enseña a otros lo que aprendiste.',
        tip: '💡 El mejor regalo que puedes darte es el conocimiento. ¡Sigue aprendiendo!',
        sim: { label: '¡Completar módulo!', feedback: '🎉 ¡FELICIDADES! Completaste Educación Digital Básica.' }
      }
    ]
  }
];

/* ─── TUTORIALES ZONA RURAL ─── */
const RURAL_TUTORIALS = {
  celular: [
    { icon: '📱', title: 'Tu celular', text: 'El celular es tu herramienta más importante. Con él puedes llamar, chatear y usar Internet.' },
    { icon: '🔘', title: 'Los botones', text: 'El botón del lado enciende y apaga. Los botones de arriba y abajo controlan el volumen. La pantalla la tocas con el dedo.' },
    { icon: '🏠', title: 'La pantalla de inicio', text: 'Cuando enciendes el celular aparece la pantalla de inicio. Ahí están los iconos de las aplicaciones.' },
    { icon: '✅', title: '¡Ya sabes usar tu celular!', text: 'Ahora ya conoces lo básico. Practica todos los días y cada vez te saldrá mejor.' }
  ],
  internet: [
    { icon: '🌐', title: '¿Qué es Internet?', text: 'Internet es como una biblioteca enorme que está en todos los celulares y computadoras del mundo.' },
    { icon: '📶', title: 'Conectarse', text: 'Para usar Internet necesitas WiFi o datos. El WiFi de tu casa o de lugares públicos es gratis.' },
    { icon: '🔍', title: 'Buscar cosas', text: 'Abre Chrome o el navegador. Escribe lo que quieres saber. Toca buscar. ¡Así de fácil!' },
    { icon: '✅', title: '¡Ya puedes usar Internet!', text: 'Recuerda: busca solo en sitios confiables. Si algo parece raro, cierra esa página.' }
  ],
  correo: [
    { icon: '✉️', title: '¿Qué es un correo?', text: 'El correo electrónico es como una carta pero llega en segundos a cualquier parte del mundo.' },
    { icon: '📧', title: 'Crear en Gmail', text: 'Ve a gmail.com, toca "Crear cuenta" y sigue los pasos. Es gratis y fácil.' },
    { icon: '📨', title: 'Enviar un mensaje', text: 'Toca el botón + Redactar, escribe a quién va el correo, tu mensaje y toca enviar.' },
    { icon: '✅', title: '¡Tienes correo electrónico!', text: 'Ahora puedes comunicarte con el mundo. Recuerda guardar tu contraseña en lugar seguro.' }
  ],
  seguridad: [
    { icon: '🛡️', title: 'Protégete en Internet', text: 'Hay personas malas en Internet que quieren robar tu dinero o datos. ¡Pero puedes protegerte!' },
    { icon: '🚫', title: 'Mensajes peligrosos', text: 'Si alguien te dice "GANASTE UN PREMIO" sin haber participado en nada, es mentira. No toques ese mensaje.' },
    { icon: '🔐', title: 'Tu banco nunca te pide contraseña', text: 'Si alguien llama diciendo ser tu banco y pide tu clave, ¡CUELGA! Es una estafa.' },
    { icon: '✅', title: '¡Ahora estás protegido!', text: 'Recuerda: desconfía de mensajes extraños. Si tienes dudas, pregunta a alguien de confianza.' }
  ],
  apps: [
    { icon: '📲', title: '¿Qué son las apps?', text: 'Las apps son programas en tu celular para hacer cosas. WhatsApp para chatear, YouTube para videos, Maps para no perderte.' },
    { icon: '🏪', title: 'Descargar apps', text: 'Busca "Play Store" en tu celular. Escribe el nombre de la app. Toca Instalar. ¡Listo!' },
    { icon: '💬', title: 'WhatsApp — La más útil', text: 'Con WhatsApp puedes chatear y llamar gratis. Solo necesitas número de celular.' },
    { icon: '✅', title: '¡Ya sabes usar apps!', text: 'Empieza con 2 o 3 apps que más necesites. Cuando las conozcas bien, descarga más.' }
  ],
  videollamada: [
    { icon: '📹', title: '¿Qué es una videollamada?', text: 'Una videollamada es hablar por celular viéndose las caras, aunque estén en ciudades diferentes.' },
    { icon: '📱', title: 'Usar WhatsApp', text: 'Abre WhatsApp, toca el nombre de la persona, y toca el ícono de cámara de video. ¡Así de fácil!' },
    { icon: '💡', title: 'Consejo importante', text: 'Pon luz en tu cara para que te vean bien. Conecta a WiFi para que no se corte.' },
    { icon: '✅', title: '¡Ya puedes hacer videollamadas!', text: 'Ahora puedes ver a tu familia aunque esté lejos. ¡Es como estar juntos!' }
  ]
};

/* ═══════════════════════════════════════════
   ESTADO DE LA APLICACIÓN
═══════════════════════════════════════════ */
const state = {
  currentPage: 'inicio',
  moduleProgress: JSON.parse(localStorage.getItem('tn_progress') || '{}'),
  ttsEnabled: false,
  currentModule: null,
  currentStep: 0,
  currentRural: null,
  currentRuralStep: 0,
  theme: localStorage.getItem('tn_theme') || 'light',
  fontSize: localStorage.getItem('tn_fontsize') || 'medium',
  highContrast: localStorage.getItem('tn_contrast') === 'true'
};

/* ═══════════════════════════════════════════
   NAVEGACIÓN SPA
═══════════════════════════════════════════ */
function navigate(pageId) {
  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('.nav-link');

  pages.forEach(p => p.classList.remove('active'));
  links.forEach(l => l.classList.remove('active'));

  const target = document.getElementById(`page-${pageId}`);
  const activeLink = document.querySelector(`[data-page="${pageId}"]`);

  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (activeLink && activeLink.classList.contains('nav-link')) {
    activeLink.classList.add('active');
  }

  state.currentPage = pageId;
  document.title = `TecnoRed — ${pageTitles[pageId] || 'Inicio'}`;

  // Cerrar menú móvil
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');

  // Si va a plataforma, renderizar módulos
  if (pageId === 'plataforma') renderModules();
}

const pageTitles = {
  inicio: 'Inicio',
  proyecto: 'Proyecto Científico',
  plataforma: 'Aprende',
  rural: 'Zona Rural',
  concurso: 'Concurso',
  equipo: 'Equipo',
  impacto: 'Impacto Social'
};

/* ─── EVENT DELEGATION para navegación ─── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-page]');
  if (btn) {
    e.preventDefault();
    navigate(btn.dataset.page);
  }
});

/* ─── Nav toggle móvil ─── */
document.getElementById('nav-toggle').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  const isOpen = navMenu.classList.toggle('open');
  this.setAttribute('aria-expanded', isOpen.toString());
});

/* ═══════════════════════════════════════════
   RENDERIZAR MÓDULOS
═══════════════════════════════════════════ */
function renderModules() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  grid.innerHTML = MODULES.map(mod => {
    const progress = state.moduleProgress[mod.id] || 0;
    const pct = Math.round((progress / mod.steps.length) * 100);
    const done = progress >= mod.steps.length;

    return `
      <article class="module-card" 
               role="listitem"
               style="--mc-color:${mod.color}"
               tabindex="0"
               data-module="${mod.id}"
               aria-label="Módulo: ${mod.title}. ${done ? 'Completado.' : `${pct}% completado.`}">
        <span class="mc-icon" aria-hidden="true">${mod.icon}</span>
        <div class="mc-title">${mod.title}</div>
        <p class="mc-desc">${mod.desc}</p>
        <div class="mc-progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Progreso: ${pct}%">
          <div class="mc-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="mc-meta">
          <span class="mc-badge">${done ? '✅ Completado' : `${pct}%`}</span>
          <span>${mod.steps.length} pasos</span>
        </div>
      </article>
    `;
  }).join('');

  // Click en módulos
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-module]');
    if (card) openModule(card.dataset.module);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-module]');
      if (card) { e.preventDefault(); openModule(card.dataset.module); }
    }
  });
}

/* ═══════════════════════════════════════════
   MODAL DE MÓDULO
═══════════════════════════════════════════ */
function openModule(moduleId) {
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return;

  state.currentModule = mod;
  state.currentStep = state.moduleProgress[moduleId] || 0;
  if (state.currentStep >= mod.steps.length) state.currentStep = 0;

  const modal = document.getElementById('module-modal');
  document.getElementById('modal-icon').textContent = mod.icon;
  document.getElementById('modal-title').textContent = mod.title;

  modal.removeAttribute('hidden');
  modal.querySelector('.modal-box').focus?.();
  document.body.style.overflow = 'hidden';

  renderModalStep();
}

function renderModalStep() {
  const { currentModule: mod, currentStep: step } = state;
  if (!mod) return;

  const total = mod.steps.length;
  const s = mod.steps[step];
  const pct = Math.round(((step + 1) / total) * 100);

  document.getElementById('mp-fill').style.width = `${pct}%`;
  document.getElementById('mp-text').textContent = `Paso ${step + 1} de ${total}`;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="step-content">
      <div class="step-icon" aria-hidden="true">${s.icon}</div>
      <h3 class="step-title">${s.title}</h3>
      <p class="step-text">${s.text}</p>
      ${s.tip ? `<div class="step-tip" role="note"><strong>Consejo:</strong> ${s.tip}</div>` : ''}
      ${s.sim ? `
        <div class="step-sim" aria-label="Simulación interactiva">
          <p style="font-size:0.85rem;color:var(--text-3);margin-bottom:0.5rem">— Pruébalo tú mismo —</p>
          <button class="step-sim-btn" onclick="runSimulation(this, '${escapeHtml(s.sim.feedback)}')">
            ${s.sim.label}
          </button>
          <div class="sim-feedback" aria-live="polite" id="sim-feedback-${state.currentStep}"></div>
        </div>
      ` : ''}
    </div>
  `;

  // Botones prev/next
  document.getElementById('btn-prev-step').disabled = step === 0;
  const nextBtn = document.getElementById('btn-next-step');
  nextBtn.textContent = step === total - 1 ? '✅ Finalizar' : 'Siguiente →';
}

function runSimulation(btn, feedback) {
  const container = btn.closest('.step-sim');
  const fb = container.querySelector('.sim-feedback');
  fb.textContent = feedback;
  btn.textContent = '✔ Hecho';
  btn.style.background = 'var(--accent-green)';
  btn.disabled = true;
}

function escapeHtml(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function closeModule() {
  const modal = document.getElementById('module-modal');
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  state.currentModule = null;
}

function saveProgress(moduleId, step) {
  state.moduleProgress[moduleId] = step;
  localStorage.setItem('tn_progress', JSON.stringify(state.moduleProgress));
}

function showToast(text) {
  const toast = document.getElementById('progress-toast');
  document.getElementById('toast-text').textContent = text;
  toast.removeAttribute('hidden');
  setTimeout(() => toast.setAttribute('hidden', ''), 3000);
}

// Botones modal
document.getElementById('btn-next-step').addEventListener('click', () => {
  const { currentModule: mod } = state;
  if (!mod) return;
  const total = mod.steps.length;

  if (state.currentStep < total - 1) {
    state.currentStep++;
    renderModalStep();
  } else {
    // Completado
    saveProgress(mod.id, total);
    closeModule();
    renderModules();
    showToast(`🎉 ¡Módulo "${mod.title}" completado!`);
  }
});

document.getElementById('btn-prev-step').addEventListener('click', () => {
  if (state.currentStep > 0) {
    state.currentStep--;
    renderModalStep();
  }
});

document.getElementById('modal-close').addEventListener('click', () => {
  if (state.currentModule) {
    saveProgress(state.currentModule.id, state.currentStep);
  }
  closeModule();
  renderModules();
});

document.getElementById('modal-overlay').addEventListener('click', () => {
  if (state.currentModule) {
    saveProgress(state.currentModule.id, state.currentStep);
  }
  closeModule();
  renderModules();
});

// Cerrar modal con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('module-modal');
    if (!modal.hasAttribute('hidden')) {
      if (state.currentModule) saveProgress(state.currentModule.id, state.currentStep);
      closeModule();
      renderModules();
    }
  }
});

/* ═══════════════════════════════════════════
   ZONA RURAL — TUTORIALES
═══════════════════════════════════════════ */
const ruralGrid = document.querySelector('.rural-grid');
const ruralTutorial = document.getElementById('rural-tutorial');
const rtuContent = document.getElementById('rtu-content');
const rtuCounter = document.getElementById('rtu-counter');

if (ruralGrid) {
  ruralGrid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-rural]');
    if (card) openRuralTutorial(card.dataset.rural);
  });
  ruralGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-rural]');
      if (card) { e.preventDefault(); openRuralTutorial(card.dataset.rural); }
    }
  });
}

function openRuralTutorial(topic) {
  const steps = RURAL_TUTORIALS[topic];
  if (!steps) return;
  state.currentRural = topic;
  state.currentRuralStep = 0;
  ruralGrid.style.display = 'none';
  ruralTutorial.removeAttribute('hidden');
  renderRuralStep();
}

function renderRuralStep() {
  const steps = RURAL_TUTORIALS[state.currentRural];
  const s = steps[state.currentRuralStep];

  rtuContent.innerHTML = `
    <div class="rtu-step" aria-live="polite">
      <div class="rtu-icon" aria-hidden="true">${s.icon}</div>
      <h2 class="rtu-title">${s.title}</h2>
      <p class="rtu-text">${s.text}</p>
    </div>
  `;
  rtuCounter.textContent = `${state.currentRuralStep + 1} / ${steps.length}`;

  document.getElementById('rtu-prev').disabled = state.currentRuralStep === 0;
  const nextBtn = document.getElementById('rtu-next');
  nextBtn.textContent = state.currentRuralStep === steps.length - 1 ? 'Terminar ✅' : 'Siguiente ➡';
}

document.getElementById('rtu-prev').addEventListener('click', () => {
  if (state.currentRuralStep > 0) {
    state.currentRuralStep--;
    renderRuralStep();
    stopTTS();
  }
});

document.getElementById('rtu-next').addEventListener('click', () => {
  const steps = RURAL_TUTORIALS[state.currentRural];
  if (state.currentRuralStep < steps.length - 1) {
    state.currentRuralStep++;
    renderRuralStep();
    stopTTS();
  } else {
    // Fin
    showToast('🌾 ¡Tutorial completado! ¡Muy bien!');
    ruralTutorial.setAttribute('hidden', '');
    ruralGrid.style.display = '';
    stopTTS();
  }
});

document.getElementById('rtu-back').addEventListener('click', () => {
  ruralTutorial.setAttribute('hidden', '');
  ruralGrid.style.display = '';
  stopTTS();
});

/* ─── TTS Rural ─── */
document.getElementById('btn-tts-rural').addEventListener('click', () => {
  const steps = RURAL_TUTORIALS[state.currentRural];
  if (!steps) return;
  const s = steps[state.currentRuralStep];
  speak(`${s.title}. ${s.text}`);
});

/* ═══════════════════════════════════════════
   TEXT-TO-SPEECH (Web Speech API)
═══════════════════════════════════════════ */
let currentUtterance = null;

function speak(text) {
  if (!('speechSynthesis' in window)) {
    alert('Tu navegador no soporta lectura en voz alta. Intenta con Chrome o Firefox.');
    return;
  }
  stopTTS();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'es-ES';
  utter.rate = 0.85;
  utter.pitch = 1;

  // Preferir voz en español si está disponible
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang.startsWith('es'));
  if (esVoice) utter.voice = esVoice;

  currentUtterance = utter;
  window.speechSynthesis.speak(utter);
}

function stopTTS() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

// Botón TTS global (barra de accesibilidad)
const btnTTS = document.getElementById('btn-tts');
btnTTS.addEventListener('click', function() {
  const isActive = this.getAttribute('aria-pressed') === 'true';
  if (isActive) {
    stopTTS();
    this.setAttribute('aria-pressed', 'false');
    state.ttsEnabled = false;
  } else {
    // Leer el contenido principal de la página actual
    const page = document.getElementById(`page-${state.currentPage}`);
    if (page) {
      const text = page.innerText.slice(0, 600);
      speak(text);
    }
    this.setAttribute('aria-pressed', 'true');
    state.ttsEnabled = true;
  }
});

/* ═══════════════════════════════════════════
   ACCESIBILIDAD — TEMA, CONTRASTE, FUENTE
═══════════════════════════════════════════ */
// Tema oscuro/claro
const btnTheme = document.getElementById('btn-theme');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  localStorage.setItem('tn_theme', theme);
  themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  btnTheme.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

btnTheme.addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});

// Alto contraste
const btnContrast = document.getElementById('btn-contrast');
function applyContrast(on) {
  state.highContrast = on;
  document.documentElement.setAttribute('data-contrast', on ? 'high' : 'normal');
  localStorage.setItem('tn_contrast', on.toString());
  btnContrast.setAttribute('aria-pressed', on ? 'true' : 'false');
}
btnContrast.addEventListener('click', () => applyContrast(!state.highContrast));

// Tamaño de fuente
const fontSizes = ['small', 'medium', 'large', 'xlarge'];
function applyFontSize(size) {
  state.fontSize = size;
  document.documentElement.setAttribute('data-font-size', size);
  localStorage.setItem('tn_fontsize', size);
}

document.getElementById('btn-font-dec').addEventListener('click', () => {
  const idx = fontSizes.indexOf(state.fontSize);
  if (idx > 0) applyFontSize(fontSizes[idx - 1]);
});

document.getElementById('btn-font-inc').addEventListener('click', () => {
  const idx = fontSizes.indexOf(state.fontSize);
  if (idx < fontSizes.length - 1) applyFontSize(fontSizes[idx + 1]);
});

/* ═══════════════════════════════════════════
   INICIALIZACIÓN
═══════════════════════════════════════════ */
function init() {
  // Aplicar configuraciones guardadas
  applyTheme(state.theme);
  applyFontSize(state.fontSize);
  applyContrast(state.highContrast);

  // Cargar voces (asíncrono en algunos navegadores)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
    window.speechSynthesis.getVoices();
  }

  // Renderizar módulos si se carga directamente en plataforma
  if (state.currentPage === 'plataforma') renderModules();

  // Intersection Observer para animaciones
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.problem-card, .pillar-card, .req-card').forEach(el => {
    observer.observe(el);
  });

  // Manejar links de la nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  console.log('🌐 TecnoRed inicializado correctamente');
  console.log('📊 Progreso guardado:', state.moduleProgress);
}

// Arrancar
document.addEventListener('DOMContentLoaded', init);

/* ═══════════════════════════════════════════
   TECNORED v2 — MEJORAS Y NUEVAS FUNCIONES
═══════════════════════════════════════════ */

/* ─── CONTADOR ANIMADO DE ESTADÍSTICAS ─── */
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current === target && target >= 100 ? target : '+' + current;
      if (current >= target) { el.textContent = target; clearInterval(timer); }
    }, 40);
  });
}

/* ─── PROGRESO GLOBAL (Aprende) ─── */
function updateGlobalProgress() {
  const total = MODULES.length;
  const completed = MODULES.filter(m => (state.moduleProgress[m.id] || 0) >= m.steps.length).length;
  const pct = Math.round((completed / total) * 100);

  const fill = document.getElementById('gp-fill');
  const pctEl = document.getElementById('gp-pct');
  const modsEl = document.getElementById('gp-modules');

  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  if (modsEl) {
    modsEl.innerHTML = MODULES.map(m => {
      const done = (state.moduleProgress[m.id] || 0) >= m.steps.length;
      return `<span class="gp-mod ${done ? 'done' : ''}">${m.icon} ${done ? '✓ ' : ''}${m.title.split(' ').slice(0,2).join(' ')}</span>`;
    }).join('');
  }
}

/* ─── PROGRESO RURAL ─── */
const RURAL_COMPLETED = JSON.parse(localStorage.getItem('tn_rural_done') || '{}');

function updateRuralProgress() {
  const keys = Object.keys(RURAL_TUTORIALS);
  const done = keys.filter(k => RURAL_COMPLETED[k]).length;
  const pct = Math.round((done / keys.length) * 100);

  const countEl = document.getElementById('rural-done-count');
  const fillEl = document.getElementById('rpb-fill');
  if (countEl) countEl.textContent = done;
  if (fillEl) fillEl.style.width = pct + '%';

  keys.forEach(k => {
    const badge = document.getElementById(`rc-done-${k}`);
    if (badge) {
      if (RURAL_COMPLETED[k]) badge.removeAttribute('hidden');
      else badge.setAttribute('hidden', '');
    }
  });
}

/* ─── EMERGENCIAS DIGITALES ─── */
const EMERGENCIAS = {
  'celular-robado': {
    icon: '📵', title: '¡Tranquilo/a! Actúa rápido.',
    steps: ['Llama a un familiar desde otro celular para avisarles.','Entra a google.com/android/find desde otra computadora o celular.','Inicia sesión con tu cuenta de Google y bloquea el celular.','Cambia las contraseñas de tu correo y redes sociales desde otro dispositivo.','Denuncia el robo en la policía más cercana.']
  },
  'contrasena': {
    icon: '🔐', title: 'No te preocupes, tiene solución.',
    steps: ['En la pantalla de inicio de sesión, toca "¿Olvidaste tu contraseña?".','Escribe tu número de celular o correo de recuperación.','Espera el código que llegará por mensaje de texto.','Escribe ese código en la pantalla.','Crea una nueva contraseña y guárdala en un lugar seguro.']
  },
  'estafado': {
    icon: '🚨', title: 'Actúa de inmediato.',
    steps: ['No sigas dando más datos personales ni dinero.','Toma capturas de pantalla de todos los mensajes como prueba.','Bloquea al contacto que te estafó.','Llama a tu banco inmediatamente si diste datos de tu cuenta.','Denuncia ante la Policía o ASFI (Bolivia) con las pruebas guardadas.']
  },
  'virus': {
    icon: '🦠', title: 'Mantén la calma.',
    steps: ['No descargues nada más hasta solucionar el problema.','Ve a Ajustes → Aplicaciones y desinstala apps recientes desconocidas.','Descarga un antivirus gratuito desde Play Store como "Avast" o "AVG".','Ejecuta el análisis completo del celular.','Si el problema persiste, lleva el celular a un técnico de confianza.']
  },
  'internet': {
    icon: '📡', title: 'Revisemos paso a paso.',
    steps: ['Activa y desactiva el WiFi o los datos móviles esperando 10 segundos.','Apaga el celular, espera 30 segundos y vuelve a encenderlo.','Si usas WiFi, apaga y enciende el router (la cajita con luces).','Verifica que no hayas agotado tu paquete de datos móviles.','Si nada funciona, llama a tu compañía de celular.']
  },
  'cuenta': {
    icon: '🔒', title: 'Podemos recuperarla.',
    steps: ['Toca "¿Olvidaste tu contraseña?" o "Cuenta bloqueada" en la pantalla.','Usa tu número de celular o correo alternativo para verificar tu identidad.','Revisa tus mensajes de texto o correo por un código de verificación.','Sigue las instrucciones en pantalla para desbloquear la cuenta.','Una vez dentro, activa la verificación en dos pasos para mayor seguridad.']
  }
};

function initEmergencias() {
  const grid = document.querySelector('.emergency-grid');
  const answer = document.getElementById('emergency-answer');
  const content = document.getElementById('emergency-content');
  const backBtn = document.getElementById('emergency-back');
  const ttsBtn = document.getElementById('btn-tts-emergency');

  if (!grid) return;

  function showEmergency(key) {
    const em = EMERGENCIAS[key];
    if (!em) return;
    content.innerHTML = `
      <div class="emergency-content-inner">
        <div class="em-ans-icon">${em.icon}</div>
        <h3 class="em-ans-title">${em.title}</h3>
        <ul class="em-ans-steps">
          ${em.steps.map((s,i) => `<li><span class="em-step-num">${i+1}</span><span>${s}</span></li>`).join('')}
        </ul>
      </div>`;
    grid.style.display = 'none';
    answer.removeAttribute('hidden');
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-emergency]');
    if (card) showEmergency(card.dataset.emergency);
  });
  grid.addEventListener('keydown', e => {
    if (e.key==='Enter'||e.key===' ') { const c=e.target.closest('[data-emergency]'); if(c){e.preventDefault();showEmergency(c.dataset.emergency);} }
  });

  if (backBtn) backBtn.addEventListener('click', () => { answer.setAttribute('hidden',''); grid.style.display=''; stopTTS(); });
  if (ttsBtn) ttsBtn.addEventListener('click', () => { if(content) speak(content.innerText); });
}

/* ─── GLOSARIO VISUAL ─── */
const GLOSARIO = [
  {icon:'🌐',term:'Internet',def:'Red mundial que conecta millones de computadoras y celulares para compartir información.'},
  {icon:'📶',term:'WiFi',def:'Conexión inalámbrica a Internet. Como una radio que transmite Internet sin cables.'},
  {icon:'📱',term:'App / Aplicación',def:'Programa instalado en tu celular para hacer algo específico, como chatear o ver videos.'},
  {icon:'🔐',term:'Contraseña',def:'Palabra secreta que protege tu cuenta. Solo tú debes conocerla.'},
  {icon:'📧',term:'Correo electrónico',def:'Carta digital que llega en segundos a cualquier parte del mundo.'},
  {icon:'☁️',term:'Nube',def:'Espacio en Internet donde guardas fotos y archivos sin ocupar espacio en tu celular.'},
  {icon:'🔗',term:'Enlace / Link',def:'Texto o imagen que al tocarlo te lleva a otra página de Internet.'},
  {icon:'🦠',term:'Virus informático',def:'Programa malicioso que puede dañar tu celular o robar tu información.'},
  {icon:'📲',term:'Descargar',def:'Traer un archivo, foto, app o video desde Internet a tu celular.'},
  {icon:'🔔',term:'Notificación',def:'Aviso que aparece en tu celular para informarte de algo nuevo en una app.'},
  {icon:'👤',term:'Perfil',def:'Tu página personal en una red social con tu nombre y foto.'},
  {icon:'🛡️',term:'Antivirus',def:'Programa que protege tu celular de virus y programas peligrosos.'},
  {icon:'📡',term:'Datos móviles',def:'Conexión a Internet que usa la señal de tu compañía de celular, sin WiFi.'},
  {icon:'🔄',term:'Actualizar',def:'Instalar la versión más nueva de una app para mejorar su funcionamiento.'},
  {icon:'🏠',term:'Pantalla de inicio',def:'La primera pantalla al encender el celular, donde están los íconos de las apps.'},
  {icon:'💾',term:'Almacenamiento',def:'Espacio dentro de tu celular donde se guardan fotos, apps y archivos.'},
  {icon:'📸',term:'Captura de pantalla',def:'Foto de lo que se ve en la pantalla de tu celular en ese momento.'},
  {icon:'🔎',term:'Navegador',def:'App que usas para entrar a páginas de Internet, como Chrome o Firefox.'}
];

function initGlosario() {
  const input = document.getElementById('glosario-input');
  const grid = document.getElementById('glosario-grid');
  if (!input || !grid) return;

  function render(filtro='') {
    const filtrados = GLOSARIO.filter(g =>
      g.term.toLowerCase().includes(filtro.toLowerCase()) ||
      g.def.toLowerCase().includes(filtro.toLowerCase())
    );
    if (filtrados.length===0) {
      grid.innerHTML = `<p class="glosario-empty">😕 No encontramos esa palabra. Intenta con otra.</p>`;
      return;
    }
    grid.innerHTML = filtrados.map(g => `
      <div class="glosario-card">
        <span class="gl-icon" aria-hidden="true">${g.icon}</span>
        <div><div class="gl-term">${g.term}</div><div class="gl-def">${g.def}</div></div>
      </div>`).join('');
  }

  input.addEventListener('input', e => render(e.target.value));
  render();
}

/* ─── TTS en modal de módulo ─── */
function initModalTTS() {
  const btn = document.getElementById('btn-tts-modal');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const content = document.getElementById('modal-content');
    if (content) speak(content.innerText.slice(0, 500));
  });
}

/* ─── RURAL: marcar tutorial completado ─── */
const origRtuNextClick = document.getElementById('rtu-next')?.onclick;

document.getElementById('rtu-next')?.addEventListener('click', () => {
  const steps = RURAL_TUTORIALS[state.currentRural];
  if (!steps) return;
  if (state.currentRuralStep === steps.length - 1) {
    RURAL_COMPLETED[state.currentRural] = true;
    localStorage.setItem('tn_rural_done', JSON.stringify(RURAL_COMPLETED));
    updateRuralProgress();
  }
});

/* ─── INTERSECTION OBSERVER para skill bars ─── */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.style.width; // trigger
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => obs.observe(b));
}

/* ─── PATCH renderModules para actualizar progreso global ─── */
const _origRenderModules = typeof renderModules === 'function' ? renderModules : null;

/* ─── INIT V2 ─── */
document.addEventListener('DOMContentLoaded', () => {
  // Ejecutar después del init original
  setTimeout(() => {
    animateCounters();
    updateGlobalProgress();
    updateRuralProgress();
    initEmergencias();
    initGlosario();
    initModalTTS();
    initSkillBars();
  }, 300);
});

// Actualizar progreso global cuando se completa módulo
const origShowToast = showToast;
window.showToast = function(text) {
  origShowToast(text);
  updateGlobalProgress();
};

/* ═══════════════════════════════════════════
   TECNORED v3 — NUEVAS FUNCIONES
═══════════════════════════════════════════ */

/* ── MÓDULOS iOS vs Android ── */
const MODULES_ANDROID = [
  { id:'android-encender', icon:'🔌', title:'Encender y apagar', desc:'Cómo encender, apagar y reiniciar tu celular Android.', color:'#4CAF82',
    steps:[
      {icon:'🔌',title:'El botón de encendido',text:'En casi todos los Android, el botón de encendido está en el lado derecho del celular. Presiónalo 2 segundos para encenderlo.',tip:'💡 Si el celular no enciende, puede que la batería esté agotada. Conéctalo al cargador 10 minutos.'},
      {icon:'🔓',title:'Desbloquear la pantalla',text:'Cuando el celular está encendido pero la pantalla está apagada, presiona el botón de encendido una vez. Luego desliza tu dedo hacia arriba para desbloquear.',tip:'💡 Puedes poner un PIN, patrón o huella dactilar para proteger tu celular en Ajustes → Seguridad.'},
      {icon:'📴',title:'Apagar el celular',text:'Mantén presionado el botón de encendido 3 segundos. Aparecerá un menú. Toca "Apagar". El celular se apagará en unos segundos.',tip:'💡 Si el celular está congelado, mantén presionado el botón de encendido 10 segundos para forzar el apagado.'},
      {icon:'✅',title:'¡Ya sabes encenderlo!',text:'Ahora sabes cómo encender, desbloquear y apagar tu Android. Practica hasta que te salga automático.',sim:{label:'Simular encendido',feedback:'🔋 ¡Celular encendido correctamente!'}}
    ]
  },
  { id:'android-llamada', icon:'📞', title:'Hacer llamadas', desc:'Llama a tus contactos desde tu celular Android fácilmente.', color:'#3A7BD5',
    steps:[
      {icon:'📞',title:'Abrir el marcador',text:'Busca el ícono verde del teléfono en tu pantalla de inicio y tócalo. Se abrirá el marcador para escribir números.',tip:'💡 Si no lo ves, desliza la pantalla hacia arriba para ver todas las apps y busca "Teléfono".'},
      {icon:'🔢',title:'Marcar el número',text:'Toca los números del teclado que aparece en pantalla. Si el número empieza con código de país, agrega el +591 (Bolivia) primero.',tip:'💡 También puedes ir a "Contactos" y tocar el nombre de la persona para llamarla directamente.'},
      {icon:'📲',title:'Llamar y colgar',text:'Toca el botón verde con el ícono de teléfono para llamar. Cuando termines, toca el botón rojo para colgar. ¡Así de simple!',sim:{label:'Probar una llamada',feedback:'📞 Llamando... Toca rojo para colgar.'}},
      {icon:'✅',title:'¡Ya puedes llamar!',text:'Has aprendido a hacer llamadas desde tu Android. Recuerda que las llamadas por WhatsApp son gratis si tienes WiFi.'}
    ]
  },
  { id:'android-internet', icon:'🌐', title:'Conectar a Internet', desc:'Conéctate al WiFi o usa tus datos móviles en Android.', color:'#E8834A',
    steps:[
      {icon:'📶',title:'Activar el WiFi',text:'Desliza tu dedo desde la parte de arriba de la pantalla hacia abajo. Verás íconos rápidos. Toca el ícono de WiFi (parece unas curvas) para activarlo.',tip:'💡 Cuando el WiFi está activado, el ícono se pone de color azul o verde.'},
      {icon:'🔗',title:'Elegir tu red WiFi',text:'Ve a Ajustes (ícono de engranaje ⚙️) → WiFi. Verás una lista de redes disponibles. Toca el nombre de tu red (ej: "CasaLopez") y escribe la contraseña.',sim:{label:'Conectar al WiFi',feedback:'📶 ¡Conectado a WiFi! Ahora tienes Internet.'}},
      {icon:'📡',title:'Usar datos móviles',text:'Si no tienes WiFi, usa tus datos móviles. Desliza desde arriba y toca el ícono de "Datos" (parece flechas arriba/abajo). Úsalos con cuidado para no gastarlos.',tip:'💡 Ve a Ajustes → Red → Uso de datos para ver cuántos datos te quedan.'},
      {icon:'✅',title:'¡Conectado a Internet!',text:'Ya sabes conectarte a Internet en tu Android, tanto por WiFi como por datos móviles.'}
    ]
  },
  { id:'android-apps', icon:'📲', title:'Descargar aplicaciones', desc:'Instala apps gratis desde la Play Store de Android.', color:'#9B59B6',
    steps:[
      {icon:'🏪',title:'Abrir la Play Store',text:'Busca en tu celular el ícono de la "Play Store", que parece un triángulo de colores. Tócalo para abrir la tienda oficial de apps de Android.',tip:'💡 Solo descarga apps de la Play Store. Las de otras fuentes pueden tener virus.'},
      {icon:'🔍',title:'Buscar una app',text:'Toca la barra de búsqueda arriba y escribe el nombre de la app que quieres, por ejemplo "WhatsApp". Luego toca buscar.',sim:{label:'Buscar WhatsApp',feedback:'🔍 WhatsApp encontrado. ¡1 mil millones de descargas!'}},
      {icon:'⬇️',title:'Instalar la app',text:'Toca el nombre de la app para ver su página. Luego toca el botón verde que dice "Instalar". Espera unos segundos y listo. ¡Ya está instalada!',tip:'💡 Si te pide aceptar permisos, léelos. Solo acepta los que tengan sentido (ej: WhatsApp necesita acceso al micrófono para llamadas).'},
      {icon:'✅',title:'¡App instalada!',text:'Ahora la app aparecerá en tu pantalla de inicio o en el cajón de apps. ¡Ya puedes usarla!'}
    ]
  }
];

const MODULES_IOS = [
  { id:'ios-inicio', icon:'🍎', title:'Empezar con tu iPhone', desc:'Conoce los botones y la pantalla de inicio de tu iPhone.', color:'#555555',
    steps:[
      {icon:'🔘',title:'Los botones del iPhone',text:'Tu iPhone tiene: botón lateral derecho (encender/apagar y Siri), botones de volumen en el lado izquierdo, y en modelos nuevos no hay botón de inicio físico, se usa un gesto deslizando desde abajo.',tip:'💡 En iPhones con Face ID, la pantalla se desbloquea mirándola. ¡Es tu cara la contraseña!'},
      {icon:'🏠',title:'La pantalla de inicio',text:'Al desbloquear, ves la pantalla de inicio con los íconos de tus apps. Desliza a la derecha para ver más páginas de apps. Desliza hacia abajo desde el centro para buscar cualquier app.',tip:'💡 Toca y mantén presionado un ícono para moverlo o eliminar apps.'},
      {icon:'🔄',title:'Navegar en el iPhone',text:'Para volver atrás: desliza desde el borde izquierdo de la pantalla hacia la derecha. Para ir a inicio: desliza hacia arriba desde abajo (iPhone sin botón físico) o presiona el botón circular (modelos antiguos).',sim:{label:'Ir a la pantalla de inicio',feedback:'🏠 ¡En la pantalla de inicio!'}},
      {icon:'✅',title:'¡Conoces tu iPhone!',text:'Ya sabes moverte por tu iPhone. Con práctica se vuelve muy natural e intuitivo.'}
    ]
  },
  { id:'ios-llamada', icon:'📞', title:'Hacer llamadas en iPhone', desc:'Llama a tus contactos desde tu iPhone paso a paso.', color:'#3A7BD5',
    steps:[
      {icon:'📞',title:'Abrir Teléfono',text:'Toca el ícono verde del teléfono en tu pantalla de inicio. Es la app "Teléfono" de Apple.',tip:'💡 Este ícono siempre está en la barra de abajo de tu iPhone, en la parte más fácil de alcanzar.'},
      {icon:'🔢',title:'Marcar el número',text:'Toca "Teclado" en la parte de abajo. Escribe el número con el teclado que aparece. Luego toca el botón verde de llamar.',sim:{label:'Marcar un número',feedback:'📞 Marcando número... ¡Llamando!'}},
      {icon:'👥',title:'Llamar desde contactos',text:'Toca "Contactos" en la app Teléfono. Busca el nombre de la persona. Toca su nombre y luego el número de teléfono que aparece.',tip:'💡 Puedes pedir a Siri que llame por ti diciendo "Oye Siri, llama a mamá".'},
      {icon:'✅',title:'¡Ya puedes llamar!',text:'Aprendiste a hacer llamadas desde tu iPhone. Recuerda que las llamadas de FaceTime (de Apple) son gratuitas entre iPhones con WiFi.'}
    ]
  },
  { id:'ios-internet', icon:'🌐', title:'Conectar a Internet en iPhone', desc:'Conéctate al WiFi o usa datos móviles en tu iPhone.', color:'#E8834A',
    steps:[
      {icon:'⚙️',title:'Ir a Ajustes',text:'Busca el ícono de "Ajustes" (parece un engranaje gris ⚙️) en tu pantalla de inicio y tócalo. Desde aquí se controla todo en el iPhone.',tip:'💡 El ícono de Ajustes siempre está en la pantalla de inicio, usualmente en la primera página.'},
      {icon:'📶',title:'Conectar al WiFi',text:'En Ajustes, toca "WiFi". Activa el interruptor si está apagado. Verás una lista de redes. Toca el nombre de tu red WiFi y escribe la contraseña.',sim:{label:'Conectar al WiFi',feedback:'📶 ¡Conectado! Palomita azul = WiFi activo.'}},
      {icon:'📡',title:'Datos móviles en iPhone',text:'En Ajustes toca "Datos móviles" o "Celular". Activa el interruptor verde. Úsalo cuando no tengas WiFi cerca. Consume tu paquete de datos.',tip:'💡 Baja el brillo de pantalla y cierra apps para que los datos duren más.'},
      {icon:'✅',title:'¡Conectado!',text:'Ya sabes cómo conectarte a Internet en tu iPhone, por WiFi o por datos. WiFi siempre que puedas, datos cuando sea necesario.'}
    ]
  },
  { id:'ios-apps', icon:'📲', title:'Descargar apps en iPhone', desc:'Instala aplicaciones gratis desde la App Store de Apple.', color:'#9B59B6',
    steps:[
      {icon:'🏪',title:'Abrir la App Store',text:'Busca el ícono azul con una "A" blanca: es la App Store, la tienda oficial de Apple. Tócala para abrirla.',tip:'💡 Solo descarga apps de la App Store oficial. Apple revisa todas las apps para que sean seguras.'},
      {icon:'🔍',title:'Buscar la app',text:'Toca el ícono de lupa 🔍 en la parte de abajo. Escribe el nombre de la app que quieres (ej: "WhatsApp") y toca Buscar.',sim:{label:'Buscar una app',feedback:'🔍 Resultados encontrados. ¡WhatsApp disponible!'}},
      {icon:'⬇️',title:'Descargar e instalar',text:'Toca el nombre de la app. Luego toca "Obtener" o el ícono de descarga. El iPhone puede pedirte tu contraseña de Apple ID o tu huella. Acepta y espera.',tip:'💡 Las apps gratuitas dicen "Obtener". Las de pago muestran el precio. Comienza con las gratuitas.'},
      {icon:'✅',title:'¡App instalada!',text:'La app aparecerá automáticamente en tu pantalla de inicio. ¡Ya puedes usarla! Las actualizaciones también se instalan desde la App Store.'}
    ]
  }
];

/* ── ESTADO OS ── */
let selectedOS = localStorage.getItem('tn_os') || null;

function initOSSelector() {
  const selector = document.getElementById('os-selector');
  const area = document.getElementById('modules-area');
  if (!selector || !area) return;

  if (selectedOS) showModulesForOS(selectedOS);

  document.getElementById('btn-android')?.addEventListener('click', () => selectOS('android'));
  document.getElementById('btn-ios')?.addEventListener('click', () => selectOS('ios'));
  document.getElementById('os-change-btn')?.addEventListener('click', () => {
    selectedOS = null;
    localStorage.removeItem('tn_os');
    selector.style.display = '';
    area.setAttribute('hidden','');
  });
  document.getElementById('btn-os-help')?.addEventListener('click', () => {
    const panel = document.getElementById('os-help-panel');
    if (panel) panel.hidden ? panel.removeAttribute('hidden') : panel.setAttribute('hidden','');
  });
}

function selectOS(os) {
  selectedOS = os;
  localStorage.setItem('tn_os', os);
  showModulesForOS(os);
}

function showModulesForOS(os) {
  const selector = document.getElementById('os-selector');
  const area = document.getElementById('modules-area');
  const label = document.getElementById('os-selected-label');
  if (!selector || !area) return;

  selector.style.display = 'none';
  area.removeAttribute('hidden');

  if (label) label.textContent = os === 'android' ? '🤖 Mostrando tutoriales para Android' : '🍎 Mostrando tutoriales para iPhone (iOS)';

  const modules = os === 'android' ? MODULES_ANDROID : MODULES_IOS;
  renderModulesFromList(modules);
}

function renderModulesFromList(list) {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  grid.innerHTML = list.map(mod => {
    const progress = state.moduleProgress[mod.id] || 0;
    const pct = Math.round((progress / mod.steps.length) * 100);
    const done = progress >= mod.steps.length;
    return `
      <article class="module-card" role="listitem" style="--mc-color:${mod.color}" tabindex="0" data-module="${mod.id}" aria-label="Módulo: ${mod.title}">
        <span class="mc-icon" aria-hidden="true">${mod.icon}</span>
        <div class="mc-title">${mod.title}</div>
        <p class="mc-desc">${mod.desc}</p>
        <div class="mc-progress-bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
          <div class="mc-progress-fill" style="width:${pct}%"></div>
        </div>
        <div class="mc-meta">
          <span class="mc-badge">${done ? '✅ Completado' : pct+'%'}</span>
          <span>${mod.steps.length} pasos</span>
        </div>
      </article>`;
  }).join('');

  // Eventos
  grid.addEventListener('click', e => { const c=e.target.closest('[data-module]'); if(c) openModuleFromList(c.dataset.module, list); });
  grid.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ const c=e.target.closest('[data-module]'); if(c){e.preventDefault();openModuleFromList(c.dataset.module,list);} } });
}

function openModuleFromList(moduleId, list) {
  const mod = list.find(m => m.id === moduleId);
  if (!mod) return;
  state.currentModule = mod;
  state.currentStep = state.moduleProgress[moduleId] || 0;
  if (state.currentStep >= mod.steps.length) state.currentStep = 0;
  const modal = document.getElementById('module-modal');
  document.getElementById('modal-icon').textContent = mod.icon;
  document.getElementById('modal-title').textContent = mod.title;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  renderModalStep();
}

/* ── EMERGENCIAS AMPLIADAS ── */
const EMERGENCIAS_DATA = {
  'celular-robado': {
    icon:'📵', title:'Me robaron el celular', intro:'Actúa rápido. Cada minuto cuenta para proteger tu información.',
    steps:['Llama a un familiar desde otro celular para avisarles que te robaron el celular.','Desde otro dispositivo, entra a google.com/android/find (Android) o appleid.apple.com (iPhone).','Inicia sesión con tu cuenta de Google o Apple ID y selecciona tu celular.','Toca "Bloquear dispositivo" y ponle una contraseña nueva para que nadie pueda usarlo.','Cambia inmediatamente las contraseñas de tu correo electrónico y redes sociales desde otro dispositivo.','Llama a tu compañía de celular (Tigo, Entel, Viva) para bloquear la SIM y que nadie haga llamadas con tu número.','Denuncia el robo en la delegación policial más cercana con número de IMEI si lo tienes.'],
    warning:'⚠️ Si tenías apps de banco en el celular, llama a tu banco de inmediato para bloquear el acceso desde ese dispositivo.'
  },
  'contrasena': {
    icon:'🔐', title:'Olvidé mi contraseña', intro:'No te preocupes, casi todas las plataformas tienen un sistema de recuperación.',
    steps:['En la pantalla de inicio de sesión, busca el texto "¿Olvidaste tu contraseña?" y tócalo.','Escribe el correo electrónico o número de celular con el que creaste la cuenta.','Espera el mensaje de texto o correo con el código de verificación (puede tardar 1-2 minutos).','Escribe ese código de 4 a 6 números exactamente como aparece, sin espacios.','Crea una nueva contraseña. Usa letras, números y un símbolo como ! o @. Mínimo 8 caracteres.','Guarda la nueva contraseña en un papel en un lugar seguro de tu casa.'],
    warning:'⚠️ Si no recibes el código, revisa que el número de celular o correo que escribiste sea el correcto. También revisa la carpeta de Spam.'
  },
  'estafado': {
    icon:'🚨', title:'Creo que me estafaron', intro:'Lo más importante es actuar rápido para limitar el daño.',
    steps:['Deja de responder inmediatamente. No envíes más dinero ni datos personales.','Toma capturas de pantalla de todos los mensajes, llamadas o conversaciones como prueba.','Bloquea al número o perfil del estafador en WhatsApp, Facebook o la plataforma que usaron.','Si diste datos de tu tarjeta o cuenta bancaria, llama a tu banco ahora mismo para bloquear movimientos.','Denuncia el fraude a la Policía Boliviana (teléfono 110) o a la ASFI si involucra dinero bancario.','Avisa a tus familiares para que estén alertas si el estafador los contacta usando tu nombre.'],
    warning:'⚠️ No te avergüences de haber caído en una estafa. Los estafadores son expertos en engañar. Lo importante es actuar rápido.'
  },
  'virus': {
    icon:'🦠', title:'Mi celular tiene virus', intro:'Mantén la calma. La mayoría de los "virus" en celulares se pueden eliminar fácilmente.',
    steps:['No descargues nada más y no hagas clic en ventanas que aparezcan solas en la pantalla.','Ve a Ajustes → Aplicaciones (o Apps). Busca apps que no reconoces o que instalaste recientemente.','Desinstala las apps sospechosas tocando su nombre y luego "Desinstalar".','Abre la Play Store (Android) o App Store (iPhone) y descarga un antivirus gratuito como "Avast Mobile Security".','Abre el antivirus y toca "Analizar" o "Escanear". Espera a que termine y sigue sus instrucciones.','Reinicia el celular después de eliminar las amenazas.'],
    warning:'⚠️ Si el problema persiste o el celular actúa de forma muy extraña, lleva el dispositivo a un técnico de confianza.'
  },
  'internet': {
    icon:'📡', title:'No funciona Internet', intro:'Sigue estos pasos en orden. La solución suele estar en los primeros pasos.',
    steps:['Comprueba que el WiFi esté activado (ícono en la barra superior) o que tengas datos móviles activados.','Activa el "Modo Avión" desde los íconos de acceso rápido, espera 10 segundos y desactívalo.','Apaga el celular completamente, espera 30 segundos y vuélvelo a encender.','Si usas WiFi, apaga el router (la cajita con luces) durante 30 segundos y vuélvelo a encender. Espera 2 minutos.','Verifica con alguien más si la red WiFi funciona en otro celular. Si no funciona en ninguno, el problema es el router.','Si usas datos móviles, verifica con tu compañía que no hayas agotado tu paquete de datos del mes.'],
    warning:'⚠️ Si ninguno de estos pasos funciona, llama a tu proveedor de Internet o compañía telefónica. El problema puede ser externo a tu celular.'
  },
  'cuenta': {
    icon:'🔒', title:'Me bloquearon la cuenta', intro:'Las cuentas se bloquean por seguridad. Siempre hay forma de recuperarlas.',
    steps:['En la pantalla de inicio de sesión, busca "Cuenta bloqueada" o "¿Necesitas ayuda?" y tócalo.','Selecciona la opción de recuperar por número de celular o correo alternativo.','Revisa tus mensajes de texto o correo por un código de verificación y escríbelo.','Sigue las instrucciones en pantalla para verificar que eres el dueño de la cuenta.','Una vez dentro, cambia tu contraseña por una más segura con letras, números y símbolos.','Activa la "Verificación en dos pasos" en la configuración de seguridad para evitar que vuelva a pasar.'],
    warning:'⚠️ Si alguien más accedió a tu cuenta, revisa los dispositivos conectados en la configuración y cierra sesión en todos los desconocidos.'
  },
  'foto-perdida': {
    icon:'🖼️', title:'Perdí mis fotos', intro:'Antes de desesperarte, las fotos suelen estar en varios lugares.',
    steps:['Revisa la carpeta "Papelera" o "Recientemente eliminadas" en tu app de Galería o Fotos. Las fotos eliminadas se guardan ahí 30 días.','Si tenías Google Fotos activado (Android) o iCloud (iPhone), entra a esas apps. Tus fotos pueden estar en la nube.','En Google Fotos, toca el ícono de menú → Papelera → y restaura las fotos que necesitas.','Si el celular se dañó, un técnico especializado puede recuperar fotos del almacenamiento interno.','Para el futuro, activa la copia de seguridad automática en Google Fotos o iCloud para no perder fotos nunca más.'],
    warning:'⚠️ Si el celular cayó al agua o se golpeó fuerte, no lo intentes encender. Llévalo a un técnico antes para aumentar las posibilidades de recuperación.'
  },
  'llamada-estafa': {
    icon:'📞', title:'Llamada de estafadores', intro:'Las llamadas de estafadores son muy comunes. Aquí cómo protegerte.',
    steps:['Cuelga inmediatamente si alguien te dice que ganaste un premio, que hay un problema con tu banco, o que un familiar tuyo está en problemas.','Nunca des tu número de tarjeta, PIN, contraseñas o datos personales por teléfono a nadie.','Si dicen ser de tu banco, cuelga y llama tú directamente al número oficial que aparece en tu tarjeta bancaria.','Si dicen que un familiar está en peligro, primero llama directamente a ese familiar para verificar.','Bloquea el número desde el que te llamaron. En Android: toca los 3 puntos al ver la llamada → Bloquear. En iPhone: toca "i" → Bloquear contacto.','Denuncia el número marcando al 110 (Policía) o contando a familiares para que estén alertas.'],
    warning:'⚠️ Los bancos, el gobierno y las empresas NUNCA te pedirán contraseñas, PINs ni códigos de verificación por llamada telefónica. Eso siempre es una estafa.'
  },
  'celular-lento': {
    icon:'🐌', title:'Mi celular está muy lento', intro:'Un celular lento generalmente tiene solución sin gastar dinero.',
    steps:['Cierra todas las apps que están abiertas. En Android: toca el botón de apps recientes (cuadrado) y ciérralas. En iPhone: desliza hacia arriba y ciérralas.','Libera espacio. Ve a Ajustes → Almacenamiento. Elimina fotos duplicadas, apps que no usas y videos antiguos.','Reinicia el celular. Parece simple, pero reiniciar limpia la memoria temporal y acelera el celular.','Desactiva animaciones. Ve a Ajustes → Opciones de desarrollador (Android) y reduce las escalas de animación a 0.5x.','Limpia la caché de las apps: Ajustes → Apps → Selecciona una app → Almacenamiento → Limpiar caché.','Si el celular tiene más de 3 años, considera actualizarlo. Los celulares tienen vida útil.'],
    warning:'⚠️ Evita descargar apps de "limpieza" o "acelerador de memoria" de marcas desconocidas. Muchas son publicidad o hasta malware.'
  },
  'bateria': {
    icon:'🔋', title:'La batería dura muy poco', intro:'Con estos ajustes puedes duplicar la duración de tu batería sin apagarlo.',
    steps:['Baja el brillo de la pantalla al 40-60%. Es el factor que más consume batería. Ve a Ajustes → Pantalla → Brillo.','Activa el "Modo ahorro de energía" o "Modo batería". En Android: Ajustes → Batería. En iPhone: Ajustes → Batería.','Desactiva el WiFi y el Bluetooth cuando no los estés usando. Los íconos de acceso rápido están deslizando desde arriba.','Cierra las apps que se actualizan en segundo plano: Ajustes → Apps → busca cada app → Datos en segundo plano → Desactivar.','Reduce el tiempo que la pantalla permanece encendida sola: Ajustes → Pantalla → Tiempo de espera de pantalla → 30 segundos.','Si la batería no dura ni 4 horas con uso normal, probablemente necesita reemplazo. Un técnico puede cambiarla.'],
    warning:'⚠️ No cargues el celular toda la noche. Lo ideal es cargarlo entre 20% y 80% para prolongar la vida de la batería.'
  },
  'whatsapp-bloqueado': {
    icon:'💬', title:'Me bloquearon en WhatsApp', intro:'Hay dos situaciones: que alguien te bloqueó a ti, o que WhatsApp bloqueó tu cuenta.',
    steps:['Si alguien te bloqueó: verás que sus mensajes tienen solo un palomita (✓) y no dos (✓✓). No puedes llamarle ni ver su foto. Solo esa persona puede desbloquearte.','Si WhatsApp bloqueó tu cuenta: verás un mensaje que dice "Tu número está bando temporalmente". Sigue las instrucciones de la app para apelar.','Para evitar bloqueos de WhatsApp: no envíes el mismo mensaje a muchas personas a la vez, no uses WhatsApp modificado y no agregues a muchos grupos sin permiso.','Si perdiste el acceso a tu cuenta: ve a WhatsApp y escribe tu número. Te mandará un SMS con código de 6 dígitos para verificar.','Si cambiaste de celular o número: instala WhatsApp, pon tu número y verifica con el código SMS. Tus chats se recuperan desde la copia de seguridad.'],
    warning:'⚠️ WhatsApp solo bloquea cuentas por violar sus normas (spam, contenido ilegal, etc.). Si fue un error, puedes escribir a support@whatsapp.com.'
  },
  'compra-falsa': {
    icon:'🛒', title:'Hice una compra falsa en línea', intro:'Es una situación difícil pero hay pasos concretos para intentar recuperar tu dinero.',
    steps:['Guarda todas las pruebas: capturas de pantalla del sitio web, conversaciones, comprobantes de pago y correos electrónicos.','Si pagaste con tarjeta de crédito o débito, llama a tu banco de inmediato y diles que fue una compra fraudulenta. Pide un "contracargo" o "chargeback".','Si pagaste por transferencia bancaria, llama al banco y explica la situación. A veces pueden revertir la transferencia si actúas en las primeras horas.','Si pagaste con Tigo Money u otra billetera digital, llama a su servicio al cliente inmediatamente.','Denuncia el sitio web o perfil en las redes sociales donde lo viste (Facebook, Instagram) como fraude.','Denuncia ante el Ministerio de Justicia o la Policía Boliviana con todas tus pruebas.'],
    warning:'⚠️ Para el futuro: desconfía de precios demasiado bajos, verifica que el sitio tenga https:// y busca reseñas antes de comprar. Preferiblemente compra en tiendas conocidas.'
  }
};

function initEmergenciasPage() {
  const grid = document.getElementById('em-main-grid');
  const panel = document.getElementById('em-answer-panel');
  const content = document.getElementById('em-answer-content');
  const backBtn = document.getElementById('em-back-btn');
  const ttsBtn = document.getElementById('btn-tts-em');
  if (!grid) return;

  function showEm(key) {
    const em = EMERGENCIAS_DATA[key];
    if (!em) return;
    content.innerHTML = `
      <div class="em-answer-inner">
        <div class="em-ans-big-icon">${em.icon}</div>
        <h2 class="em-ans-title">${em.title}</h2>
        <p class="em-ans-intro">${em.intro}</p>
        <ul class="em-steps-list">
          ${em.steps.map((s,i)=>`<li><span class="em-step-n">${i+1}</span><span>${s}</span></li>`).join('')}
        </ul>
        ${em.warning ? `<div class="em-warning"><strong>Importante:</strong> ${em.warning}</div>` : ''}
      </div>`;
    grid.style.display = 'none';
    panel.removeAttribute('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
  }

  grid.addEventListener('click', e => { const c=e.target.closest('[data-em]'); if(c) showEm(c.dataset.em); });
  grid.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){ const c=e.target.closest('[data-em]'); if(c){e.preventDefault();showEm(c.dataset.em);} } });
  backBtn?.addEventListener('click', () => { panel.setAttribute('hidden',''); grid.style.display=''; stopTTS(); });
  ttsBtn?.addEventListener('click', () => { if(content) speak(content.innerText.slice(0,800)); });
}

/* ── PLANES - notify form ── */
function initPlanes() {
  const btn = document.getElementById('btn-pro-notify');
  const input = document.getElementById('pro-email');
  const success = document.getElementById('pn-success');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (!input || !input.value.includes('@')) { input?.focus(); return; }
    success?.removeAttribute('hidden');
    success.style.display = 'block';
    input.value = '';
    btn.disabled = true;
    btn.textContent = '✅ Enviado';
  });
}

/* ── INIT ADICIONAL ── */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initOSSelector();
    initEmergenciasPage();
    initPlanes();
  }, 350);
});

/* ── FIX: re-init OS selector cuando se navega a plataforma ── */
const origNavigate = navigate;
window.navigate = function(pageId) {
  origNavigate(pageId);
  if (pageId === 'plataforma') {
    setTimeout(() => initOSSelector(), 100);
  }
  if (pageId === 'emergencias') {
    setTimeout(() => initEmergenciasPage(), 100);
  }
};
