/** @format */

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import toolsHero from '../images/tools-hero.png';
import mobile1 from "../images/mobile1.png";
import mobile2 from "../images/mobile2.png";
import mobile3 from "../images/mobile3.png";
import mobile4 from "../images/mobile4.png";
import mobile5 from "../images/mobile5.png";
import mobile6 from "../images/mobile6.png";
import toolCard4 from "../images/tool-card4.png";
import toolCard5 from "../images/tool-card5.png";
import toolCard6 from "../images/tool-card6.png";
import forall2 from "../images/for-all2.png";
import forall3 from "../images/for-all3.png";
import forall4 from "../images/for-all4.png";
import forall5 from "../images/for-all5.png";
import forall6 from "../images/for-all6.png";
import heroImage from "../images/padhaai-hero.png";
import techproImage from "../images/padhaai/tech-pro.png";
import techproImage2 from "../images/padhaai/techpro2.png";
import assessmentImage from "../images/padhaai/assessment.png";
import techproIcon from "../images/tool-card4.png";
import assessmentIcon from "../images/tool-card5.png";

// Gurucool Icons
import eduverseIcon from "../images/gurucool-tools/Eduverse.jpg";
// import padhaaiIcon from '../images/gurucool-tools/Padhaai.jpg';
import courseIcon from "../images/gurucool-tools/Course.jpg";
import classroomIcon from "../images/gurucool-tools/Coaching.jpg";
import askIcon from "../images/tool-card3.png";
import bookMarketIcon from "../images/gurucool-tools/Book Market.jpg";
import studyHelpIcon from "../images/gurucool-tools/Study Help.jpg";
import tuitionIcon from "../images/gurucool-tools/Tuitions.jpg";
import campusIcon from "../images/gurucool-tools/Campus 360.jpg";
import testIcon from "../images/gurucool-tools/Test.jpg";
import blogIcon from "../images/gurucool-tools/Blog.jpg";
import todoIcon from "../images/gurucool-tools/Todo.jpg";
import placementIcon from "../images/gurucool-tools/Placements.jpg";
import eventsIcon from "../images/gurucool-tools/Events.jpg";
import workshopIcon from "../images/gurucool-tools/Workshops.jpg";
import playIcon from "../images/gurucool-tools/Play.jpg";
import libraryIcon from "../images/gurucool-tools/Library.jpg";
import commonalityIcon from "../images/gurucool-tools/Commonality.jpg";
import fundingIcon from "../images/gurucool-tools/Funding.jpg";
import findLearnersIcon from "../images/gurucool-tools/Find Learners.jpg";
import exploreIcon from "../images/gurucool-tools/Explore.jpg";
import notebookIcon from "../images/gurucool-tools/Notebook.jpg";
import albumIcon from "../images/gurucool-tools/Albums.jpg";
import legacyIcon from "../images/gurucool-tools/Legacy.jpg";
import coolCoinIcon from "../images/gurucool-tools/Cool Coin.jpg";
import cafeIcon from "../images/gurucool-tools/Cafe.jpg";
import coachingIcon from "../images/gurucool-tools/Coaching.jpg";
import bitsIcon from "../images/gurucool-tools/Bits.jpg";
import padhaaiIcon from "../images/gurucool-tools/padhaai-icon2-01.png";
import padhaaiHome from "../images/tool-home.png";
import pLogo from "../images/p-logo.png";
import mobileImg1 from "../images/mobile-images/1.png";
import mobileImg2 from "../images/mobile-images/2.png";
import mobileImg3 from "../images/mobile-images/3.png";
import mobileImg4 from "../images/mobile-images/4.png";
import mobileImg5 from "../images/mobile-images/5.png";
import mobileImg6 from "../images/mobile-images/6.png";
import mobileImg7 from "../images/mobile-images/7.png";

import Lottie from "lottie-react";

import robotAnimation from "../lotties/robot.json";

// import progressIcon from "../images/gurucool-tools/.jpg";
// Gurucool Icons End

import { Accordion } from "react-bootstrap";

const Tools = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });
  const [openTab, setOpenTab] = useState(1);
  const [isInnerNavFixed, setInnerNavFixed] = useState(false);

  const innerNav = useRef(null);
  let innerNavPosition;
  const innerNavFixing = () => {
    if (window.scrollY > innerNavPosition.top) {
      setInnerNavFixed(true);
    }
    if (window.scrollY < innerNavPosition.top) {
      setInnerNavFixed(false);
    }
  };
  useEffect(() => {
    if (!isLoading) {
      innerNavPosition = innerNav.current.getBoundingClientRect();
      window.addEventListener("scroll", innerNavFixing);
    }
  }, [innerNavFixing]);

  const [showModal, setShowModal] = useState(false);
  const [noficationModal, setNoficationModal] = useState(false);
  return (
    <>
      {/* {!isLoading ? ( */}
      <div>
        {/* heroSection */}
        <section className="section">
          <div className="container-fluid">
            <div className="flex flex-col items-center gap-4 md:flex-row ">
              <div className="basis-2/3 ">
                <h1 className="text-3xl font-medium mb-1 sm:text-4xl md:text-5xl">
                  Tools are made
                </h1>
                <h1 className="text-3xl font-medium mb-6 sm:text-4xl md:text-5xl md:mb-8">
                  for the <span className="text-primary"> people</span>.
                </h1>
                <p className="mb-4 text-xl md:text-2xl  max-w-xl">
                  We are empowering educators like schools and colleges to go
                  online and build their own digital infrastructure for learners
                  to find, connect and learn from them.
                </p>
                <Link href="">
                  <a className="text-primary text-lg md:text-xl hover:text-inherit">
                    Learn More
                  </a>
                </Link>
              </div>
              <div className="basis-1/2 flex justify-center">
                {/* <Image src={toolsHero} alt='tool'></Image> */}
                <Lottie
                  className="robot-animation"
                  animationData={robotAnimation}
                  loop
                  autoPlay
                />
              </div>
            </div>
          </div>
        </section>
        <div
          className={`section py-4 max-w-[95%] mx-auto px-0 ${
            isInnerNavFixed
              ? "sticky lg:top-0 top-[50px] w-screen z-20 bg-white"
              : ""
          } `}
          ref={innerNav}
        >
          <div className="innerDiv">
            <div className="flex justify-between">
              <LinkScroll
                className="border-b-[3px] border-transparent cursor-pointer hover:text-inherit text-sm inline-block  sm:text-xl"
                to="learn"
                offset={-72}
                duration={500}
                spy={true}
              >
                Learn
              </LinkScroll>
              {/* <LinkScroll className='border-b-[3px] border-transparent cursor-pointer hover:text-inherit text-sm  sm:text-xl' to='connect' offset={-72} duration={500} spy={true}>
            Connect
          </LinkScroll> */}
              <LinkScroll
                className="border-b-[3px] border-transparent cursor-pointer hover:text-inherit text-sm inline-block  sm:text-xl"
                to="teach"
                offset={-72}
                duration={500}
                spy={true}
              >
                Teach
              </LinkScroll>
              {/* <LinkScroll className='border-b-[3px] border-transparent cursor-pointer hover:text-inherit text-sm  sm:text-xl' to='build' offset={-72} duration={500} spy={true}>
            Build
          </LinkScroll> */}
              <LinkScroll
                className="border-b-[3px] border-transparent cursor-pointer hover:text-inherit text-sm inline-block sm:text-xl"
                to="allProducts"
                offset={-72}
                duration={500}
                spy={true}
              >
                <span className="sm:inline hidden">See all products</span>
                <span className="sm:hidden inline">See all</span>
              </LinkScroll>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-6">
          <h1 className="text-3xl text-center font-semibold col-span-full md:text-4xl">
            {" "}
            <span className="text-primary text-change"> </span>in your own space
            and time
          </h1>
        </div>
        {/* section learn1*/}
        <section id="learn" className="section py-4">
          <div className="container-fluid">
            <div className="bg-primary battern-bg relative py-[60px] mb-12 sm:px-12 px-6 rounded-[20px]">
              <div className="flex flex-wrap -mx-3 items-center relative z-[10]">
                <div className="px-3 lg:w-1/2 sm:order-1 order-2">
                  <h2 className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[30px] text-[#000000] font-[600]">
                    Gurucool Padhaai – Learner App
                  </h2>
                  <p className="text-[20px] font-[600] text-black mt-4 mb-8">
                    Gurucool
                  </p>
                  <div>
                    <Link
                      href={
                        "https://play.google.com/store/apps/details?id=com.gcpadhaai.padhaai"
                      }
                    >
                      <a
                        className="bg-black text-white py-2 sm:px-16 px-8  rounded-[8px] text-[18px] inline-block sm:mb-0 mb-2"
                        target="_blank"
                      >
                        Install
                      </a>
                    </Link>
                    <a
                      onClick={() => setShowModal(true)}
                      className="bg-[rgba(0,0,0,0.2)] text-white cursor-pointer py-[6px]  px-6 rounded-[36px] text-[14px] blur-btn sm:mb-0 mb-2 sm:ml-2 ml-1 inline-block"
                    >
                      <i className="fa-regular fa-play"></i> Trailer
                    </a>
                    <a></a>
                  </div>
                </div>
                <div className="px-3 lg:w-5/12 sm:order-2 order-1">
                  <p className="text-center">
                    <span className="tool-plogo">
                      <Image
                        src={pLogo}
                        width={50}
                        height={50}
                        alt=""
                        className=""
                      />
                    </span>
                    <span className="sm:text-[30px] text-[16px] font-[600] text-black align-text-bottom ml-2">
                      Padhaai for everyone.
                    </span>
                  </p>
                  <Image src={padhaaiHome} width={526} height={423} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:py-[50px] py-[20px] relative mobile-imagslider">
            <div className="container-fluid">
              <Swiper
                slidesPerView={5}
                modules={[Autoplay, Navigation]}
                navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
                autoplay={{
                  delay: 2000,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg1} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg2} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg3} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg4} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg5} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg6} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="px-1">
                    <Image src={mobileImg7} width={333} height={653} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <button
                className="swiper-button-prev sm:block hidden"
                id="prev-slider"
              ></button>
              <button
                className="swiper-button-next sm:block hidden"
                id="next-slider"
              ></button>
            </div>
          </div>
          <div className="container-fluid">
            <div className="grid gap-8 md:grid-cols-3 justify-items-center">
              {/* card */}
              <div className="flex flex-col items-center max-w-[280px]">
                <Image
                  alt="tool"
                  src={forall3}
                  height="80px"
                  width="80px"
                  objectFit="contain"
                ></Image>
                <h2 className="text-2xl ">Courseflix</h2>
                <p className="text-slate-500 mt-6 text-center h-[69px]">
                  Browse more than 3000+ courses that are open, innovative and
                  awesome.
                </p>
                <div className="flex gap-8 my-6 mb-12">
                  <Link href="https://login.gurucool.xyz">
                    <a className="text-primary font-semibold">Get Started →</a>
                  </Link>
                  {/* <Link href=''>
                <a className='text-primary font-semibold'>Support</a>
              </Link> */}
                </div>
                <div className="tooles-images">
                  <Image
                    alt="tool"
                    src={mobile1}
                    width="306px"
                    height="454px"
                  ></Image>
                </div>
              </div>

              <div className="flex flex-col items-center max-w-[280px]">
                <Image
                  alt="tool"
                  src={askIcon}
                  height="80px"
                  width="80px"
                  objectFit="contain"
                ></Image>
                <h2 className="text-2xl ">AskEd</h2>
                <p className="text-slate-500 mt-6 text-center h-[69px]">{`'Asking questions' is celebrated here! Ask anything. Answer anyone.`}</p>
                <div className="flex gap-8 my-6 mb-12">
                  <Link href="https://login.gurucool.xyz">
                    <a className="text-primary font-semibold">Get Started →</a>
                  </Link>
                  {/* <Link href=''>
                <a className='text-primary font-semibold'>Support</a>
              </Link> */}
                </div>
                <div className="tooles-images">
                  <Image
                    alt="tool"
                    src={mobile2}
                    width="306px"
                    height="454px"
                  ></Image>
                </div>
              </div>

              <div className="flex flex-col items-center max-w-[280px]">
                <Image
                  alt="tool"
                  src={forall4}
                  height="80px"
                  width="80px"
                  objectFit="contain"
                ></Image>
                <h2 className="text-2xl ">Classroom</h2>
                <p className="text-slate-500 mt-6 text-center h-[69px]">
                  Just like our real classroom.
                </p>
                <div className="flex gap-8 my-6 mb-12">
                  <Link href="https://login.gurucool.xyz">
                    <a className="text-primary font-semibold">Get Started →</a>
                  </Link>
                  {/* <Link href=''>
                <a className='text-primary font-semibold'>Support</a>
              </Link> */}
                </div>
                <div className="tooles-images">
                  <Image
                    alt="tool"
                    src={mobile3}
                    width="306px"
                    height="454px"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* sectionTuition1 */}
        {/* <section id='connect' className='section flex flex-col items-center gap-16 md:flex-row'>
        <div className='container-fluid flex flex-col md:flex-row md:gap-8 items-center'>
          <div className='flex flex-col items-center w-full basis-1/2 max-w-[780px] '>
            <Image alt='tool' src={forall3} height='80px' width='80px' objectFit='contain'></Image>
            <h2 className='text-2xl '>Tuition</h2>
            <p className='text-slate-500 mt-6 text-center'>Create your tuition plan with suited recommendations & 0% commission.</p>
            <div className='flex gap-8 my-12'>
              <Link href='https://login.gurucool.xyz'>
                <a className='text-primary font-semibold'>Get Started</a>
              </Link> */}
        {/* <Link href=''>
                <a className='text-primary font-semibold'>Support</a>
              </Link> */}
        {/* </div>
          </div>
          <div className="bg-[url('../images/tuition1.jpg')] w-full rounded-xl relative bg-cover overflow-hidden flex items-center"> */}
        {/* <div className="w-full h-full absolute">
            <Image alt="tool" src={tuition1} objectFit="cover"></Image>
          </div> */}
        {/* <div className='h-full w-full bg-black absolute opacity-60'></div>
            <div className='section py-[28%]'>
              <h1 className='relative text-white text-xl sm:text-2xl mb-6 '>Create your tuition plan with suited recommendations & 0% commission.</h1>
              <Link href={"#"}>
                <a className='relative text-white text-lg'>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

        {/* section learn2 */}
        <div id="teach" className="section py-20 px-0">
          <div className="innerDiv mx-auto">
            <h1 className="text-3xl text-center font-semibold col-span-full mb-8 md:text-4xl">
              {" "}
              <span className="text-primary text-change2"> </span>in your own
              space and time
            </h1>
            {/* card */}
            <div className="hidden flex-col items-center max-w-[280px]">
              <Image
                alt="tool"
                src={toolCard4}
                height="80px"
                width="80px"
                objectFit="contain"
              ></Image>
              <h2 className="text-2xl ">Teach Pro</h2>
              <p className="text-slate-500 mt-6 text-center h-[60px]">
                Your own teaching platform.
              </p>
              <div className="flex gap-8 mt6 mb-12">
                <Link href="">
                  <a className="text-primary font-semibold">Get Started</a>
                </Link>
                <Link href="">
                  <a className="text-primary font-semibold">Support</a>
                </Link>
              </div>
              <div className="tooles-images">
                <Image
                  alt="tool"
                  src={mobile4}
                  width="306px"
                  height="454px"
                ></Image>
              </div>
            </div>

            <div className="hidden flex-col items-center max-w-[280px]">
              <Image
                alt="tool"
                src={toolCard5}
                height="80px"
                width="80px"
                objectFit="contain"
              ></Image>
              <h2 className="text-2xl ">Assessment</h2>
              <p className="text-slate-500 mt-6 text-center h-[40px]">
                Assess your learners and get real-time feedback to enhance.
              </p>
              <div className="flex gap-8 mt-6 mb-12">
                <Link href="">
                  <a className="text-primary font-semibold">Get Started</a>
                </Link>
                <Link href="">
                  <a className="text-primary font-semibold">Support</a>
                </Link>
              </div>
              <div className="tooles-images">
                <Image
                  alt="tool"
                  src={mobile5}
                  width="306px"
                  height="454px"
                ></Image>
              </div>
            </div>

            <div className="hidden flex-col items-center max-w-[280px]">
              <Image
                alt="tool"
                src={toolCard6}
                height="80px"
                width="80px"
                objectFit="contain"
              ></Image>
              <h2 className="text-2xl ">Classroom</h2>
              <p className="text-slate-500 mt-6 text-center h-[40px]">
                Get access to free courses, study material, test series etc.
              </p>
              <div className="flex gap-8 mt-6 mb-12">
                <Link href="">
                  <a className="text-primary font-semibold">Get Started</a>
                </Link>
                <Link href="">
                  <a className="text-primary font-semibold">Support</a>
                </Link>
              </div>
              <div className="tooles-images">
                <Image
                  alt="tool"
                  src={mobile6}
                  width="306px"
                  height="454px"
                ></Image>
              </div>
            </div>
          </div>
          <section
            className="pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] padhaa-hero"
            id="campusEnroll"
          >
            <div className="innerDiv mx-auto">
              <div className="lg:flex -mx-3">
                <div className="lg:w-1/2 w-full px-3">
                  <h1 className="lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] font-bold text-[#161616] lg:leading-[148.5%] lg:mb-6 mb-12 lg:text-left text-center">
                    Digitize your campus and become future ready now
                  </h1>
                  <div className="lg:block hidden">
                    {" "}
                    <Image src={heroImage} width={670} height={300} alt="" />
                  </div>
                </div>
                <div className="lg:w-1/2 px-3 w-full">
                  <div className="bg-white p-6 rounded-[20px] user-form">
                    <form>
                      <div className="mb-6">
                        <label className="text-sm font-bold block mb-3">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="border border-[#DEDEDE] block py-[12px] px-4 rounded-[6px] w-full focus:outline-0"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="text-sm font-bold block mb-3">
                          Name of your school/college
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          className="border border-[#DEDEDE] block py-[12px] px-4 rounded-[6px] w-full focus:outline-0"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="text-sm font-bold block mb-3">
                          Your phone number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder=""
                            className="border border-[#DEDEDE] block py-[12px] pr-4 pl-14 rounded-[6px] w-full focus:outline-0"
                          />
                          <select className="absolute left-[5px] top-[13px] focus:outline-0 inline-block z-0 right-auto">
                            <option>+91</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label className="text-sm font-bold block mb-3">
                          Your role in the campus
                        </label>
                        <select className="border border-[#DEDEDE] block py-[12px] px-4 rounded-[6px] w-full focus:outline-0">
                          <option>Select Role</option>
                          <option>Administrator</option>
                          <option>Educator</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={() => setNoficationModal(true)}
                          className="bg-[#F9C933] rounded-[6px] w-full py-4 font-semibold text-white"
                        >
                          Get Started
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-[60px] sm:py-[70px]">
            <div className="innerDiv mx-auto">
              <div className="flex flex-wrap items-center justify-between">
                <div className="lg:w-1/2 md:w-1/2 w-full md:order-1 order-2">
                  <div>
                    <Image src={techproIcon} width={80} height={80} alt="" />
                  </div>
                  <h2 className="text-black font-bold lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] mb-4">
                    Teach Pro
                  </h2>
                  <p className="text-[#444444]  leading-[223%]">
                    Your own teaching platform.
                  </p>
                  <div className="mt-6">
                    <a
                      className="bg-[#F9C933] rounded-[6px] py-3 px-6 font-semibold text-white inline-block"
                      href="#campusEnroll"
                    >
                      Get Started
                    </a>
                    {/* <a className='font-semibold text-black px-3'>Support</a> */}
                  </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:order-2 order-1 md:mb-0 mb-6">
                  <Image src={techproImage} width={400} height={466} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="py-[60px] sm:py-[70px]">
            <div className="innerDiv mx-auto">
              <div className="flex flex-wrap items-center justify-between">
                <div className="lg:w-1/2 md:w-1/2 w-full md:mb-0 mb-6">
                  <Image
                    src={assessmentImage}
                    width={400}
                    height={466}
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full">
                  <div>
                    <Image src={assessmentIcon} width={80} height={80} alt="" />
                  </div>
                  <h2 className="text-black font-bold lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] mb-4">
                    Assessment
                  </h2>
                  <p className="text-[#444444]  leading-[223%]">
                    Assess your learners and get real-time feedback to enhance.
                  </p>
                  <div className="mt-6">
                    <a
                      className="bg-[#F9C933] rounded-[6px] py-3 px-6 font-semibold text-white inline-block"
                      href="#campusEnroll"
                    >
                      Get Started
                    </a>
                    {/* <a className='font-semibold text-black px-3'>Support</a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-[60px] sm:py-[70px]">
            <div className="innerDiv mx-auto">
              <div className="flex flex-wrap items-center justify-between">
                <div className="lg:w-1/2 md:w-1/2 w-full md:order-1 order-2">
                  <div>
                    <Image src={techproIcon} width={80} height={80} alt="" />
                  </div>
                  <h2 className="text-black font-bold lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] mb-4">
                    Content Pool
                  </h2>
                  <p className="text-[#444444]  leading-[223%]">
                    Get access to free courses, study material, test series etc.
                  </p>
                  <div className="mt-6">
                    <a
                      className="bg-[#F9C933] rounded-[6px] py-3 px-6 font-semibold text-white inline-block"
                      href="#campusEnroll"
                    >
                      Get Started
                    </a>
                    {/* <a className='font-semibold text-black px-3'>Support</a> */}
                  </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full md:order-2 order-1 md:mb-0 mb-6">
                  <Image src={techproImage2} width={400} height={466} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* sectionTuition2 */}
        {/* <section id='build' className='section flex flex-col items-center gap-16 md:flex-row'>
        <div className='container-fluid flex flex-col md:flex-row md:gap-8 items-center'>
          <div className="bg-[url('../images/tuition2.jpg')] w-full rounded-xl relative bg-cover overflow-hidden flex items-center">
            <div className='h-full w-full bg-black absolute opacity-60'></div>
            <div className='section md:py-[28%] py-[30%]'>
              <h1 className='relative text-white text-xl sm:text-2xl mb-6 '>Become a Coolfluencer and educate the world!</h1>
              <Link href={"#"}>
                <a className='relative text-white text-lg'>Learn More</a>
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center w-full basis-1/2 max-w-[780px] '>
            <Image alt='tool' src={forall4} height='80px' width='80px' objectFit='contain'></Image>
            <h2 className='text-2xl '>Engagement Plus</h2>
            <p className='text-slate-500 mt-6 text-center'>Brand. Advertise. Monetise. Educators are influencers!</p>
            <div className='flex gap-8 mt-6 mb-12'>
              <Link href=''>
                <a className='text-primary font-semibold'>Get Started</a>
              </Link>
              <Link href=''>
                <a className='text-primary font-semibold'>Support</a>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
        {/* Accordion section */}
        <section id="allProducts" className="section pt-0">
          <div className="container-fluid">
            <div className="accordian">
              <div className="accordian-item border mb-6 rounded-[6px]">
                <div
                  className="py-4 border-b flex items-center justify-between px-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                >
                  <h4 className="">For All</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div
                  className={
                    openTab === 1 ? "accordian-body py-4 block" : "hidden"
                  }
                >
                  <div className=" grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={eduverseIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Eduverse</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={padhaaiIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Padhaai</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={courseIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Course</h1>
                    </div>{" "}
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={classroomIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Classroom</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={askIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Ask</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={bookMarketIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Book Market</h1>
                    </div>{" "}
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={studyHelpIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Study Help</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={tuitionIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Tuition</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={campusIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Campus 360</h1>
                    </div>{" "}
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={testIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Test</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={blogIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Blog</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={todoIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">To Do</h1>
                    </div>{" "}
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={placementIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Placements</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={eventsIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Events</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={workshopIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Workshop</h1>
                    </div>{" "}
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={playIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Play</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={libraryIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Library</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={commonalityIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Commonality</h1>
                    </div>{" "}
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={fundingIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Funding</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={findLearnersIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Find Learners</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={exploreIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Explore</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={notebookIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Notebook</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={albumIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Albums</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={legacyIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Legacy</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={coolCoinIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Cool Coin</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={cafeIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Cafe</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={coachingIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Coaching</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={exploreIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Progress</h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={bitsIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Bits</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordian-item border mb-6 rounded-[6px]">
                <div
                  className="py-4 border-b flex items-center justify-between px-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                >
                  <h4 className="">For Learning</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div
                  className={
                    openTab === 2 ? "accordian-body py-4 block" : "hidden"
                  }
                >
                  <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  ">
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={eduverseIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Eduverse</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={courseIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Course</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={studyHelpIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Study Help</h1>
                    </div>{" "}
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={eduverseIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Progress</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={tuitionIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Tuition</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={testIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Test</h1>
                    </div>{" "}
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={workshopIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Workshop</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={todoIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">To Do</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={classroomIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Classroom</h1>
                    </div>{" "}
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={legacyIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Legacy</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={askIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">AskEd</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordian-item border mb-6 rounded-[6px]">
                <div
                  className="py-4 border-b flex items-center justify-between px-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                >
                  <h4 className="">For Socializing</h4>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div
                  className={
                    openTab === 3 ? "accordian-body py-4 block" : "hidden"
                  }
                >
                  <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    <div className="flex flex-col justify-center items-center">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={eduverseIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Eduverse</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={bookMarketIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Book Market</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={campusIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Campus 360</h1>
                    </div>{" "}
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={placementIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Placement</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={eventsIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Events</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={playIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Play</h1>
                    </div>{" "}
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={commonalityIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Commonality</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={fundingIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Funding</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={findLearnersIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Find Learners</h1>
                    </div>{" "}
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={exploreIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Explore</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={coolCoinIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Cool Coin</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-6">
                      <div className=" ">
                        <Image
                          alt="tool"
                          src={cafeIcon}
                          height="80px"
                          width="80px"
                        ></Image>
                      </div>
                      <h1 className="text-center font-medium">Cafe</h1>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* )
: (
   <div className='text-center'>
   <a className="play-btn  h-screen flex justify-center items-center absolute inset-0 z-[999] bg-[rgba(0,0,0,1)]" id="pre-loader">
     <svg width="404" height="411" viewBox="0 0 404 411" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M7.99999 114.55C9.36999 114.36 5.79 102.47 12 92.08C15.4 86.37 20.49 83.22 25.76 80.62C48.97 69.13 74.06 68.39 74.06 68.39C98.3473 67.6797 122.649 69.1624 146.67 72.82C173.286 76.8737 199.482 83.3198 224.94 92.08C244.597 99.3128 263.534 108.372 281.5 119.14C287.688 122.926 293.475 127.332 298.77 132.29C303.7 136.89 307.31 140.29 310.55 145.89C312.61 149.48 317.38 157.78 316.35 168.52C315.45 177.98 310.52 184.33 306.42 189.61C300.99 196.61 295.72 200.35 287.42 206.12C273.218 216.121 257.607 223.953 241.1 229.36C235.45 231.17 230.93 232.3 227.19 233.18C213.72 236.36 187.67 241.73 144.65 246.48C144.15 242.48 143.44 236.48 142.65 229.2C141.18 215.58 140.41 206.36 140.05 202.45C138.56 187.359 136.007 172.392 132.41 157.66C131.669 154.486 130.697 151.371 129.5 148.34C126.92 141.8 125.23 140.62 124.15 140.08C122.63 139.349 120.913 139.134 119.26 139.47C117.126 140.081 115.281 141.436 114.06 143.29C107.7 151.97 99.33 159.01 92.66 167.45C84.91 177.25 85.51 175.73 74.93 189C69.71 195.55 67.03 198.92 63.46 203.83C52.66 218.69 50 225.19 49.09 227.52C46.64 233.86 45.49 237.77 45.27 241.74C44.9258 245.614 45.3959 249.518 46.65 253.2C49.09 260.02 53.93 263.89 56.89 266.2C62.5 270.57 68.52 272.9 77.22 274.91C89.3474 277.681 101.792 278.811 114.22 278.27C114.01 283.56 113.82 290.19 113.77 297.84C113.77 302.58 113.71 312.84 114.22 326.27C114.65 337.43 114.94 345.15 116.06 355.78C117.187 365.956 119.13 376.025 121.87 385.89C123.274 391.284 125.773 396.332 129.21 400.72C131.271 403.476 133.936 405.723 137 407.29C139.158 408.356 141.487 409.033 143.88 409.29C147.546 409.641 151.239 409.01 154.58 407.46C152.79 392.73 151.71 380.77 151.07 372.91C150.01 360.02 149.47 349.76 147.7 308.91C147.14 295.77 146.7 284.68 146.33 276.5C152.7 275.89 161.77 274.93 172.62 273.44C199.53 269.76 219.7 265.28 235.75 261.67C257.51 256.79 274.69 252.1 286.05 248.83C298.24 245.32 304.34 243.57 310.81 241.19C324.71 236.08 342.35 229.59 360.03 215.35C370.346 207.375 379.239 197.712 386.33 186.77C392.11 177.77 400.33 164.94 401.92 146.56C404.5 117.37 388.59 95.96 384.49 90.61C379.36 83.92 374.65 80.04 365.23 72.27C350.442 60.1199 334.342 49.6616 317.23 41.09C290.63 27.65 268.71 21.92 248.44 16.63C231.835 12.2825 214.994 8.89353 198 6.48C181.9 4.2 162.82 1.58 137.46 2.2C121.979 2.59982 106.548 4.13056 91.29 6.78C76.57 9.33 66.69 11.11 54 16.26C42.85 20.79 31 25.73 20.06 37.36C12.7328 44.7249 7.28011 53.7407 4.16 63.65C0.849999 74.56 1.50999 83.52 2.01999 90.55C2.99999 103.9 6.70999 114.74 7.99999 114.55Z" stroke="#f9c933" strokeWidth="4" strokeMiterlimit="10" />
     <path d="M117.85 172.57C117.85 174.57 117.85 177.57 117.85 181.28C117.72 195.64 117.01 206.19 116.7 211.09C116.16 219.75 115.55 232.4 115.32 249.15C112.41 249.37 108.23 249.62 103.17 249.73C101.53 249.73 94.76 249.89 85.75 249.38C79.69 249.04 76.24 248.61 72.22 247.43C70.6631 246.977 69.131 246.443 67.63 245.83C68.81 242.78 70.63 238.48 73.02 233.45C77.6791 224.025 83.1251 215.009 89.3 206.5C90.97 204.1 96.23 196.66 102.94 188.73C107.19 183.73 109.31 181.22 111.2 179.56C112.981 178.011 114.651 176.341 116.2 174.56C116.94 173.71 117.49 173 117.85 172.57Z" stroke="#f9c933" strokeWidth="4" strokeMiterlimit="10" />
     </svg>
   </a>
   </div>
      )} */}
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative flex-auto">
                  <video
                    className="rounded-lg"
                    loop
                    controls
                    autoPlay
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src="Padhaai - A Million Dreams.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {noficationModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto sm:w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-[20px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-6 flex-auto text-center">
                  <i className="fa-regular fa-clock-nine text-primary text-[80px]"></i>
                  <h4 className="text-[24px] font-[500] my-4">
                    Class starts at 5:00 am on 18th Aug 2022
                  </h4>
                  <p className="sm:text-[20px] text-base text-[#272727]">
                    Your seat is booked. We will remind you when the class
                    starts. Please join using the link sent on youe email and
                    SMS
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black px-6 py-2 font-bold"
                    type="button"
                    onClick={() => setNoficationModal(false)}
                  >
                    Cancel Reminder
                  </button>
                  <button
                    className="bg-primary text-black font-bold px-6 py-3 rounded-[10px]"
                    type="button"
                    onClick={() => setNoficationModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Tools;
