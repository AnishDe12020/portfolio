"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"

import usePhotos from "@/lib/hooks/usePhotos"

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
  const pathname = usePathname()

  const isOpen = pathname !== "/photos"

  const lastViewedPhotoRef = useRef<HTMLDivElement>(null)

  const { lastViewedPhoto, setLastClickedPhoto, lastClickedPhoto } = usePhotos()

  const handleOpenChange = (state: boolean) => {
    if (!state) {
      setLastClickedPhoto(lastViewedPhoto)
      router.push("/photos", { scroll: false })
    }
  }
  //   const [currentMovieId, setCurrentMovieId] = useState<number>(
  //     isOpen ? (searchParams.get("id") as unknown as number) : 1
  //   )

  //   useEffect(() => {
  //     // if (isOpen) {
  //     //   console.log({ searchParams: router.par })
  //     //   setLastViewedPhoto(searchParams.get("id") as unknown as number)
  //     // }
  //   }, [isOpen, searchParams, setLastViewedPhoto])

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && lastViewedPhotoRef.current) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" })
    }
  }, [lastViewedPhoto])

  return (
    <div className="magicpattern">
      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <motion.div className="h-[100vh] relative py-16 px-8 md:py-24 md:px-32 lg:py-36 lg:px-56">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {children}
            {potraitPhotos &&
              potraitPhotos.map((photo: any) => {
                const handleClick = () => {
                  router.push(`photos/${photo.index}`, {
                    scroll: false,
                  })
                  setLastClickedPhoto(photo.index)
                }

                return (
                  <motion.div
                    key={photo.index}
                    onClick={handleClick}
                    layoutId={`image-container-${photo.index}`}
                    className={`relative flex mb-8 cursor-pointer ${
                      lastClickedPhoto === photo.index ? "relative z-[1]" : ""
                    }`}
                    ref={
                      lastViewedPhoto === photo.index
                        ? lastViewedPhotoRef
                        : undefined
                    }
                  >
                    <motion.div layout layoutId={`image-${photo.index}`}>
                      <Image
                        src={photo.urls.small}
                        alt={photo.alt_description}
                        height={photo.height}
                        width={photo.width}
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
                <div key={photo.index}>
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
