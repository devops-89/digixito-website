import React from "react";
import BlogsLayout from "@/components/layouts/blogs-layout";

export const metadata = {
  title: "Blogs | Digixito",
  description:
    "Explore our latest thinking on AI, design intelligence, product engineering, and the future of digital business.",
  alternates: {
    canonical: "/blogs",
  },
};

const BlogsPage = () => {
  return <BlogsLayout />;
};

export default BlogsPage;
