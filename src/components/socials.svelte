<script>
  import Icon from "./icons/index.svelte";

  export let socialsData;
  export let classNames = "";
  export let iconClassNames = "";
  export let showText = false;
</script>

<div class={`flex ${classNames}`}>
  {#each socialsData as social}
    <div class="relative">
      <a
        href={social.url}
        target="_blank"
        aria-label={social.name}
        class={`group flex p-2 text-accent hover:bg-accent hover:text-secondary transition-[background] duration-200 ease-in-out rounded-xl ${iconClassNames}`}
        data-tooltip-target={`tooltip-social${showText ? "-v" : "-h"}-${
          social.name
        }`}
      >
        <Icon iconName={social.name.toLowerCase()} className="h-6 w-6" />
        {#if showText}
          <p
            class="ml-2 opacity-0 transition duration-200 ease-in-out group-hover:opacity-100"
          >
            {social.content}
          </p>
        {/if}
        <div
          id={`tooltip-social${showText ? "-v" : "-h"}-${social.name}`}
          class="inline-block absolute invisible z-10 px-2 py-3 text-sm text-gray-100 bg-secondary rounded-lg shadow-sm opacity-0 transition duration-200"
        >
          {social.name}
        </div>
      </a>
    </div>
  {/each}
</div>
