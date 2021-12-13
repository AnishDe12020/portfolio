<script>
  import { format, parseISO } from "date-fns";
  export let blogPosts;
  export let blogBaseUrl;
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-4 mt-8"
>
  {#each blogPosts as post}
    <a
      href={`${blogBaseUrl}${post.slug}`}
      class="flex justify-center items-center focus:ring focus:outline-none p-4"
    >
      <div
        class="bg-secondary rounded-xl shadow-md shadow-secondary p-4 hover:shadow-lg hover:shadow-accent transition duration-150 ease-out w-auto h-auto md:w-96 md:h-96"
      >
        <picture>
          <source
            srcset={`${post.coverImage}?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&format=webp&q=75`}
            type="image/webp"
          />
          <source
            srcset={`${post.coverImage}?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&format=avif&q=75`}
            type="image/avif"
          />
          <source
            srcset={`${post.coverImage}?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&q=75`}
            type="image/png"
          />
          <img
            src={post.coverImage}
            alt={post.title}
            class="rounded-2xl shadow-md"
            width="400px"
            height="210px"
          />
        </picture>
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
