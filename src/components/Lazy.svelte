<script>
  let loadComponent;
  export { loadComponent as this };

  const componentPromise = loadComponent();
</script>

{#await componentPromise}
  <slot name="loading">Loading...</slot>
{:then { default: Component }}
  <slot name="component" {Component} />
{/await}
