export default [
  { UserAgent: "*" },
  { Disallow: "" },
  { BlankLine: true },

  { Sitemap: (req) => `${process.env.NUXT_PUBLIC_SITE_URL}/sitemap.xml` },
]
