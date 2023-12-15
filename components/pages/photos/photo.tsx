"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "framer-motion"

const PhotoPageComponent = ({ photo }: { photo: any }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay asChild key={`overlay-${photo.id}`}>
        <motion.div className="z-10 fixed inset-0 bg-black/95 overflow-y-auto">
          <Dialog.Content asChild key={`content-${photo.id}`}>
            <motion.div className="flex flex-col h-screen justify-center items-center focus-visible:outline-none">
              <motion.div
                layoutId={`image-container-${photo.id}`}
                className="relative w-full sm:w-[480px]"
              >
                <motion.div layout layoutId={`image-${photo.id}`}>
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    className="shadow-lg"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </Dialog.Content>
        </motion.div>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}

export default PhotoPageComponent
