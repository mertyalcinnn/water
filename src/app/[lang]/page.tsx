import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function Home({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const heroStats = [
    dict.about.stats[2],
    dict.about.stats[0],
    dict.about.stats[3],
  ];

  return (
    <main className="relative isolate overflow-hidden bg-sand-50 text-navy-950">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-coral-400/10 blur-[130px]" />
        <div className="absolute right-[-8rem] top-[18rem] h-[30rem] w-[30rem] rounded-full bg-sea-500/12 blur-[140px]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-sea-400/10 blur-[160px]" />
      </div>
      <Navbar
        dict={dict.navbar}
        locale={lang}
        langLabels={dict.languageSwitcher}
      />
      <Hero
        dict={dict.hero}
        stats={heroStats}
        serviceTitles={dict.services.items.slice(0, 4).map((item) => item.title)}
        location={dict.contact.address.value}
        hours={dict.footer.hours}
      />
      <Services dict={dict.services} />
      <About dict={dict.about} />
      <Gallery dict={dict.gallery} />
      <Contact dict={dict.contact} hours={dict.footer.hours} />
      <Footer dict={{ footer: dict.footer, navbar: dict.navbar }} />
      <WhatsAppButton dict={dict.whatsapp} />
    </main>
  );
}
