<script>
  import Projects from "../components/projects.svelte";
  import BlogPosts from "../components/blog-posts.svelte";
  import Hero from "../components/hero.svelte";
  import data from "../data.json";
  import Skills from "../components/skills.svelte";
  import Contact from "../components/contact.svelte";
</script>

<svelte:head>
  <title>Anish De | Portfolio</title>
</svelte:head>

<main id="content">
  <Hero />
  <BlogPosts blogPosts={data.blogPosts} blogBaseUrl={data.blogBaseUrl} />
  <Projects projects={data.projects} />
  <Skills skillsData={data.skills} />
  <Contact emailAddress={data.emailAddress} />
</main>
