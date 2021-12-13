<script>
  import { format, parseISO } from "date-fns";
  export let blogPosts;
</script>

<div
  class="flex flex-col md:flex-row items-center justify-center mx-4 md:ms-16 mt-8"
>
  {#each blogPosts as post}
    <div class="p-4">
      <div
        class="bg-secondary rounded-xl shadow-md shadow-secondary p-4 hover:shadow-lg hover:shadow-accent transition duration-150 ease-out"
      >
        <img src={post.coverImage} alt={post.title} />
        <h2 class="mt-4 text-2xl font-bold text-white text-wra">
          {post.title}
        </h2>
        <span class="text-gray-300 text-lg"
          >{format(parseISO(post.dateAdded), "PPP")}</span
        >
        <p class="mt-2 text-accent break-words">{post.brief}</p>
      </div>
    </div>
  {/each}
</div>
