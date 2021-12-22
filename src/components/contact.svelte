<script>
  import SectionHeading from "./section-heading.svelte";

  export let emailAddress;
</script>

<SectionHeading id="contact">Contact</SectionHeading>
<div
  class="mx-4 md:mx-24 lg:mx-32 xl:mx-40 flex flex-col lg:flex-row justify-between"
>
  <p class="text-white text-2xl text-center mx-4 lg:text-left">
    You can reach out to me on my email address <a
      class="text-accent hover:opacity-60"
      href={`mailto:${emailAddress}`}>{emailAddress}</a
    >
  </p>
  <form>
    <input type="email" placeholder="john.doe@example.com" id="email" />
    <input type="text" placeholder="Subject" id="subject" />
    <textarea placeholder="Your Message" id="message" />
  </form>
</div>
