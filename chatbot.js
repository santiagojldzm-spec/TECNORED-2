/**
 * TECNORED — chatbot.js
 * Asistente virtual de tecnología sin API key.
 * Funciona con un sistema de palabras clave + respuestas inteligentes.
 * 100% seguro para subir a GitHub.
 */

'use strict';

/* ═══════════════════════════════════════════════════════
   BASE DE CONOCIMIENTO TECNOLÓGICO
   Formato: { palabras clave } → respuesta en lenguaje sencillo
═══════════════════════════════════════════════════════ */
const BASE_CONOCIMIENTO = [

  /* ── INTERNET ── */
  {
    claves: ['internet', 'red', 'conexion', 'conexión', 'web', 'navegar', 'navegacion'],
    respuesta: `🌐 <strong>Internet</strong> es como una biblioteca gigante que está disponible en tu celular o computadora las 24 horas del día.<br/><br/>
Con Internet puedes:<br/>
• Buscar información sobre cualquier tema<br/>
• Hablar con personas de otros países<br/>
• Ver videos y escuchar música<br/>
• Hacer trámites sin salir de casa<br/><br/>
Para usarlo necesitas WiFi (la señal de tu casa) o datos móviles de tu compañía de celular. 📡`
  },

  /* ── WIFI ── */
  {
    claves: ['wifi', 'wi-fi', 'señal', 'senal', 'router', 'inalambrico', 'inalámbrico'],
    respuesta: `📶 <strong>El WiFi</strong> es una señal invisible que transmite Internet sin cables, igual que la radio transmite música por el aire.<br/><br/>
Para conectarte:<br/>
1️⃣ Ve a <em>Ajustes</em> en tu celular<br/>
2️⃣ Toca <em>WiFi</em> y actívalo<br/>
3️⃣ Elige el nombre de tu red (ejemplo: "Casa_Lopez")<br/>
4️⃣ Escribe la contraseña (está en el router, la cajita con luces)<br/>
5️⃣ ¡Listo! Ya tienes Internet 🎉`
  },

  /* ── CELULAR / TELÉFONO ── */
  {
    claves: ['celular', 'telefono', 'teléfono', 'movil', 'móvil', 'smartphone', 'android', 'iphone'],
    respuesta: `📱 <strong>El celular</strong> (o teléfono inteligente) es una pequeña computadora que cabe en tu bolsillo.<br/><br/>
Sus partes principales son:<br/>
• <strong>Pantalla táctil:</strong> la tocas con el dedo para usarla<br/>
• <strong>Botón de encendido:</strong> lo presionas para prender o apagar<br/>
• <strong>Botones de volumen:</strong> suben o bajan el sonido<br/>
• <strong>Cámara:</strong> saca fotos y videos<br/>
• <strong>Micrófono:</strong> capta tu voz en llamadas<br/><br/>
💡 Consejo: si algo no funciona, apágalo y vuélvelo a encender. ¡Eso soluciona el 80% de los problemas!`
  },

  /* ── CORREO ── */
  {
    claves: ['correo', 'email', 'gmail', 'mail', 'electronico', 'electrónico', 'mensaje correo'],
    respuesta: `✉️ <strong>El correo electrónico (email)</strong> es como una carta que llega al instante a cualquier parte del mundo.<br/><br/>
Para crear uno en Gmail (el más popular):<br/>
1️⃣ Abre el navegador y entra a <em>gmail.com</em><br/>
2️⃣ Toca <em>"Crear cuenta"</em><br/>
3️⃣ Escribe tu nombre y elige un nombre de usuario (ej: juan.garcia@gmail.com)<br/>
4️⃣ Crea una contraseña segura con letras, números y símbolos<br/>
5️⃣ Escribe tu número de celular para recuperar la cuenta<br/><br/>
📌 El correo es gratis y lo usarás para registrarte en casi todas las aplicaciones.`
  },

  /* ── WHATSAPP ── */
  {
    claves: ['whatsapp', 'wsp', 'mensajes', 'chat', 'chatear', 'mensaje'],
    respuesta: `💬 <strong>WhatsApp</strong> es la aplicación de mensajes más usada en el mundo. Es <strong>completamente gratis</strong> para enviar mensajes y hacer llamadas usando Internet.<br/><br/>
¿Qué puedes hacer?<br/>
• Enviar mensajes de texto, fotos y videos<br/>
• Hacer llamadas y videollamadas gratis<br/>
• Crear grupos familiares o de trabajo<br/>
• Enviar audios de voz<br/><br/>
📥 Para descargarla, busca <em>"WhatsApp"</em> en la Play Store (Android) o App Store (iPhone) e instálala gratis.`
  },

  /* ── VIDEOLLAMADA ── */
  {
    claves: ['videollamada', 'video llamada', 'videochat', 'zoom', 'meet', 'ver por celular', 'llamada video'],
    respuesta: `📹 <strong>Una videollamada</strong> te permite hablar cara a cara con alguien aunque esté en otra ciudad o país.<br/><br/>
La forma más fácil es por <strong>WhatsApp</strong>:<br/>
1️⃣ Abre WhatsApp<br/>
2️⃣ Busca el nombre de la persona<br/>
3️⃣ Toca el ícono de cámara 🎥 que aparece arriba a la derecha<br/>
4️⃣ ¡Espera que conteste y ya se pueden ver!<br/><br/>
💡 Consejo: busca un lugar con buena luz en tu cara y conéctate a WiFi para que no se corte.`
  },

  /* ── CONTRASEÑA ── */
  {
    claves: ['contraseña', 'contrasena', 'password', 'clave', 'pin', 'segura', 'contraseñas'],
    respuesta: `🔐 <strong>Una contraseña segura</strong> protege tus cuentas como si fuera la llave de tu casa.<br/><br/>
Una buena contraseña tiene:<br/>
✅ Al menos 8 caracteres<br/>
✅ Letras mayúsculas y minúsculas (Aa)<br/>
✅ Números (123)<br/>
✅ Símbolos (! @ # $)<br/><br/>
<strong>Ejemplo bueno:</strong> MiGato2024!<br/>
<strong>Ejemplos malos:</strong> 123456 / password / tu nombre<br/><br/>
⚠️ <strong>Nunca</strong> compartas tu contraseña con nadie, ni con familiares. Guárdala en un papel en lugar seguro.`
  },

  /* ── ESTAFAS / FRAUDES ── */
  {
    claves: ['estafa', 'fraude', 'engaño', 'engano', 'robo', 'phishing', 'premio', 'virus', 'hacker', 'estafar', 'evitar estafas'],
    respuesta: `🛡️ <strong>Las estafas digitales</strong> son engaños para robarte dinero o datos personales.<br/><br/>
🚨 <strong>Señales de alerta:</strong><br/>
• "¡GANASTE UN PREMIO!" → es MENTIRA si no participaste en nada<br/>
• Te piden tu contraseña por mensaje → NUNCA la des<br/>
• Links raros tipo "banco-seguro123.com" → NO hagas clic<br/>
• Te llaman diciendo ser del banco → CUELGA y llama tú al número oficial<br/><br/>
✅ <strong>Regla de oro:</strong> Si algo parece demasiado bueno para ser verdad, probablemente es una trampa. Cuando tengas dudas, consulta con alguien de confianza antes de hacer algo.`
  },

  /* ── GOOGLE ── */
  {
    claves: ['google', 'buscador', 'buscar', 'busqueda', 'búsqueda', 'chrome'],
    respuesta: `🔍 <strong>Google</strong> es el buscador más grande del mundo. Es como preguntarle a alguien que sabe de todo.<br/><br/>
Para buscar algo:<br/>
1️⃣ Abre el navegador de tu celular (Chrome o cualquier otro)<br/>
2️⃣ Escribe tu pregunta en la barra de arriba<br/>
3️⃣ Toca el botón de buscar o presiona Enter<br/>
4️⃣ Aparecerán muchos resultados, lee los primeros<br/><br/>
💡 Tip: sé específico. En vez de escribir "receta", escribe "receta de arroz con leche fácil". ¡Obtendrás mejores resultados!`
  },

  /* ── OFFICE ── */
  {
    claves: ['office', 'word', 'excel', 'powerpoint', 'microsoft', 'documento', 'planilla', 'presentacion', 'presentación'],
    respuesta: `💼 <strong>Microsoft Office</strong> es un conjunto de programas para trabajar con documentos en la computadora.<br/><br/>
Los más usados son:<br/>
📝 <strong>Word:</strong> para escribir cartas, documentos y textos. Como una hoja de papel pero en la computadora.<br/>
📊 <strong>Excel:</strong> para hacer tablas y cálculos con números. Muy útil para llevar cuentas.<br/>
📽️ <strong>PowerPoint:</strong> para hacer presentaciones con diapositivas. Ideal para exponer temas.<br/><br/>
💡 Si no tienes Office, puedes usar <strong>Google Docs</strong> (docs.google.com) que es completamente gratis y funciona igual.`
  },

  /* ── APLICACIONES / APPS ── */
  {
    claves: ['app', 'aplicacion', 'aplicación', 'aplicaciones', 'descargar', 'instalar', 'play store', 'tienda'],
    respuesta: `📲 <strong>Las aplicaciones (apps)</strong> son programas que instalas en tu celular para hacer cosas específicas.<br/><br/>
Apps muy útiles para empezar:<br/>
💬 <strong>WhatsApp</strong> → mensajes y llamadas gratis<br/>
🗺️ <strong>Google Maps</strong> → para no perderte nunca<br/>
▶️ <strong>YouTube</strong> → videos sobre cualquier tema<br/>
📰 <strong>Facebook</strong> → mantenerse en contacto con familia<br/>
🎵 <strong>Spotify</strong> → música gratis<br/><br/>
📥 Para descargar apps, abre la <strong>Play Store</strong> (ícono de triángulo de colores) en tu celular Android, busca el nombre de la app y toca "Instalar".`
  },

  /* ── FACEBOOK / REDES SOCIALES ── */
  {
    claves: ['facebook', 'red social', 'redes sociales', 'instagram', 'tiktok', 'twitter', 'social'],
    respuesta: `👥 <strong>Las redes sociales</strong> son plataformas para conectarte con personas y compartir cosas.<br/><br/>
Las más populares:<br/>
📘 <strong>Facebook:</strong> para estar en contacto con amigos y familia, ver noticias<br/>
📸 <strong>Instagram:</strong> para compartir fotos y videos<br/>
🎵 <strong>TikTok:</strong> videos cortos y entretenidos<br/><br/>
⚠️ <strong>Consejos de seguridad:</strong><br/>
• No aceptes solicitudes de amistad de desconocidos<br/>
• No compartas tu dirección ni información personal<br/>
• Configura tu perfil como "privado" para que solo tus amigos te vean`
  },

  /* ── YOUTUBE ── */
  {
    claves: ['youtube', 'video', 'videos', 'ver videos', 'canal'],
    respuesta: `▶️ <strong>YouTube</strong> es la plataforma de videos más grande del mundo y es <strong>completamente gratis</strong>.<br/><br/>
Puedes ver:<br/>
🎓 Tutoriales para aprender cualquier cosa<br/>
🎵 Música y conciertos<br/>
📺 Noticias y documentales<br/>
😄 Videos de humor y entretenimiento<br/>
🍳 Recetas de cocina<br/><br/>
Para buscar un video, toca el ícono de lupa 🔍 y escribe lo que quieres ver. ¡Es gratis y no necesitas registrarte para ver videos!`
  },

  /* ── GOOGLE MAPS ── */
  {
    claves: ['maps', 'mapa', 'ubicacion', 'ubicación', 'perdido', 'direccion', 'dirección', 'gps', 'como llegar'],
    respuesta: `🗺️ <strong>Google Maps</strong> es como un mapa que siempre está actualizado y te habla para guiarte.<br/><br/>
Para llegar a un lugar:<br/>
1️⃣ Abre Google Maps en tu celular<br/>
2️⃣ Toca la barra de búsqueda y escribe a dónde quieres ir<br/>
3️⃣ Toca <em>"Cómo llegar"</em><br/>
4️⃣ Elige si vas en auto 🚗, bus 🚌 o caminando 🚶<br/>
5️⃣ Toca "Iniciar" y sigue las instrucciones de voz<br/><br/>
💡 Necesitas Internet para usarlo, o puedes descargar el mapa de tu ciudad para usarlo sin conexión.`
  },

  /* ── DATOS MÓVILES ── */
  {
    claves: ['datos', 'datos moviles', 'datos móviles', 'megas', 'plan', 'saldo', 'recargar', 'tigo', 'entel', 'viva'],
    respuesta: `📡 <strong>Los datos móviles</strong> son tu conexión a Internet cuando no tienes WiFi. Los provee tu compañía de celular.<br/><br/>
En Bolivia puedes comprar datos con:<br/>
📱 <strong>Tigo, Entel o Viva</strong> → busca sus apps o llama a su atención al cliente<br/><br/>
Consejos para ahorrar datos:<br/>
✅ Conéctate a WiFi siempre que puedas<br/>
✅ Descarga videos en casa para verlos después<br/>
✅ Desactiva las apps que actualizan solas<br/>
✅ Ve a Ajustes → Uso de datos para ver cuánto gastas`
  },

  /* ── COMPUTADORA ── */
  {
    claves: ['computadora', 'computador', 'laptop', 'ordenador', 'pc', 'computacion', 'computación'],
    respuesta: `💻 <strong>La computadora</strong> es una máquina para trabajar, estudiar y conectarse a Internet desde un lugar fijo o cargándola contigo (laptop).<br/><br/>
Partes principales:<br/>
🖥️ <strong>Pantalla:</strong> donde ves todo lo que haces<br/>
⌨️ <strong>Teclado:</strong> para escribir<br/>
🖱️ <strong>Mouse:</strong> para mover el puntero y hacer clic<br/>
🔌 <strong>CPU o torre:</strong> el cerebro de la computadora<br/><br/>
💡 Si nunca usaste una, empieza con los módulos de TecnoRed. ¡Tu celular ya es una pequeña computadora!`
  },

  /* ── NUBE / CLOUD ── */
  {
    claves: ['nube', 'cloud', 'google drive', 'almacenamiento nube', 'guardar nube', 'fotos nube'],
    respuesta: `☁️ <strong>La nube</strong> es un espacio en Internet donde puedes guardar tus fotos, documentos y archivos de forma segura, sin ocupar espacio en tu celular.<br/><br/>
Servicios gratuitos:<br/>
📂 <strong>Google Drive:</strong> 15GB gratis para fotos y documentos<br/>
📸 <strong>Google Fotos:</strong> guarda todas tus fotos automáticamente<br/><br/>
Ventaja: si pierdes o te roban el celular, tus fotos estarán a salvo en la nube. Para acceder, entra con tu cuenta de Gmail.`
  },

  /* ── ANTIVIRUS / SEGURIDAD ── */
  {
    claves: ['antivirus', 'seguridad', 'proteger', 'proteccion', 'protección', 'virus celular', 'hackear', 'hackeo'],
    respuesta: `🛡️ <strong>Proteger tu celular</strong> es muy importante. Aquí te digo cómo:<br/><br/>
✅ Pon un <strong>pin o contraseña</strong> de pantalla<br/>
✅ Descarga apps solo de la <strong>Play Store</strong> oficial<br/>
✅ No hagas clic en links raros que te mandan por WhatsApp<br/>
✅ Actualiza el celular cuando te lo pida<br/>
✅ Si quieres un antivirus gratis, busca <strong>"Avast"</strong> o <strong>"AVG"</strong> en la Play Store<br/><br/>
⚠️ Si alguien te llama diciendo que "tu celular tiene un virus y necesitas dar tus datos", es una ESTAFA. Cuelga inmediatamente.`
  },

  /* ── BLUETOOTH ── */
  {
    claves: ['bluetooth', 'auriculares', 'audífonos', 'audifonos', 'conectar altavoz', 'parlante'],
    respuesta: `📡 <strong>Bluetooth</strong> es una tecnología que conecta aparatos sin cables en distancias cortas, como tu celular con auriculares o parlantes.<br/><br/>
Para activarlo:<br/>
1️⃣ Ve a <em>Ajustes</em> en tu celular<br/>
2️⃣ Busca <em>Bluetooth</em> y actívalo<br/>
3️⃣ Enciende el aparato que quieres conectar (auriculares, parlante)<br/>
4️⃣ Busca su nombre en la lista y tócalo<br/>
5️⃣ ¡Listos! Ya están conectados 🎵`
  },

  /* ── CÁMARA / FOTOS ── */
  {
    claves: ['camara', 'cámara', 'foto', 'fotos', 'fotografía', 'fotografia', 'selfie', 'imagen'],
    respuesta: `📸 <strong>La cámara de tu celular</strong> puede sacar fotos y videos de muy buena calidad.<br/><br/>
Consejos para mejores fotos:<br/>
☀️ Busca buena luz natural (junto a una ventana)<br/>
🤚 Mantén el celular firme y sin mover<br/>
🔍 Toca la pantalla donde quieres enfocar<br/>
📐 Usa la cuadrícula para centrar la foto<br/><br/>
Para guardar tus fotos en la nube automáticamente, activa <strong>Google Fotos</strong> y nunca perderás ninguna imagen, aunque cambies de celular.`
  },

  /* ── QUÉ ES TecnoRed ── */
  {
    claves: ['tecnored', 'que es tecnored', 'qué es tecnored', 'plataforma', 'este sitio', 'esta web', 'este proyecto'],
    respuesta: `🌟 <strong>TecnoRed</strong> es una plataforma educativa gratuita creada para ayudar a personas de zonas rurales y con poca experiencia en tecnología a aprender a usar herramientas digitales.<br/><br/>
Fue desarrollada por <strong>Santiago Jacobs</strong> del <em>Colegio San Agustín, Bolivia</em> para el Concurso Iberoamericano INFOMATRIX / SOLACYT.<br/><br/>
Aquí puedes:<br/>
📱 Aprender a usar el celular<br/>
🌐 Navegar por Internet con seguridad<br/>
✉️ Crear tu primer correo<br/>
🛡️ Protegerte de estafas digitales<br/><br/>
¡Todo gratis, en español y sin registro! 🎉`
  },

  /* ── CÓMO USAR TECNORED ── */
  {
    claves: ['como usar', 'cómo usar', 'empezar', 'comenzar', 'primer paso', 'ayuda', 'tutorial'],
    respuesta: `🚀 <strong>Empezar en TecnoRed es muy fácil</strong>:<br/><br/>
1️⃣ Ve a la sección <em>"Aprende"</em> en el menú de arriba<br/>
2️⃣ Elige el módulo que más necesitas (celular, correo, Internet...)<br/>
3️⃣ Sigue los pasos uno a uno, sin prisa<br/>
4️⃣ Toca el botón 🔊 si prefieres escuchar en lugar de leer<br/>
5️⃣ Practica con las simulaciones interactivas<br/><br/>
Si estás empezando desde cero, te recomiendo ir a la 🌾 <strong>Zona Rural</strong> donde todo está explicado de forma muy simple con botones grandes.`
  },

  /* ── EMERGENCIAS ── */
  {
    claves: ['me robaron', 'robo celular', 'perdi el celular', 'perdí el celular', 'celular robado', 'olvidé contraseña', 'no recuerdo contraseña'],
    respuesta: `🚨 <strong>¡No te preocupes, hay solución!</strong><br/><br/>
Ve a la sección <em>🌾 Zona Rural</em> de este sitio y busca el apartado <strong>"Emergencias Digitales"</strong>. Ahí encontrarás pasos claros para:<br/><br/>
📵 Celular robado o perdido<br/>
🔐 Contraseña olvidada<br/>
🚨 Posible estafa<br/>
🦠 Virus en el celular<br/>
🔒 Cuenta bloqueada<br/><br/>
Cada emergencia tiene instrucciones paso a paso con un botón de voz para escucharlas. ¡Puedes con esto! 💪`
  },

  /* ── PDF ── */
  {
    claves: ['pdf', 'archivo pdf', 'documento pdf', 'abrir pdf'],
    respuesta: `📄 <strong>Un PDF</strong> es un tipo de archivo de documento que se ve igual en cualquier dispositivo o computadora.<br/><br/>
Para abrir un PDF en tu celular:<br/>
• Si te lo mandan por WhatsApp, solo tócalo y se abre solo<br/>
• También puedes descargarlo y abrirlo con la app <strong>"Adobe Acrobat Reader"</strong> (gratis en Play Store)<br/>
• En la mayoría de celulares Android, los PDF se abren directamente con Google Drive<br/><br/>
💡 Los documentos del gobierno, facturas y certificados suelen venir en formato PDF.`
  },

  /* ── QR ── */
  {
    claves: ['qr', 'codigo qr', 'código qr', 'escanear qr', 'lector qr'],
    respuesta: `📷 <strong>El código QR</strong> es ese cuadradito con puntitos negros que ves en tiendas, restaurantes y documentos.<br/><br/>
Para escanearlo con tu celular:<br/>
1️⃣ Abre la cámara de tu celular<br/>
2️⃣ Apúntala al código QR<br/>
3️⃣ Aparecerá una notificación con un link<br/>
4️⃣ Tócala para abrirla<br/><br/>
Si tu cámara no lo detecta, descarga la app <strong>"Google Lens"</strong> o <strong>"QR Scanner"</strong> gratis en la Play Store.<br/><br/>
⚠️ Solo escanea códigos QR de lugares y personas de confianza.`
  },

  /* ── AHORRAR BATERÍA ── */
  {
    claves: ['bateria', 'batería', 'carga', 'cargar celular', 'dura poco', 'se acaba', 'se descarga'],
    respuesta: `🔋 <strong>Para que tu batería dure más:</strong><br/><br/>
✅ Baja el brillo de la pantalla<br/>
✅ Activa el "Modo ahorro de energía" en Ajustes<br/>
✅ Apaga el WiFi y Bluetooth cuando no los uses<br/>
✅ Cierra las apps que no estás usando<br/>
✅ Evita cargar el celular toda la noche<br/><br/>
💡 Lo ideal es cargar tu celular cuando llega al 20% y desconectarlo cuando llega al 100%. Esto alarga la vida de la batería.`
  },

  /* ── LLAMADAS ── */
  {
    claves: ['llamada', 'llamar', 'llamadas', 'como llamo', 'cómo llamo', 'marcar', 'numero', 'número'],
    respuesta: `📞 <strong>Para hacer una llamada con tu celular:</strong><br/><br/>
1️⃣ Busca el ícono verde del teléfono en tu celular y tócalo<br/>
2️⃣ Escribe el número al que quieres llamar<br/>
3️⃣ Toca el botón verde para llamar 📞<br/>
4️⃣ Habla cuando la persona conteste<br/>
5️⃣ Cuando termines, toca el botón rojo para colgar 🔴<br/><br/>
💡 También puedes ir a <em>Contactos</em> y buscar el nombre de la persona para llamar más fácil, sin tener que recordar el número.`
  },

  /* ── ACTUALIZACIONES ── */
  {
    claves: ['actualizar', 'actualización', 'actualizacion', 'update', 'version nueva', 'versión nueva'],
    respuesta: `🔄 <strong>Actualizar tu celular o aplicaciones</strong> es muy importante porque:<br/><br/>
✅ Corrige problemas y errores<br/>
✅ Hace que todo funcione más rápido<br/>
✅ Protege tu celular de virus nuevos<br/>
✅ Agrega funciones nuevas<br/><br/>
Para actualizar las apps:<br/>
1️⃣ Abre Play Store<br/>
2️⃣ Toca tu foto de perfil (arriba a la derecha)<br/>
3️⃣ Toca <em>"Gestionar apps y dispositivo"</em><br/>
4️⃣ Toca <em>"Actualizar todo"</em><br/><br/>
💡 Si ves que el celular te pide actualizar el sistema, acepta. ¡Es seguro y gratuito!`
  }
];

/* ═══════════════════════════════════════════════════════
   RESPUESTAS DE FALLBACK (cuando no entiende la pregunta)
═══════════════════════════════════════════════════════ */
const FALLBACKS = [
  `🤔 No estoy seguro de entender tu pregunta, pero puedo ayudarte con temas de tecnología como:<br/>
  📱 Celulares · 🌐 Internet · ✉️ Correo · 💬 WhatsApp · 🛡️ Seguridad · 💻 Computadoras<br/><br/>
  ¿Puedes reformular tu pregunta? Por ejemplo: <em>"¿Qué es el WiFi?"</em>`,

  `🧐 Esa pregunta está un poco fuera de mi área. Soy especialista en tecnología básica.<br/><br/>
  Intenta preguntarme algo como:<br/>
  • <em>"¿Cómo creo un correo electrónico?"</em><br/>
  • <em>"¿Qué es WhatsApp?"</em><br/>
  • <em>"¿Cómo evito estafas?"</em>`,

  `💭 No encontré información sobre eso en mi base de conocimientos.<br/><br/>
  Puedo ayudarte con:<br/>
  🌐 Internet y WiFi · 📱 Celulares · ✉️ Correo electrónico<br/>
  💬 WhatsApp · 🛡️ Seguridad digital · 📲 Aplicaciones<br/><br/>
  ¡Prueba con una de esas preguntas!`
];

/* ═══════════════════════════════════════════════════════
   SALUDOS Y RESPUESTAS SOCIALES
═══════════════════════════════════════════════════════ */
const SALUDOS = {
  claves: ['hola', 'buenos dias', 'buenos días', 'buenas tardes', 'buenas noches', 'buenas', 'hey', 'hi', 'saludos', 'como estas', 'cómo estás'],
  respuesta: `¡Hola! 👋 Me alegra que estés aquí. Soy el asistente de <strong>TecnoRed</strong> y estoy aquí para ayudarte con cualquier duda sobre tecnología.<br/><br/>
¿Qué quieres aprender hoy? Puedes preguntarme sobre celulares, Internet, correo, aplicaciones, seguridad y mucho más. 😊`
};

const GRACIAS = {
  claves: ['gracias', 'muchas gracias', 'thank you', 'thanks', 'genial', 'perfecto', 'excelente', 'muy bien', 'me ayudaste', 'te entendí'],
  respuesta: `🌟 ¡Me alegra haberte ayudado! Para eso estoy.<br/><br/>
Si tienes más preguntas sobre tecnología, aquí estaré. ¡Recuerda que aprender tecnología es un proceso, no te desesperes si algo no sale a la primera! 💪`
};

const DESPEDIDAS = {
  claves: ['adios', 'adiós', 'hasta luego', 'chao', 'chau', 'bye', 'nos vemos'],
  respuesta: `👋 ¡Hasta luego! Fue un gusto ayudarte.<br/><br/>
Recuerda que puedes volver cuando quieras con más preguntas. ¡Sigue aprendiendo! 🚀`
};

/* ═══════════════════════════════════════════════════════
   MOTOR DE BÚSQUEDA DE RESPUESTAS
═══════════════════════════════════════════════════════ */
let fallbackIndex = 0;

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quitar tildes
    .replace(/[¿?¡!.,;:]/g, '')      // quitar signos
    .trim();
}

function buscarRespuesta(pregunta) {
  const q = normalizar(pregunta);

  // Verificar saludos
  if (SALUDOS.claves.some(c => q.includes(c))) return SALUDOS.respuesta;

  // Verificar gracias
  if (GRACIAS.claves.some(c => q.includes(c))) return GRACIAS.respuesta;

  // Verificar despedidas
  if (DESPEDIDAS.claves.some(c => q.includes(c))) return DESPEDIDAS.respuesta;

  // Buscar en base de conocimiento (coincidencia por puntuación)
  let mejorPuntaje = 0;
  let mejorRespuesta = null;

  for (const entrada of BASE_CONOCIMIENTO) {
    let puntaje = 0;
    for (const clave of entrada.claves) {
      if (q.includes(normalizar(clave))) {
        // Mayor peso a coincidencias más largas
        puntaje += clave.length;
      }
    }
    if (puntaje > mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejorRespuesta = entrada.respuesta;
    }
  }

  if (mejorRespuesta && mejorPuntaje > 2) return mejorRespuesta;

  // Fallback rotativo
  const fb = FALLBACKS[fallbackIndex % FALLBACKS.length];
  fallbackIndex++;
  return fb;
}

/* ═══════════════════════════════════════════════════════
   INTERFAZ DEL CHAT
═══════════════════════════════════════════════════════ */
const chatFab       = document.getElementById('chat-fab');
const chatWindow    = document.getElementById('chat-window');
const chatClose     = document.getElementById('chat-close');
const chatClear     = document.getElementById('chat-clear');
const chatMessages  = document.getElementById('chat-messages');
const chatInput     = document.getElementById('chat-input');
const chatSend      = document.getElementById('chat-send');
const chatBadge     = document.getElementById('chat-fab-badge');
const chatFabIcon   = document.getElementById('chat-fab-icon');
const chatSuggest   = document.getElementById('chat-suggestions');

let chatOpen = false;
let msgCount = 0;

/* ─── Abrir / cerrar chat ─── */
function toggleChat(open) {
  chatOpen = open;
  if (open) {
    chatWindow.removeAttribute('hidden');
    chatBadge.style.display = 'none';
    chatFabIcon.textContent = '✕';
    chatInput.focus();
    scrollToBottom();
  } else {
    chatWindow.setAttribute('hidden', '');
    chatFabIcon.textContent = '💬';
  }
}

chatFab.addEventListener('click', () => toggleChat(!chatOpen));
chatClose.addEventListener('click', () => toggleChat(false));

/* ─── Limpiar chat ─── */
chatClear.addEventListener('click', () => {
  chatMessages.innerHTML = `
    <div class="chat-msg bot">
      <div class="chat-bubble">🗑️ Chat limpiado. ¿En qué más puedo ayudarte?</div>
      <span class="chat-time">${getTime()}</span>
    </div>`;
  chatSuggest.style.display = 'flex';
  msgCount = 0;
});

/* ─── Sugerencias rápidas ─── */
chatSuggest.addEventListener('click', e => {
  const btn = e.target.closest('.chat-suggestion');
  if (btn) {
    sendMessage(btn.dataset.q);
    chatSuggest.style.display = 'none';
  }
});

/* ─── Enviar mensaje ─── */
function sendMessage(texto) {
  const msg = (texto || chatInput.value).trim();
  if (!msg) return;

  chatInput.value = '';
  chatSuggest.style.display = 'none';
  msgCount++;

  // Mensaje del usuario
  appendMsg('user', msg);

  // Indicador "escribiendo..."
  const typingId = 'typing-' + Date.now();
  appendTyping(typingId);

  // Simular tiempo de respuesta (realismo)
  const delay = 400 + Math.random() * 600;
  setTimeout(() => {
    removeTyping(typingId);
    const respuesta = buscarRespuesta(msg);
    appendMsg('bot', respuesta);
    scrollToBottom();

    // Mostrar badge si el chat está cerrado
    if (!chatOpen) {
      chatBadge.style.display = 'flex';
      chatBadge.textContent = '1';
    }
  }, delay);

  scrollToBottom();
}

chatSend.addEventListener('click', () => sendMessage());
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendMessage();
});

/* ─── Helpers ─── */
function getTime() {
  const now = new Date();
  return now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
}

function appendMsg(tipo, html) {
  const div = document.createElement('div');
  div.className = `chat-msg ${tipo}`;
  div.innerHTML = `
    <div class="chat-bubble">${html}</div>
    <span class="chat-time">${getTime()}</span>
  `;
  chatMessages.appendChild(div);
  scrollToBottom();
}

function appendTyping(id) {
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.id = id;
  div.innerHTML = `
    <div class="chat-bubble chat-typing">
      <span></span><span></span><span></span>
    </div>`;
  chatMessages.appendChild(div);
  scrollToBottom();
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

/* ─── Mostrar badge al cargar ─── */
setTimeout(() => {
  if (!chatOpen) {
    chatBadge.style.display = 'flex';
  }
}, 3000);
