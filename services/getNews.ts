import { fetchCMS } from "@/lib/cmsClient";

export async function getNewsHero(documentId: string, locale: string) {
  const endpoint = `news/${documentId}?populate[hero][populate]=img`;
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getNewsDetails(documentId: string, locale: string) {
  const endpoint = `news/${documentId}?populate=*`;
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getNewsSEO(documentId: string, locale: string) {
  const endpoint = `news/${documentId}?populate[seo][populate]=shareImage`;
  const data = await fetchCMS(endpoint, locale);
  return data?.seo;
}
