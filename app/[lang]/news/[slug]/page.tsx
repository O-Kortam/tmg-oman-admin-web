import Hero from "@/components/news/Hero";
import Details from "@/components/news/Details";
import { getNewsHero, getNewsDetails, getNewsSEO } from "@/services/getNews";
import { notFound } from "next/navigation";
import { extractIdFromSlug } from "@/lib/slugify";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const documentId = extractIdFromSlug(slug);
  if (!documentId) return {};

  const seo = await getNewsSEO(documentId, lang);

  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default description",
    keywords: seo?.keywords,
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: seo?.metaImage?.url
        ? [{ url: seo.metaImage.url }]
        : undefined,
    },
    alternates: {
      canonical: seo?.canonicalURL,
    },
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const documentId = extractIdFromSlug(slug);
  if (!documentId) return notFound();

  const newsHero = await getNewsHero(documentId, lang);
  const newsDetails = await getNewsDetails(documentId, lang);

  return (
    <>
      <Hero data={newsHero?.hero} />
      <Details data={newsDetails} />
    </>
  );
}
