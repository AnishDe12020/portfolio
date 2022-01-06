<script>
  import "../app.css";
  import WipBanner from "../components/wip-banner.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import BackToTop from "../components/back-to-top.svelte";
  import Socials from "../components/socials.svelte";
  import data from "../data.json";

  import { MetaTags } from "svelte-meta-tags";

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
  });
</script>

<MetaTags
  title="Anish De"
  description="14 year old Fullstack Web Developer, Tech Enthusiast, Blogger, Tech YouTuber. Likes to learn new things, build applications, and share their knowledge through blog posts."
  canonical="https://anishde.dev/"
  openGraph={{
    type: "website",
    url: "https://anishde.dev/",
    title:
      "Anish De | 14 • Tech Enthusiast • Fullstack Web Developer • Blogger • Tech YouTuber",
    description:
      "14 year old Fullstack Web Developer, Tech Enthusiast, Blogger, Tech YouTuber. Likes to learn new things, build applications, and share their knowledge through blog posts.",
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

<div class="max-w-[1920px] mx-auto">
  <a
    href="#content"
    class="bg-accent text-secondary absolute -translate-y-full focus:translate-y-0 p-4 rounded-br-2xl"
    rel="external">Skip To Content</a
  >
  <BackToTop />
  <WipBanner />
  <Header />
  <slot />
  <Footer />
  <Socials
    socialsData={data.socials}
    classNames="fixed bottom-8 left-8 flex-col space-y-6 hidden md:flex"
    showText
  />
</div>
