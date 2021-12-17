<script>
  import "../app.css";
  import WipBanner from "../components/wip-banner.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import BackToTop from "../components/back-to-top.svelte";
</script>

<div>
  <BackToTop />
  <WipBanner />
  <Header />
  <slot />
  <Footer />
</div>
