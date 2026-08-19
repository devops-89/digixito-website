import type { Metadata } from "next";
import { SEO_DATA } from "@/utils/seo-metadata";
import React from "react";
import BlogsLayout from "@/components/layouts/blogs-layout";

export const metadata: Metadata = {
  ...SEO_DATA["/blogs"],
  alternates: {
    canonical: "/blogs",
  },
};

const BlogsPage = () => {
  return <BlogsLayout />;
};

export default BlogsPage;
