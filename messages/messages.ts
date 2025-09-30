export type OptionKey = "a" | "b" | "c";
export type QuestionId = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

export interface AnswerOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface WarningDemo {
  title: string;
  description: string;
  consequence: string;
}

export interface Question {
  question: string;
  description: string;
  icon: string;
  options: Record<OptionKey, AnswerOption>;
  warningDemo: WarningDemo;
}

export type QuestionsMap = Record<QuestionId, Question>;

export interface Messages {
  app: {
    title: string;
    description: string;
  };
  homepage: {
    whatYouLearn: string;
    learningDescription: string;
    passwordSafety: { title: string; description: string };
    personalInfo: { title: string; description: string };
    safeWebsites: { title: string; description: string };
    smartSharing: { title: string; description: string };
    quizInfo: {
      questions: string;
      time: string;
      explanation: string;
    };
    startButton: string;
    start: {
      title: string;
      description: string;
      continue: string;
      restart: string;
    };
  };
  footer: {
    madeBy: string;
  };
  quiz: {
    home: string;
    back: string;
    question: string;
    progress: string;
    complete: string;

    questionNotFound: string;
    goBack: string;
    nextQuestion: string;
    seeResults: string;
    questions: QuestionsMap;
  };
  results: {
    quizComplete: string;
    yourScore: string;
    correct: string;
    answered: string;
    percentCorrect: string; // e.g., "{percentage}% Correct"
    quizProgress: string;
    questionsCompleted: string; // e.g., "{completed} of {total} questions"
    statistics: {
      correct: string;
      incorrect: string;
      remaining: string;
    };
    whatYouLearned: string;
    keyLessons: {
      personalInfo: { title: string; description: string };
      strongPasswords: { title: string; description: string };
      suspiciousWebsites: { title: string; description: string };
      onlineStrangers: { title: string; description: string };
    };
    backToHome: string;
    continueQuiz: string; // e.g., "Continue Quiz ({remaining} left)"
    startOver: string;
    encouragement: { title: string; description: string };
  };
  scoreMessages: {
    superhero: { emoji: string; title: string; message: string };
    pro: { emoji: string; title: string; message: string };
    learning: { emoji: string; title: string; message: string };
    keepLearning: { emoji: string; title: string; message: string };
  };
  language: {
    select: string;
  };
  theme: {
    toggle: string;
    light: string;
    dark: string;
    system: string;
  };
}
