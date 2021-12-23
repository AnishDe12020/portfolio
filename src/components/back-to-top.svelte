<script>
  export let showOnPx = 100;
  let hidden = true;

  let circularProgressBar;

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

    const scrolledPercentage =
      (scrollContainer().scrollTop /
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
      100;

    const scrolledDegrees = scrolledPercentage * 3.6;

    circularProgressBar.style.background = `conic-gradient(#7AC9F9 ${scrolledDegrees}deg, #141C38 ${scrolledDegrees}deg)`;

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
  class={`fixed right-2 bottom-2 md:right-4 md:bottom-4 lg:right-8 lg:bottom-8 bg-accent text-secondary rounded-full hover:opacity-60 transition duration-400 ${
    hidden ? "opacity-0" : "opacity-100"
  }`}
>
  <div
    class="rounded-full absolute bg-secondary w-12 h-12 ml-1 mt-1 flex items-center justify-center shadow-2xl"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 text-accent"
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
    </svg>
  </div>
  <div
    class="bg-secondary rounded-full w-14 h-14"
    bind:this={circularProgressBar}
  />
</button>
