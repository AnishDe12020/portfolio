<script>
  export let showOnPx = 100;
  let hidden = true;

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  const handleOnScroll = () => {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  };
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
  on:click={goToTop}
  class={`fixed right-8 bottom-8 bg-accent rounded-full p-2 hover:opacity-60 transition duration-400 ${
    hidden ? "opacity-0" : "opacity-100"
  }`}
  ><svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 11l5-5m0 0l5 5m-5-5v12"
    />
  </svg></button
>
