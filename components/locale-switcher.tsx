"use client";

import { useLocale } from "next-intl";

import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, localeNames, localeFlags } from "@/i18n/config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (newLocale: string): void => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <Select defaultValue={currentLocale} onValueChange={handleChange}>
      <SelectTrigger className="border-border border-1">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {
          locales.map(locale => (
            <SelectItem key={locale} value={locale}>
              <span className="mr-2">{localeFlags[locale]}</span>
              {localeNames[locale]}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  );
}
