<script>
  import Icon from "./icons/index.svelte";
  export let skillsData;
</script>

<div class="mx-12 mt-32">
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
        class="group flex items-center justify-center hover:justify-between p-4 md:p-6 bg-secondary rounded-full mx-4 my-4 h-28 w-28 transition-[width] duration-200 ease-in-out hover:w-64 hover:h-32 mb-4 hover:mb-0"
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
</div>
