// import { getPhotos } from "@/lib/functions/photos"

// const PhotosPage = async () => {
//   const photos = await getPhotos()

//   if (!photos) {
//     return <div>Something went wrong</div>
//   }

//   const { potraitPhotos, landscapePhotos } = photos

//   return (
//     <div className="magicpattern">
//       <div className="h-[100vh] relative py-16 px-8 md:py-24 md:px-32 lg:py-36 lg:px-56">
//         <div className="grid grid-cols-3 gap-4 mt-16">
//           {potraitPhotos &&
//             potraitPhotos.map((photo: any) => (
//               <div key={photo.id}>
//                 <img
//                   src={photo.urls.small}
//                   alt={photo.alt_description}
//                   className="shadow-lg"
//                 />
//               </div>
//             ))}
//         </div>

//         <div className="grid grid-cols-3 gap-4 mt-16">
//           {landscapePhotos &&
//             landscapePhotos.map((photo: any) => (
//               <div key={photo.id}>
//                 <img src={photo.urls.small} alt={photo.alt_description} />
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PhotosPage

export default function Default() {
  return null
}
