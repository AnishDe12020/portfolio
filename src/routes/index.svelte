<script>
  import Hero from "../components/hero.svelte";
  import data from "../data.json";
  import blogData from "../blog-data.json";

  import Lazy from "../components/Lazy.svelte";

  import { onMount } from "svelte";

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  import VanillaTilt from "vanilla-tilt";

  const destroyTilt = () => {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    const mobileTestRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if (mobileTestRegex.test(navigator.userAgent)) {
      for (let i = 0, len = tiltElements.length; i < len; i++) {
        tiltElements[i].vanillaTilt.destroy();
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
  <Lazy this={() => import("../components/blog-posts.svelte")}>
    <div slot="loading">Loading</div>
    <svelte:fragment slot="component" let:Component>
      <Component blogPosts={blogData.posts} blogBaseUrl={data.blogBaseUrl} />
    </svelte:fragment>
  </Lazy>
  <Lazy this={() => import("../components/projects.svelte")}>
    <div slot="loading">Loading</div>
    <svelte:fragment slot="component" let:Component>
      <Component projects={data.projects} />
    </svelte:fragment>
  </Lazy>
  <Lazy this={() => import("../components/skills.svelte")}>
    <div slot="loading">Loading</div>
    <svelte:fragment slot="component" let:Component>
      <Component skillsData={data.skills} />
    </svelte:fragment>
  </Lazy>
  <Lazy this={() => import("../components/contact.svelte")}>
    <div slot="loading">Loading</div>
    <svelte:fragment slot="component" let:Component>
      <Component emailAddress={data.emailAddress} />
    </svelte:fragment>
  </Lazy>
</main>
