<script>
  import data from "../data.json";
</script>

<div class="flex flex-row items-center justify-center mx-12 mt-8">
  {#each data.blogPosts as post}
    <div class="w-1/2 p-4">
      <div class="bg-secondary rounded-xl shadow-lg p-4">
        <img src={post.coverImage} alt={post.title} />
        <h2 class=" mt-4 text-2xl font-bold text-white text-wra">
          {post.title}
        </h2>
        <p class="mt-2 text-accent">{post.brief}</p>
      </div>
    </div>
  {/each}
</div>
