// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

import mobile from "../images/content/smart-learning.png";
import google from "../images/content/google.png";

export default function MobileSlider() {
    console.log('hi');
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={0}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1280px
          1024: {
            slidesPerView: 3,
            spaceBetween: 120,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col m-auto justify-center pb-20 items-center max-w-[285px]">
            <div>
              <Image src={google} alt="google"></Image>
            </div>
            <h1 className="font-semibold text-xl mb-4">Search</h1>
            <p className="text-center mb-6">
              Speak, scan, type, or draw to translate in over 100 languages
            </p>
            <div className="">
              <Image src={mobile} alt="mobile"></Image>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col m-auto justify-center items-center max-w-[285px]">
            <div>
              <Image src={google} alt="google"></Image>
            </div>
            <h1 className="font-semibold text-xl mb-4">Search</h1>
            <p className="text-center mb-6">
              Speak, scan, type, or draw to translate in over 100 languages
            </p>
            <div className="">
              <Image src={mobile} alt="mobile"></Image>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col m-auto justify-center items-center max-w-[285px]">
            <div>
              <Image src={google} alt="google"></Image>
            </div>
            <h1 className="font-semibold text-xl mb-4">Search</h1>
            <p className="text-center mb-6">
              Speak, scan, type, or draw to translate in over 100 languages
            </p>
            <div className="">
              <Image src={mobile} alt="mobile"></Image>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
