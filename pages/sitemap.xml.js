// /pages/sitemap.xml.js
export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.linkkurs.com";
  const staticPaths = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "1",
    },
    {
      loc: `${baseUrl}/hakkimizda`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      loc: `${baseUrl}/kadromuz`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      loc: `${baseUrl}/iletisim`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      loc: `${baseUrl}/kariyer`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      loc: `${baseUrl}/encoktercihedilendersler`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/ornekcanlidersler`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.5",
    },
    {
      loc: `${baseUrl}/sozlesme`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "0.5",
    },
  ];

  const response = await fetch(`https://api.linkkurs.com/sitemap`);
  const siteMaps = await response.json();

  const dynamicUrls = siteMaps.map((item) => ({
    loc: item.loc,
    lastmod: item.lastmod,
    changefreq: item.changefreq,
    priority: item.priority,
  }));

  const allUrls = [...staticPaths, ...dynamicUrls];

  // Sitemap XML içeriğini oluşturma
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map((url) => {
        return `
          <url>
            <loc>${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
            <changefreq>${url.changefreq}</changefreq>
            <priority>${url.priority}</priority>
          </url>
        `;
      })
      .join("")}
  </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  return null;
}
