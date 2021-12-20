<script>
  import GitHubIcon from "./github.svelte";
  import TwitterIcon from "./twitter.svelte";
  import XIcon from "./x.svelte";
  import ReactIcon from "./react.svelte";
  import SvelteIcon from "./svelte.svelte";
  import NextJSIcon from "./nextjs.svelte";
  import ChakraUIIcon from "./chakra-ui.svelte";
  import TailwindIcon from "./tailwind.svelte";
  import TypescriptIcon from "./typescript.svelte";
  import FirebaseIcon from "./firebase.svelte";
  import SupabaseIcon from "./supabase.svelte";
  import FigmaIcon from "./figma.svelte";

  export let iconName;
  iconName = iconName.toLowerCase();
  iconName = iconName.replace(/\s/g, "-");
</script>

{#if iconName === "github"}
  <GitHubIcon />
{:else if iconName === "twitter"}
  <TwitterIcon />
{:else if iconName === "react"}
  <ReactIcon />
{:else if iconName === "svelte"}
  <SvelteIcon />
{:else if iconName === "nextjs"}
  <NextJSIcon />
{:else if iconName === "chakra-ui"}
  <ChakraUIIcon />
{:else if iconName === "tailwind"}
  <TailwindIcon />
{:else if iconName === "typescript"}
  <TypescriptIcon />
{:else if iconName === "firebase"}
  <FirebaseIcon />
{:else if iconName === "supabase"}
  <SupabaseIcon />
{:else if iconName === "figma"}
  <FigmaIcon />
{:else}
  <XIcon />
{/if}
