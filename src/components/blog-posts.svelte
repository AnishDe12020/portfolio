<script>
  import { format, parseISO } from "date-fns";
  export let blogPosts;
  export let blogBaseUrl;
</script>

<h2
  class="text-accent text-5xl md:text-6xl font-bold text-center lg:text-left mx-8 md:mx-24 lg:mx-32 xl:mx-40 mt-8 md:mt-16 lg:mt-32"
>
  Blog Posts
</h2>
<div
  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-4 md:mx-24 lg:mx-32 xl:mx-40"
>
  {#each blogPosts as post}
    <a
      href={`${blogBaseUrl}${post.slug}`}
      class="flex justify-center items-center focus:ring focus:outline-none p-4 md:py-8 lg:py-16 xl:py-24"
      target="_blank"
    >
      <div
        class="bg-secondary rounded-xl shadow-md shadow-secondary p-4 hover:shadow-lg hover:shadow-accent transition duration-400 ease-out w-auto h-auto md:h-96 md:w-96"
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
