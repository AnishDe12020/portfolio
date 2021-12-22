<script>
  import SectionHeading from "./section-heading.svelte";

  export let emailAddress;
</script>

<SectionHeading id="contact">Contact</SectionHeading>
<div class="mx-4 md:mx-24 lg:mx-32 xl:mx-40">
  <p class="text-white">
    You can reach out to me on my email address <a
      class="text-accent hover:opacity-60"
      href={`mailto:${emailAddress}`}>{emailAddress}</a
    >
  </p>
</div>
