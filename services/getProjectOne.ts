// src/services/about/getAboutPageData.ts

import { fetchCMS } from "@/lib/cmsClient";


export async function getProjectBanner(locale: string) {
  const endpoint = "coastal-project?populate=banner";
  const data = await fetchCMS(endpoint, locale);
  return data;
}


export async function getHeroData(locale: string) {
  const endpoint = "coastal-project?populate[hero][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getInfoProject(locale: string) {
  const endpoint = "coastal-project?populate[info][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getAboutProject(locale: string) {
  const endpoint = "coastal-project?populate=about";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
export async function getFeaturesProject(locale: string) {
  const endpoint = "coastal-project?populate[features][populate][card][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
export async function getProjectGalleryData(locale: string) {
  const endpoint = "coastal-project?populate[gallery][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
export async function getUnitsProject(locale: string) {
  const endpoint = "coastal-project?populate[units][populate][card][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}