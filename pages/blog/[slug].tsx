import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import { allBlogPosts, BlogPost } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";

interface BlogPostPageProps {
  blogPost: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  const ProjectMDX = useMDXComponent(blogPost.body.code);

  return (
    <>
      <div className="mt-8 flex space-x-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{blogPost.title}</h1>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl">
        <NextImage
          width={blogPost.image.width}
          height={blogPost.image.height}
          src={blogPost.image.url}
          className="rounded-xl drop-shadow-md"
        />
      </div>

      <article>
        <div className="prose leading-8">
          <ProjectMDX components={{ ...MDXComponents }} />
        </div>
        <div className="my-8 h-1 w-full rounded-full bg-secondary" />
        <div className="rounded-xl border-[1px] border-tertiary p-8">
          <CustomGiscus term={`blog post: ${blogPost.title}`} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPost = allBlogPosts.find(blogPost => blogPost.slug === params.slug);

  return {
    props: {
      blogPost,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allBlogPosts.map(blogPost => ({
    params: { slug: blogPost.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPostPage;
