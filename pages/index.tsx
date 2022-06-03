import type { NextPage } from "next";

import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import BlogPosts from "@/components/Home/BlogPosts";

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <BlogPosts />
    </>
  );
};

export default HomePage;
