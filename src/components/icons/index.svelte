<script lang="ts">
  import GitHubIcon from "./github.svelte";
  import TwitterIcon from "./twitter.svelte";
  import XIcon from "./x.svelte";
  import ReactIcon from "./react.svelte";
  import SvelteIcon from "./svelte.svelte";
  import NextJSIcon from "./nextjs.svelte";
  import ChakraUIIcon from "./chakra-ui.svelte";
  import TailwindIcon from "./tailwind-css.svelte";
  import TypescriptIcon from "./typescript.svelte";
  import FirebaseIcon from "./firebase.svelte";
  import SupabaseIcon from "./supabase.svelte";
  import FigmaIcon from "./figma.svelte";
  import LinkIcon from "./link.svelte";
  import EmailIcon from "./email.svelte";

  export let iconName: string;
  export let className: string;
  iconName = iconName.toLowerCase();
  iconName = iconName.replace(/\s/g, "-");
</script>

{#if iconName === "github"}
  <GitHubIcon {className} />
{:else if iconName === "twitter"}
  <TwitterIcon {className} />
{:else if iconName === "react"}
  <ReactIcon {className} />
{:else if iconName === "svelte"}
  <SvelteIcon {className} />
{:else if iconName === "nextjs"}
  <NextJSIcon {className} />
{:else if iconName === "chakra-ui"}
  <ChakraUIIcon {className} />
{:else if iconName === "tailwind-css"}
  <TailwindIcon {className} />
{:else if iconName === "typescript"}
  <TypescriptIcon {className} />
{:else if iconName === "firebase"}
  <FirebaseIcon {className} />
{:else if iconName === "supabase"}
  <SupabaseIcon {className} />
{:else if iconName === "figma"}
  <FigmaIcon {className} />
{:else if iconName === "link"}
  <LinkIcon {className} />
{:else if iconName === "email"}
  <EmailIcon {className} />
{:else}
  <XIcon {className} />
{/if}
