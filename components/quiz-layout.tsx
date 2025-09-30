"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLeft, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { LocaleSwitcher } from "@/components//locale-switcher";

interface QuizLayoutProps {
  children: ReactNode;
  currentQuestion: number;
  totalQuestions: number;
  showBackButton?: boolean;
}

export function QuizLayout({
  children,
  currentQuestion,
  totalQuestions,
  showBackButton = true,
}: QuizLayoutProps) {
  const t = useTranslations();

  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Home className="w-4 h-4" />
                  {t("quiz.home")}
                </Button>
              </Link>
              {showBackButton && currentQuestion > 1 && (
                <Link href={`/quiz/${currentQuestion - 1}`}>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <ArrowLeft className="w-4 h-4" />
                    {t("quiz.back")}
                  </Button>
                </Link>
              )}
            </div>
            <div className="flex items-center gap-4">
              <LocaleSwitcher />
              <ThemeToggle />
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{t("quiz.question")}</p>
                <p className="text-lg font-semibold text-primary">
                  {currentQuestion} of {totalQuestions}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{t("quiz.progress")}</span>
              <span>
                {Math.round(progress)}% {t("quiz.complete")}
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
