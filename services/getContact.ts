import { fetchCMS } from "@/lib/cmsClient";

export async function getContactDropdowns(locale: string) {
  const endpoint = "contact-drop-down";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
