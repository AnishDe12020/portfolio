import { ReactNode } from "react"

import { getPhotos } from "@/lib/functions/photos"
import PhotosPageComponent from "@/components/pages/photos"

const PhotosPage = async ({ children }: { children: ReactNode }) => {
  const photos = await getPhotos()

  if (!photos) {
    return <div>Something went wrong</div>
  }

  const { potraitPhotos, landscapePhotos } = photos

  return (
    <PhotosPageComponent
      potraitPhotos={potraitPhotos}
      landscapePhotos={landscapePhotos}
    >
      {children}
    </PhotosPageComponent>
  )
}

export default PhotosPage
