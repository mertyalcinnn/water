"use client";

import { useState, useEffect } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  dict: Dictionary["navbar"];
  locale: string;
  langLabels: Dictionary["languageSwitcher"];
}

export default function Navbar({ dict, locale, langLabels }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: dict.home },
    { href: "#services", label: dict.services },
    { href: "#about", label: dict.about },
    { href: "#gallery", label: dict.gallery },
    { href: "#contact", label: dict.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const palette = isScrolled
    ? {
        shell:
          "bg-sand-50/92 py-3 shadow-[0_18px_46px_rgba(8,26,34,0.08)] backdrop-blur-2xl border-b border-navy-950/6",
        brand: "text-navy-950",
        muted: "text-navy-700/78",
        hover: "hover:text-navy-950",
        buttonClass:
          "ml-4 inline-flex min-w-[148px] items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[0.82rem] font-semibold shadow-[0_12px_28px_rgba(8,26,34,0.16)] transition-colors duration-300",
        buttonStyle: { backgroundColor: "#081a22", color: "#ffffff" },
        icon: "border-navy-950/10 bg-white/70",
        navGroup: "rounded-full border border-navy-950/8 bg-white/62 px-2 py-1",
        navLink: "hover:bg-navy-950/5",
        mobile: "surface-panel text-navy-950",
        mobileLink: "text-navy-700 hover:bg-navy-950/4 hover:text-navy-950",
      }
    : {
        shell:
          "bg-navy-950/68 py-3 shadow-[0_18px_46px_rgba(3,12,18,0.24)] backdrop-blur-2xl border-b border-white/8",
        brand: "text-white",
        muted: "text-white/88",
        hover: "hover:text-white",
        buttonClass:
          "ml-4 inline-flex min-w-[148px] items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[0.82rem] font-semibold shadow-[0_12px_28px_rgba(8,26,34,0.12)] transition-colors duration-300",
        buttonStyle: { backgroundColor: "rgba(255,255,255,0.96)", color: "#081a22" },
        icon: "border-white/15 bg-white/10",
        navGroup:
          "rounded-full border border-white/10 bg-white/6 px-2 py-1 backdrop-blur-xl",
        navLink: "hover:bg-white/10",
        mobile: "surface-panel-dark text-white",
        mobileLink: "text-white/72 hover:bg-white/6 hover:text-white",
      };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${palette.shell}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-4">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:-translate-y-0.5 ${palette.icon}`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sea-500 to-coral-400 text-[0.78rem] font-semibold tracking-[0.18em] text-white">
                SD
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-[0.68rem] font-medium uppercase tracking-[0.24em] ${palette.muted}`}>
                Konyaalti Beach Park
              </span>
              <span className={`font-display text-lg leading-none ${palette.brand}`}>
                SARAYLAR D&#304;YARI
              </span>
              <span className={`mt-1 text-[0.68rem] tracking-[0.24em] uppercase ${palette.muted}`}>
                Water Sports
              </span>
            </div>
          </a>

          <div className={`hidden items-center gap-1 lg:flex ${palette.navGroup}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[0.82rem] font-semibold tracking-[0.02em] transition-colors duration-300 ${palette.muted} ${palette.hover} ${palette.navLink}`}
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher
              currentLocale={locale}
              labels={langLabels}
              theme={isScrolled ? "light" : "dark"}
            />
            <a
              href="https://wa.me/905448302017"
              target="_blank"
              rel="noopener noreferrer"
              className={palette.buttonClass}
              style={palette.buttonStyle}
            >
              {dict.reservation}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher
              currentLocale={locale}
              labels={langLabels}
              theme={isScrolled ? "light" : "dark"}
            />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-full p-2.5 transition-colors ${isScrolled ? "text-navy-950 hover:bg-navy-950/6" : "text-white hover:bg-white/10"}`}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isScrolled ? "bg-navy-950" : "bg-white"} ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isScrolled ? "bg-navy-950" : "bg-white"} ${
                    isMobileMenuOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isScrolled ? "bg-navy-950" : "bg-white"} ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isMobileMenuOpen ? "mt-4 max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`rounded-[1.75rem] p-4 ${palette.mobile}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${palette.mobileLink}`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <a
                href="https://wa.me/905448302017"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl px-5 py-3 text-center text-sm font-semibold"
                style={
                  isScrolled
                    ? { backgroundColor: "#081a22", color: "#ffffff" }
                    : { backgroundColor: "rgba(255,255,255,0.96)", color: "#081a22" }
                }
              >
                {dict.reservationMobile}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
