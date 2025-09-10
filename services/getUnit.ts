import { fetchCMS } from "@/lib/cmsClient";

export async function getUnitHero(documentId: string, locale: string) {
  const endpoint = `units/${documentId}?populate[hero][populate]=img`;
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getUnitDetails(documentId: string, locale: string) {
  const endpoint = `units/${documentId}?populate=*`;
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getUnitGallery(documentId: string, locale: string) {
    const endpoint = `units/${documentId}?populate[gallery][populate]=*`;
  const data = await fetchCMS(endpoint, locale);
  return data;
}
export async function getFloorPlan(documentId: string, locale: string) {
    const endpoint = `units/${documentId}?populate[floorPlan][populate]=*`;
  const data = await fetchCMS(endpoint, locale);
  return data;
}