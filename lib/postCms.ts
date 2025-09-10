export async function postCMS(endpoint: string, body: any) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const url = `${baseUrl}/${endpoint}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: body }),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(`POST ${url} failed`, await res.text());
    throw new Error(`Failed to post to ${endpoint}`);
  }

  return res.json();
}
