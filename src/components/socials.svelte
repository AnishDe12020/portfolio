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
      <Icon iconName={social.name.toLowerCase()} className="h-6 w-6" />
      {#if showText}
        <p
          class="ml-2 opacity-0 transition duration-200 ease-in-out group-hover:opacity-100"
        >
          {social.name}
        </p>
      {/if}
    </a>
  {/each}
</div>
