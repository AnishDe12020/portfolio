<script>
  import "../app.css";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import BackToTop from "../components/back-to-top.svelte";
  import Socials from "../components/socials.svelte";
  import data from "../data.json";

  import { MetaTags, JsonLd } from "svelte-meta-tags";

  import { onMount } from "svelte";
  import "aos/dist/aos.css";

  let AOS;
  onMount(async () => {
    AOS = (await import("aos")).default;
    AOS.init({
      duration: 500,
      delay: 0,
      once: true,
    });

    await import("@themesberg/flowbite");
  });
</script>

<svelte:head>
  {#if import.meta.env.VITE_UMAMI_WEBSITE_ID !== null && import.meta.env.VITE_UMAMI_URL !== null}
    <script
      async
      defer
      data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}
      src={import.meta.env.VITE_UMAMI_URL}></script>
  {/if}
</svelte:head>

<MetaTags
  title="Anish De"
  description="I am a Fullstack Web Developer who likes to build applications, learn new things and share my knowledge through blog posts."
  canonical="https://anishde.dev/"
  openGraph={{
    type: "website",
    url: "https://anishde.dev/",
    title: "Anish De | Fullstack Web Developer",
    description:
      "I am a Fullstack Web Developer who likes to build applications, learn new things and share my knowledge through blog posts.",
    images: [
      {
        url: "https://anishde.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Anish De Og Image",
      },
    ],
    profile: {
      firstName: "Anish",
      lastName: "De",
      username: "AnishDe12020",
      gender: "male",
    },
  }}
  twitter={{
    cardType: "summary_large_image",
    site: "@AnishDe12020",
    handle: "@AnishDe12020",
  }}
  additionalMetaTags={[
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ]}
/>

<JsonLd
  schema={{
    "@type": "Person",
    name: "Anish De",
    url: "https://anishde.dev/",
    sameAs: [
      "https://twitter.com/AnishDe12020",
      "https://github.com/AnishDe12020",
      "https://hashnode.com/@AnishDe12020",
      "https://www.showwcase.com/",
      "https://www.youtube.com/anishtechtutorials",
      "https://www.youtube.com/c/AnishTechTutorials/",
      "https://www.polywork.com/AnishDe12020",
      "https://anishde12020.medium.com/",
      "https://www.freecodecamp.org/news/author/anishde12020/",
    ],
  }}
/>

<div class="max-w-[1920px] mx-auto">
  <a
    href="#content"
    class="bg-accent text-secondary absolute top-0 -translate-y-16 focus:-translate-y-0 p-4 rounded-br-2xl"
    rel="external">Skip To Content</a
  >
  <BackToTop />
  <Header />
  <slot />
  <Footer />
  <Socials
    socialsData={data.socials}
    classNames="fixed bottom-8 left-8 flex-col space-y-6 hidden md:flex"
    showText
  />
</div>
