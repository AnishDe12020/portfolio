<script>
  import Icon from "./icons/index.svelte";
  export let skillsData;
</script>

<div class="flex flex-wrap justify-center items-center mx-12 mt-32">
  {#each skillsData as skill}
    <a
      href={skill.url}
      class="group flex items-center justify-between p-4 md:p-6 bg-secondary rounded-full mx-4 my-4 h-28 w-28 transition-[width] duration-200 ease-in-out hover:w-64 hover:h-32 mb-4 hover:mb-0"
    >
      <Icon iconName={skill.name} className="h-16 w-16 text-white" />
      <p
        class="opacity-0 mr-4 text-xl text-accent hidden group-hover:opacity-100 group-hover:inline-block"
      >
        {skill.name}
      </p>
    </a>
  {/each}
</div>
