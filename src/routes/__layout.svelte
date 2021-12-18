<script>
  import "../app.css";
  import WipBanner from "../components/wip-banner.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import BackToTop from "../components/back-to-top.svelte";
  import Socials from "../components/socials.svelte";
  import data from "../data.json";
</script>

<div>
  <BackToTop />
  <WipBanner />
  <Header />
  <slot />
  <Footer />
  <Socials
    socialsData={data.socials}
    classNames="fixed bottom-8 left-8 flex-col space-y-6 hidden md:flex"
    iconClassNames="animate-bounce"
    showText
  />
</div>
