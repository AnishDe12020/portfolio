<script>
  import "../app.css";
  import WipBanner from "../components/wip-banner.svelte";
  import Header from "../components/header.svelte";
</script>

<div>
  <WipBanner />
  <Header />
  <slot />
</div>
