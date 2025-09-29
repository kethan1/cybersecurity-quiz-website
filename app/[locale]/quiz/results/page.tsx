"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TOTAL_QUESTIONS } from "@/lib/quiz-data"
import { useQuizStore } from "@/lib/quiz-store"

export default function ResultsPage() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string
  const [showCelebration, setShowCelebration] = useState(false)
  const { getScore, getTotalAnswered, answers, resetQuiz } = useQuizStore()

  const score = getScore()
  const totalAnswered = getTotalAnswered()
  const percentage = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0

  useEffect(() => {
    // Show celebration animation
    setTimeout(() => setShowCelebration(true), 500)
  }, [])

  const getScoreMessage = () => {
    if (percentage >= 90)
      return {
        emoji: t("scoreMessages.superhero.emoji"),
        title: t("scoreMessages.superhero.title"),
        message: t("scoreMessages.superhero.message")
      }
    if (percentage >= 70)
      return {
        emoji: t("scoreMessages.pro.emoji"),
        title: t("scoreMessages.pro.title"),
        message: t("scoreMessages.pro.message")
      }
    if (percentage >= 50)
      return {
        emoji: t("scoreMessages.learning.emoji"),
        title: t("scoreMessages.learning.title"),
        message: t("scoreMessages.learning.message")
      }
    return {
      emoji: t("scoreMessages.keepLearning.emoji"),
      title: t("scoreMessages.keepLearning.title"),
      message: t("scoreMessages.keepLearning.message")
    }
  }

  const scoreMessage = getScoreMessage()

  const correctAnswers = answers.filter((a) => a.isCorrect)
  const incorrectAnswers = answers.filter((a) => !a.isCorrect)
  const unansweredQuestions = TOTAL_QUESTIONS - totalAnswered

  const handleResetQuiz = () => {
    resetQuiz()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Celebration Header */}
          <div className={`mb-8 ${showCelebration ? "animate-celebrate" : ""}`}>
            <div className="text-8xl mb-4 animate-bounce-gentle">{scoreMessage.emoji}</div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">
              {t("results.quizComplete")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">{scoreMessage.title}</p>
          </div>

          {/* Score Card */}
          <Card className="mb-8 border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-primary">{t("results.yourScore")}</CardTitle>
              <CardDescription className="text-lg">{scoreMessage.message}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{score}</div>
                  <p className="text-muted-foreground">{t("results.correct")}</p>
                </div>
                <div className="text-4xl text-muted-foreground">/</div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-muted-foreground mb-2">{totalAnswered}</div>
                  <p className="text-muted-foreground">{t("results.answered")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  {t("results.percentCorrect", { percentage })}
                </Badge>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t("results.quizProgress")}</span>
                    <span>
                      {t("results.questionsCompleted", { completed: totalAnswered, total: TOTAL_QUESTIONS })}
                    </span>
                  </div>
                  <Progress value={(totalAnswered / TOTAL_QUESTIONS) * 100} className="h-3" />
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">{correctAnswers.length}</div>
                    <div className="text-sm text-green-700">{t("results.statistics.correct")}</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="text-2xl font-bold text-red-600">{incorrectAnswers.length}</div>
                    <div className="text-sm text-red-700">{t("results.statistics.incorrect")}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-gray-600">{unansweredQuestions}</div>
                    <div className="text-sm text-gray-700">{t("results.statistics.remaining")}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Learnings */}
          <Card className="mb-8 bg-accent/50 border-accent">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <span>🎓</span>
                {t("results.whatYouLearned")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t("results.keyLessons.personalInfo.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("results.keyLessons.personalInfo.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t("results.keyLessons.strongPasswords.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("results.keyLessons.strongPasswords.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t("results.keyLessons.suspiciousWebsites.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("results.keyLessons.suspiciousWebsites.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold mb-1">{t("results.keyLessons.onlineStrangers.title")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("results.keyLessons.onlineStrangers.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}`}>
              <Button size="lg" variant="outline" className="text-lg px-6 py-3 bg-transparent">
                <span className="mr-2">🏠</span>
                {t("results.backToHome")}
              </Button>
            </Link>
            {unansweredQuestions > 0 && (
              <Link href={`/${locale}/quiz/${totalAnswered + 1}`}>
                <Button size="lg" variant="secondary" className="text-lg px-6 py-3">
                  <span className="mr-2">📝</span>
                  {t("results.continueQuiz", { remaining: unansweredQuestions })}
                </Button>
              </Link>
            )}
            <Button
              size="lg"
              onClick={handleResetQuiz}
              className="text-lg px-6 py-3 animate-bounce-gentle hover:animate-celebrate"
            >
              <span className="mr-2">🔄</span>
              {t("results.startOver")}
              <span className="ml-2">🔄</span>
            </Button>
          </div>

          {/* Encouragement */}
          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-primary mb-2">{t("results.encouragement.title")}</h3>
            <p className="text-muted-foreground">
              {t("results.encouragement.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}