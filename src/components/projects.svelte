<script>
  export let projects;
</script>

<div>
  {#each projects as project}
    <div class="flex m-8 h-96 w-auto">
      <img src={project.image} class="rounded-xl" />
      <div class="flex flex-col justify-between ml-16">
        <div>
          <h2 class="text-7xl font-bold text-white">{project.name}</h2>
          <p class="text-gray-300 font-semibold text-3xl mt-4">
            {project.description}
          </p>
        </div>

        <a href={project.url} class="text-gray-100">{project.url}</a>
      </div>
    </div>
  {/each}
</div>
