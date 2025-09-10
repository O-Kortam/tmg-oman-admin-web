// src/services/about/getAboutPageData.ts

import { fetchCMS } from "@/lib/cmsClient";


export async function getHomeAbout(locale: string) {
  const endpoint = "home-page?populate=about";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getHomeFeatures(locale: string) {
  const endpoint = "home-page?populate[features][populate][card][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getHomeCommunities(locale: string) {
  const endpoint = "home-page?populate[communities][populate][card][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getHomeBanner(locale: string) {
  const endpoint = "home-page?populate=banner";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getHomeProjects(locale: string) {
  const endpoint = "home-page?populate[projects][populate][type][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getHomeNews(locale: string) {
  const endpoint = "home-page?populate[news][populate][card][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
