import type { Dictionary } from "@/app/[lang]/dictionaries";

const cardsMeta = [
  {
    href: "https://wa.me/905448302017",
    external: true,
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    iconBg: "bg-green-500/12 text-green-600",
    key: "whatsapp" as const,
  },
  {
    href: "tel:+905448302017",
    external: false,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    iconBg: "bg-sea-500/12 text-sea-700",
    key: "phone" as const,
  },
  {
    href: "https://maps.google.com/?q=Meltem+Mahallesi+Konyaalti+Beach+Park+Antalya",
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    iconBg: "bg-coral-400/12 text-coral-500",
    key: "address" as const,
  },
];

interface ContactProps {
  dict: Dictionary["contact"];
  hours: string;
}

export default function Contact({ dict, hours }: ContactProps) {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.86fr)_minmax(360px,0.94fr)]">
          <div className="surface-panel rounded-[2rem] p-8 sm:p-10">
            <div className="section-kicker text-sea-600">{dict.sectionLabel}</div>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.04em] text-navy-950 sm:text-5xl lg:text-6xl">
              {dict.heading}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-navy-700/76 sm:text-lg">
              {dict.description}
            </p>

            <div className="mt-10 space-y-4">
              {cardsMeta.map((card) => {
                const cardDict = dict[card.key];
                return (
                  <a
                    key={card.key}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4 rounded-[1.5rem] border border-navy-950/8 bg-white/70 p-5 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] ${card.iconBg}`}
                    >
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-navy-700/40">
                        {cardDict.title}
                      </div>
                      <div className="mt-1 text-lg font-semibold text-navy-950">
                        {cardDict.value}
                      </div>
                      <div className="mt-2 text-sm leading-7 text-navy-700/72">
                        {cardDict.description}
                      </div>
                    </div>
                    <div className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-navy-950">
                      {cardDict.cta}
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="surface-panel-dark rounded-[2rem] p-6 text-white sm:p-8">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/46">
                {dict.address.value}
              </div>
              <div className="section-divider my-5 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/42">
                    {dict.address.title}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    {dict.address.value}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-white/68">
                    {dict.address.description}
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/42">
                    {dict.phone.title}
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    {dict.phone.value}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-white/68">
                    {hours}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/905448302017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light px-5 py-3"
                >
                  {dict.whatsapp.title}
                </a>
                <a
                  href="https://maps.google.com/?q=Meltem+Mahallesi+Konyaalti+Beach+Park+Antalya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-dark px-5 py-3"
                >
                  {dict.address.title}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-navy-950/8 bg-white shadow-[0_22px_55px_rgba(8,26,34,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.1!2d30.6388!3d36.8773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUyJzM4LjMiTiAzMMKwMzgnMTkuNyJF!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="390"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saraylar Diyari Konum"
                className="grayscale-[0.22]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
