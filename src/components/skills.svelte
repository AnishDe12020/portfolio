<script>
  import Icon from "./icons/index.svelte";
  export let skillsData;
</script>

<div class="mx-2 md:mx-12 mt-32">
  <h2
    class="text-accent text-5xl md:text-6xl font-bold mb-8 text-center lg:text-left mx-24 md:mx-32 lg:mx-48"
  >
    Skills
  </h2>
  <div class="flex flex-wrap justify-center items-center">
    {#each skillsData as skill}
      <a
        href={skill.url}
        target="_blank"
        class="flex items-center justify-center bg-secondary rounded-full h-28 w-28 transition-[width,height,margin] duration-200 ease-in-out hover:w-32 hover:h-32 my-6 mx-6 hover:mx-4 hover:my-4"
      >
        <Icon iconName={skill.name} className="h-16 w-16 text-white" />
      </a>
    {/each}
  </div>
</div>
