// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import greatmind1 from "../images/greatminds/great-mind-1.png";
import greatmind2 from "../images/greatminds/great-mind-2.png";
import greatmind3 from "../images/greatminds/great-mind-3.png";

export default function GreatMindsSlider() {
  return (
    <>
      <Swiper
        className="mySwiper greatminds"
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
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="m-auto max-w-[362px] pb-24">
            <div className="mb-4">
              <Image src={greatmind1} alt="person"></Image>
            </div>
            <div className="w-full text-white">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-medium text-2xl mb-2">Parvez Jasani</h1>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
              <h2 className="font-light text-lg">CEO,</h2>
              <h2 className="font-light text-lg">Zulie Ventures Inc.</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-auto max-w-[362px] pb-24">
            <div className="mb-4">
              <Image src={greatmind2} alt="person"></Image>
            </div>
            <div className="w-full text-white">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-medium text-2xl mb-2">Aaquib Hussain</h1>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
              <h2 className="font-light text-lg">Founding Partner,</h2>
              <h2 className="font-light text-lg">FreeFlow Venture Builders.</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-auto max-w-[362px] pb-24">
            <div className="mb-4">
              <Image src={greatmind3} alt="person"></Image>
            </div>
            <div className="w-full text-white">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-medium text-2xl mb-2">Aaquib Hussain</h1>
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </div>
              <h2 className="font-light text-lg">Founder,</h2>
              <h2 className="font-light text-lg">Let’s Scale Up</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
