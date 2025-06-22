import { Metadata } from "next";
import { BlogSection } from "@/components/blog-section";

export const metadata: Metadata = {
  title: "Blog | Chamchi",
  description:
    "Cập nhật bài viết mới nhất về học tiếng Anh, kỹ năng học tập...",
};

export default async function BlogPage() {
  //   const blogPosts = await getAllBlogPosts() // ← Fetch từ DB hoặc CMS

  //   return <BlogSection blogPosts={blogPosts} />
  return;
}
