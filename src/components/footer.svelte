<script>
  import Socials from "./socials.svelte";
  import data from "../data.json";
</script>

<div class="flex flex-col justify-center items-center mt-16 mb-8 text-white">
  <Socials socialsData={data.socials} classNames="space-x-4 mb-4" />

  <p>
    Made by <a
      href="https://twitter.com/AnishDe12020"
      target="_blank"
      class="text-accent hover:opacity-60 transition duration-200">Anish De</a
    >
  </p>
  <p class="mt-4">
    Check out the <a
      href="https://github.com/AnishDe12020/portfolio"
      target="_blank"
      class="text-accent hover:opacity-60 transition duration-200"
      >source code</a
    >
  </p>
</div>
