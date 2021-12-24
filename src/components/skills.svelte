<script>
  import Icon from "./icons/index.svelte";
  import SectionHeading from "./section-heading.svelte";
  export let skillsData;
</script>

<SectionHeading id="skills">Skills</SectionHeading>
<div class="mx-2 md:mx-12">
  <div class="flex flex-wrap justify-center items-center">
    {#each skillsData as skill}
      <a
        href={skill.url}
        target="_blank"
        class="flex items-center justify-center bg-secondary rounded-full h-28 w-28 transition duration-400 ease-in-out my-6 mx-6 hover:shadow-accent hover:shadow-md"
        data-tilt
        data-tilt-scale="1.5"
      >
        <Icon iconName={skill.name} className="h-16 w-16 text-white" />
      </a>
    {/each}
  </div>
</div>
