"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const t = useTranslations();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <Sun className="w-4 h-4" />
        <span className="sr-only">{t("theme.toggle")}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      className="gap-2 bg-transparent dark:hover:text-neutral-400 !border-border"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <>
          <Sun className="w-4 h-4" />
          <span className="hidden sm:inline">{t("theme.light")}</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span className="hidden sm:inline">{t("theme.dark")}</span>
        </>
      )}
      <span className="sr-only">{t("theme.toggle")}</span>
    </Button>
  );
}
