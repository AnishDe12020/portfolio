import BlogPostCard from "@/components/Blog/BlogPostCard";

interface BlogPostsProps {
  posts: any[];
  domain: string;
}

const BlogPosts = ({posts, domain}: BlogPostsProps): JSX.Element => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
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
    </>
  );
};

export default BlogPosts;
