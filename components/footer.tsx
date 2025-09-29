import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-16 text-center text-muted-foreground">
      <p className="flex items-center justify-center gap-2">
        {t("footer.madeBy")}
      </p>
      <p><a className="link" href="https://github.com/kethan1/cybersecurity-quiz-website">https://github.com/kethan1/cybersecurity-quiz-website</a></p>
    </footer>
  );
}
