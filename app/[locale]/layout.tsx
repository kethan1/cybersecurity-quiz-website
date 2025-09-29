import { Suspense, ReactNode } from "react";
import { notFound } from "next/navigation";
import { Kavoon, Inter_Tight } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider, hasLocale } from "next-intl";

import { ThemeProvider } from "@/components/theme-provider";
import { routing } from "@/i18n/routing";

import "../globals.css";

export const metadata: Metadata = {
  title: "Privacy Quiz for Kids",
  description: "Learn how to protect your personal information online",
};

const kavoon = Kavoon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kavoon",
});

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${kavoon.variable}`}>
        <NextIntlClientProvider>
          <Suspense fallback={null}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </Suspense>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
