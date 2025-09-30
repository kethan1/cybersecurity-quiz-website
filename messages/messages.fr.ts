import type { Messages } from "./messages";

const fr: Messages = {
  app: {
    title: "Quiz Protecteur de Vie Privée",
    description:
      "Apprends à garder tes informations personnelles en sécurité en ligne ! Fais notre quiz amusant et deviens un super-héros de la confidentialité !",
  },
  homepage: {
    whatYouLearn: "Ce que tu vas apprendre",
    learningDescription:
      "Ce quiz t'enseignera des compétences importantes pour rester en sécurité en ligne",
    passwordSafety: {
      title: "Sécurité des mots de passe",
      description: "Apprends à créer des mots de passe forts et à les garder secrets",
    },
    personalInfo: {
      title: "Informations personnelles",
      description: "Comprendre quelles informations garder privées",
    },
    safeWebsites: {
      title: "Sites Web sûrs",
      description: "Reconnaître les sites web fiables et éviter les dangereux",
    },
    smartSharing: {
      title: "Partage intelligent",
      description: "Savoir quand et comment partager des informations en toute sécurité",
    },
    quizInfo: {
      questions: "12 Questions",
      time: "Environ 10-15 minutes",
      explanation:
        "Chaque question t'apprend quelque chose de nouveau sur la façon de rester en sécurité en ligne. Tu obtiendras des explications utiles pour chaque réponse !",
    },
    startButton: "Commencer le Quiz !",
    start: {
      title: "Veux-tu recommencer ?",
      description:
        "Tu as déjà commencé le quiz. Veux-tu recommencer ou continuer là où tu t'étais arrêté ?",
      continue: "Continuer",
      restart: "Recommencer",
    },
  },
  footer: {
    madeBy: "Fait par Kethan Vegunta, Ekansh Samanta, Ben Archbold",
  },
  quiz: {
    home: "Accueil",
    back: "Retour",
    question: "Question",
    progress: "Progression",
    complete: "Terminé",

    questionNotFound: "Question non trouvée",
    goBack: "Retourner au début",
    nextQuestion: "Question suivante",
    seeResults: "Voir les résultats",
    questions: {
      "1": {
        question: "Quelles informations ne dois-tu JAMAIS partager en ligne avec des inconnus ?",
        description:
          "Pense à ce qui pourrait aider quelqu’un à te retrouver ou à se faire passer pour toi.",
        icon: "🔐",
        options: {
          a: {
            text: "Ta couleur préférée",
            isCorrect: false,
            explanation:
              "Ta couleur préférée est sans danger à partager : elle ne peut pas servir à te retrouver ni à te nuire.",
          },
          b: {
            text: "Ton nom complet, ton adresse et ton numéro de téléphone",
            isCorrect: true,
            explanation:
              "Excellent ! Ces informations personnelles ne doivent être partagées qu’avec des adultes de confiance comme tes parents ou tes enseignants.",
          },
          c: {
            text: "Les jeux auxquels tu aimes jouer",
            isCorrect: false,
            explanation:
              "Parler des jeux que tu aimes est généralement sans risque et peut t’aider à te faire des amis ayant les mêmes intérêts.",
          },
        },
        warningDemo: {
          title: "Danger : partage d’informations personnelles",
          description:
            "Quand tu partages ton vrai nom, ton adresse ou ton numéro de téléphone en ligne, des inconnus peuvent s’en servir pour te retrouver dans la vie réelle.",
          consequence:
            "Quelqu’un pourrait venir chez toi, appeler ta famille ou même voler ton identité !",
        },
      },
      "2": {
        question:
          "Tu veux créer un mot de passe pour ton nouveau compte de jeu. Lequel est le plus fort ?",
        description:
          "Un mot de passe fort protège ton compte des pirates qui essaient de le deviner.",
        icon: "🔑",
        options: {
          a: {
            text: "password123",
            isCorrect: false,
            explanation:
              "Trop facile à deviner ! Les pirates essaient d’abord des mots de passe très courants comme celui-ci.",
          },
          b: {
            text: "MonChien$SAppelle2024!",
            isCorrect: true,
            explanation:
              "Parfait ! Il est long, mélange différents types de caractères et reste facile à retenir pour toi.",
          },
          c: {
            text: "12345",
            isCorrect: false,
            explanation:
              "L’un des mots de passe les plus courants ! Un pirate le devinerait en moins d’une seconde.",
          },
        },
        warningDemo: {
          title: "Danger des mots de passe faibles",
          description:
            "Les mots de passe faibles peuvent être devinés en quelques secondes grâce à des programmes spécialisés.",
          consequence:
            "Quelqu’un pourrait voler ton compte, supprimer ta progression ou utiliser ton compte pour harceler d’autres personnes !",
        },
      },
      "3": {
        question:
          "Un site web demande la carte de crédit de tes parents pour obtenir des jeux « gratuits ». Que dois-tu faire ?",
        description:
          "Parfois, des sites qui paraissent gratuits veulent en réalité te pousser à dépenser de l’argent.",
        icon: "💳",
        options: {
          a: {
            text: "Demander d’abord à tes parents avant d’entrer toute information de paiement",
            isCorrect: true,
            explanation:
              "Bon réflexe ! Demande toujours à un adulte de confiance avant de fournir une information de paiement, même pour des choses « gratuites ».",
          },
          b: {
            text: "Entrer rapidement les informations pour obtenir les jeux gratuits",
            isCorrect: false,
            explanation:
              "Très dangereux ! Le site pourrait facturer de l’argent ou voler les informations de la carte.",
          },
          c: {
            text: "Inventer des numéros de carte de crédit",
            isCorrect: false,
            explanation:
              "C’est malhonnête et la plupart des sites détectent les numéros faux de toute façon.",
          },
        },
        warningDemo: {
          title: "Alerte arnaque à la carte bancaire",
          description:
            "Beaucoup de sites « gratuits » sont des arnaques qui débitent la carte de tes parents ou en volent les informations.",
          consequence:
            "Ta famille pourrait perdre de l’argent, ou des criminels pourraient utiliser la carte volée pour faire des achats !",
        },
      },
      "4": {
        question:
          "Tu reçois un message d’une personne qui prétend être ton ami, mais sa façon d’écrire te paraît différente. Que fais-tu ?",
        description:
          "Parfois, des pirates prennent le contrôle de comptes et se font passer pour des personnes que tu connais.",
        icon: "👥",
        options: {
          a: {
            text: "Poser une question que seul ton vrai ami connaîtrait",
            isCorrect: true,
            explanation:
              "Très malin ! C’est une bonne façon de vérifier s’il s’agit bien de ton ami ou d’un imposteur.",
          },
          b: {
            text: "Envoyer immédiatement les informations personnelles demandées",
            isCorrect: false,
            explanation:
              "Dangereux ! Même si le message ressemble à celui de ton ami, vérifie d’abord son identité.",
          },
          c: {
            text: "Ignorer complètement le message",
            isCorrect: false,
            explanation:
              "Être prudent est bien, mais il se peut que ton ami ait réellement besoin d’aide. Mieux vaut vérifier d’abord.",
          },
        },
        warningDemo: {
          title: "Avertissement : compte piraté",
          description:
            "Des pirates volent parfois des comptes et se font passer pour tes amis pour t’extorquer des informations.",
          consequence:
            "Tu pourrais donner des informations personnelles à un inconnu ou être piégé pour télécharger un logiciel malveillant !",
        },
      },
      "5": {
        question:
          "Tu vois une fenêtre qui dit « Tu as gagné 1000 $ ! Clique ici pour réclamer ton prix ! ». Que faire ?",
        description:
          "Ces fenêtres surgissantes sont souvent des pièges pour te faire cliquer sur des liens dangereux.",
        icon: "🚨",
        options: {
          a: {
            text: "Cliquer immédiatement pour obtenir l’argent",
            isCorrect: false,
            explanation:
              "C’est une arnaque ! Les vrais prix ne fonctionnent pas ainsi et cliquer peut installer des logiciels nuisibles.",
          },
          b: {
            text: "Fermer la fenêtre sans cliquer et prévenir un adulte",
            isCorrect: true,
            explanation:
              "Parfait ! C’est exactement ce qu’il faut faire. Ces fenêtres sont conçues pour te piéger.",
          },
          c: {
            text: "Partager le lien avec tes amis pour qu’ils gagnent aussi",
            isCorrect: false,
            explanation:
              "Tu propagerais un lien dangereux à tes amis ! Ne partage jamais de liens ou fenêtres suspects.",
          },
        },
        warningDemo: {
          title: "Arnaque au faux prix",
          description:
            "Ces fenêtres te poussent à cliquer sur des liens malveillants ou à télécharger des logiciels nuisibles.",
          consequence:
            "Ton ordinateur pourrait être infecté par des virus, ou des escrocs pourraient voler les informations de ta famille !",
        },
      },
      "6": {
        question: "Quelle est la façon la plus sûre de télécharger un nouveau jeu ?",
        description:
          "Tous les sites ne sont pas sûrs pour télécharger des jeux et des applications.",
        icon: "📱",
        options: {
          a: {
            text: "Le télécharger depuis un site aléatoire qui l’offre gratuitement",
            isCorrect: false,
            explanation:
              "Très risqué ! Les sites inconnus proposent souvent de faux jeux contenant des virus.",
          },
          b: {
            text: "Utiliser des boutiques officielles comme Google Play ou l’App Store",
            isCorrect: true,
            explanation:
              "Excellent choix ! Les boutiques officielles vérifient la sécurité des jeux avant leur publication.",
          },
          c: {
            text: "Cliquer sur un lien envoyé par quelqu’un dans un message",
            isCorrect: false,
            explanation:
              "Dangereux ! Même des amis peuvent partager sans le savoir des liens nuisibles.",
          },
        },
        warningDemo: {
          title: "Avertissement : téléchargement malveillant",
          description:
            "Télécharger des jeux depuis des sites non sûrs peut installer des virus ou des malwares sur ton appareil.",
          consequence:
            "Ton appareil pourrait être endommagé, tes fichiers personnels volés ou tes comptes piratés !",
        },
      },
      "7": {
        question:
          "Quelqu’un rencontré en ligne te propose de se voir en personne après quelques jours de discussion. Quelle est la réponse la plus sûre ?",
        description:
          "Rencontrer des inconnus d’internet est très dangereux, même s’ils semblent gentils en ligne.",
        icon: "🚫",
        options: {
          a: {
            text: "Accepter de le voir dans un lieu public comme un parc",
            isCorrect: false,
            explanation:
              "Toujours dangereux ! Les gens en ligne peuvent mentir sur leur identité, et un lieu public n’est pas une garantie de sécurité.",
          },
          b: {
            text: "Refuser toute rencontre et prévenir immédiatement un adulte de confiance",
            isCorrect: true,
            explanation:
              "C’est le plus sûr ! Des adultes qui tiennent à toi peuvent t’aider à éviter les situations à risque.",
          },
          c: {
            text: "Demander d’abord un appel vidéo pour être sûr que la personne est réelle",
            isCorrect: false,
            explanation:
              "Même une visio ne rend pas la rencontre sans danger. Une personne peut paraître aimable et rester dangereuse.",
          },
        },
        warningDemo: {
          title: "Danger : inconnus en ligne",
          description: "En ligne, des adultes peuvent se faire passer pour des enfants.",
          consequence:
            "Rencontrer des inconnus d’internet peut te mettre en grave danger physique !",
        },
      },
      "8": {
        question:
          "Tu veux publier une photo de ton nouvel uniforme scolaire. À quoi dois-tu faire attention ?",
        description: "Les photos révèlent souvent plus d’informations que tu ne le penses.",
        icon: "📸",
        options: {
          a: {
            text: "Veiller à ce que le nom et le logo de l’école ne soient pas visibles",
            isCorrect: true,
            explanation:
              "Bonne idée ! Le nom et le logo de l’école peuvent aider des inconnus à savoir où te trouver.",
          },
          b: {
            text: "La publier tout de suite — ce n’est qu’un uniforme",
            isCorrect: false,
            explanation:
              "L’uniforme peut révéler l’établissement que tu fréquentes et faciliter le fait de te retrouver.",
          },
          c: {
            text: "Ajouter ton nom complet en légende pour que tes amis sachent que c’est toi",
            isCorrect: false,
            explanation:
              "Mettre ton nom complet facilite encore plus ton identification et ta localisation.",
          },
        },
        warningDemo: {
          title: "Risque lié aux informations de localisation",
          description:
            "Les photos contenant des informations scolaires peuvent indiquer où tu passes tes journées.",
          consequence:
            "Quelqu’un pourrait s’en servir pour te retrouver à l’école ou te suivre jusque chez toi !",
        },
      },
      "9": {
        question:
          "Tu reçois un e-mail disant que ton compte de jeu préféré sera supprimé si tu ne réponds pas avec ton mot de passe. Que fais-tu ?",
        description:
          "Les escrocs se font souvent passer pour des entreprises de confiance afin de voler tes identifiants.",
        icon: "📧",
        options: {
          a: {
            text: "Répondre immédiatement avec ton mot de passe pour sauver le compte",
            isCorrect: false,
            explanation:
              "C’est du phishing ! Les vraies entreprises ne demandent jamais ton mot de passe par e-mail.",
          },
          b: {
            text: "Supprimer l’e-mail et vérifier ton compte en te connectant normalement",
            isCorrect: true,
            explanation:
              "Parfait ! S’il y avait un vrai problème, tu le verrais en te connectant normalement. Cet e-mail est faux.",
          },
          c: {
            text: "Transférer l’e-mail à tous tes amis pour les prévenir",
            isCorrect: false,
            explanation:
              "Ne transfère pas de messages suspects : tu pourrais propager l’arnaque. Supprime-le simplement.",
          },
        },
        warningDemo: {
          title: "Arnaque par e-mail (phishing)",
          description:
            "Des escrocs envoient de faux e-mails se faisant passer pour des jeux, des banques ou d’autres services pour voler tes mots de passe.",
          consequence:
            "Ils pourraient voler ton compte, dépenser ta monnaie de jeu, ou accéder à d’autres comptes utilisant le même mot de passe !",
        },
      },
      "10": {
        question: "Laquelle de ces options est la meilleure pour sécuriser tes comptes en ligne ?",
        description: "Il existe plusieurs moyens de rendre tes comptes plus difficiles à pirater.",
        icon: "🔒",
        options: {
          a: {
            text: "Utiliser le même mot de passe fort pour tous tes comptes",
            isCorrect: false,
            explanation: "Risque élevé ! Si un compte est piraté, tous les autres sont menacés.",
          },
          b: {
            text: "Utiliser des mots de passe forts et différents et activer la vérification en deux étapes",
            isCorrect: true,
            explanation:
              "Excellent ! Des mots de passe différents te protègent en cas de fuite, et la 2FA ajoute une couche de sécurité.",
          },
          c: {
            text: "Écrire tous tes mots de passe sur un papier laissé sur ton bureau",
            isCorrect: false,
            explanation:
              "Toute personne qui voit ce papier pourrait accéder à tes comptes ! Garde tes mots de passe privés.",
          },
        },
        warningDemo: {
          title: "Faiblesses de sécurité des comptes",
          description:
            "De mauvaises pratiques de mot de passe facilitent l’accès des pirates à plusieurs comptes une fois qu’ils en craquent un.",
          consequence:
            "Des pirates pourraient accéder à ton e-mail, tes réseaux sociaux, tes jeux, voire aux comptes de ta famille !",
        },
      },
      "11": {
        question:
          "Tu joues en ligne et un autre joueur te demande ton adresse pour t’envoyer un cadeau. Que réponds-tu ?",
        description: "Même dans les jeux, fais attention au partage d’informations personnelles.",
        icon: "🎮",
        options: {
          a: {
            text: "Lui donner ton adresse — il a l’air gentil et veut envoyer un cadeau",
            isCorrect: false,
            explanation:
              "Ne donne jamais ton adresse à des inconnus en ligne ! La promesse de cadeau peut être un mensonge.",
          },
          b: {
            text: "Refuser poliment et proposer de rester amis uniquement dans le jeu",
            isCorrect: true,
            explanation:
              "Parfait ! On peut être amical sans partager d’informations personnelles qui te mettraient en danger.",
          },
          c: {
            text: "Donner une fausse adresse pour qu’il ne te trouve pas",
            isCorrect: false,
            explanation:
              "Mieux vaut refuser honnêtement que mentir. Et il pourrait s’en rendre compte et se fâcher.",
          },
        },
        warningDemo: {
          title: "Danger : inconnus dans les jeux",
          description:
            "Les gens peuvent paraître sympathiques en jeu, mais tu ne sais pas qui ils sont ni ce qu’ils veulent.",
          consequence:
            "Donner ton adresse peut entraîner des visites non désirées, des colis volés ou révéler où tu habites !",
        },
      },
      "12": {
        question:
          "Avant de partager une photo ou une vidéo drôle en ligne, quel est l’élément le plus important à considérer ?",
        description: "Une fois publié, un contenu est très difficile à supprimer complètement.",
        icon: "🤳",
        options: {
          a: {
            text: "Si cela pourrait t’embarrasser (toi ou d’autres) à l’avenir",
            isCorrect: true,
            explanation:
              "Bonne réflexion ! Ce que tu publies peut durer très longtemps et t’affecter plus tard, toi ou d’autres.",
          },
          b: {
            text: "Combien de « j’aime » et de commentaires cela pourrait avoir",
            isCorrect: false,
            explanation:
              "La popularité est moins importante que la sécurité. Concentre-toi sur le caractère approprié du contenu.",
          },
          c: {
            text: "Si tes amis vont trouver ça drôle",
            isCorrect: false,
            explanation:
              "L’avis des amis compte, mais le plus important est d’éviter des conséquences négatives plus tard.",
          },
        },
        warningDemo: {
          title: "Avertissement : empreinte numérique",
          description:
            "Tout ce que tu publies crée une empreinte numérique permanente visible par des écoles, des employeurs et d’autres.",
          consequence:
            "Des publications embarrassantes peuvent nuire à ta réputation, à tes candidatures ou à tes opportunités professionnelles pendant des années !",
        },
      },
    },
  },
  results: {
    quizComplete: "Quiz terminé !",
    yourScore: "Ton score",
    correct: "Correct",
    answered: "Répondu",
    percentCorrect: "{percentage}% correct",
    quizProgress: "Progression du quiz",
    questionsCompleted: "{completed} sur {total} questions",
    statistics: {
      correct: "Correctes",
      incorrect: "Incorrectes",
      remaining: "Restantes",
    },
    whatYouLearned: "Ce que tu as appris",
    keyLessons: {
      personalInfo: {
        title: "Informations personnelles",
        description:
          "Ne jamais partager ton vrai nom, ton adresse ou ton numéro de téléphone avec des inconnus en ligne",
      },
      strongPasswords: {
        title: "Mots de passe forts",
        description:
          "Utiliser des mots de passe longs avec des lettres, des chiffres et des symboles",
      },
      suspiciousWebsites: {
        title: "Sites Web suspects",
        description: "Toujours demander à un adulte avant d’entrer des informations de paiement",
      },
      onlineStrangers: {
        title: "Étrangers en ligne",
        description: "Ne jamais rencontrer des personnes d’internet dans la vie réelle",
      },
    },
    backToHome: "Retour à l'accueil",
    continueQuiz: "Continuer le quiz ({remaining} restantes)",
    startOver: "Recommencer",
    encouragement: {
      title: "🌟 Souviens-toi : tu es un protecteur de la vie privée ! 🌟",
      description:
        "Partage ce que tu as appris avec tes amis et ta famille pour aider à garder tout le monde en sécurité en ligne !",
    },
  },
  scoreMessages: {
    superhero: {
      emoji: "🏆",
      title: "Super-héros de la vie privée !",
      message: "Incroyable ! Tu sais comment rester super en sécurité en ligne !",
    },
    pro: {
      emoji: "🌟",
      title: "Pro de la vie privée !",
      message: "Bon travail ! Tu comprends la plupart des règles de sécurité en ligne !",
    },
    learning: {
      emoji: "📚",
      title: "Tu apprends bien !",
      message: "Bon travail ! Continue à pratiquer pour être encore plus en sécurité en ligne !",
    },
    keepLearning: {
      emoji: "💪",
      title: "Continue d'apprendre !",
      message: "Tu es sur la bonne voie ! La pratique fait le maître !",
    },
  },
  language: {
    select: "Sélectionner la langue",
  },
  theme: {
    toggle: "Changer le thème",
    light: "Clair",
    dark: "Sombre",
    system: "Système",
  },
};

export default fr;
