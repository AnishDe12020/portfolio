"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion, MotionConfig } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"
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

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (lastViewedPhoto < photos?.length - 1) {
        changePhotoId(lastViewedPhoto + 1)
      }
    },
    onSwipedRight: () => {
      if (lastViewedPhoto > 0) {
        changePhotoId(lastViewedPhoto - 1)
      }
    },
    trackMouse: true,
  })

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

  //   const photo = photos.find((p: any) => p.lastViewedPhoto === lastViewedPhoto)

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
        {...handlers}
      >
        <div className="absolute top-0 right-0 flex items-center gap-2 p-3 text-white">
          <button
            onClick={() => router.push("/photos")}
            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white z-10"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
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

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {/* Buttons */}
          <div className="relative aspect-[3/2] max-h-full w-full">
            <>
              {lastViewedPhoto > 0 && (
                <button
                  className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => changePhotoId(lastViewedPhoto - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              )}
              {lastViewedPhoto + 1 < photos.length && (
                <button
                  className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => changePhotoId(lastViewedPhoto + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              )}
            </>
            <div className="absolute top-0 right-0 flex items-center gap-2 p-3 text-white">
              {/* {navigation ? (
                  <a
                    href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`}
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    target="_blank"
                    title="Open fullsize version"
                    rel="noreferrer"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                ) : (
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20pic%20from%20Next.js%20Conf!%0A%0Ahttps://nextjsconf-pics.vercel.app/p/${lastViewedPhoto}`}
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    target="_blank"
                    title="Open fullsize version"
                    rel="noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )} */}
              {/* <button
                  onClick={() =>
                    downloadPhoto(
                      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`,
                      `${lastViewedPhoto}.jpg`
                    )
                  }
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                  title="Download fullsize version"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button> */}
            </div>
          </div>
          {/* Bottom Nav bar */}
          <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
            <motion.div
              initial={false}
              className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
            >
              <AnimatePresence initial={false}>
                {photos.map((photo: any) => (
                  <motion.button
                    initial={{
                      width: "0%",
                      x: `${Math.max(
                        (lastViewedPhoto - 1) * -100,
                        15 * -100
                      )}%`,
                    }}
                    animate={{
                      scale: id === lastViewedPhoto ? 1.25 : 1,
                      width: "100%",
                      x: `${Math.max(lastViewedPhoto * -100, 15 * -100)}%`,
                    }}
                    exit={{ width: "0%" }}
                    onClick={() => changePhotoId(photo.index)}
                    key={photo.index}
                    className={`${
                      id === lastViewedPhoto
                        ? "z-20 rounded-md shadow shadow-black/50"
                        : "z-10"
                    } ${id === 0 ? "rounded-l-md" : ""} ${
                      id === photos.length - 1 ? "rounded-r-md" : ""
                    } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                  >
                    <Image
                      alt="small photos on the bottom"
                      width={180}
                      height={120}
                      className={`${
                        id === lastViewedPhoto
                          ? "brightness-110 hover:brightness-110"
                          : "brightness-50 contrast-125 hover:brightness-75"
                      } h-full transform object-cover transition`}
                      src={photo.urls.small}
                    />
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  )
}

export default PhotoCarousel
