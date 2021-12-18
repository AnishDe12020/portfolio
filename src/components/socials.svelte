<script>
  import Icon from "./icons/index.svelte";

  export let socialsData;
  export let classNames = "";
  export let iconClassNames = "";
  export let showText = false;
</script>

<div class={`flex ${classNames}`}>
  {#each socialsData as social}
    <a href={social.url} class={`group flex p-2 text-accent ${iconClassNames}`}>
      <Icon iconName={social.name.toLowerCase()} />
      {#if showText}
        <p
          class="-translate-x-32 opacity-0 ml-2 transition duration-400 group-hover:translate-x-0 group-hover:opacity-100 ease-out"
        >
          {social.name}
        </p>
      {/if}
    </a>
  {/each}
</div>
