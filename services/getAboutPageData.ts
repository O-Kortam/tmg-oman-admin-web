// src/services/about/getAboutPageData.ts

import { fetchCMS } from "@/lib/cmsClient";

export async function getAboutPageData(locale: string) {
  const endpoint = "about?populate[header][populate]=img&populate[about][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getAboutBannerData(locale: string) {
  const endpoint = "about?populate=banner";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
export async function getAboutAchievementsData(locale: string) {
  const endpoint = "about?populate[achievements][populate][card][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getAboutGalleryData(locale: string) {
  const endpoint = "about?populate[gallery][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getAboutNumbersData(locale: string) {
  const endpoint = "about?populate[numbers][populate][card][populate]=icon";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getAboutVisionData(locale: string) {
  const endpoint = "about?populate[info][populate][vision][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
} 
