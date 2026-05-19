import type { Metadata } from "next";
import type { ReactNode } from "react";

type CaseStudyLayoutProps = {
  children: ReactNode;
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: CaseStudyLayoutProps): Promise<Metadata> {
  const { id } = await params;

  const formattedId = id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedId} | Digixito Case Study`,

    description: `Explore the ${formattedId} case study and discover how Digixito delivers impactful digital solutions and business transformation.`,

    alternates: {
      canonical: `/case-studies/${id}`,
    },
  };
}

export default async function CaseStudyLayout({
  children,
}: CaseStudyLayoutProps) {
  return children;
}