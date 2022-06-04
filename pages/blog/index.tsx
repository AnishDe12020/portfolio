import { GetStaticProps, NextPage } from "next";

import hashnodeData from "@/data/hashnode.json";
import BlogPostCard from "@/components/Blog/BlogPostCard";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";

interface BlogPostsPageProps {
  posts: HashnodePostWithPlaceHolderImage[];
  }

const BlogPostsPage: NextPage<BlogPostsPageProps> = ({posts}) => {
  return (
    <>
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
            url={`https://${hashnodeData.domain}/${post.slug}`}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
const posts = hashnodeData.posts;

const allProjectsWithPlaceholerImages = []

for (const post of posts) {
    const previewUrl = await getPreviewImageUrl(post.coverImage)
    allProjectsWithPlaceholerImages.push({
        ...post,
        placeholderImage: previewUrl
    })
  }

  return {
    props: { posts: allProjectsWithPlaceholerImages},
  };
};

export default BlogPostsPage;
