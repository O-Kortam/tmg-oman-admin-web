// src/lib/cmsClient.ts

export const USE_MOCK = false;
export const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337/api';
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
