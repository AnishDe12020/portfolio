import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import { allBlogPosts, BlogPost } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";

import AvatarJPG from "public/static/images/avatar.jpg";
import { NextSeo } from "next-seo";

interface BlogPostPageProps {
  blogPost: BlogPost;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ blogPost }) => {
  const ProjectMDX = useMDXComponent(blogPost.body.code);

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <h1 className="mb-16 mt-8 text-4xl font-bold">{blogPost.title}</h1>

      <div className="overflow-hidden rounded-xl">
        <NextImage
          width={blogPost.image.width}
          height={blogPost.image.height}
          src={blogPost.image.url}
          className="rounded-xl drop-shadow-md"
        />
      </div>

      <div className="my-16 flex justify-between rounded-lg border-[1px] border-tertiary bg-secondary px-4 py-2 text-gray-300">
        <div className="mt-1 flex items-center space-x-2">
          <div className="mr-1 mt-1">
            <NextImage
              src={AvatarJPG}
              placeholder="blur"
              height={32}
              width={32}
              className="rounded-full"
            />
          </div>
          <p>Anish De</p>
          <span aria-hidden>/</span>
          <p>{blogPost.date}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p>{blogPost.wordCount} words</p>
          <span aria-hidden>/</span>
          <p>{blogPost.readingTime.text}</p>
        </div>
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
