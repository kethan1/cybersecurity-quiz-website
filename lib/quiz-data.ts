import { TFunction } from "next-intl";

// Import English quiz metadata (icons, correctness, structure). Text will come from messages per locale.
import enQuiz from "@/messages/en.quiz.json";

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

// Access the canonical question ids from the message file
const questionIds = Object.keys((enQuiz as any).quiz.questions).map((k) => Number(k)).sort((a,b)=>a-b);

export const TOTAL_QUESTIONS = questionIds.length;

export function getNextQuestionId(currentId: number): number | null {
  const idx = questionIds.indexOf(currentId);
  if (idx === -1 || idx === questionIds.length - 1) return null;
  return questionIds[idx + 1];
}

export function getPrevQuestionId(currentId: number): number | null {
  const idx = questionIds.indexOf(currentId);
  if (idx <= 0) return null;
  return questionIds[idx - 1];
}

/**
 * Build a fully localized question using the translator `t` for the active locale.
 * Text fields are read from the active locale messages, while non-linguistic data
 * (icons, correctness) is sourced from the canonical English quiz data.
 */
export function getLocalizedQuestion(t: TFunction, id: number): QuizQuestion | undefined {
  const base = (enQuiz as any).quiz.questions[String(id)];
  if (!base) return undefined;

  const options: QuizOption[] = Object.keys(base.options).map((optId: string) => ({
    id: optId,
    text: t(`quiz.questions.${id}.options.${optId}.text`),
    isCorrect: !!base.options[optId].isCorrect,
    explanation: t(`quiz.questions.${id}.options.${optId}.explanation`),
  }));

  return {
    id,
    question: t(`quiz.questions.${id}.question`),
    description: t(`quiz.questions.${id}.description`),
    icon: base.icon,
    options,
    warningDemo: {
      title: t(`quiz.questions.${id}.warningDemo.title`),
      description: t(`quiz.questions.${id}.warningDemo.description`),
      consequence: t(`quiz.questions.${id}.warningDemo.consequence`),
    },
  };
}
