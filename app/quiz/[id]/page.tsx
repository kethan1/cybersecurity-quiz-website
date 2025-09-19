"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import { QuizQuestion } from "@/components/quiz-question"
import { Button } from "@/components/ui/button"
import { getQuestionById, getNextQuestionId, TOTAL_QUESTIONS } from "@/lib/quiz-data"
import { useQuizStore } from "@/lib/quiz-store"

interface QuizPageProps {
  params: {
    id: string
  }
}

export default function QuizPage({ params }: QuizPageProps) {
  const router = useRouter()
  const questionId = Number.parseInt(params.id)
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const { addAnswer, getAnswerForQuestion } = useQuizStore()

  const question = getQuestionById(questionId)
  const nextQuestionId = getNextQuestionId(questionId)
  const existingAnswer = getAnswerForQuestion(questionId)

  useEffect(() => {
    if (existingAnswer) {
      setAnswered(true)
      setIsCorrect(existingAnswer.isCorrect)
    } else {
      setAnswered(false)
      setIsCorrect(false)
    }
  }, [questionId, existingAnswer])

  if (!question) {
    return (
      <QuizLayout currentQuestion={questionId} totalQuestions={TOTAL_QUESTIONS}>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Question not found</h1>
          <Button onClick={() => router.push("/")}>Go back to start</Button>
        </div>
      </QuizLayout>
    )
  }

  const handleAnswer = (correct: boolean, selectedOptionId?: string) => {
    if (!answered && selectedOptionId) {
      addAnswer(questionId, selectedOptionId, correct)
      setAnswered(true)
      setIsCorrect(correct)
    }
  }

  const handleNext = () => {
    if (nextQuestionId) {
      router.push(`/quiz/${nextQuestionId}`)
    } else {
      router.push("/quiz/results")
    }
  }

  return (
    <QuizLayout currentQuestion={questionId} totalQuestions={TOTAL_QUESTIONS}>
      <div className="space-y-6">
        <QuizQuestion
          question={question.question}
          description={question.description}
          options={question.options}
          onAnswer={handleAnswer}
          icon={question.icon}
          warningDemo={question.warningDemo}
          existingAnswer={existingAnswer}
        />

        {answered && (
          <div className="text-center animate-in slide-in-from-bottom-4">
            <Button
              size="lg"
              onClick={handleNext}
              className="text-lg px-8 py-4 animate-bounce-gentle hover:animate-celebrate"
            >
              {nextQuestionId ? (
                <>
                  <span className="mr-2">➡️</span>
                  Next Question
                  <span className="ml-2">➡️</span>
                </>
              ) : (
                <>
                  <span className="mr-2">🎉</span>
                  See Results
                  <span className="ml-2">🎉</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </QuizLayout>
  )
}
