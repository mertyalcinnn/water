import type { Dictionary } from "@/app/[lang]/dictionaries";

const galleryMeta = [
  {
    gradient:
      "bg-[linear-gradient(160deg,rgba(24,72,86,0.96),rgba(79,158,166,0.86))]",
    accent: "bg-sea-500",
  },
  {
    gradient:
      "bg-[linear-gradient(160deg,rgba(8,26,34,0.96),rgba(45,118,128,0.84))]",
    accent: "bg-navy-950",
  },
  {
    gradient:
      "bg-[linear-gradient(160deg,rgba(19,41,53,0.96),rgba(191,111,75,0.78))]",
    accent: "bg-coral-500",
  },
  {
    gradient:
      "bg-[linear-gradient(160deg,rgba(191,111,75,0.92),rgba(222,142,103,0.82))]",
    accent: "bg-coral-400",
  },
  {
    gradient:
      "bg-[linear-gradient(160deg,rgba(14,51,61,0.96),rgba(49,112,120,0.84))]",
    accent: "bg-sea-700",
  },
  {
    gradient:
      "bg-[linear-gradient(160deg,rgba(9,25,32,0.96),rgba(44,73,87,0.84))]",
    accent: "bg-navy-800",
  },
];

interface GalleryProps {
  dict: Dictionary["gallery"];
}

export default function Gallery({ dict }: GalleryProps) {
  return (
    <section id="gallery" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="surface-panel rounded-[2.35rem] p-6 sm:p-8 lg:p-10">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="section-kicker text-sea-600">
                {dict.sectionLabel}
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.04em] text-navy-950 sm:text-5xl lg:text-6xl">
                {dict.heading1}
                <span className="block text-navy-700/62">{dict.heading2}</span>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/saraylarwatersports/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-3"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {dict.instagramCta}
              <svg
                className="h-3.5 w-3.5"
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

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dict.items.map((item, index) => {
              const meta = galleryMeta[index];
              return (
                <article
                  key={item.title}
                  className="group rounded-[2rem] border border-navy-950/8 bg-white/76 p-5 shadow-[0_22px_55px_rgba(8,26,34,0.08)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[0.78rem] font-semibold uppercase tracking-[0.26em] text-navy-700/38">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className={`h-2.5 w-16 rounded-full ${meta.accent}`} />
                  </div>

                  <div
                    className={`relative h-48 overflow-hidden rounded-[1.6rem] border border-white/20 ${meta.gradient}`}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.14]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
                        backgroundSize: "46px 46px",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/35 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/62">
                        {item.subtitle}
                      </div>
                      <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
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
