/**
 * TECNORED v3 — app.js
 * Limpio, sin duplicados, sin conflictos.
 */
'use strict';

/* ══════════════════════════════════════
   ESTADO GLOBAL
══════════════════════════════════════ */
const state = {
  currentPage: 'inicio',
  moduleProgress: JSON.parse(localStorage.getItem('tn_progress') || '{}'),
  ttsEnabled: false,
  currentModule: null,
  currentStep: 0,
  theme: localStorage.getItem('tn_theme') || 'light',
  fontSize: localStorage.getItem('tn_fontsize') || 'medium',
  highContrast: localStorage.getItem('tn_contrast') === 'true'
};

/* ══════════════════════════════════════
   DATOS DE MÓDULOS
══════════════════════════════════════ */
const MODULES_GENERAL = [
  {
    id: 'celular',
    icon: '📱',
    title: 'Cómo usar el celular',
    desc: 'Aprende los botones y funciones básicas. Elige tu tipo de teléfono.',
    color: '#E8834A',
    esCelular: true, // módulo especial que abre el selector de OS
    steps: [] // los steps se cargan según el OS elegido
  },
  {
    id: 'internet',
    icon: '🌐',
    title: 'Cómo usar Internet seguro',
    desc: 'Navega por la web de forma segura y encuentra información confiable.',
    color: '#3A7BD5',
    steps: [
      { icon: '🌐', title: '¿Qué es Internet?', text: 'Internet es una red gigante que conecta computadoras y celulares de todo el mundo. Es como una biblioteca enorme disponible las 24 horas.', tip: '💡 Para usarlo necesitas WiFi (en casa o lugares públicos) o datos móviles de tu compañía.' },
      { icon: '🔍', title: 'Buscar en Google', text: 'Google es el buscador más usado del mundo. Abre el navegador (Chrome, Firefox), escribe lo que quieres saber y toca "Buscar". Lee los primeros resultados.', tip: '💡 Sé específico: escribe "receta de arroz con leche fácil" en lugar de solo "receta".', sim: { label: 'Probar una búsqueda', feedback: '🔍 ¡Búsqueda realizada! Encontraste resultados.' } },
      { icon: '🛡️', title: 'Navegar con seguridad', text: 'Fíjate que la dirección del sitio empiece con "https://" (con el candadito 🔒). No hagas clic en ventanas que aparecen solas. No descargues archivos de sitios desconocidos.', tip: '⚠️ Si ves "¡GANASTE UN PREMIO!" en una página, es una trampa. Cierra esa ventana.' },
      { icon: '📡', title: 'Conectarse a WiFi', text: 'Ve a Ajustes → WiFi, actívalo, elige el nombre de tu red, escribe la contraseña y toca Conectar.', tip: '💡 La contraseña del WiFi suele estar en la cajita con luces (el router).', sim: { label: 'Conectar a WiFi', feedback: '📶 ¡Conectado! Ahora tienes Internet.' } }
    ]
  },
  {
    id: 'correo',
    icon: '✉️',
    title: 'Crear correo electrónico',
    desc: 'Crea tu primer email y aprende a enviar y recibir mensajes.',
    color: '#E74C6B',
    steps: [
      { icon: '✉️', title: '¿Qué es el correo?', text: 'El correo electrónico es como una carta, pero digital y llega en segundos a cualquier parte del mundo. Es necesario para registrarte en apps y recibir documentos.', tip: '💡 El correo más usado es Gmail, de Google. Es gratis y muy fácil.' },
      { icon: '📝', title: 'Crear tu cuenta Gmail', text: 'Abre el navegador y escribe "gmail.com". Toca "Crear cuenta", escribe tu nombre, elige un usuario (ej: juan.garcia@gmail.com), crea una contraseña segura y escribe tu número de celular.', tip: '💡 Elige un nombre serio como "juan.perez". Lo usarás siempre.' },
      { icon: '🔐', title: 'Contraseña segura', text: 'Una buena contraseña tiene letras mayúsculas y minúsculas, números y símbolos. Ejemplo: "MiPerro2024!" es buena. "123456" es muy insegura.', tip: '⚠️ Nunca compartas tu contraseña con nadie. Guárdala en un papel en lugar seguro.', sim: { label: 'Probar mi contraseña', feedback: '🔒 ¡Contraseña segura! Bien hecho.' } },
      { icon: '📨', title: 'Enviar tu primer email', text: 'En Gmail toca "+ Redactar", en "Para" escribe el email del destinatario, en "Asunto" escribe el tema, escribe tu mensaje y toca el ícono de enviar (avión de papel).', sim: { label: 'Enviar un mensaje', feedback: '✈️ ¡Mensaje enviado! Tu primer email voló al mundo.' } }
    ]
  },
  {
    id: 'estafas',
    icon: '🛡️',
    title: 'Evitar estafas digitales',
    desc: 'Protégete de fraudes y personas malintencionadas en Internet.',
    color: '#F5A623',
    steps: [
      { icon: '⚠️', title: '¿Qué son las estafas digitales?', text: 'Las estafas digitales son engaños por Internet o celular para robarte dinero o información personal. Son muy comunes pero puedes protegerte si sabes reconocerlas.' },
      { icon: '🎣', title: 'El "phishing" — el anzuelo', text: 'El phishing es cuando alguien te manda un mensaje falso haciéndose pasar por tu banco o el gobierno. El mensaje dice que hay un problema y pide tus datos. ¡ES UNA TRAMPA!', tip: '⚠️ Tu banco NUNCA te pedirá tu contraseña por mensaje o llamada.' },
      { icon: '🏆', title: '"Ganaste un premio" — es mentira', text: 'Si ves "¡FELICIDADES! Ganaste un iPhone", es una mentira para que hagas clic y des tus datos. Nunca hagas clic en esos mensajes.', tip: '💡 Si no participaste en ningún concurso, NO puedes ganar nada. Cierra esa ventana.', sim: { label: '¿Es real este premio?', feedback: '✅ ¡Bien! Lo reconociste como falso y no hiciste clic.' } },
      { icon: '📱', title: 'Protege tu celular', text: 'Pon un PIN o patrón. No descargues apps fuera de la tienda oficial. No te conectes a WiFi desconocida. Actualiza el sistema cuando te lo pida.', tip: '💡 Si pierdes el celular, desde otro dispositivo puedes bloquearlo con tu cuenta de Google.', sim: { label: 'Activar seguridad', feedback: '🔐 ¡Celular protegido! Tu información está segura.' } }
    ]
  },
  {
    id: 'apps',
    icon: '📲',
    title: 'Uso básico de aplicaciones',
    desc: 'Descarga y usa las apps más útiles para tu vida diaria.',
    color: '#9B59B6',
    steps: [
      { icon: '📲', title: '¿Qué son las aplicaciones?', text: 'Las apps son programas en tu celular para hacer cosas específicas: chatear, ver videos, escuchar música, pedir comida y mucho más. La mayoría son gratuitas.' },
      { icon: '🏪', title: 'La tienda de apps', text: 'Android usa "Play Store" (triángulo de colores). iPhone usa "App Store" (letra A azul). Busca el nombre de la app y toca "Instalar" o "Obtener".', tip: '💡 Solo descarga apps de la tienda oficial. Nunca de páginas web desconocidas.', sim: { label: 'Buscar una app', feedback: '🔍 ¡Encontrada! Toca Instalar para descargarla.' } },
      { icon: '💬', title: 'WhatsApp — la más útil', text: 'WhatsApp te permite enviar mensajes gratis, hacer llamadas y videollamadas sin costo, enviar fotos y crear grupos familiares. Solo necesitas número de celular.', tip: '💡 Con WhatsApp puedes hablar con familia que está lejos sin gastar en llamadas.' },
      { icon: '🎵', title: 'Apps recomendadas', text: 'YouTube (videos gratis), Maps (para no perderte), Duolingo (aprender idiomas), Spotify (música). ¡Todas gratuitas para descargar!', tip: '💡 Empieza con 2 o 3 apps. Cuando las domines, descarga más.', sim: { label: 'Ver apps recomendadas', feedback: '✅ ¡Tienes una lista perfecta para empezar!' } }
    ]
  },
  {
    id: 'videollamadas',
    icon: '📹',
    title: 'Videollamadas',
    desc: 'Habla cara a cara con familia y amigos aunque estén lejos.',
    color: '#2EAD6E',
    steps: [
      { icon: '📹', title: '¿Qué es una videollamada?', text: 'Una videollamada te permite hablar cara a cara con alguien por el celular, viendo su imagen en vivo. Es como estar juntos aunque estén en ciudades diferentes.' },
      { icon: '📱', title: 'Videollamada por WhatsApp', text: 'Abre WhatsApp, toca el nombre de la persona, toca el ícono de cámara 🎥 en la esquina superior y espera que conteste. ¡Ya pueden verse!', tip: '💡 Asegúrate de estar en un lugar con buena luz.', sim: { label: 'Iniciar videollamada', feedback: '📹 ¡Conectando! Tu familiar ya puede verte.' } },
      { icon: '💡', title: 'Consejos para videollamadas', text: 'Conecta a WiFi si puedes. Pon luz en tu cara (ventana o lámpara adelante, no atrás). Habla con voz normal y clara. Si no te escuchan bien, revisa el volumen.', tip: '💡 Si la imagen se congela, espera unos segundos o muévete a otro lugar.' },
      { icon: '👥', title: 'Grupos familiares', text: 'Puedes hacer videollamadas grupales con toda la familia en WhatsApp. Crea un grupo familiar y toca el ícono de videollamada. ¡Todos juntos aunque estén lejos!', sim: { label: 'Crear grupo familiar', feedback: '👨‍👩‍👧‍👦 ¡Grupo creado! Toda la familia conectada.' } }
    ]
  },
  {
    id: 'educacion',
    icon: '🎓',
    title: 'Educación digital básica',
    desc: 'Aprende sobre el mundo digital y cómo aprovecharlo.',
    color: '#1ABC9C',
    steps: [
      { icon: '🎓', title: '¿Por qué aprender tecnología?', text: 'Saber tecnología te abre puertas: encontrar trabajos mejores, comunicarte con el gobierno, estudiar desde casa, pagar facturas sin hacer filas y vender tus productos en línea.', tip: '💡 ¡Ya estás dando el primer paso aprendiendo en TecnoRed!' },
      { icon: '💻', title: '¿Qué es una computadora?', text: 'Una computadora puede ser una laptop, una de escritorio, o tu celular. Todas tienen pantalla, teclado y un procesador (el cerebro). Tu celular es una computadora pequeña y poderosa.' },
      { icon: '🌍', title: 'El mundo digital', text: 'El mundo digital incluye Internet, redes sociales, comercio en línea, gobierno digital, educación virtual y salud digital. Cada año más servicios se vuelven digitales.', sim: { label: 'Ver servicios digitales', feedback: '🌐 ¡Hay mucho por descubrir en el mundo digital!' } },
      { icon: '🚀', title: 'Tu próximo paso', text: '¡Felicidades! Practica lo aprendido cada día. Pide ayuda cuando no entiendas algo. No tengas miedo de equivocarte. Enseña a otros lo que aprendiste.', tip: '💡 El mejor regalo que puedes darte es el conocimiento. ¡Sigue aprendiendo!', sim: { label: '¡Completar módulo!', feedback: '🎉 ¡FELICIDADES! Completaste Educación Digital Básica.' } }
    ]
  }
];

/* Módulos de celular según OS */
const STEPS_CELULAR_ANDROID = [
  { icon: '🤖', title: 'Tu celular Android', text: 'Android es el sistema de celulares como Samsung, Huawei, Motorola, Xiaomi y muchos más. Tiene la Play Store (triángulo de colores) para descargar apps.', tip: '💡 La mayoría de celulares en Bolivia y Latinoamérica son Android.' },
  { icon: '🔘', title: 'Botones del Android', text: 'Botón lateral derecho: enciende y apaga. Botones de volumen: arriba y abajo del volumen. Botones en pantalla: atrás (←), inicio (círculo), apps recientes (cuadrado).', sim: { label: 'Explorar botones', feedback: '✅ ¡Identificaste todos los botones!' } },
  { icon: '🏠', title: 'Pantalla de inicio Android', text: 'Al encender ves tus apps en la pantalla de inicio. Desliza hacia arriba para ver TODAS las apps. Desliza hacia la derecha para ver más páginas de apps.', tip: '💡 Mantén presionado un ícono para moverlo o desinstalar una app.' },
  { icon: '📲', title: 'Play Store — descargar apps', text: 'La Play Store es la tienda oficial de apps para Android. Ábrela, escribe el nombre de la app que quieres, toca "Instalar" y espera. ¡Gratis!', sim: { label: 'Abrir Play Store', feedback: '🏪 ¡Play Store abierta! Miles de apps esperan.' } }
];

const STEPS_CELULAR_IOS = [
  { icon: '🍎', title: 'Tu iPhone (iOS)', text: 'iOS es el sistema de los iPhones de Apple. Tiene el logo de una manzana 🍎 atrás y la App Store (letra A azul) para descargar apps.', tip: '💡 Los iPhones son conocidos por su seguridad y facilidad de uso.' },
  { icon: '🔘', title: 'Botones del iPhone', text: 'Botón lateral derecho: encender, apagar y Face ID. Botones de volumen: izquierda arriba y abajo. Sin botón de inicio físico en modelos nuevos: desliza desde abajo hacia arriba para ir al inicio.', sim: { label: 'Explorar botones', feedback: '✅ ¡Identificaste los botones del iPhone!' } },
  { icon: '🏠', title: 'Pantalla de inicio iPhone', text: 'Al desbloquear (mirando la pantalla con Face ID o con tu huella) ves tus apps. Desliza a la derecha para más páginas. Desliza hacia abajo desde el centro para buscar cualquier app.', tip: '💡 Mantén presionado un ícono para moverlo o eliminar apps.' },
  { icon: '📲', title: 'App Store — descargar apps', text: 'La App Store es la tienda oficial de Apple. Ábrela, toca la lupa 🔍, escribe el nombre de la app, toca "Obtener" y confirma con tu huella o Face ID. ¡Gratis!', sim: { label: 'Abrir App Store', feedback: '🏪 ¡App Store abierta! Apps verificadas y seguras.' } }
];

/* ══════════════════════════════════════
   DATOS EMERGENCIAS
══════════════════════════════════════ */
const EMERGENCIAS = {
  'celular-robado': {
    icon: '📵', title: 'Me robaron el celular',
    intro: 'Actúa rápido. Cada minuto cuenta para proteger tu información.',
    steps: [
      'Llama a un familiar desde otro celular para avisarles que te robaron el celular.',
      'Desde otro dispositivo, entra a <strong>google.com/android/find</strong> (Android) o <strong>appleid.apple.com</strong> (iPhone).',
      'Inicia sesión con tu cuenta y selecciona tu celular en la lista.',
      'Toca <strong>"Bloquear dispositivo"</strong> y ponle una contraseña nueva para que nadie pueda usarlo.',
      'Cambia inmediatamente las contraseñas de tu correo y redes sociales desde otro dispositivo.',
      'Llama a tu compañía (Tigo, Entel, Viva) para bloquear la SIM y evitar llamadas no autorizadas.',
      'Denuncia el robo en la delegación policial más cercana.'
    ],
    warning: 'Si tenías apps de banco en el celular, llama a tu banco de inmediato para bloquear el acceso.'
  },
  'contrasena': {
    icon: '🔐', title: 'Olvidé mi contraseña',
    intro: 'No te preocupes, casi todas las plataformas tienen recuperación.',
    steps: [
      'En la pantalla de inicio de sesión, busca <strong>"¿Olvidaste tu contraseña?"</strong> y tócalo.',
      'Escribe el correo electrónico o número de celular con el que creaste la cuenta.',
      'Espera el mensaje de texto o correo con el código de verificación (1-2 minutos).',
      'Escribe ese código exactamente como aparece, sin espacios.',
      'Crea una nueva contraseña con letras, números y un símbolo (ej: MiCasa2024!).',
      'Guarda la nueva contraseña en un papel en un lugar seguro de tu casa.'
    ],
    warning: 'Si no recibes el código, revisa que el correo o número escrito sea el correcto. También revisa la carpeta de Spam.'
  },
  'estafado': {
    icon: '🚨', title: 'Creo que me estafaron',
    intro: 'Lo más importante es actuar rápido para limitar el daño.',
    steps: [
      'Deja de responder inmediatamente. No envíes más dinero ni datos personales.',
      'Toma capturas de pantalla de todos los mensajes y conversaciones como prueba.',
      'Bloquea al número o perfil del estafador en WhatsApp, Facebook o donde sea.',
      'Si diste datos de tu tarjeta o cuenta bancaria, llama a tu banco ahora mismo para bloquear movimientos.',
      'Denuncia ante la Policía Boliviana (teléfono <strong>110</strong>) o la ASFI si involucra dinero bancario.',
      'Avisa a tus familiares para que estén alertas si el estafador los contacta.'
    ],
    warning: 'No te avergüences. Los estafadores son expertos en engañar. Lo importante es actuar rápido.'
  },
  'virus': {
    icon: '🦠', title: 'Mi celular tiene virus',
    intro: 'Mantén la calma. La mayoría de virus en celulares se eliminan fácilmente.',
    steps: [
      'No descargues nada más y no hagas clic en ventanas que aparezcan solas.',
      'Ve a <strong>Ajustes → Aplicaciones</strong>. Busca apps que no reconoces o que instalaste recientemente.',
      'Desinstala las apps sospechosas tocando su nombre y luego "Desinstalar".',
      'Abre la Play Store (Android) o App Store (iPhone) y descarga <strong>"Avast Mobile Security"</strong> (gratis).',
      'Abre el antivirus, toca "Analizar" y espera a que termine.',
      'Reinicia el celular después de eliminar las amenazas.'
    ],
    warning: 'Si el problema persiste, lleva el dispositivo a un técnico de confianza.'
  },
  'internet': {
    icon: '📡', title: 'No funciona Internet',
    intro: 'Sigue estos pasos en orden. La solución suele estar en los primeros.',
    steps: [
      'Verifica que el WiFi esté activado (ícono en la barra superior) o que tengas datos móviles activos.',
      'Activa el <strong>"Modo Avión"</strong> desde los íconos de acceso rápido, espera 10 segundos y desactívalo.',
      'Apaga el celular completamente, espera 30 segundos y vuélvelo a encender.',
      'Si usas WiFi, apaga el router (la cajita con luces) 30 segundos y vuelve a encenderlo. Espera 2 minutos.',
      'Verifica con alguien más si la red WiFi funciona en otro celular.',
      'Si usas datos móviles, revisa con tu compañía que no hayas agotado tu paquete del mes.'
    ],
    warning: 'Si ningún paso funciona, llama a tu proveedor de Internet o compañía telefónica.'
  },
  'cuenta-bloqueada': {
    icon: '🔒', title: 'Me bloquearon la cuenta',
    intro: 'Las cuentas se bloquean por seguridad. Siempre hay forma de recuperarlas.',
    steps: [
      'En la pantalla de inicio de sesión busca <strong>"Cuenta bloqueada"</strong> o <strong>"¿Necesitas ayuda?"</strong> y tócalo.',
      'Selecciona recuperar por número de celular o correo alternativo.',
      'Revisa tus mensajes de texto o correo por un código de verificación y escríbelo.',
      'Sigue las instrucciones para verificar que eres el dueño de la cuenta.',
      'Una vez dentro, cambia tu contraseña por una más segura.',
      'Activa la <strong>"Verificación en dos pasos"</strong> en seguridad para evitar que vuelva a pasar.'
    ],
    warning: 'Si alguien más accedió a tu cuenta, revisa los dispositivos conectados y cierra sesión en los desconocidos.'
  },
  'fotos-perdidas': {
    icon: '🖼️', title: 'Perdí mis fotos',
    intro: 'Antes de desesperarte, las fotos suelen estar guardadas en varios lugares.',
    steps: [
      'Revisa la carpeta <strong>"Papelera"</strong> o <strong>"Recientemente eliminadas"</strong> en tu Galería o Fotos. Se guardan ahí 30 días.',
      'Si tenías <strong>Google Fotos</strong> (Android) o <strong>iCloud</strong> (iPhone), entra a esas apps. Tus fotos pueden estar en la nube.',
      'En Google Fotos: toca el menú → Papelera → restaura las fotos que necesitas.',
      'Si el celular se dañó, un técnico especializado puede recuperar fotos del almacenamiento.',
      'Para el futuro, activa la copia de seguridad automática en Google Fotos o iCloud.'
    ],
    warning: 'Si el celular cayó al agua o se golpeó, no lo intentes encender. Llévalo a un técnico primero.'
  },
  'llamada-estafa': {
    icon: '📞', title: 'Llamada de estafadores',
    intro: 'Las llamadas de estafadores son muy comunes. Aquí cómo protegerte.',
    steps: [
      'Cuelga inmediatamente si alguien dice que ganaste un premio, hay problema con tu banco o un familiar está en peligro.',
      'Nunca des tu número de tarjeta, PIN, contraseñas o datos personales por teléfono.',
      'Si dicen ser de tu banco, cuelga y llama tú al número oficial que aparece en tu tarjeta.',
      'Si dicen que un familiar está en peligro, llama directamente a ese familiar para verificar.',
      'Bloquea el número: en Android toca los 3 puntos al ver la llamada → Bloquear. En iPhone toca "i" → Bloquear contacto.',
      'Denuncia el número marcando al 110 (Policía).'
    ],
    warning: 'Los bancos, el gobierno y las empresas NUNCA te pedirán contraseñas ni PINs por llamada. Eso siempre es una estafa.'
  },
  'celular-lento': {
    icon: '🐌', title: 'Mi celular está muy lento',
    intro: 'Un celular lento generalmente tiene solución sin gastar dinero.',
    steps: [
      'Cierra todas las apps abiertas: en Android toca el botón de apps recientes y ciérralas. En iPhone desliza hacia arriba y ciérralas.',
      'Libera espacio: ve a <strong>Ajustes → Almacenamiento</strong>. Elimina fotos duplicadas, apps que no usas y videos antiguos.',
      'Reinicia el celular. Parece simple pero limpia la memoria y lo acelera.',
      'Limpia la caché: <strong>Ajustes → Apps → selecciona una app → Almacenamiento → Limpiar caché</strong>.',
      'Desactiva animaciones en Android: <strong>Ajustes → Opciones de desarrollador</strong> → reduce animaciones a 0.5x.',
      'Si el celular tiene más de 3 años, considera actualizarlo. Los celulares tienen vida útil.'
    ],
    warning: 'Evita apps de "limpieza" o "acelerador" de marcas desconocidas. Muchas son publicidad o hasta malware.'
  },
  'bateria': {
    icon: '🔋', title: 'La batería dura muy poco',
    intro: 'Con estos ajustes puedes duplicar la duración de tu batería.',
    steps: [
      'Baja el brillo de la pantalla al 40-60%: <strong>Ajustes → Pantalla → Brillo</strong>.',
      'Activa el <strong>"Modo ahorro de energía"</strong>: en Android ve a Ajustes → Batería. En iPhone ve a Ajustes → Batería.',
      'Desactiva WiFi y Bluetooth cuando no los uses. Los íconos están en la barra de acceso rápido.',
      'Reduce el tiempo de pantalla activa: <strong>Ajustes → Pantalla → Tiempo de espera → 30 segundos</strong>.',
      'Cierra apps que se actualizan solas en segundo plano desde Ajustes → Apps.',
      'Si la batería no dura ni 4 horas con uso normal, probablemente necesita reemplazo.'
    ],
    warning: 'No cargues el celular toda la noche. Lo ideal es cargarlo entre 20% y 80% para prolongar la batería.'
  },
  'whatsapp-bloqueado': {
    icon: '💬', title: 'Problemas con WhatsApp',
    intro: 'Hay dos situaciones: que alguien te bloqueó, o que WhatsApp bloqueó tu cuenta.',
    steps: [
      'Si alguien te bloqueó: sus mensajes tienen solo una palomita (✓) y no puedes ver su foto ni llamarle. Solo esa persona puede desbloquearte.',
      'Si WhatsApp bloqueó tu cuenta: verás un mensaje que dice "Tu número está suspendido". Sigue las instrucciones de la app para apelar.',
      'Si perdiste el acceso: instala WhatsApp, pon tu número y verifica con el código SMS que recibirás.',
      'Si cambiaste de celular: instala WhatsApp, pon tu número, verifica con SMS y tus chats se recuperan desde la copia de seguridad.',
      'Para evitar bloqueos: no envíes el mismo mensaje a muchas personas a la vez y no uses WhatsApp modificado.'
    ],
    warning: 'WhatsApp solo bloquea cuentas por violar sus normas. Si fue un error, escribe a support@whatsapp.com.'
  },
  'compra-falsa': {
    icon: '🛒', title: 'Hice una compra falsa en línea',
    intro: 'Es difícil pero hay pasos para intentar recuperar tu dinero.',
    steps: [
      'Guarda todas las pruebas: capturas del sitio web, conversaciones, comprobantes de pago y correos.',
      'Si pagaste con tarjeta de crédito o débito, llama a tu banco de inmediato. Pide un "contracargo" o "chargeback".',
      'Si pagaste por transferencia bancaria, llama al banco y explica. A veces pueden revertirla si actúas en las primeras horas.',
      'Si pagaste con Tigo Money u otra billetera digital, llama a su servicio al cliente inmediatamente.',
      'Denuncia el sitio o perfil en las redes donde lo viste (Facebook, Instagram) como fraude.',
      'Denuncia ante el Ministerio de Justicia o la Policía Boliviana con todas tus pruebas.'
    ],
    warning: 'Para el futuro: desconfía de precios muy bajos, verifica que el sitio tenga https:// y busca reseñas antes de comprar.'
  }
};

/* ══════════════════════════════════════
   NAVEGACIÓN SPA
══════════════════════════════════════ */
const pageTitles = {
  inicio: 'Inicio', proyecto: 'Proyecto', plataforma: 'Aprende',
  emergencias: 'Emergencias', equipo: 'Equipo', impacto: 'Impacto', planes: 'Planes'
};

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  const activeLink = document.querySelector('.nav-link[data-page="' + pageId + '"]');
  if (activeLink) activeLink.classList.add('active');

  state.currentPage = pageId;
  document.title = 'TecnoRed — ' + (pageTitles[pageId] || 'Inicio');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  if (navMenu) navMenu.classList.remove('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');

  if (pageId === 'plataforma') renderModules();
}

// Delegación global de clics de navegación
document.addEventListener('click', function(e) {
  const btn = e.target.closest('[data-page]');
  if (btn) { e.preventDefault(); navigate(btn.dataset.page); }
});

// Toggle menú móvil
document.getElementById('nav-toggle').addEventListener('click', function() {
  const menu = document.getElementById('nav-menu');
  const open = menu.classList.toggle('open');
  this.setAttribute('aria-expanded', open.toString());
});

/* ══════════════════════════════════════
   MÓDULOS — RENDER
══════════════════════════════════════ */
function calcTotalProgress() {
  const all = MODULES_GENERAL.filter(m => !m.esCelular);
  const androidMods = [{ id: 'android-1' }, { id: 'android-2' }, { id: 'android-3' }, { id: 'android-4' }];
  const completados = all.filter(m => (state.moduleProgress[m.id] || 0) >= m.steps.length).length;
  const total = all.length;
  return total > 0 ? Math.round((completados / total) * 100) : 0;
}

function updateProgressBar() {
  const pct = calcTotalProgress();
  const fill = document.getElementById('gpb-fill');
  const txt = document.getElementById('gpb-pct');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = pct + '%';
}

function renderModules() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;

  grid.innerHTML = MODULES_GENERAL.map(mod => {
    const steps = mod.esCelular ? 4 : mod.steps.length;
    const progress = state.moduleProgress[mod.id] || 0;
    const pct = mod.esCelular ? 0 : Math.round((progress / steps) * 100);
    const done = !mod.esCelular && progress >= steps;

    return `
      <article class="module-card" role="listitem"
        style="--mc-color:${mod.color}"
        tabindex="0"
        data-module="${mod.id}"
        aria-label="Módulo: ${mod.title}">
        <span class="mc-icon" aria-hidden="true">${mod.icon}</span>
        <div class="mc-title">${mod.title}</div>
        <p class="mc-desc">${mod.desc}</p>
        <div class="mc-progress-bar">
          <div class="mc-progress-fill" style="width:${pct}%;background:${mod.color}"></div>
        </div>
        <div class="mc-meta">
          <span class="mc-badge">${done ? '✅ Completado' : (mod.esCelular ? 'Elige tu teléfono' : pct + '%')}</span>
          <span>${steps} pasos</span>
        </div>
      </article>`;
  }).join('');

  grid.onclick = null;
  grid.addEventListener('click', function(e) {
    const card = e.target.closest('[data-module]');
    if (card) handleModuleClick(card.dataset.module);
  });
  grid.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-module]');
      if (card) { e.preventDefault(); handleModuleClick(card.dataset.module); }
    }
  });

  updateProgressBar();
}

function handleModuleClick(moduleId) {
  if (moduleId === 'celular') {
    openOSModal();
  } else {
    const mod = MODULES_GENERAL.find(m => m.id === moduleId);
    if (mod) openModule(mod);
  }
}

/* ══════════════════════════════════════
   MODAL OS SELECTOR (para módulo celular)
══════════════════════════════════════ */
function openOSModal() {
  const modal = document.getElementById('os-modal');
  if (modal) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeOSModal() {
  const modal = document.getElementById('os-modal');
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

document.getElementById('os-modal-close')?.addEventListener('click', closeOSModal);
document.getElementById('os-modal-overlay')?.addEventListener('click', closeOSModal);

document.getElementById('os-pick-android')?.addEventListener('click', function() {
  closeOSModal();
  const mod = {
    id: 'celular-android',
    icon: '🤖',
    title: 'Cómo usar Android',
    color: '#4CAF82',
    steps: STEPS_CELULAR_ANDROID
  };
  openModule(mod);
});

document.getElementById('os-pick-ios')?.addEventListener('click', function() {
  closeOSModal();
  const mod = {
    id: 'celular-ios',
    icon: '🍎',
    title: 'Cómo usar tu iPhone',
    color: '#555555',
    steps: STEPS_CELULAR_IOS
  };
  openModule(mod);
});

document.getElementById('os-help-toggle-btn')?.addEventListener('click', function() {
  const info = document.getElementById('os-help-info');
  if (info) {
    if (info.hidden) info.removeAttribute('hidden');
    else info.setAttribute('hidden', '');
  }
});

/* ══════════════════════════════════════
   MODAL MÓDULO
══════════════════════════════════════ */
function openModule(mod) {
  state.currentModule = mod;
  state.currentStep = state.moduleProgress[mod.id] || 0;
  if (state.currentStep >= mod.steps.length) state.currentStep = 0;

  const modal = document.getElementById('module-modal');
  document.getElementById('modal-icon').textContent = mod.icon;
  document.getElementById('modal-title').textContent = mod.title;
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  renderModalStep();
}

function renderModalStep() {
  const { currentModule: mod, currentStep: stepIdx } = state;
  if (!mod || !mod.steps[stepIdx]) return;

  const step = mod.steps[stepIdx];
  const total = mod.steps.length;
  const pct = Math.round(((stepIdx + 1) / total) * 100);

  document.getElementById('mp-fill').style.width = pct + '%';
  document.getElementById('mp-text').textContent = 'Paso ' + (stepIdx + 1) + ' de ' + total;

  document.getElementById('modal-content').innerHTML = `
    <div class="step-content">
      <div class="step-icon">${step.icon}</div>
      <h3 class="step-title">${step.title}</h3>
      <p class="step-text">${step.text}</p>
      ${step.tip ? `<div class="step-tip"><strong>Consejo:</strong> ${step.tip}</div>` : ''}
      ${step.sim ? `
        <div class="step-sim">
          <p style="font-size:0.8rem;color:var(--text-3);margin-bottom:0.5rem">— Practica aquí —</p>
          <button class="step-sim-btn" onclick="runSim(this,'${step.sim.feedback.replace(/'/g,"\\'")}')">
            ${step.sim.label}
          </button>
          <div class="sim-feedback" aria-live="polite"></div>
        </div>` : ''}
    </div>`;

  const prevBtn = document.getElementById('btn-prev-step');
  const nextBtn = document.getElementById('btn-next-step');
  if (prevBtn) prevBtn.disabled = stepIdx === 0;
  if (nextBtn) nextBtn.textContent = stepIdx === total - 1 ? '✅ Finalizar' : 'Siguiente →';
}

window.runSim = function(btn, feedback) {
  const fb = btn.parentElement.querySelector('.sim-feedback');
  if (fb) fb.textContent = feedback;
  btn.textContent = '✔ Hecho';
  btn.style.background = 'var(--accent-green)';
  btn.disabled = true;
};

function closeModule() {
  const modal = document.getElementById('module-modal');
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  state.currentModule = null;
}

function saveModuleProgress(moduleId, step) {
  state.moduleProgress[moduleId] = step;
  localStorage.setItem('tn_progress', JSON.stringify(state.moduleProgress));
}

document.getElementById('btn-next-step')?.addEventListener('click', function() {
  const mod = state.currentModule;
  if (!mod) return;
  if (state.currentStep < mod.steps.length - 1) {
    state.currentStep++;
    renderModalStep();
  } else {
    saveModuleProgress(mod.id, mod.steps.length);
    closeModule();
    showToast('🎉 ¡"' + mod.title + '" completado!');
    renderModules();
  }
});

document.getElementById('btn-prev-step')?.addEventListener('click', function() {
  if (state.currentStep > 0) { state.currentStep--; renderModalStep(); }
});

document.getElementById('modal-close')?.addEventListener('click', function() {
  if (state.currentModule) saveModuleProgress(state.currentModule.id, state.currentStep);
  closeModule();
  renderModules();
});

document.getElementById('modal-overlay')?.addEventListener('click', function() {
  if (state.currentModule) saveModuleProgress(state.currentModule.id, state.currentStep);
  closeModule();
  renderModules();
});

document.getElementById('btn-tts-modal')?.addEventListener('click', function() {
  const content = document.getElementById('modal-content');
  if (content) speak(content.innerText.slice(0, 500));
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('module-modal');
    if (modal && !modal.hidden) {
      if (state.currentModule) saveModuleProgress(state.currentModule.id, state.currentStep);
      closeModule();
      renderModules();
    }
    const osModal = document.getElementById('os-modal');
    if (osModal && !osModal.hidden) closeOSModal();
  }
});

/* ══════════════════════════════════════
   EMERGENCIAS
══════════════════════════════════════ */
function initEmergencias() {
  const grid = document.getElementById('em-grid');
  const panel = document.getElementById('em-panel');
  const panelContent = document.getElementById('em-panel-content');
  const backBtn = document.getElementById('em-back-btn');
  const ttsBtn = document.getElementById('btn-tts-em');

  if (!grid) return;

  function showEmergencia(key) {
    const em = EMERGENCIAS[key];
    if (!em) return;

    panelContent.innerHTML = `
      <div style="text-align:center;padding:1rem 0 1.5rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">${em.icon}</div>
        <h2 style="font-family:var(--font-display);font-size:1.8rem;font-weight:800;margin-bottom:0.5rem">${em.title}</h2>
        <p style="color:var(--text-2);margin-bottom:1.5rem;font-size:0.95rem">${em.intro}</p>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:0.75rem;text-align:left;max-width:560px;margin:0 auto">
          ${em.steps.map((s, i) => `
            <li style="display:flex;align-items:flex-start;gap:0.75rem;background:var(--bg-2);border-radius:12px;padding:0.85rem 1rem;font-size:0.95rem;line-height:1.55">
              <span style="background:#E74C6B;color:#fff;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.85rem;flex-shrink:0">${i + 1}</span>
              <span>${s}</span>
            </li>`).join('')}
        </ul>
        ${em.warning ? `
          <div style="background:rgba(245,166,35,0.1);border:2px solid #F5A623;border-radius:12px;padding:0.85rem 1rem;margin-top:1.25rem;font-size:0.875rem;color:var(--text-2);text-align:left;max-width:560px;margin-left:auto;margin-right:auto">
            <strong style="color:#d4880f">⚠️ Importante:</strong> ${em.warning}
          </div>` : ''}
      </div>`;

    grid.style.display = 'none';
    panel.removeAttribute('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  grid.addEventListener('click', function(e) {
    const card = e.target.closest('[data-em]');
    if (card) showEmergencia(card.dataset.em);
  });

  grid.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-em]');
      if (card) { e.preventDefault(); showEmergencia(card.dataset.em); }
    }
  });

  backBtn?.addEventListener('click', function() {
    panel.setAttribute('hidden', '');
    grid.style.display = '';
    stopTTS();
  });

  ttsBtn?.addEventListener('click', function() {
    if (panelContent) speak(panelContent.innerText.slice(0, 800));
  });
}

/* ══════════════════════════════════════
   PLANES
══════════════════════════════════════ */
document.getElementById('btn-pro-notify')?.addEventListener('click', function() {
  const input = document.getElementById('pro-email');
  const success = document.getElementById('pn-success');
  if (!input || !input.value.includes('@')) { if (input) input.focus(); return; }
  if (success) { success.removeAttribute('hidden'); success.style.display = 'block'; }
  input.value = '';
  this.disabled = true;
  this.textContent = '✅ Enviado';
});

/* ══════════════════════════════════════
   ACCESIBILIDAD — TEMA, CONTRASTE, FUENTE
══════════════════════════════════════ */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  localStorage.setItem('tn_theme', theme);
  const icon = document.getElementById('theme-icon');
  const btn = document.getElementById('btn-theme');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

function applyContrast(on) {
  state.highContrast = on;
  document.documentElement.setAttribute('data-contrast', on ? 'high' : 'normal');
  localStorage.setItem('tn_contrast', on.toString());
  const btn = document.getElementById('btn-contrast');
  if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
}

const fontSizes = ['small', 'medium', 'large', 'xlarge'];

function applyFontSize(size) {
  state.fontSize = size;
  document.documentElement.setAttribute('data-font-size', size);
  localStorage.setItem('tn_fontsize', size);
}

document.getElementById('btn-theme')?.addEventListener('click', function() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});

document.getElementById('btn-contrast')?.addEventListener('click', function() {
  applyContrast(!state.highContrast);
});

document.getElementById('btn-font-dec')?.addEventListener('click', function() {
  const idx = fontSizes.indexOf(state.fontSize);
  if (idx > 0) applyFontSize(fontSizes[idx - 1]);
});

document.getElementById('btn-font-inc')?.addEventListener('click', function() {
  const idx = fontSizes.indexOf(state.fontSize);
  if (idx < fontSizes.length - 1) applyFontSize(fontSizes[idx + 1]);
});

/* ══════════════════════════════════════
   TTS — LECTURA EN VOZ ALTA
══════════════════════════════════════ */
function speak(text) {
  if (!('speechSynthesis' in window)) {
    alert('Tu navegador no soporta lectura en voz alta. Prueba con Chrome.');
    return;
  }
  stopTTS();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'es-ES';
  utter.rate = 0.85;
  utter.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find(v => v.lang && v.lang.startsWith('es'));
  if (esVoice) utter.voice = esVoice;
  window.speechSynthesis.speak(utter);
}

function stopTTS() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

document.getElementById('btn-tts')?.addEventListener('click', function() {
  const isActive = this.getAttribute('aria-pressed') === 'true';
  if (isActive) {
    stopTTS();
    this.setAttribute('aria-pressed', 'false');
  } else {
    const page = document.getElementById('page-' + state.currentPage);
    if (page) speak(page.innerText.slice(0, 600));
    this.setAttribute('aria-pressed', 'true');
  }
});

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function showToast(text) {
  const toast = document.getElementById('progress-toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;
  toastText.textContent = text;
  toast.removeAttribute('hidden');
  setTimeout(() => toast.setAttribute('hidden', ''), 3500);
}

/* ══════════════════════════════════════
   CONTADORES ANIMADOS
══════════════════════════════════════ */
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 40);
  });
}

/* ══════════════════════════════════════
   INICIALIZACIÓN
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  // Aplicar preferencias guardadas
  applyTheme(state.theme);
  applyFontSize(state.fontSize);
  applyContrast(state.highContrast);

  // Cargar voces TTS
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {};
  }

  // Contadores hero
  animateCounters();

  // Inicializar emergencias
  initEmergencias();

  // Renderizar módulos si ya se está en esa página
  if (state.currentPage === 'plataforma') renderModules();
});
