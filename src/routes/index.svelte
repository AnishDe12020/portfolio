<script>
  import Projects from "../components/projects.svelte";
  import BlogPosts from "../components/blog-posts.svelte";
  import Hero from "../components/hero.svelte";
  import data from "../data.json";
  import blogData from "../blog-data.json";
  import Skills from "../components/skills.svelte";
  import Contact from "../components/contact.svelte";

  import { onMount } from "svelte";

  const destroyTilt = () => {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    const mq = window.matchMedia("(max-width: 1025px)");
    if (mq.matches) {
      for (let i = 0, len = tiltElements.length; i < len; i++) {
        tiltElements[i].removeAttribute("data-tilt");
        tiltElements[i].removeAttribute("data-tilt-scale");
      }
    }
  };

  onMount(() => {
    destroyTilt();
  });
</script>

<svelte:head>
  <title>Anish De | Portfolio</title>
</svelte:head>

<main id="content">
  <Hero />
  <BlogPosts blogPosts={blogData.posts} blogBaseUrl={data.blogBaseUrl} />
  <Projects projects={data.projects} />
  <Skills skillsData={data.skills} />
  <Contact emailAddress={data.emailAddress} />
</main>
