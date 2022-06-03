import BlogPostCard from "@/components/Blog/BlogPostCard";
import hashnodeData from "@/data/hashnode.json";

const BlogPosts = (): JSX.Element => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {hashnodeData.posts.slice(0,4).map(post => (
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
}

export default BlogPosts;
