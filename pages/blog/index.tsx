import { GetStaticProps, NextPage } from "next";

import hashnodeData from "@/data/hashnode.json";
import BlogPostCard from "@/components/Blog/BlogPostCard";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";
import { NextSeo } from "next-seo";

interface BlogPostsPageProps {
  posts: HashnodePostWithPlaceHolderImage[];
}

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Blog Posts | Anish De"
        description="Blog written on https://blog.anishde.dev by Anish De"
      />
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.map(post => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            image={post.coverImage}
            placeholderImage={post.placeholderImage}
            date={post.dateAdded}
            readingTime={post.readingTime.text}
            excerpt={post.brief}
            url={`https://${hashnodeData.domain}/${post.slug}`}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = hashnodeData.posts;

  const allProjectsWithPlaceholerImages = [];

  for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImage);
    allProjectsWithPlaceholerImages.push({
      ...post,
      placeholderImage: previewUrl,
    });
  }

  return {
    props: { posts: allProjectsWithPlaceholerImages },
  };
};

export default BlogPostsPage;
