import { SEO_DATA } from "@/utils/seo-metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

type DetailsLayoutProps = {
  children: ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: DetailsLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  
  const path = `/${"business-transformation"}/${slug}`;
  const seo = SEO_DATA[path];

  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      alternates: { canonical: path },
    };
  }

  const formattedSlug = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedSlug} | Digixito`,
    description: `Explore ${formattedSlug} solutions offered by Digixito.`,
    alternates: {
      canonical: path,
    },
  };
}

export default async function DetailsLayout({
  children,
}: DetailsLayoutProps) {
  return children;
}