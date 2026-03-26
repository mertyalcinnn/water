"use client";

import { useState, useRef, useEffect } from "react";

const localeCodes: Record<string, string> = {
  tr: "TR",
  en: "EN",
  ru: "RU",
  de: "DE",
};

const locales = ["tr", "en", "ru", "de"] as const;

interface LanguageSwitcherProps {
  currentLocale: string;
  labels: Record<string, string>;
  theme?: "light" | "dark";
}

export default function LanguageSwitcher({
  currentLocale,
  labels,
  theme = "dark",
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(locale: string) {
    setIsOpen(false);
    const hash = window.location.hash;
    const search = window.location.search;
    const restPath = window.location.pathname.replace(
      /^\/(tr|en|ru|de)(?=\/|$)/,
      ""
    );
    window.location.assign(`/${locale}${restPath}${search}${hash}`);
  }

  const tones =
    theme === "light"
      ? {
          button:
            "border border-navy-950/8 bg-white/60 text-navy-950 hover:bg-white",
          label: "text-navy-700/60",
          panel:
            "bg-sand-50/96 border border-navy-950/10 shadow-[0_20px_48px_rgba(8,26,34,0.12)]",
          item: "text-navy-700 hover:bg-navy-950/4 hover:text-navy-950",
          active: "bg-navy-950 text-white",
        }
      : {
          button: "border border-white/12 bg-white/6 text-white hover:bg-white/10",
          label: "text-white/56",
          panel:
            "bg-navy-950/95 border border-white/10 shadow-[0_20px_48px_rgba(3,12,18,0.38)]",
          item: "text-white/72 hover:bg-white/6 hover:text-white",
          active: "bg-white text-navy-950",
        };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 ${tones.button}`}
        aria-label="Language"
      >
        <span>{localeCodes[currentLocale]}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-[1.4rem] backdrop-blur-xl ${tones.panel}`}
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleSelect(locale)}
              className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                locale === currentLocale
                  ? `${tones.active} font-semibold`
                  : tones.item
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.16em]">
                  {localeCodes[locale]}
                </span>
                <span>{labels[locale]}</span>
              </div>
              <span className={`text-[0.68rem] uppercase tracking-[0.2em] ${tones.label}`}>
                {locale}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
