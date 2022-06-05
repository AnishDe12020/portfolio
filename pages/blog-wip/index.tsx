import { GetStaticProps, NextPage } from "next";

import { allBlogPosts, BlogPost } from "contentlayer/generated";
import BlogPostCard from "@/components/BlogWIP/BlogPostCard";
import { NextSeo } from "next-seo";

interface BlogPostsPageProps {
  posts: BlogPost[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
      </div>
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
