<script>
  import "../app.css";
  import WipBanner from "../components/wip-banner.svelte";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
</script>

<div>
  <WipBanner />
  <Header />
  <slot />
  <Footer />
</div>
