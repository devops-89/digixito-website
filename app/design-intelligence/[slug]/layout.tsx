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

    description: `Explore ${formattedSlug} design intelligence solutions and services offered by Digixito.`,

    alternates: {
      canonical: `/design-intelligence/${slug}`,
    },
  };
}

export default async function DetailsLayout({
  children,
}: DetailsLayoutProps) {
  return children;
}