import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <div className="text-6xl mb-4 animate-bounce-gentle">🛡️</div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">Privacy Protector Quiz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Learn how to keep your personal information safe online! Take our fun quiz and become a privacy superhero!
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <span className="text-3xl">🎯</span>
                What You'll Learn
              </CardTitle>
              <CardDescription className="text-lg">
                This quiz will teach you important skills to stay safe online
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Password Safety</h3>
                    <p className="text-muted-foreground">Learn how to create strong passwords and keep them secret</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Personal Information</h3>
                    <p className="text-muted-foreground">Understand what information to keep private</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Safe Websites</h3>
                    <p className="text-muted-foreground">Recognize trustworthy websites and avoid dangerous ones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Smart Sharing</h3>
                    <p className="text-muted-foreground">Know when and how to share information safely</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Info */}
          <Card className="mb-8 bg-accent/50 border-accent">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl">📊</span>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">12 Questions</h3>
                  <p className="text-muted-foreground">About 10-15 minutes</p>
                </div>
                <span className="text-3xl">⏱️</span>
              </div>
              <p className="text-center text-muted-foreground">
                Each question teaches you something new about staying safe online. You'll get helpful explanations for
                every answer!
              </p>
            </CardContent>
          </Card>

          {/* Start Button */}
          <div className="text-center">
            <Link href="/quiz/1">
              <Button size="lg" className="text-xl px-8 py-6 animate-bounce-gentle hover:animate-celebrate">
                <span className="mr-2">🚀</span>
                Start the Quiz!
                <span className="ml-2">🚀</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>to keep kids safe online</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
