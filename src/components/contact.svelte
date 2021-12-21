<script>
  export let emailAddress;
</script>

<div class="mt-16 mx-24 md:mx-32 lg:mx-48">
  <h2
    class="text-accent text-5xl md:text-6xl font-bold mb-8 text-center lg:text-left"
  >
    Contact
  </h2>
  <p class="text-white">
    You can reach out to me on my email address <a
      class="text-accent hover:opacity-60"
      href={`mailto:${emailAddress}`}>{emailAddress}</a
    >
  </p>
</div>
