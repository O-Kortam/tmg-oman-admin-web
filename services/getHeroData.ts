
import { fetchCMS } from "@/lib/cmsClient";

export async function getHeroData(locale: string) {
  const endpoint = "home-heroes?populate=*";
  const data = await fetchCMS(endpoint, locale);
  return data;
}
