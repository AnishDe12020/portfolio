import { GetStaticProps, NextPage } from "next";

import { allBlogPosts, BlogPost } from "contentlayer/generated";
import BlogPostCard from "@/components/Blog/BlogPostCard";

interface BlogPostsPageProps {
  posts: BlogPost[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      {posts.map(post => (
        <BlogPostCard
          key={post._id}
          title={post.title}
          image={post.image}
          slug={post.slug}
          date={post.date}
          readingTime={post.readingTime.text}
        />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allBlogPosts;

  return {
    props: {
      posts,
    },
  };
};

export default BlogPostsPage;
