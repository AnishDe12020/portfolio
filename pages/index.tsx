import type { NextPage } from "next";

import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};

export default HomePage;
