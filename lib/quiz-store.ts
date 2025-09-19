"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface QuizAnswer {
  questionId: number
  selectedOptionId: string
  isCorrect: boolean
  timestamp: number
}

interface QuizState {
  answers: QuizAnswer[]
  currentStreak: number
  addAnswer: (questionId: number, selectedOptionId: string, isCorrect: boolean) => void
  getScore: () => number
  getAnswerForQuestion: (questionId: number) => QuizAnswer | undefined
  resetQuiz: () => void
  getTotalAnswered: () => number
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      answers: [],
      currentStreak: 0,

      addAnswer: (questionId, selectedOptionId, isCorrect) => {
        set((state) => {
          // Remove any existing answer for this question
          const filteredAnswers = state.answers.filter((a) => a.questionId !== questionId)

          // Add the new answer
          const newAnswer: QuizAnswer = {
            questionId,
            selectedOptionId,
            isCorrect,
            timestamp: Date.now(),
          }

          return {
            answers: [...filteredAnswers, newAnswer],
            currentStreak: isCorrect ? state.currentStreak + 1 : 0,
          }
        })
      },

      getScore: () => {
        const { answers } = get()
        return answers.filter((a) => a.isCorrect).length
      },

      getAnswerForQuestion: (questionId) => {
        const { answers } = get()
        return answers.find((a) => a.questionId === questionId)
      },

      resetQuiz: () => {
        set({ answers: [], currentStreak: 0 })
      },

      getTotalAnswered: () => {
        const { answers } = get()
        return answers.length
      },
    }),
    {
      name: "privacy-quiz-storage",
    },
  ),
)
