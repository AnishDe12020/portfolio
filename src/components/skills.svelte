<script>
  import Icon from "./icons/index.svelte";
  export let skillsData;
</script>

<div class="flex flex-wrap">
  {#each skillsData as skill}
    <div>
      <Icon iconName={skill.name} className="h-6 w-6 text-white" />
    </div>
  {/each}
</div>
