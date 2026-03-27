import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

interface HeroProps {
  dict: Dictionary["hero"];
  stats: Dictionary["about"]["stats"];
  serviceTitles: string[];
  location: string;
  hours: string;
}

export default function Hero({
  dict,
  stats,
  serviceTitles,
  location,
  hours,
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pb-24 sm:pt-36"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#081a22_0%,#102733_48%,#143847_100%)]" />
        <div className="absolute left-[-8rem] top-[4rem] h-[24rem] w-[24rem] rounded-full bg-coral-400/18 blur-[110px]" />
        <div className="absolute right-[-6rem] top-[6rem] h-[28rem] w-[28rem] rounded-full bg-sea-500/22 blur-[130px]" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-sea-400/18 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.82fr)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[0.72rem] font-medium tracking-[0.22em] text-white/72 uppercase backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sea-400 animate-pulse-soft" />
              {dict.seasonBadge}
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-[clamp(3.4rem,8vw,7.4rem)] leading-[0.88] tracking-[-0.04em]">
              <span className="block">{dict.headingLine1}</span>
              <span className="block text-sand-100/94">{dict.headingLine2}</span>
              <span className="block text-white/80">{dict.headingLine3}</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
              {dict.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="btn-light px-7 py-4"
              >
                {dict.ctaExplore}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="https://wa.me/905448302017"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-dark px-7 py-4"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-sea-400" />
                {dict.ctaWhatsApp}
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur"
                >
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/54">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pb-4">
            <div className="absolute -left-10 top-12 h-24 w-24 rounded-full bg-sea-400/24 blur-3xl animate-drift" />
            <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-coral-400/20 blur-3xl animate-drift-delayed" />
            <div className="surface-panel-dark relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
              <div className="relative h-[320px] overflow-hidden rounded-[1.8rem] border border-white/10">
                <Image
                  src="/media/hero-jetski.jpg"
                  alt="Jet ski experience on Antalya coast"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,34,0.05),rgba(8,26,34,0.58)_68%,rgba(8,26,34,0.82))]" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                  <span className="rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-white/72 backdrop-blur">
                    {dict.scrollDiscover}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-sea-400 shadow-[0_0_22px_rgba(136,199,203,0.8)]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {serviceTitles.map((item) => (
                    <span
                      key={item}
                      className="mr-2 inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-medium tracking-[0.18em] text-white/80 uppercase backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/4 p-5">
                  <svg
                    className="h-5 w-5 text-sea-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l3.25 3.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="mt-4 text-sm leading-7 text-white/74">{hours}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/4 p-5">
                  <svg
                    className="h-5 w-5 text-coral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.6}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p className="mt-4 text-sm leading-7 text-white/74">{location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-sand-50" />
    </section>
  );
}
