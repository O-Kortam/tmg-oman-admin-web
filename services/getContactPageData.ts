// src/services/about/getAboutPageData.ts

import { fetchCMS } from "@/lib/cmsClient";

export async function getContactPageData(locale: string) {
  const endpoint = "contact-page?populate[header][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getContactbranchesData(locale: string) {
  const endpoint = "contact-page?populate[branches][populate][branchInfo][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getContacthotlineData(locale: string) {
  const endpoint = "contact-page?populate[hotline][populate]=img";
  const data = await fetchCMS(endpoint, locale);
  return data;
}

export async function getContactfaqData(locale: string) {
  const endpoint = "contact-page?populate[faq][populate][card][populate]=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}