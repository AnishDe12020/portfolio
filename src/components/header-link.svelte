<script>
  export let linkContent;
  export let linkHref;
</script>

<li>
  <a
    class="bg-accent text-secondary rounded-lg px-4 py-3 font-semibold font-serif hover:opacity-70 size text-xl focus:outline-none focus:ring mx-4"
    href={linkHref}
  >
    {linkContent}
  </a>
</li>
