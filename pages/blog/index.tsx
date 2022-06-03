import { NextPage } from "next";

import hashnodeData from "@/data/hashnode.json";
import BlogPostCard from "@/components/Blog/BlogPostCard";
const BlogPostsPage: NextPage = () => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {hashnodeData.posts.map(post => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            image={post.coverImage}
            date={post.dateAdded}
            readingTime={post.readingTime.text}
            url={`https://${hashnodeData.domain}/${post.slug}`}
          />
        ))}
      </div>
    </>
  );
};

export default BlogPostsPage;
