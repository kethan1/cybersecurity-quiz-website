"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
  explanation?: string
}

interface QuizAnswer {
  questionId: number
  selectedOptionId: string
  isCorrect: boolean
  timestamp: number
}

interface QuizQuestionProps {
  question: string
  description?: string
  options: QuizOption[]
  onAnswer: (isCorrect: boolean, selectedOptionId?: string) => void
  icon?: string
  warningDemo?: {
    title: string
    description: string
    consequence: string
  }
  existingAnswer?: QuizAnswer
}

export function QuizQuestion({
  question,
  description,
  options,
  onAnswer,
  icon = "🤔",
  warningDemo,
  existingAnswer,
}: QuizQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(existingAnswer?.selectedOptionId || null)
  const [showResult, setShowResult] = useState(!!existingAnswer)
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    setShowWarning(false)
  }, [question])

  const handleOptionSelect = (optionId: string) => {
    if (showResult) return

    setSelectedOption(optionId)
    setShowResult(true)

    const selectedAnswer = options.find((opt) => opt.id === optionId)
    if (selectedAnswer) {
      onAnswer(selectedAnswer.isCorrect, optionId)

      // Show warning demo for incorrect answers if available
      if (!selectedAnswer.isCorrect && warningDemo) {
        setTimeout(() => setShowWarning(true), 1000)
      }
    }
  }

  const selectedAnswer = options.find((opt) => opt.id === selectedOption)

  return (
    <div className="space-y-6">
      {/* Question Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2 animate-bounce-gentle">{icon}</div>
          <CardTitle className="text-2xl md:text-3xl text-balance">{question}</CardTitle>
          {description && <CardDescription className="text-lg text-pretty">{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {options.map((option) => {
              let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline"
              let buttonClass = "h-auto p-4 text-left justify-start"
              let icon = null

              if (showResult && selectedOption === option.id) {
                if (option.isCorrect) {
                  buttonVariant = "default"
                  buttonClass += " bg-primary text-primary-foreground animate-celebrate"
                  icon = <CheckCircle className="w-5 h-5 text-green-500" />
                } else {
                  buttonVariant = "destructive"
                  buttonClass += " animate-wiggle"
                  icon = <XCircle className="w-5 h-5 text-white" />
                }
              } else if (showResult && option.isCorrect) {
                buttonVariant = "secondary"
                buttonClass += " bg-secondary border-primary border-2"
                icon = <CheckCircle className="w-5 h-5 text-green-500" />
              }

              return (
                <Button
                  key={option.id}
                  variant={buttonVariant}
                  className={buttonClass}
                  onClick={() => handleOptionSelect(option.id)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3 w-full">
                    {icon}
                    <span className="text-wrap">{option.text}</span>
                  </div>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Result Explanation */}
      {showResult && selectedAnswer && (
        <Card
          className={`border-2 ${selectedAnswer.isCorrect ? "border-primary bg-primary/5" : "border-destructive bg-destructive/5"} animate-in slide-in-from-bottom-4`}
        >
          <CardContent>
            <div className="flex items-start gap-3">
              {selectedAnswer.isCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
              )}
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {selectedAnswer.isCorrect ? "Great job!" : "Not quite right, but that's okay!"}
                </h3>
                <p className="text-muted-foreground">
                  {selectedAnswer.explanation ||
                    (selectedAnswer.isCorrect ? "You chose the safest option!" : "Let's learn from this mistake!")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Warning Demo */}
      {showWarning && warningDemo && (
        <Card className="border-2 border-orange-500 bg-orange-50 dark:bg-orange-950/20 animate-in slide-in-from-bottom-4">
          <CardContent>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-orange-800 dark:text-orange-200">
                  {warningDemo.title}
                </h3>
                <p className="text-orange-700 dark:text-orange-300 mb-3">{warningDemo.description}</p>
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                    What could happen: {warningDemo.consequence}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
