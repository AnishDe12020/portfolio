<script>
  export let linkContent;
  export let linkHref;
</script>

<a
  class="text-accent hover:bg-accent hover:text-secondary rounded-lg px-4 py-3 font-semibold font-serif size text-xl focus:outline-none focus:ring mx-4 transition duration-400 ease-in-out"
  href={linkHref}
>
  {linkContent}
</a>
