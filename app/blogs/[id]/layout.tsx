import type { Metadata } from "next";
import type { ReactNode } from "react";

type BlogLayoutProps = {
  children: ReactNode;
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogLayoutProps): Promise<Metadata> {
  const { id } = await params;

  const formattedId = id
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedId} | Digixito Blogs`,

    description: `Read insights, trends, and expert articles about ${formattedId} from Digixito.`,

    alternates: {
      canonical: `/blogs/${id}`,
    },
  };
}

export default async function BlogLayout({
  children,
}: BlogLayoutProps) {
  return children;
}