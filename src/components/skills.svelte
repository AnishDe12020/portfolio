<script>
  import Icon from "./icons/index.svelte";
  export let skillsData;
</script>

<div class="flex flex-wrap justify-center items-center mx-12 mt-32">
  {#each skillsData as skill}
    <div>
      <Icon
        iconName={skill.name}
        className="h-16 w-16 md:h-24 md:w-24 mx-4 my-4 text-white"
      />
    </div>
  {/each}
</div>
