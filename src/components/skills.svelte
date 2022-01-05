<script>
  import Icon from "./icons/index.svelte";
  import SectionHeading from "./section-heading.svelte";
  export let skillsData;
</script>

<div data-aos="fade-down">
  <SectionHeading id="skills">Skills</SectionHeading>

  <div class="flex flex-wrap justify-center items-center mx-2 md:mx-12">
    {#each skillsData as skill}
      <a
        href={skill.url}
        aria-label={skill.name}
        target="_blank"
        class="flex items-center justify-center bg-secondary rounded-full h-28 w-28 transition duration-200 ease-in-out my-6 mx-6 hover:shadow-accent hover:shadow-md"
      >
        <Icon iconName={skill.name} className="h-16 w-16 text-white" />
      </a>
    {/each}
  </div>
</div>
