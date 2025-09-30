import type { Messages } from "./messages";

const es: Messages = {
  app: {
    title: "Cuestionario de Protección de Privacidad",
    description:
      "¡Aprende cómo mantener tu información personal segura en línea! ¡Realiza nuestro divertido cuestionario y conviértete en un superhéroe de la privacidad!",
  },
  homepage: {
    whatYouLearn: "Lo que aprenderás",
    learningDescription:
      "Este cuestionario te enseñará habilidades importantes para mantenerte seguro en línea",
    passwordSafety: {
      title: "Seguridad de Contraseñas",
      description: "Aprende cómo crear contraseñas seguras y mantenerlas en secreto",
    },
    personalInfo: {
      title: "Información Personal",
      description: "Comprende qué información mantener privada",
    },
    safeWebsites: {
      title: "Sitios Web Seguros",
      description: "Reconoce sitios web confiables y evita los peligrosos",
    },
    smartSharing: {
      title: "Compartir Inteligente",
      description: "Saber cuándo y cómo compartir información de forma segura",
    },
    quizInfo: {
      questions: "12 Preguntas",
      time: "Aproximadamente 10-15 minutos",
      explanation:
        "¡Cada pregunta te enseña algo nuevo sobre cómo mantenerte seguro en línea. Obtendrás explicaciones útiles para cada respuesta!",
    },
    startButton: "¡Comenzar el Cuestionario!",
    start: {
      title: "¿Quieres Reiniciar?",
      description:
        "Ya has comenzado el cuestionario. ¿Quieres reiniciar o continuar desde donde lo dejaste?",
      continue: "Continuar",
      restart: "Reiniciar",
    },
  },
  footer: {
    madeBy: "Hecho por Kethan Vegunta, Ekansh Samanta, Ben Archbold",
  },
  quiz: {
    home: "Inicio",
    back: "Atrás",
    question: "Pregunta",
    progress: "Progreso",
    complete: "Completado",

    questionNotFound: "Pregunta no encontrada",
    goBack: "Volver al inicio",
    nextQuestion: "Siguiente Pregunta",
    seeResults: "Ver Resultados",
    questions: {
      "1": {
        question: "¿Qué información NUNCA debes compartir en línea con desconocidos?",
        description:
          "Piensa en qué información podría ayudar a alguien a encontrarte o hacerse pasar por ti.",
        icon: "🔐",
        options: {
          a: {
            text: "Tu color favorito",
            isCorrect: false,
            explanation:
              "¡Tu color favorito es seguro de compartir! No puede usarse para encontrarte ni hacerte daño.",
          },
          b: {
            text: "Tu nombre completo, dirección y número de teléfono",
            isCorrect: true,
            explanation:
              "¡Excelente! Esta información personal solo debe compartirse con adultos de confianza como padres y maestros.",
          },
          c: {
            text: "Los juegos que te gusta jugar",
            isCorrect: false,
            explanation:
              "Hablar de los juegos que te gustan suele ser seguro y puede ayudarte a hacer amigos con intereses similares.",
          },
        },
        warningDemo: {
          title: "Peligro: compartir información personal",
          description:
            "Cuando compartes tu nombre real, dirección o número de teléfono en línea, los desconocidos pueden usar esa información para encontrarte en la vida real.",
          consequence:
            "¡Alguien podría presentarse en tu casa, llamar a tu familia o incluso robar tu identidad!",
        },
      },
      "2": {
        question:
          "Quieres crear una contraseña para tu nueva cuenta de juego. ¿Cuál es la más segura?",
        description: "Una contraseña fuerte protege tu cuenta de hackers que intentan adivinarla.",
        icon: "🔑",
        options: {
          a: {
            text: "password123",
            isCorrect: false,
            explanation:
              "¡Es demasiado fácil de adivinar! Los hackers prueban primero contraseñas comunes como esta.",
          },
          b: {
            text: "MiPerro$SeLlama2024!",
            isCorrect: true,
            explanation:
              "¡Perfecta! Es larga, mezcla distintos tipos de caracteres y es difícil de adivinar pero fácil de recordar para ti.",
          },
          c: {
            text: "12345",
            isCorrect: false,
            explanation:
              "¡Es de las contraseñas más comunes! A un hacker le tomaría menos de un segundo adivinarla.",
          },
        },
        warningDemo: {
          title: "Peligro de contraseñas débiles",
          description:
            "Las contraseñas débiles pueden ser adivinadas por hackers en segundos usando programas especiales.",
          consequence:
            "¡Alguien podría robar tu cuenta, borrar tu progreso o usar tu cuenta para molestar a otros!",
        },
      },
      "3": {
        question:
          "Un sitio web pide la tarjeta de crédito de tus padres para obtener juegos “gratis”. ¿Qué debes hacer?",
        description:
          "A veces, sitios que parecen gratis en realidad quieren engañarte para gastar dinero.",
        icon: "💳",
        options: {
          a: {
            text: "Preguntar primero a tus padres antes de ingresar cualquier información de pago",
            isCorrect: true,
            explanation:
              "¡Elección inteligente! Siempre pregunta a un adulto de confianza antes de dar información de pago, incluso para cosas “gratis”.",
          },
          b: {
            text: "Ingresar la información rápido para conseguir los juegos gratis",
            isCorrect: false,
            explanation:
              "¡Podría ser muy peligroso! El sitio podría cobrar dinero o robar la información de la tarjeta.",
          },
          c: {
            text: "Inventar números de tarjeta de crédito",
            isCorrect: false,
            explanation:
              "Inventar datos es deshonesto, y muchos sitios pueden detectar números falsos de todos modos.",
          },
        },
        warningDemo: {
          title: "Alerta de estafa con tarjeta",
          description:
            "Muchos sitios “gratis” son estafas que cobran la tarjeta de tus padres o roban la información.",
          consequence:
            "¡Tu familia podría perder dinero o los delincuentes podrían usar la tarjeta robada para comprar cosas!",
        },
      },
      "4": {
        question:
          "Recibes un mensaje de alguien que dice ser tu amigo, pero algo en su forma de escribir se ve diferente. ¿Qué deberías hacer?",
        description: "A veces los hackers toman cuentas y se hacen pasar por personas que conoces.",
        icon: "👥",
        options: {
          a: {
            text: "Hacer una pregunta que solo tu amigo real sabría",
            isCorrect: true,
            explanation:
              "¡Buen pensamiento! Es una forma inteligente de verificar si realmente es tu amigo o alguien que se hace pasar por él.",
          },
          b: {
            text: "Enviar de inmediato la información personal que te pide",
            isCorrect: false,
            explanation:
              "¡Podría ser peligroso! Aunque parezca tu amigo, primero debes verificar que realmente lo sea.",
          },
          c: {
            text: "Ignorar por completo el mensaje",
            isCorrect: false,
            explanation:
              "Ser cauteloso está bien, pero podría ser tu amigo quien necesita ayuda. Es mejor verificar primero.",
          },
        },
        warningDemo: {
          title: "Advertencia de suplantación de cuenta",
          description:
            "Los hackers a veces roban cuentas y se hacen pasar por tus amigos para engañarte y que compartas información.",
          consequence:
            "¡Podrías dar información personal a un desconocido o podrían engañarte para que descargues software dañino!",
        },
      },
      "5": {
        question:
          "Ves una ventana emergente que dice: “¡Has ganado $1000! ¡Haz clic aquí para reclamar tu premio!”. ¿Qué debes hacer?",
        description:
          "Pop-ups como este suelen ser trucos para que hagas clic en enlaces peligrosos.",
        icon: "🚨",
        options: {
          a: {
            text: "Hacer clic de inmediato para obtener el dinero",
            isCorrect: false,
            explanation:
              "¡Definitivamente es una estafa! Los premios reales no funcionan así y hacer clic podría descargar software dañino.",
          },
          b: {
            text: "Cerrar la ventana sin hacer clic y avisar a un adulto",
            isCorrect: true,
            explanation:
              "¡Perfecto! Es exactamente lo que debes hacer. Estas ventanas siempre son falsas y buscan engañarte.",
          },
          c: {
            text: "Compartir el enlace con tus amigos para que ellos también ganen",
            isCorrect: false,
            explanation:
              "¡Difundirías el enlace peligroso a tus amigos! Nunca compartas pop-ups o enlaces sospechosos.",
          },
        },
        warningDemo: {
          title: "Estafa de premio falso",
          description:
            "Estas ventanas están diseñadas para hacerte clic en enlaces maliciosos o descargar software dañino.",
          consequence:
            "¡Tu computadora podría infectarse con virus o los estafadores podrían robar la información de tu familia!",
        },
      },
      "6": {
        question: "¿Cuál de estas es la forma más segura de descargar un juego nuevo?",
        description: "No todos los sitios web son seguros para descargar juegos y aplicaciones.",
        icon: "📱",
        options: {
          a: {
            text: "Descargarlo desde un sitio aleatorio que lo ofrece gratis",
            isCorrect: false,
            explanation:
              "¡Muy arriesgado! Los sitios desconocidos suelen tener juegos falsos con virus escondidos.",
          },
          b: {
            text: "Usar tiendas oficiales como Google Play o App Store",
            isCorrect: true,
            explanation:
              "¡Excelente! Las tiendas oficiales revisan la seguridad de los juegos antes de permitir su descarga.",
          },
          c: {
            text: "Hacer clic en un enlace que alguien te envió por mensaje",
            isCorrect: false,
            explanation:
              "¡Podría ser peligroso! Incluso tus amigos pueden compartir enlaces dañinos sin darse cuenta.",
          },
        },
        warningDemo: {
          title: "Advertencia de descarga maliciosa",
          description:
            "Descargar juegos desde sitios inseguros puede instalar virus o malware en tu dispositivo.",
          consequence:
            "¡Tu dispositivo podría dañarse, robar tus archivos personales o hackear tus cuentas!",
        },
      },
      "7": {
        question:
          "Alguien en línea te ofrece reunirse en persona después de chatear unos días. ¿Cuál es la respuesta más segura?",
        description:
          "Conocer a desconocidos de internet puede ser muy peligroso, incluso si parecen amables en línea.",
        icon: "🚫",
        options: {
          a: {
            text: "Aceptar reunirte en un lugar público como un parque",
            isCorrect: false,
            explanation:
              "¡Sigue siendo muy peligroso! La gente en línea puede mentir sobre quién es, y los lugares públicos no garantizan seguridad.",
          },
          b: {
            text: "Nunca aceptar reunirse y avisar de inmediato a un adulto de confianza",
            isCorrect: true,
            explanation:
              "¡La opción más segura! Los adultos que se preocupan por ti pueden ayudarte a evitar situaciones peligrosas.",
          },
          c: {
            text: "Pedirles hacer una videollamada primero para asegurarte de que son reales",
            isCorrect: false,
            explanation:
              "Ni siquiera una videollamada hace que sea seguro conocer a alguien. Pueden parecer amables y aun así ser peligrosos.",
          },
        },
        warningDemo: {
          title: "Peligro de desconocidos en línea",
          description:
            "Las personas en internet pueden fingir ser quien no son. Podrían ser adultos haciéndose pasar por niños.",
          consequence:
            "¡Conocer a desconocidos de internet podría ponerte en grave peligro físico!",
        },
      },
      "8": {
        question:
          "Quieres publicar una foto de tu nuevo uniforme escolar. ¿De qué deberías tener cuidado?",
        description:
          "Las fotos pueden revelar más información de la que crees, incluso cuando intentas ser cuidadoso.",
        icon: "📸",
        options: {
          a: {
            text: "Asegurarte de que el nombre y el logo de la escuela no se vean en la foto",
            isCorrect: true,
            explanation:
              "¡Buena idea! El nombre y el logo de la escuela pueden ayudar a desconocidos a averiguar a dónde vas y encontrarte.",
          },
          b: {
            text: "Publicarla de inmediato: es solo un uniforme",
            isCorrect: false,
            explanation:
              "El uniforme puede revelar a qué escuela asistes, facilitando que desconocidos te encuentren.",
          },
          c: {
            text: "Incluir tu nombre completo en el pie de foto para que tus amigos sepan que eres tú",
            isCorrect: false,
            explanation:
              "¡Agregar tu nombre completo facilita aún más que desconocidos te identifiquen y te localicen!",
          },
        },
        warningDemo: {
          title: "Riesgo de información de ubicación",
          description:
            "Las fotos con información escolar pueden ayudar a desconocidos a saber dónde pasas tu tiempo todos los días.",
          consequence:
            "¡Alguien podría usar esa información para encontrarte en la escuela o seguirte a casa!",
        },
      },
      "9": {
        question:
          "Recibes un correo que dice que tu cuenta de tu juego favorito será eliminada a menos que respondas con tu contraseña. ¿Qué debes hacer?",
        description:
          "Los estafadores suelen hacerse pasar por empresas de confianza para robar tus datos de acceso.",
        icon: "📧",
        options: {
          a: {
            text: "Responder de inmediato con tu contraseña para salvar la cuenta",
            isCorrect: false,
            explanation:
              "¡Es una estafa de phishing! Las empresas reales nunca piden tu contraseña por correo.",
          },
          b: {
            text: "Borrar el correo y revisar tu cuenta iniciando sesión normalmente",
            isCorrect: true,
            explanation:
              "¡Perfecto! Si hubiera un problema real, lo verías al iniciar sesión normalmente. Este correo es falso.",
          },
          c: {
            text: "Reenviar el correo a todos tus amigos para advertirles",
            isCorrect: false,
            explanation:
              "¡No reenvíes correos sospechosos! Podrías propagar la estafa. Simplemente bórralo.",
          },
        },
        warningDemo: {
          title: "Estafa de correo de phishing",
          description:
            "Los estafadores envían correos falsos haciéndose pasar por juegos, bancos u otros servicios para robar tus contraseñas.",
          consequence:
            "¡Podrían robar tu cuenta, gastar tu moneda del juego o incluso acceder a otras cuentas con la misma contraseña!",
        },
      },
      "10": {
        question: "¿Cuál de estas es la mejor forma de mantener seguras tus cuentas en línea?",
        description: "Hay varias maneras de hacer que tus cuentas sean más difíciles de hackear.",
        icon: "🔒",
        options: {
          a: {
            text: "Usar la misma contraseña fuerte para todas tus cuentas",
            isCorrect: false,
            explanation:
              "¡Es arriesgado usar la misma! Si una cuenta es hackeada, todas las demás podrían estar en peligro.",
          },
          b: {
            text: "Usar contraseñas fuertes y diferentes y activar la verificación en dos pasos",
            isCorrect: true,
            explanation:
              "¡Excelente! Contraseñas distintas te protegen si una se filtra, y la verificación en dos pasos añade seguridad extra.",
          },
          c: {
            text: "Anotar todas tus contraseñas en un papel y dejarlo en tu escritorio",
            isCorrect: false,
            explanation:
              "¡Cualquiera que vea el papel podría acceder a tus cuentas! Mantén las contraseñas privadas.",
          },
        },
        warningDemo: {
          title: "Debilidad en la seguridad de cuentas",
          description:
            "Las malas prácticas con contraseñas facilitan que los hackers accedan a varias cuentas cuando rompen una.",
          consequence:
            "¡Podrían acceder a tu correo, redes sociales, juegos e incluso a cuentas de tu familia!",
        },
      },
      "11": {
        question:
          "Estás jugando en línea y otro jugador te pide tu dirección para enviarte un regalo. ¿Cómo respondes?",
        description:
          "Incluso en los juegos debes tener cuidado al compartir información personal con otros jugadores.",
        icon: "🎮",
        options: {
          a: {
            text: "Darles tu dirección: parecen amables y quieren enviar un regalo",
            isCorrect: false,
            explanation:
              "¡Nunca des tu dirección a desconocidos en línea! Podrían mentir sobre el regalo y tener malas intenciones.",
          },
          b: {
            text: "Rechazar amablemente y sugerir seguir siendo amigos solo dentro del juego",
            isCorrect: true,
            explanation:
              "¡Respuesta perfecta! Puedes ser amistoso en el juego sin compartir información personal que te ponga en riesgo.",
          },
          c: {
            text: "Darles una dirección falsa para que no puedan encontrarte",
            isCorrect: false,
            explanation:
              "Es mejor ser honesto y rechazar que mentir. Además, podrían descubrirlo y molestarse.",
          },
        },
        warningDemo: {
          title: "Peligro de desconocidos en juegos",
          description:
            "La gente en juegos en línea puede parecer amigable, pero no sabes quiénes son ni qué quieren.",
          consequence:
            "¡Dar tu dirección podría traer visitantes no deseados, paquetes robados o revelar dónde vives!",
        },
      },
      "12": {
        question:
          "Antes de compartir una foto o video gracioso en línea, ¿qué es lo más importante que debes considerar?",
        description:
          "Una vez que algo se publica en internet, puede ser muy difícil eliminarlo por completo.",
        icon: "🤳",
        options: {
          a: {
            text: "Si podría avergonzarte a ti o a otros en el futuro",
            isCorrect: true,
            explanation:
              "¡Buena reflexión! Lo que publicas puede durar para siempre y afectar a ti o a otros más adelante.",
          },
          b: {
            text: "Cuántos “me gusta” y comentarios podría recibir",
            isCorrect: false,
            explanation:
              "La popularidad no es tan importante como la seguridad. Piensa si el contenido es apropiado y seguro.",
          },
          c: {
            text: "Si a tus amigos les parecerá divertido",
            isCorrect: false,
            explanation:
              "La opinión de tus amigos importa, pero lo más importante es si el contenido podría causar problemas después.",
          },
        },
        warningDemo: {
          title: "Advertencia sobre huella digital",
          description:
            "Todo lo que publicas crea una huella digital permanente que puede ser vista por empleadores, escuelas y otras personas en el futuro.",
          consequence:
            "¡Publicaciones vergonzosas podrían afectar tu reputación, tus solicitudes universitarias o tus oportunidades de trabajo durante años!",
        },
      },
    },
  },
  results: {
    quizComplete: "¡Cuestionario Completado!",
    yourScore: "Tu Puntuación",
    correct: "Correctas",
    answered: "Contestadas",
    percentCorrect: "{percentage}% Correcto",
    quizProgress: "Progreso del Cuestionario",
    questionsCompleted: "{completed} de {total} preguntas",
    statistics: {
      correct: "Correctas",
      incorrect: "Incorrectas",
      remaining: "Restantes",
    },
    whatYouLearned: "Lo Que Aprendiste",
    keyLessons: {
      personalInfo: {
        title: "Información Personal",
        description:
          "Nunca compartas tu nombre real, dirección o número de teléfono con extraños en línea",
      },
      strongPasswords: {
        title: "Contraseñas Seguras",
        description: "Usa contraseñas largas con letras, números y símbolos",
      },
      suspiciousWebsites: {
        title: "Sitios Web Sospechosos",
        description: "Siempre pregunta a un adulto antes de ingresar información de pago",
      },
      onlineStrangers: {
        title: "Extraños en Línea",
        description: "Nunca conozcas a personas de internet en la vida real",
      },
    },
    backToHome: "Volver al Inicio",
    continueQuiz: "Continuar Cuestionario ({remaining} restantes)",
    startOver: "Comenzar de Nuevo",
    encouragement: {
      title: "🌟 Recuerda: ¡Eres un Protector de la Privacidad! 🌟",
      description:
        "¡Comparte lo que aprendiste con tus amigos y familia para ayudar a mantener a todos seguros en línea!",
    },
  },
  scoreMessages: {
    superhero: {
      emoji: "🏆",
      title: "¡Superhéroe de la Privacidad!",
      message: "¡Increíble! ¡Sabes cómo mantenerte súper seguro en línea!",
    },
    pro: {
      emoji: "🌟",
      title: "¡Profesional de la Privacidad!",
      message: "¡Buen trabajo! ¡Entiendes la mayoría de las reglas de seguridad en línea!",
    },
    learning: {
      emoji: "📚",
      title: "¡Aprendiendo Bien!",
      message: "¡Buen trabajo! ¡Sigue practicando para estar aún más seguro en línea!",
    },
    keepLearning: {
      emoji: "💪",
      title: "¡Sigue Aprendiendo!",
      message: "¡Vas por buen camino! ¡La práctica hace al maestro!",
    },
  },
  language: {
    select: "Seleccionar idioma",
  },
  theme: {
    toggle: "Cambiar tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
};

export default es;
