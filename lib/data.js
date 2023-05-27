export function getAllSlugs(data) {
  let slugs = data.map((p) => `/project/${p?.slug}`);
  return slugs;
}
