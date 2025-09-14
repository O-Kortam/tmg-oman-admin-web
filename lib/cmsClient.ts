// src/lib/cmsClient.ts

export const USE_MOCK = false;
export const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://tmg-oman-strapi.tmg-service-eu-de-1-cx2-1-24c93556c7052421b1e777d2c03a04e1-0000.eu-de.containers.appdomain.cloud/api';
function prependStrapiUrl(data: any): any {
  if (!data) return data;

  if (Array.isArray(data)) {
    return data.map(prependStrapiUrl);
  }

  if (typeof data === 'object') {
    for (const key in data) {
      if (
        key === 'url' &&
        typeof data[key] === 'string' &&
        data[key].startsWith('/uploads')
      ) {
        data[key] = `${baseUrl.replace(/\/api$/, '')}${data[key]}`;
      } else {
        data[key] = prependStrapiUrl(data[key]);
      }
    }
  }

  return data;
}

export async function fetchCMS(endpoint: string, locale?: string) {
  const url = new URL(`${baseUrl}/${endpoint.includes('?') ? endpoint : `${endpoint}?`}`);
  console.log("👉 fetchCMS will call:", url.toString()); 

  if (locale) {
    url.searchParams.set('locale', locale);
  }

  const res = await fetch(url.toString(), { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`CMS fetch failed for ${endpoint} (${res.status} ${res.statusText})`);
  }

  const json = await res.json();
  const dataWithUrls = prependStrapiUrl(json.data);
  return dataWithUrls;
}
