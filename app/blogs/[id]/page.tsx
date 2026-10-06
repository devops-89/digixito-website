import type { Metadata } from "next";
import { BLOGS_DATA } from "@/public/locale/blogs-data";
import BlogDetailClient from "./BlogDetailClient";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = BLOGS_DATA.find((b) => b.id === id);

  if (!blog) {
    return {
      title: "Blog Not Found | Digixito",
      description: "The requested blog could not be found.",
    };
  }

  const title = blog.metaTitle || `${blog.title} | Digixito`;
  const description = blog.metaDescription || blog.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${blog.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.digixito.com/blogs/${blog.id}`,
      type: "article",
      images: [
        {
          url: blog.coverImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.coverImage],
    },
  };
}

export function generateStaticParams() {
  return BLOGS_DATA.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = BLOGS_DATA.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}
