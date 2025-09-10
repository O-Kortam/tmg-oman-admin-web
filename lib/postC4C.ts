// lib/postC4C.ts
export async function postC4C(body: any) {
  const { NEXT_PUBLIC_C4C_URL: url, C4C_USER: username, C4C_PASSWORD: password } = process.env;

  if (!url || !username || !password) {
    throw new Error("Recheck your Inputs or change the reason.");
  }

  const auth = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;

  const tokenRes = await fetch(url, {
    method: "GET",
    headers: { Authorization: auth, Accept: "application/json", "x-csrf-token": "fetch" },
  });

  if (!tokenRes.ok) throw new Error(`CSRF fetch failed: ${await tokenRes.text()}`);

  const csrfToken = tokenRes.headers.get("x-csrf-token");
  const cookies = (tokenRes.headers as any).getSetCookie?.() || [];
  if (!csrfToken) throw new Error("No CSRF token returned from C4C.");

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-csrf-token": csrfToken,
      Cookie: cookies.map((c: string) => c.split(";")[0]).join("; "),
    },
    body: JSON.stringify(body),
  });

  return res.json();
}
