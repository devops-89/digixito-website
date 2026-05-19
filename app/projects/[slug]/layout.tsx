import type { Metadata } from "next";
import type { ReactNode } from "react";

type ProjectLayoutProps = {
  children: ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectLayoutProps): Promise<Metadata> {
  const { slug } = await params;

  const formattedSlug = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedSlug} | Digixito Projects`,

    description: `Explore ${formattedSlug} project details and innovative digital solutions developed by Digixito.`,

    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

export default async function ProjectLayout({
  children,
}: ProjectLayoutProps) {
  return children;
}