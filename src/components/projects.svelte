<script>
  import Icon from "./icons/index.svelte";
  import SectionHeading from "./section-heading.svelte";
  export let projects;
</script>

<SectionHeading id="projects">Projects</SectionHeading>
<div id="projects" class="mx-4 md:mx-24 lg:mx-32 xl:mx-40">
  {#each projects as project}
    <div
      class="flex flex-col justify-center items-center lg:items-stretch lg:flex-row"
      data-aos="fade-down"
    >
      <picture class="w-11/12 md:w-1/2">
        <source
          media="(min-width: 1024px)"
          srcset={`https://ctohm-edge-resizer.anishde12020.workers.dev/vw=0.6_output=auto/${
            new URL(project.image).hostname
          }${new URL(project.image).pathname}`}
        />
        <source
          media="(min-width: 768px)"
          srcset={`https://ctohm-edge-resizer.anishde12020.workers.dev/vw=0.8_output=auto/${
            new URL(project.image).hostname
          }${new URL(project.image).pathname}`}
        />
        <source
          srcset={`https://ctohm-edge-resizer.anishde12020.workers.dev/vw=0.8_output=auto/${
            new URL(project.image).hostname
          }${new URL(project.image).pathname}`}
        />
        <img
          src={`https://ctohm-edge-resizer.anishde12020.workers.dev/output=auto/${
            new URL(project.image).hostname
          }${new URL(project.image).pathname}`}
          class="rounded-xl"
          alt={project.name}
          loading="lazy"
          height="1200"
          width="627"
        />
      </picture>
      <div
        class="flex flex-col justify-center items-center lg:justify-between lg:items-start mt-8 lg:mt-0 lg:ml-16"
      >
        <div
          class="flex flex-col justify-center items-center lg:justify-left lg:items-start"
        >
          <h3 class="text-5xl md:text-6xl lg:text-7xl	 font-bold text-white">
            {project.name}
          </h3>
          <p
            class="text-gray-300 font-semibold text-xl md:text-2xl lg:text-3xl mt-2 md:mt-4 xl:mt-8 text-center lg:text-left"
          >
            {project.description}
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center lg:items-start lg:justify-start mt-8 lg:mt-0"
        >
          <a
            href={project.url}
            target="_blank"
            class="border-2 rounded-2xl px-4 py-2 border-accent text-accent hover:bg-accent hover:text-secondary transition dureation-300 text-md md:text-lg lg:text-xl text-center lg:text-left mb-4"
          >
            <div class="flex">
              <Icon iconName="link" className="w-6 h-6 mr-2 lg:mr-4" />
              <span>{project.url}</span>
            </div>
          </a>

          <a
            href={project.github}
            target="_blank"
            class="border-2 rounded-2xl px-4 py-2 border-accent text-accent hover:bg-accent hover:text-secondary transition dureation-300 text-md md:text-lg lg:text-xl text-center lg:text-left"
          >
            <div class="flex">
              <Icon iconName="github" className="w-6 h-6 mr-2 lg:mr-4" />
              <span>{project.github.slice(19)}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
