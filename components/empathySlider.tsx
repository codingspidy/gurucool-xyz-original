import Image from "next/image";
import image1 from "../images/slide-1.jpg";

import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// Import Swiper styles

export default function EmpathySlider() {
  return (
    <section className="section hidden">
      <h1 className="text-center text-6xl font-medium mb-12">Our stories</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center pb-12">
            <h1 className="text-3xl mb-4">The Yellow Pen</h1>
            <Image src={image1} alt=""></Image>
            <p className="mt-1">1-MINUTE READ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pb-12">
            <h1 className="text-3xl mb-4">The Yellow Pen</h1>
            <Image src={image1} alt=""></Image>
            <p className="mt-1">1-MINUTE READ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pb-12">
            <h1 className="text-3xl mb-4">The Yellow Pen</h1>
            <Image src={image1} alt=""></Image>
            <p className="mt-1">1-MINUTE READ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center pb-12">
            <h1 className="text-3xl mb-4">The Yellow Pen</h1>
            <Image src={image1} alt=""></Image>
            <p className="mt-1">1-MINUTE READ</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function EmpathySlider() {
//   return (
//     <div className="section empathySlider">
//       <h1 className="text-center text-6xl font-medium mb-12">Our stories</h1>
//       <Slider {...settings}>
//         <div className="flex flex-col items-center">
//           <h1 className="text-3xl mb-4">The Yellow Pen</h1>
//           <Image src={image1} alt=""></Image>
//         </div>
//         <div className="flex flex-col items-center">
//           <h1 className="text-3xl mb-4">The Yellow Pen</h1>
//           <Image src={image1} alt=""></Image>
//         </div>
//         <div className="flex flex-col items-center">
//           <h1 className="text-3xl mb-4">The Yellow Pen</h1>
//           <Image src={image1} alt=""></Image>
//         </div>
//         <div className="flex flex-col items-center">
//           <h1 className="text-3xl mb-4">The Yellow Pen</h1>
//           <Image src={image1} alt=""></Image>
//         </div>
//       </Slider>
//     </div>
//   );
// }
