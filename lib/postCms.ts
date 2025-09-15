export async function postCMS(endpoint: string, body: any) {
  const baseUrl = "https://tmg-oman-front.tmg-service-eu-de-1-cx2-1-24c93556c7052421b1e777d2c03a04e1-0000.eu-de.containers.appdomain.cloud/api";

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
