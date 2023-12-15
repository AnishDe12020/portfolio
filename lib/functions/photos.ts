"use server"

export const getPhotos = async () => {
  const res = await fetch(
    "https://api.unsplash.com/users/anishde12020/photos?per_page=1000&order_by=popular&stats=true&quantity=30",
    {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  )

  if (!res.ok) {
    return null
  }

  const resData = await res.json()

  console.log(resData)

  const photos = resData.map((photo: any) => ({
    ...photo,
    orientation: photo.height > photo.width ? "portrait" : "landscape",
  }))

  const potraitPhotos = photos.filter(
    (photo: any) => photo.orientation === "portrait"
  )

  const landscapePhotos = photos.filter(
    (photo: any) => photo.orientation === "landscape"
  )

  return { photos, potraitPhotos, landscapePhotos }
}
