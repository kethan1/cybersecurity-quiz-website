"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";

import { useQuizStore } from "@/lib/quiz-store";

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { getTotalAnswered, resetQuiz } = useQuizStore();

  const startQuiz = () => {
    if (getTotalAnswered() > 0) {
      setIsOpen(true);
    } else {
      router.push("/quiz/1");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("homepage.start.title")}</AlertDialogTitle>
            <AlertDialogDescription>{t("homepage.start.description")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                const nextId = getTotalAnswered() + 1;
                router.push(`/quiz/${nextId}`);
              }}
            >
              {t("homepage.start.continue")}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                resetQuiz();
                router.push("/quiz/1");
              }}
            >
              {t("homepage.start.restart")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4 gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">
              {t("app.title")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              {t("app.description")}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                {t("homepage.whatYouLearn")}
              </CardTitle>
              <CardDescription className="text-lg">
                {t("homepage.learningDescription")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {t("homepage.passwordSafety.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("homepage.passwordSafety.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {t("homepage.personalInfo.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("homepage.personalInfo.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {t("homepage.safeWebsites.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("homepage.safeWebsites.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {t("homepage.smartSharing.title")}
                    </h3>
                    <p className="text-muted-foreground">
                      {t("homepage.smartSharing.description")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Info */}
          <Card className="mb-8 bg-accent/50 border-accent">
            <CardContent>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{t("homepage.quizInfo.questions")}</h3>
                  <p className="text-muted-foreground">{t("homepage.quizInfo.time")}</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                {t("homepage.quizInfo.explanation")}
              </p>
            </CardContent>
          </Card>

          {/* Start Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="text-xl px-8 py-6 animate-bounce-gentle hover:animate-celebrate"
              onClick={startQuiz}
            >
              {t("homepage.startButton")}
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
