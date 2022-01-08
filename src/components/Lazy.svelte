<script>
  import viewport from "../utils/useViewportAction";

  let loadComponent;
  export { loadComponent as this };

  let isShowingComponent = false;
  let componentPromise;
</script>

{#if !isShowingComponent}
  <div
    use:viewport
    on:enterViewport={() => {
      componentPromise = loadComponent();
      isShowingComponent = true;
    }}
  />
{:else}
  {#await componentPromise}
    <slot name="loading">Loading...</slot>
  {:then { default: Component }}
    <slot name="component" {Component} />
  {/await}
{/if}
