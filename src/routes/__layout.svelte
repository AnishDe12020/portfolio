<script>
  import "../app.css";
  import WipBanner from "../components/wip-banner.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import BackToTop from "../components/back-to-top.svelte";
  import Socials from "../components/socials.svelte";
  import data from "../data.json";

  import { onMount } from "svelte";
  import "aos/dist/aos.css";

  let AOS;
  onMount(async () => {
    AOS = (await import("aos")).default;
    AOS.init({
      duration: 500,
      delay: 0,
    });
  });
</script>

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
