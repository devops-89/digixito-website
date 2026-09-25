import { MetadataRoute } from "next";
import { BLOGS_DATA } from "@/public/locale/blogs-data";
import { CASE_STUDIES_DATA } from "@/public/locale/case-studies-data";
import { PROJECT_DATA } from "@/assets/data/project-data";
import { SEO_DATA } from "@/utils/seo-metadata";

const baseUrl = "https://www.digixito.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const seoRoutes = Object.keys(SEO_DATA).map((route) => {
    const cleanRoute = route === "/" ? "" : route;
    return {
      url: `${baseUrl}${cleanRoute}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
      priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.64 : 0.8,
    };
  });

  const additionalStaticRoutes = [
    "/careers",
    "/privacy-policy",
    "/terms",
    "/projects",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOGS_DATA.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const caseStudyRoutes = CASE_STUDIES_DATA.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const projectRoutes = PROJECT_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const allEntries = [
    ...seoRoutes,
    ...additionalStaticRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...projectRoutes,
  ];

  const uniqueEntries = Array.from(
    new Map(allEntries.map((item) => [item.url, item])).values()
  );

  return uniqueEntries;
}
