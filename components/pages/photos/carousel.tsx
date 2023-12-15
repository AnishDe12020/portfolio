"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import useKeypress from "react-use-keypress"

import usePhotos from "@/lib/hooks/usePhotos"

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const PhotoCarousel = ({
  photos,
  photo,
  id,
}: {
  photos: any
  photo: any
  id: any
}) => {
  const { lastViewedPhoto, setLastViewedPhoto } = usePhotos()

  const router = useRouter()

  const [direction, setDirection] = useState(0)

  const changePhotoId = (id: number) => {
    if (id > lastViewedPhoto) {
      setDirection(1)
    } else {
      setDirection(-1)
    }

    setLastViewedPhoto(id)

    router.push(`${id}`, {
      scroll: false,
    })
  }

  //   const handlers = useSwipeable({
  //     onSwipedLeft: () => {
  //       if (lastViewedPhoto < photos?.length - 1) {
  //         changePhotoId(lastViewedPhoto + 1)
  //       }
  //     },
  //     onSwipedRight: () => {
  //       if (lastViewedPhoto > 0) {
  //         changePhotoId(lastViewedPhoto - 1)
  //       }
  //     },
  //     trackMouse: true,
  //   })

  useKeypress("ArrowRight", () => {
    if (lastViewedPhoto + 1 < photos.length) {
      changePhotoId(lastViewedPhoto + 1)
    }
  })

  useKeypress("ArrowLeft", () => {
    if (lastViewedPhoto > 0) {
      changePhotoId(lastViewedPhoto - 1)
    }
  })

  //   const photo = photos.find((p: any) => p.index === lastViewedPhoto)

  console.log({ photo, a: "b", photos, lastViewedPhoto })

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div
        className="relative z-50 flex w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
        // {...handlers}
      >
        <div className="w-full overflow-hidden">
          <div className="relative flex h-screen items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={lastViewedPhoto}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Image
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  height={photo.height}
                  width={photo.width}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  )
}

export default PhotoCarousel
