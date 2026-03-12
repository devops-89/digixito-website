import { MetadataRoute } from "next";
import { BLOGS_DATA } from "@/public/locale/blogs-data";
import { CASE_STUDIES_DATA } from "@/public/locale/case-studies-data";
import { PROJECT_DATA } from "@/assets/data/project-data";

const baseUrl = "https://www.digixito.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms",
    "/ai-transformation",
    "/business-transformation",
    "/product-engineering",
    "/ai-marketing-growth",
    "/design-intelligence",
    "/careers",
    "/careers/life-at-digixito",
    "/blogs",
    "/case-studies",
    "/projects",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
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

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...projectRoutes,
  ];
}
