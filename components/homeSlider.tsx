/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
export default function HomeSlider() {
  return (
    <div className="m-auto relative z-50">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, Navigation]}
        navigation
      >
        <SwiperSlide>
          <div className="dotbg-1 lg:mx-12">
            {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2019
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg leading-10 font-semibold mt-1 ">
                Gurucool Learning Cafe was inaugurated.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2019
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                The Parking Kids Project.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2019
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1 ">
                 Gurucool Home – {"India's"} first formalised Home tuition service.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dotbg-2 lg:mx-12">
            {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2019
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Inaugurated Gurucool – {"India's"} Next Gen Coaching Classes; opened 5 centres in Delhi.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2020
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Shot first podcast at Gurucool Studio.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2020
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Lockdown in India. All centres closed.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
          <div className="dotbg-3 lg:mx-12">
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2020
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                  Co-Give 20: A call for sustainable and continuous help amidst the uncertainty of lockdown & fragile economy.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2020
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Ghar Pe Padhaai, an initiative to make online learning fun, accessible and easy during the Pandemic.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2020
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Did first beta testing of gurucool.xyz in JMI University with 2000+ students.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
          <div className="dotbg-3 lg:mx-12">
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2020
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Started Guruship – Gurucool’s coveted internship program.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2021
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Gurucool Padhaai x Government of Bihar – Started piloting in multiple state universities.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2021
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Launched Padhaai Beta on Playstore, a 100% free learning platform with more than 1000+ curated courses.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
          <div className="dotbg-3 lg:mx-12">
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2021
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Crossed the 100+ team members from across India.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2021
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Inaugurated first Gurucool Educentre since the pandemic.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2021
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Raised $150K in a Pre-Seed round.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
          <div className="dotbg-3 lg:mx-12">
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Became 300K+ strong community with 2M reach.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Launched Gurucool’s first Youtube channel.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Offered .5M USD worth of credits and assistance from AWS, Google Cloud & Microsoft.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
          <div className="dotbg-3 lg:mx-12">
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Only edtech startup among top 5 startups in Bihar announced in Bihar Startup Enclave.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Free workspace offered in JMI University.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                 Inauguration of 4-Storey Gurucool Educentre on 22 April, 2022 in Delhi.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <Image src="/Dots1.png" width={100} height={100} alt=""/> */}
          <div className="dotbg-3 lg:mx-12">
            <div className="flex flex-wrap">
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Started work on BITS – One-minute video format in edutainment.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                Launched Gurucool Padhaai – India’s Largest Free Learning Platform.
                </h3>
              </div>
              <div className="flex flex-col lg:w-1/3 w-full lg:mb-0 mb-9 lg:px-16 px-4">
                <span className="text-white text-sm text-normal bg-lightTheme inline-block px-3 py-2 rounded-full w-32 text-center mb-2">
                  {" "}
                  <i className="fas fa-circle-small mr-1"></i> 2022
                </span>
                <h3 className="text-white lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold leading-10 mt-1">
                SuperGirls K, an initiative under Padhaai to empower 1000 underprivileged girls to fulfil their dreams.
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
