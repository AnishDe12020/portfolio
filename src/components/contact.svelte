<script>
  import SectionHeading from "./section-heading.svelte";

  export let emailAddress;
</script>

<SectionHeading id="contact">Contact</SectionHeading>
<div
  class="mx-4 md:mx-24 lg:mx-32 xl:mx-40 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start"
>
  <p class="text-white text-2xl text-center mx-4 lg:text-left">
    You can reach out to me on my email address <a
      class="text-accent hover:opacity-60"
      href={`mailto:${emailAddress}`}>{emailAddress}</a
    >
  </p>
  <form
    class="flex flex-col justify-center lg:justify-start items-center lg:items-start space-y-8 mt-8 lg:-mt-8"
  >
    <div class="flex flex-col">
      <label for="email" class="text-white mb-4">Email</label>
      <input
        type="email"
        placeholder="john.doe@example.com"
        id="email"
        class="rounded-lg bg-secondary text-accent border-accent border-2 px-4 py-2 lg:w-96 xl:w-[32rem]"
      />
    </div>
    <div class="flex flex-col">
      <label for="subject" class="text-white mb-4">Subject</label>
      <input
        type="text"
        id="subject"
        class="rounded-lg bg-secondary text-accent border-accent border-2 px-4 py-2 lg:w-96 xl:w-[32rem]"
      />
    </div>
    <div class="flex flex-col">
      <label for="msessage" class="text-white mb-4">Message</label>
      <textarea
        id="message"
        class="rounded-lg bg-secondary text-accent border-accent border-2 px-4 py-2 lg:w-80 xl:w-96"
        rows="10"
      />
    </div>
  </form>
</div>
