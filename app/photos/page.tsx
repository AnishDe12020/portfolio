import { createApi } from "unsplash-js"

const PhotosPage = async () => {
  //   const unsplash = createApi({
  //     accessKey: process.env.UNSPLASH_ACCESS_KEY!,
  //     cache: "force-cache",
  //     next: { revalidate: 3600 },
  //   })

  //   const res = await unsplash.users.getPhotos({
  //     username: "anishde12020",
  //     stats: true,
  //     perPage: 1000,
  //   })

  const res = await fetch(
    "https://api.unsplash.com/users/anishde12020/photos?per_page=1000&order_by=popular&stats=true&quantity=30",
    {
      //   cache: "force-cache",
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  )

  //   console.log(res)

  if (!res.ok) {
    return <div>error</div>
  }

  const resData = await res.json()

  console.log(resData)

  const photos = resData.map((photo: any) => ({
    ...photo,
    orientation: photo.height > photo.width ? "portrait" : "landscape",
  }))

  const portraitPhotos = photos.filter(
    (photo: any) => photo.orientation === "portrait"
  )

  const landscapePhotos = photos.filter(
    (photo: any) => photo.orientation === "landscape"
  )

  return (
    <div className="magicpattern">
      {/* <p>{JSON.stringify(photos)}</p> */}
      <div className="h-[100vh] relative py-16 px-8 md:py-24 md:px-32 lg:py-36 lg:px-56">
        <div className="grid grid-cols-3 gap-4">
          {/* {photos &&
            photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </div>
            ))} */}

          {portraitPhotos &&
            portraitPhotos.map((photo: any) => (
              <div key={photo.id}>
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="shadow-lg"
                />
              </div>
            ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16">
          {landscapePhotos &&
            landscapePhotos.map((photo: any) => (
              <div key={photo.id}>
                <img src={photo.urls.small} alt={photo.alt_description} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PhotosPage
