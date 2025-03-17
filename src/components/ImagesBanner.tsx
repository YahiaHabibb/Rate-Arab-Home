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

// interface ImagesBannerProps {
//     className?: string;
// }

// const bannerImages = [
//     { title: "bannerOne", source: bannerOne },
//     { title: "bannerTwo", source: bannerTwo },
//     { title: "bannerThree", source: bannerThree },
//     { title: "bannerFour", source: bannerFour },
//     { title: "bannerFive", source: bannerFive },
// ];

// const ImagesBanner: React.FC<ImagesBannerProps> = ({ className }) => {
//     return (
//             <div className={`relative ${className}`}>
//                 <Carousel
//                     opts={{ align: "start", loop: true }}
//                     orientation="vertical"
//                     className="w-full"
//             >
//             <CarouselContent>
//                 {bannerImages.map((image, index) => (
//                     <CarouselItem key={index}>
//                     <div>
//                         <Card>
//                             <CardContent>
//                             <Image
//                                 src={image.source}
//                                 alt={image.title}
//                                 className="w-full"
//                                 height={1080}
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

// export default ImagesBanner;
