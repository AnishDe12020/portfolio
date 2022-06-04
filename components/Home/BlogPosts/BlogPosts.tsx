import BlogPostCard from "@/components/Blog/BlogPostCard";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";
import { HashnodePostWithPlaceHolderImage } from "types/hashnode";

interface BlogPostsProps {
  posts: HashnodePostWithPlaceHolderImage[];
  domain: string;
}

const BlogPosts = ({ posts, domain }: BlogPostsProps): JSX.Element => {
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">Blog Posts</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.slice(0, 4).map(post => (
          <BlogPostCard
            key={post._id}
            title={post.title}
            image={post.coverImage}
            placeholderImage={post.placeholderImage}
            date={post.dateAdded}
            readingTime={post.readingTime.text}
            url={`https://${domain}/${post.slug}`}
          />
        ))}
      </div>
      <Link
        href="/blog"
        className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
      >
        <span>View All Blog Posts</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </>
  );
};

export default BlogPosts;
