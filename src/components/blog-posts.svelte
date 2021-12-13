<script>
  import { format, parseISO } from "date-fns";
  export let blogPosts;
  export let blogBaseUrl;
</script>

<div
  class="flex flex-col md:flex-row items-center justify-center mx-4 md:ms-16 mt-8"
>
  {#each blogPosts as post}
    <a
      href={`${blogBaseUrl}${post.slug}`}
      class="focus:ring focus:outline-none p-4"
    >
      <div
        class="bg-secondary rounded-xl shadow-md shadow-secondary p-4 hover:shadow-lg hover:shadow-accent transition duration-150 ease-out w-auto h-auto md:w-96 md:h-96"
      >
        <img
          src={post.coverImage}
          alt={post.title}
          class="rounded-2xl shadow-md"
        />
        <h2 class="mt-4 text-xl font-bold text-white text-center md:text-left">
          {post.title}
        </h2>
        <h3 class="mt-2 text-gray-300 text-lg text-center md:text-left">
          {format(parseISO(post.dateAdded), "PPP")}
        </h3>
      </div>
    </a>
  {/each}
</div>
