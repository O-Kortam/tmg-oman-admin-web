import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tmg-oman.vercel.app";

  return [
    { url: `${baseUrl}/en`, lastModified: new Date() },
    { url: `${baseUrl}/en/about`, lastModified: new Date() },
    { url: `${baseUrl}/en/register-interest`, lastModified: new Date() },

    { url: `${baseUrl}/ar`, lastModified: new Date() },
    { url: `${baseUrl}/ar/about`, lastModified: new Date() },
    { url: `${baseUrl}/ar/register-interest`, lastModified: new Date() },

    { url: `${baseUrl}/en/projects/the-residential-project`, lastModified: new Date() },
    { url: `${baseUrl}/en/projects/the-coastal-project`, lastModified: new Date() },
    { url: `${baseUrl}/ar/projects/the-residential-project`, lastModified: new Date() },
    { url: `${baseUrl}/ar/projects/the-coastal-project`, lastModified: new Date() },

    { url: `${baseUrl}/en/news/1`, lastModified: new Date() },
    { url: `${baseUrl}/ar/news/1`, lastModified: new Date() },

    { url: `${baseUrl}/en/units/1`, lastModified: new Date() },
    { url: `${baseUrl}/ar/units/1`, lastModified: new Date() },
  ];
}
