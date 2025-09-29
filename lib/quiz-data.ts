export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  description?: string;
  options: QuizOption[];
  icon?: string;
  warningDemo?: {
    title: string;
    description: string;
    consequence: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What information should you NEVER share online with strangers?",
    description:
      "Think about what information could help someone find you or pretend to be you.",
    icon: "🔐",
    options: [
      {
        id: "a",
        text: "Your favorite color",
        isCorrect: false,
        explanation:
          "Your favorite color is safe to share! It can't be used to find you or hurt you.",
      },
      {
        id: "b",
        text: "Your full name, address, and phone number",
        isCorrect: true,
        explanation:
          "Excellent! This personal information should only be shared with trusted adults like parents and teachers.",
      },
      {
        id: "c",
        text: "What games you like to play",
        isCorrect: false,
        explanation:
          "Talking about games you enjoy is usually safe and can help you make friends with similar interests.",
      },
    ],
    warningDemo: {
      title: "Danger: Sharing Personal Information",
      description:
        "When you share your real name, address, or phone number online, strangers can use this information to find you in real life.",
      consequence:
        "Someone could show up at your house, call your family, or even steal your identity!",
    },
  },
  {
    id: 2,
    question:
      "You want to create a password for your new game account. Which password is the strongest?",
    description:
      "A strong password protects your account from hackers who try to guess it.",
    icon: "🔑",
    options: [
      {
        id: "a",
        text: "password123",
        isCorrect: false,
        explanation:
          "This is too easy to guess! Hackers try common passwords like this first.",
      },
      {
        id: "b",
        text: "MyDog$Name2024!",
        isCorrect: true,
        explanation:
          "Perfect! This password is long, has different types of characters, and is hard to guess but easy for you to remember.",
      },
      {
        id: "c",
        text: "12345",
        isCorrect: false,
        explanation:
          "This is one of the most common passwords ever! It would take a hacker less than a second to guess.",
      },
    ],
    warningDemo: {
      title: "Weak Password Danger",
      description:
        "Weak passwords can be guessed by hackers in seconds using special computer programs.",
      consequence:
        "Someone could steal your account, delete your progress, or use your account to bully others!",
    },
  },
  {
    id: 3,
    question:
      "A website asks for your parent's credit card information to get 'free' games. What should you do?",
    description:
      "Sometimes websites that seem free actually want to trick you into spending money.",
    icon: "💳",
    options: [
      {
        id: "a",
        text: "Ask your parents first before entering any payment information",
        isCorrect: true,
        explanation:
          "Smart choice! Always ask a trusted adult before giving any payment information, even for 'free' things.",
      },
      {
        id: "b",
        text: "Enter the information quickly to get the free games",
        isCorrect: false,
        explanation:
          "This could be very dangerous! The website might charge money or steal the credit card information.",
      },
      {
        id: "c",
        text: "Make up fake credit card numbers",
        isCorrect: false,
        explanation:
          "Making up information is dishonest, and many websites can detect fake numbers anyway.",
      },
    ],
    warningDemo: {
      title: "Credit Card Scam Alert",
      description:
        "Many 'free' websites are actually scams that will charge your parents' credit card or steal the information.",
      consequence:
        "Your family could lose money, or criminals could use the stolen card information to buy things!",
    },
  },
  {
    id: 4,
    question:
      "You receive a message from someone claiming to be your friend, but something seems different about how they're writing. What should you do?",
    description:
      "Sometimes hackers take over accounts and pretend to be people you know.",
    icon: "👥",
    options: [
      {
        id: "a",
        text: "Ask them a question only your real friend would know",
        isCorrect: true,
        explanation:
          "Great thinking! This is a smart way to verify if it's really your friend or someone pretending to be them.",
      },
      {
        id: "b",
        text: "Immediately send them personal information they're asking for",
        isCorrect: false,
        explanation:
          "This could be dangerous! Even if it looks like your friend, you should verify it's really them first.",
      },
      {
        id: "c",
        text: "Ignore the message completely",
        isCorrect: false,
        explanation:
          "While being cautious is good, it might actually be your friend who needs help. It's better to verify first.",
      },
    ],
    warningDemo: {
      title: "Account Takeover Warning",
      description:
        "Hackers sometimes steal accounts and pretend to be your friends to trick you into sharing information.",
      consequence:
        "You might give personal information to a stranger, or they could trick you into downloading harmful software!",
    },
  },
  {
    id: 5,
    question:
      "You see a pop-up that says 'You've won $1000! Click here to claim your prize!' What should you do?",
    description:
      "Pop-ups like this are often tricks to get you to click on dangerous links.",
    icon: "🚨",
    options: [
      {
        id: "a",
        text: "Click immediately to get the money",
        isCorrect: false,
        explanation:
          "This is definitely a scam! Real prizes don't work this way, and clicking could download harmful software.",
      },
      {
        id: "b",
        text: "Close the pop-up without clicking and tell an adult",
        isCorrect: true,
        explanation:
          "Perfect! This is exactly what you should do. These pop-ups are always fake and designed to trick you.",
      },
      {
        id: "c",
        text: "Share the link with your friends so they can win too",
        isCorrect: false,
        explanation:
          "This would spread the dangerous link to your friends! Never share suspicious pop-ups or links.",
      },
    ],
    warningDemo: {
      title: "Fake Prize Scam",
      description:
        "These pop-ups are designed to trick you into clicking malicious links or downloading harmful software.",
      consequence:
        "Your computer could get infected with viruses, or scammers could steal your family's information!",
    },
  },
  {
    id: 6,
    question: "Which of these is the safest way to download a new game?",
    description: "Not all websites are safe for downloading games and apps.",
    icon: "📱",
    options: [
      {
        id: "a",
        text: "Download from a random website that offers it for free",
        isCorrect: false,
        explanation:
          "This is very risky! Unknown websites often have fake games with viruses hidden inside.",
      },
      {
        id: "b",
        text: "Use official app stores like Google Play or Apple App Store",
        isCorrect: true,
        explanation:
          "Excellent choice! Official app stores check games for safety before allowing downloads.",
      },
      {
        id: "c",
        text: "Click on a link someone sent you in a message",
        isCorrect: false,
        explanation:
          "This could be dangerous! Even friends can accidentally share harmful links without knowing it.",
      },
    ],
    warningDemo: {
      title: "Malicious Download Warning",
      description:
        "Downloading games from unsafe websites can install viruses or malware on your device.",
      consequence:
        "Your device could be damaged, your personal files stolen, or your accounts hacked!",
    },
  },
  {
    id: 7,
    question:
      "Someone online offers to meet you in person after chatting for a few days. What's the safest response?",
    description:
      "Meeting strangers from the internet can be very dangerous, even if they seem nice online.",
    icon: "🚫",
    options: [
      {
        id: "a",
        text: "Agree to meet them at a public place like a park",
        isCorrect: false,
        explanation:
          "This is still very dangerous! People online can lie about who they are, and even public places aren't safe for meeting strangers.",
      },
      {
        id: "b",
        text: "Never agree to meet and tell a trusted adult immediately",
        isCorrect: true,
        explanation:
          "This is the safest choice! Adults who care about you can help protect you from dangerous situations.",
      },
      {
        id: "c",
        text: "Ask them to video chat first to make sure they're real",
        isCorrect: false,
        explanation:
          "Even video chatting doesn't make meeting safe. People can still be dangerous even if they look friendly on camera.",
      },
    ],
    warningDemo: {
      title: "Stranger Danger Online",
      description:
        "People online can pretend to be someone they're not. They might be adults pretending to be kids.",
      consequence:
        "Meeting strangers from the internet could put you in serious physical danger!",
    },
  },
  {
    id: 8,
    question:
      "You want to post a photo of your new school uniform. What should you be careful about?",
    description:
      "Photos can reveal more information than you think, even when you're trying to be careful.",
    icon: "📸",
    options: [
      {
        id: "a",
        text: "Make sure the school name and logo aren't visible in the photo",
        isCorrect: true,
        explanation:
          "Smart thinking! School names and logos can help strangers figure out where you go to school and find you.",
      },
      {
        id: "b",
        text: "Post it immediately - it's just a uniform",
        isCorrect: false,
        explanation:
          "School uniforms can reveal which school you attend, making it easier for strangers to find you.",
      },
      {
        id: "c",
        text: "Include your full name in the caption so friends know it's you",
        isCorrect: false,
        explanation:
          "Adding your full name makes it even easier for strangers to identify and locate you!",
      },
    ],
    warningDemo: {
      title: "Location Information Risk",
      description:
        "Photos with school information can help strangers figure out where you spend your time every day.",
      consequence:
        "Someone could use this information to find you at school or follow you home!",
    },
  },
  {
    id: 9,
    question:
      "You receive an email saying your favorite game account will be deleted unless you reply with your password. What should you do?",
    description:
      "Scammers often pretend to be from companies you trust to steal your login information.",
    icon: "📧",
    options: [
      {
        id: "a",
        text: "Reply immediately with your password to save your account",
        isCorrect: false,
        explanation:
          "This is a phishing scam! Real companies never ask for your password in emails.",
      },
      {
        id: "b",
        text: "Delete the email and check your account by logging in normally",
        isCorrect: true,
        explanation:
          "Perfect! If there was a real problem, you'd see it when you log in normally. This email is definitely fake.",
      },
      {
        id: "c",
        text: "Forward the email to all your friends to warn them",
        isCorrect: false,
        explanation:
          "Don't forward suspicious emails! This could spread the scam to your friends. Just delete it.",
      },
    ],
    warningDemo: {
      title: "Phishing Email Scam",
      description:
        "Scammers send fake emails pretending to be from games, banks, or other services to steal your passwords.",
      consequence:
        "They could steal your account, spend your game currency, or even access other accounts with the same password!",
    },
  },
  {
    id: 10,
    question:
      "Which of these is the best way to keep your online accounts secure?",
    description:
      "There are several ways to make your accounts harder for hackers to break into.",
    icon: "🔒",
    options: [
      {
        id: "a",
        text: "Use the same strong password for all your accounts",
        isCorrect: false,
        explanation:
          "Using the same password everywhere is risky! If one account gets hacked, all your accounts could be in danger.",
      },
      {
        id: "b",
        text: "Use different strong passwords and enable two-factor authentication",
        isCorrect: true,
        explanation:
          "Excellent! Different passwords protect you if one gets stolen, and two-factor authentication adds extra security.",
      },
      {
        id: "c",
        text: "Write all your passwords on a piece of paper and keep it on your desk",
        isCorrect: false,
        explanation:
          "This makes it easy for anyone who sees the paper to access all your accounts! Keep passwords private.",
      },
    ],
    warningDemo: {
      title: "Account Security Weakness",
      description:
        "Poor password practices make it easy for hackers to access multiple accounts once they crack one password.",
      consequence:
        "Hackers could access your email, social media, games, and even your family's accounts!",
    },
  },
  {
    id: 11,
    question:
      "You're playing an online game and another player asks for your home address to send you a gift. How do you respond?",
    description:
      "Even in games, you need to be careful about sharing personal information with other players.",
    icon: "🎮",
    options: [
      {
        id: "a",
        text: "Give them your address - they seem nice and want to send a gift",
        isCorrect: false,
        explanation:
          "Never give your address to online strangers! They could be lying about the gift and have bad intentions.",
      },
      {
        id: "b",
        text: "Politely decline and suggest staying friends just in the game",
        isCorrect: true,
        explanation:
          "Perfect response! You can be friendly in games without sharing personal information that could put you at risk.",
      },
      {
        id: "c",
        text: "Give them a fake address so they can't find you",
        isCorrect: false,
        explanation:
          "It's better to be honest and decline rather than lie. Plus, they might figure out it's fake and get angry.",
      },
    ],
    warningDemo: {
      title: "Gaming Stranger Danger",
      description:
        "People in online games can seem friendly, but you never know who they really are or what they want.",
      consequence:
        "Giving your address could lead to unwanted visitors, stolen packages, or someone finding out where you live!",
    },
  },
  {
    id: 12,
    question:
      "Before sharing a funny photo or video online, what's the most important thing to consider?",
    description:
      "Once something is posted online, it can be very hard to completely remove it.",
    icon: "🤳",
    options: [
      {
        id: "a",
        text: "Whether it might embarrass you or others in the future",
        isCorrect: true,
        explanation:
          "Great thinking! Things you post online can last forever and might affect you or others later in life.",
      },
      {
        id: "b",
        text: "How many likes and comments it might get",
        isCorrect: false,
        explanation:
          "Popularity isn't as important as safety! Focus on whether the content is appropriate and safe to share.",
      },
      {
        id: "c",
        text: "Whether your friends will think it's funny",
        isCorrect: false,
        explanation:
          "Your friends' opinions matter, but the most important thing is whether the content could cause problems later.",
      },
    ],
    warningDemo: {
      title: "Digital Footprint Warning",
      description:
        "Everything you post online creates a permanent digital footprint that can be seen by future employers, schools, and others.",
      consequence:
        "Embarrassing posts could affect your reputation, college applications, or job opportunities years from now!",
    },
  },
];

export function getQuestionById(id: number): QuizQuestion | undefined {
  return quizQuestions.find((q) => q.id === id);
}

export function getNextQuestionId(currentId: number): number | null {
  const currentIndex = quizQuestions.findIndex((q) => q.id === currentId);
  if (currentIndex === -1 || currentIndex === quizQuestions.length - 1) {
    return null;
  }
  return quizQuestions[currentIndex + 1].id;
}

export function getPreviousQuestionId(currentId: number): number | null {
  const currentIndex = quizQuestions.findIndex((q) => q.id === currentId);
  if (currentIndex <= 0) {
    return null;
  }
  return quizQuestions[currentIndex - 1].id;
}

export const TOTAL_QUESTIONS = quizQuestions.length;
