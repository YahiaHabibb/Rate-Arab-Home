// import {
//     bannerFive,
//     bannerFour,
//     bannerOne,
//     bannerThree,
//     bannerTwo,
//   } from "@/assets";
// // import Image from "next/image";
// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Image from "next/image";
 
// export default function ImagesBanner() {
//     const bannerImages = [
//         { title: "bannerOne", source: bannerOne },
//         { title: "bannerTwo", source: bannerTwo },
//         { title: "bannerThree", source: bannerThree },
//         { title: "bannerFour", source: bannerFour },
//         { title: "bannerFive", source: bannerFive },
//     ];
//     return (
//             <div className="relative h-[200px]">
//                 <Carousel
//                     opts={{
//                     align: "start",
//                     }}
//                     orientation="vertical"
//                     className="w-full"
//             >
//             <CarouselContent className="object-cover object-center h-[200px]">
//                 {bannerImages.map((image, index) => (
//                     <CarouselItem key={index} className="pt-1 ">
//                     <div className="p-1 h-[200px]">
//                         <Card>
//                             <CardContent className="flex flex-col items-center justify-center p-4">
//                             <Image
//                                 src={image.source}
//                                 alt={image.title}
//                                 className="w-full h-[200px] object-cover rounded-md"
//                             />
//                             </CardContent>
//                         </Card>
//                     </div>
//                     </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//             </Carousel>
//         </div>
//         )
// };