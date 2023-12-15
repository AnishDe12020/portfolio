"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"

const PhotosPageComponent = ({
  potraitPhotos,
  landscapePhotos,
  children,
}: {
  potraitPhotos: any
  landscapePhotos: any
  children: any
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const isOpen = pathname !== "/photos"
  const handleOpenChange = (state: boolean) => {
    if (!state) {
      router.push("/photos", { scroll: false })
    }
  }
  const [currentMovieId, setCurrentMovieId] = useState<number>(
    isOpen ? (searchParams.get("id") as unknown as number) : 1
  )

  return (
    <div className="magicpattern">
      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <motion.div className="h-[100vh] relative py-16 px-8 md:py-24 md:px-32 lg:py-36 lg:px-56">
          <motion.div className="grid grid-cols-3 gap-4 mt-16">
            {children}
            {potraitPhotos &&
              potraitPhotos.map((photo: any) => {
                const handleClick = () => {
                  router.push(`photos/${photo.id}`, {
                    scroll: false,
                  })
                  setCurrentMovieId(photo.id)
                }

                return (
                  <motion.div
                    key={photo.id}
                    onClick={handleClick}
                    layoutId={`image-container-${photo.id}`}
                    className={`relative flex mb-8 cursor-pointer ${
                      currentMovieId === photo.id ? "relative z-[1]" : ""
                    }`}
                  >
                    <motion.div layout layoutId={`image-${photo.id}`}>
                      <img
                        src={photo.urls.small}
                        alt={photo.alt_description}
                        className="shadow-lg"
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
          </motion.div>

          <motion.div className="grid grid-cols-3 gap-4 mt-16">
            {landscapePhotos &&
              landscapePhotos.map((photo: any) => (
                <div key={photo.id}>
                  <img src={photo.urls.small} alt={photo.alt_description} />
                </div>
              ))}
          </motion.div>
        </motion.div>
      </Dialog.Root>
    </div>
  )
}

export default PhotosPageComponent
