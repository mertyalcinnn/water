import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import type { Locale } from "./dictionaries";

const locales: Locale[] = ["tr", "en", "ru", "de"];

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: [
      "su sporlari",
      "antalya",
      "jet ski",
      "parasailing",
      "flyboard",
      "banana boat",
      "konyaalti",
      "water sports",
    ],
    openGraph: {
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      locale: lang,
      type: "website",
    },
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`])
      ),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return <>{children}</>;
}
