import type { Dictionary } from "@/app/[lang]/dictionaries";

const statIcons = [
  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
];

interface AboutProps {
  dict: Dictionary["about"];
}

export default function About({ dict }: AboutProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-10rem] top-[5rem] h-[26rem] w-[26rem] rounded-full bg-sea-500/15 blur-[130px]" />
        <div className="absolute bottom-[-8rem] right-[-4rem] h-[24rem] w-[24rem] rounded-full bg-coral-400/14 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.95fr)]">
          <div className="max-w-2xl">
            <div className="section-kicker text-sea-400">
              {dict.sectionLabel}
            </div>

            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {dict.heading1}
              <span className="block text-sand-100/92">{dict.heading2}</span>
              <span className="block text-white/72">{dict.heading3}</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/72 sm:text-lg">
              {dict.description}
            </p>

            <a
              href="https://wa.me/905448302017"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light mt-10 px-6 py-3.5"
            >
              {dict.cta}
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
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </div>

          <div className="grid gap-5">
            <div className="surface-panel-dark rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {dict.features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/42">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="mt-5 text-lg font-semibold text-white">
                      {feature.title}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/65">
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              {dict.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur"
                >
                  <svg
                    className="h-5 w-5 text-sea-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={statIcons[index]}
                    />
                  </svg>
                  <div className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/46">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
