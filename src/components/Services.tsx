import Image from "next/image";
import type { Dictionary } from "@/app/[lang]/dictionaries";

const servicesMeta = [
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    accent: "text-sea-600",
    bg: "bg-sea-500/12",
    border: "border-sea-500/16",
    tone: "Fast Pace",
    caption: "High-energy shoreline runs",
    image: "/media/hero-jetski.jpg",
    variant: "feature" as const,
  },
  {
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    accent: "text-coral-500",
    bg: "bg-coral-400/12",
    border: "border-coral-400/16",
    tone: "Sky View",
    caption: "Wide-open sea panorama",
    image: "/media/gallery-parasailing.jpg",
    variant: "imageCard" as const,
  },
  {
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    accent: "text-navy-700",
    bg: "bg-navy-950/8",
    border: "border-navy-950/10",
    tone: "Lift",
    caption: "Coach-guided aerial control",
    variant: "textCard" as const,
  },
  {
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    accent: "text-sea-700",
    bg: "bg-sea-600/12",
    border: "border-sea-600/16",
    tone: "Group Ready",
    caption: "Shared laughs on the water",
    image: "/media/gallery-banana.jpg",
    variant: "imageCard" as const,
  },
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    accent: "text-coral-500",
    bg: "bg-coral-400/12",
    border: "border-coral-400/16",
    tone: "Tow Sports",
    caption: "Smooth pull, clean rhythm",
    variant: "textCard" as const,
  },
  {
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z",
    accent: "text-sea-600",
    bg: "bg-sea-500/12",
    border: "border-sea-500/16",
    tone: "Private Route",
    caption: "Scenic coastline escapes",
    image: "/media/gallery-boat-tour.jpg",
    variant: "wideImage" as const,
  },
];

const showcaseMedia = [
  {
    src: "/media/hero-jetski.jpg",
    alt: "Jet ski on the Antalya coast",
    label: "Speed",
  },
  {
    src: "/media/gallery-parasailing.jpg",
    alt: "Parasailing over the sea",
    label: "Panorama",
  },
  {
    src: "/media/gallery-banana.jpg",
    alt: "Banana boat ride",
    label: "Group",
  },
  {
    src: "/media/gallery-car-boat.jpg",
    alt: "Premium ride experience",
    label: "Signature",
  },
];

const layoutClasses = [
  "xl:col-span-7",
  "xl:col-span-5",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-12",
];

interface ServicesProps {
  dict: Dictionary["services"];
}

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:items-end">
            <div className="max-w-3xl">
              <div className="section-kicker text-sea-600">
                {dict.sectionLabel}
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.04em] text-navy-950 sm:text-5xl lg:text-6xl">
                {dict.heading1}
                <span className="block text-navy-700/62">{dict.heading2}</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-navy-700/78 sm:text-lg">
                {dict.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-navy-950/8 bg-white/72 p-3">
              {showcaseMedia.map((item, index) => (
                <div
                  key={item.src}
                  className={`group relative overflow-hidden rounded-[1.5rem] ${
                    index === 0 ? "col-span-2 h-44" : "h-36"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,34,0.08),rgba(8,26,34,0.62))]" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/16 bg-white/8 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/88 backdrop-blur">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 xl:grid-cols-12">
            {dict.items.map((item, index) => {
              const meta = servicesMeta[index];
              const layoutClass = layoutClasses[index] ?? "xl:col-span-4";

              if (meta.variant === "feature") {
                return (
                  <article
                    key={item.title}
                    className={`overflow-hidden rounded-[2rem] border border-navy-950/8 bg-white shadow-[0_22px_55px_rgba(8,26,34,0.08)] ${layoutClass}`}
                  >
                    <div className="grid h-full gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(260px,0.88fr)]">
                      <div className="flex flex-col justify-between p-7 sm:p-8">
                        <div>
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-navy-700/38">
                              {(index + 1).toString().padStart(2, "0")}
                            </span>
                            <span className="rounded-full bg-sea-500/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-sea-700">
                              {meta.tone}
                            </span>
                          </div>
                          <h3 className="mt-10 text-[clamp(2rem,3vw,3.25rem)] font-display leading-[0.92] tracking-[-0.05em] text-navy-950">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-navy-700/46">
                            {meta.caption}
                          </p>
                          <p className="mt-6 max-w-xl text-base leading-8 text-navy-700/78">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] border ${meta.border} ${meta.bg}`}
                          >
                            <svg
                              className={`h-7 w-7 ${meta.accent}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={meta.icon}
                              />
                            </svg>
                          </div>
                          <div className="section-divider flex-1" />
                          <span className="text-sm font-semibold text-navy-950">
                            {dict.detail}
                          </span>
                        </div>
                      </div>

                      <div className="relative min-h-[280px] lg:min-h-full">
                        <Image
                          src={meta.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,34,0.02),rgba(8,26,34,0.18)_45%,rgba(8,26,34,0.6))]" />
                      </div>
                    </div>
                  </article>
                );
              }

              if (meta.variant === "wideImage") {
                return (
                  <article
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[2rem] border border-navy-950/8 bg-white shadow-[0_22px_55px_rgba(8,26,34,0.08)] ${layoutClass}`}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={meta.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,34,0.88),rgba(8,26,34,0.44))]" />
                    </div>

                    <div className="relative z-10 grid gap-8 p-7 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.44fr)] lg:items-end">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-white/56">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                          <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/86">
                            {meta.tone}
                          </span>
                        </div>
                        <h3 className="mt-10 text-[clamp(2rem,3vw,3rem)] font-display leading-[0.94] tracking-[-0.05em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
                          {item.description}
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
                        <div className="flex items-center justify-between gap-4">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/16 bg-white/10`}
                          >
                            <svg
                              className="h-7 w-7 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={meta.icon}
                              />
                            </svg>
                          </div>
                          <svg
                            className="h-4 w-4 text-white/80"
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
                        </div>
                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/58">
                          {meta.caption}
                        </p>
                        <p className="mt-3 text-sm font-semibold text-white">
                          {dict.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              }

              const hasImage = Boolean(meta.image);

              return (
                <article
                  key={item.title}
                  className={`overflow-hidden rounded-[2rem] border border-navy-950/8 bg-white shadow-[0_22px_55px_rgba(8,26,34,0.08)] ${layoutClass}`}
                >
                  {hasImage ? (
                    <div className="relative h-52">
                      <Image
                        src={meta.image!}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,34,0.08),rgba(8,26,34,0.16)_45%,rgba(8,26,34,0.76))]" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                          {meta.tone}
                        </div>
                        <h3 className="mt-2 text-2xl font-display tracking-[-0.03em] text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[linear-gradient(160deg,rgba(248,250,252,0.96),rgba(225,236,238,0.82))] p-7">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-navy-700/38">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-[1.3rem] border ${meta.border} ${meta.bg}`}
                        >
                          <svg
                            className={`h-7 w-7 ${meta.accent}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={meta.icon}
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-navy-700/46">
                        {meta.tone}
                      </p>
                      <h3 className="mt-3 text-2xl font-display tracking-[-0.03em] text-navy-950">
                        {item.title}
                      </h3>
                    </div>
                  )}

                  <div className="p-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-navy-700/46">
                      {meta.caption}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-navy-700/75">
                      {item.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between text-sm">
                      <span className="font-semibold text-navy-950">{dict.detail}</span>
                      <svg
                        className="h-4 w-4 text-navy-700/54"
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
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
