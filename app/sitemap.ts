import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.mershiplog.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs as the site grows
  ]
}
