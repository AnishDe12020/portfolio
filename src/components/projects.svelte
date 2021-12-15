<script>
  export let projects;
</script>

<div>
  {#each projects as project}
    <div class="flex flex-col md:flex-row mt-8 mx-8 md:mt-16 md:mx-16">
      <img src={project.image} class="w-11/12 md:w-1/2 rounded-xl" />
      <div
        class="flex flex-col justify-center items-center md:justify-between mt-8 md:mt-0 md:ml-16"
      >
        <div
          class="flex flex-col justify-center items-center md:justify-left md:items-start"
        >
          <h2 class="text-7xl font-bold text-white">{project.name}</h2>
          <p
            class="text-gray-300 font-semibold text-3xl mt-8 text-center md:text-left"
          >
            {project.description}
          </p>
        </div>

        <a href={project.url} class="text-gray-100">{project.url}</a>
      </div>
    </div>
  {/each}
</div>
