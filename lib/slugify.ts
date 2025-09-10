export function generateSlug(title: string, id: string) {
  return `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}_${id}`;
}

export function extractIdFromSlug(slug: string) {
  return slug.split("_").pop() || "";
}
