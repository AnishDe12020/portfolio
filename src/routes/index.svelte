<script>
  import BlogPosts from "../components/blog-posts.svelte";
  import Hero from "../components/hero.svelte";
  import data from "../data.json";
</script>

<svelte:head>
  <title>Anish De | Portfolio</title>
</svelte:head>

<Hero />
<BlogPosts blogPosts={data.blogPosts} blogBaseUrl={data.blogBaseUrl} />
