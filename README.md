# cybersecurity-quiz-website

## Localization & Quiz Data

- Quiz copy is now stored in locale message files: `messages/{locale}.quiz.json`.
- Non-linguistic quiz metadata (icons, correctness) is sourced from the English file to keep logic consistent across locales.
- `getLocalizedQuestion(t, id)` builds a locale-specific question object used by the quiz pages.

## Coding Standards

- ESLint and Prettier configs included. Run `pnpm lint` and `pnpm format`.
