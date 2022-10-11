/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import company2 from "../images/news/company-2.png";
import company3 from "../images/news/company-3.png";
import company4 from "../images/news/company-4.svg";
import company5 from "../images/news/company-5.webp";
import company6 from "../images/news/company-6.jpg";
import company7 from "../images/news/company-7.png";
import company8 from "../images/news/company-8.png";
import company9 from "../images/news/company-9.png";
import company10 from "../images/news/company-10.png";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css/pagination";
export default function NewsSlider() {
  return (
    <>
      <section className={`section news-section`}>
        <div className='container-fluid'>
          <h1 className='text-center sm:text-4xl text-3xl font-medium mb-8 md:text-5xl'>In the news</h1>
          <div className=''>
            <Swiper
              className='mySwiper flex items-center justify-between'
              modules={[Autoplay, Pagination]}
              //spaceBetween={30}
					slidesPerView={8}
              breakpoints={{
                320: {
                  width: 320,
                  slidesPerView: 2,
                 // spaceBetween: 15,
                },
                640: {
                  width: 640,
                  slidesPerView: 2,
                  //spaceBetween: 20,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                 // spaceBetween: 20,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 6,
                 // spaceBetween: 30,
                },
                1140: {
                  width: 1024,
                  slidesPerView: 8,
                 // spaceBetween: 30,
                },
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay
              loop
              >
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company2} height='48' width='110' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company3} height='44' width='110' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company4} height='35' width='110' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company5} height='59' width='110' alt='' />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company6} height='110' width='110' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company7} height='61' width='110' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company8} height='120' width='110' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company9} width='110' height='42' alt='' />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='mx-6'>
                  <Image src={company10} width='110' height='42' alt='' />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
