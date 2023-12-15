"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"

import usePhotos from "@/lib/hooks/usePhotos"

import PhotoCarousel from "./carousel"

const PhotoPageComponent = ({
  photo,
  photos,
  id,
}: {
  photo: any
  photos: any
  id: any
}) => {
  console.log({ photo })

  const { lastClickedPhoto } = usePhotos()

  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild key={`overlay-${lastClickedPhoto}`}>
        <motion.div className="z-10 fixed inset-0 bg-black/95 overflow-y-auto">
          <Dialog.Content asChild key={`content-${lastClickedPhoto}`}>
            <motion.div className="flex flex-col h-screen justify-center items-center focus-visible:outline-none">
              <motion.div
                layoutId={`image-container-${lastClickedPhoto}`}
                className="relative w-full sm:w-[480px]"
              >
                <motion.div layout layoutId={`image-${lastClickedPhoto}`}>
                  {/* <div className="flex flex-col h-screen justify-center items-center focus-visible:outline-none">
              <div className="relative w-full sm:w-[480px]">
                <div> */}
                  {/* <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    className="shadow-lg"
                  /> */}
                  <PhotoCarousel id={id} photos={photos} photo={photo} />
                </motion.div>
              </motion.div>
            </motion.div>
            {/* </div>
              </div>
            </div> */}
          </Dialog.Content>
        </motion.div>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}

export default PhotoPageComponent
