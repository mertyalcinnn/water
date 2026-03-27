import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { BRAND_LOCATION, WHATSAPP_URL } from "@/lib/site";

interface FooterProps {
  dict: {
    footer: Dictionary["footer"];
    navbar: Dictionary["navbar"];
  };
}

export default function Footer({ dict }: FooterProps) {
  const { footer, navbar } = dict;

  const navLinks = [
    { href: "#home", label: navbar.home },
    { href: "#services", label: navbar.services },
    { href: "#about", label: navbar.about },
    { href: "#gallery", label: navbar.gallery },
    { href: "#contact", label: navbar.contact },
  ];

  const infoItems = [
    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: footer.hours },
    { icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z", text: footer.phone },
    { icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z", text: footer.location },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 lg:px-8">
        <div className="surface-panel-dark mb-12 flex flex-col gap-6 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/46">
              Saraylar Diyari
            </div>
            <p className="mt-3 max-w-2xl text-base leading-8 text-white/68">
              {footer.description}
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light px-6 py-3.5"
          >
            {navbar.reservation}
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-[minmax(0,1.2fr)_220px_280px]">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                <Image
                  src="/media/logo-water-sports.png"
                  alt="Saraylar Diyari Water Sports logo"
                  width={34}
                  height={34}
                  className="rounded-xl object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/46">
                  {BRAND_LOCATION}
                </span>
                <span className="font-display text-lg leading-none text-white">
                  SARAYLAR D&#304;YARI
                </span>
                <span className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/46">
                  Water Sports
                </span>
              </div>
            </div>
            <div className="mt-7 flex gap-2">
              {[
                { href: "https://www.instagram.com/saraylarwatersports/", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { href: "https://www.facebook.com/people/Skd-group/100068227456415/", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition-colors duration-300 hover:bg-white/12 hover:text-white"
                  aria-label={social.label}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/46">
              {footer.pagesTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/68 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/46">
              {footer.infoTitle}
            </h4>
            <ul className="mt-5 space-y-4">
              {infoItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-sea-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="text-sm leading-7 text-white/68">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-divider my-8 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/44">
            &copy; {footer.copyright}
          </p>
          <p className="text-xs text-white/32">
            {footer.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
