<script>
  import Icon from "./icons/index.svelte";

  export let socialsData;
  export let classNames = "";
</script>

<div class={`flex ${classNames}`}>
  {#each socialsData as social}
    <a href={social.url} class="text-accent">
      <Icon iconName={social.name} />
    </a>
  {/each}
</div>
