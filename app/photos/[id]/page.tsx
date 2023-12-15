"use server"

import { getPhotos } from "@/lib/functions/photos"
import PhotoPageComponent from "@/components/pages/photos/photo"

const PhotoPage = async ({ params: { id } }: { params: { id: string } }) => {
  const photosRes = await getPhotos()

  if (!photosRes) {
    return <div>Something went wrong</div>
  }

  const { photos } = photosRes

  const photo = photos.find((photo: any) => photo.id === id)

  return <PhotoPageComponent photo={photo} />
}

export default PhotoPage
