import { useAtom } from "jotai"

import { lastClickedPhotoAtom, lastViewedPhotoAtom } from "../store/photos"

const usePhotos = () => {
  const [lastViewedPhoto, setLastViewedPhoto] = useAtom(lastViewedPhotoAtom)
  const [lastClickedPhoto, setLastClickedPhoto] = useAtom(lastClickedPhotoAtom)

  return {
    lastViewedPhoto,
    setLastViewedPhoto,
    lastClickedPhoto,
    setLastClickedPhoto,
  }
}

export default usePhotos
