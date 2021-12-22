<script>
  import SectionHeading from "./section-heading.svelte";

  export let emailAddress;
</script>

<SectionHeading id="blog-posts">Blog Posts</SectionHeading>
<div class="mt-16 mx-24 md:mx-32 lg:mx-48">
  <p class="text-white">
    You can reach out to me on my email address <a
      class="text-accent hover:opacity-60"
      href={`mailto:${emailAddress}`}>{emailAddress}</a
    >
  </p>
</div>
