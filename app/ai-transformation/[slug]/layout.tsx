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

  const formattedSlug = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedSlug} | Digixito`,

    description: `Explore ${formattedSlug} services and digital transformation solutions offered by Digixito.`,

    alternates: {
      canonical: `/ai-transformation/${slug}`,
    },
  };
}

export default async function DetailsLayout({
  children,
}: DetailsLayoutProps) {
  return children;
}