<script>
  import GitHubIcon from "./github.svelte";
  import TwitterIcon from "./twitter.svelte";
  import XIcon from "./x.svelte";

  export let iconName;
</script>

{#if iconName === "github"}
  <GitHubIcon />
{:else if iconName === "twitter"}
  <TwitterIcon />
{:else}
  <XIcon />
{/if}
