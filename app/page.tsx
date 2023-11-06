"use client"

import { FaGithub, FaTwitter } from "react-icons/fa6"

export default function IndexPage() {
  return (
    <div className="magicpattern">
      <div className="h-[100vh] relative py-16 px-8 md:py-24 md:px-32 lg:py-36 lg:px-56">
        <section className="flex flex-col">
          <div className="flex flex-col items-start gap-2 w-fit">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              gm, I&apos;m Anish
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground text-wrap">
              web3 developer, building tools for the future
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://twitter.com/AnishDe12020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/AnishDe12020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
