/** @format */

import Image from "next/image";
import Link from "next/link";
import heroImage from "../images/default-hero.png";
import techproImage from "../images/padhaai/tech-pro.png";
import techproImage2 from "../images/padhaai/techpro2.png";
import assessmentImage from "../images/padhaai/assessment.png";
import techproIcon from "../images/tool-card4.png";
import assessmentIcon from "../images/tool-card5.png";
export default function Padhaai() {
  return (
    <>
      <section className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] padhaa-hero'>
        <div className='innerDiv mx-auto'>
          <div className='lg:flex -mx-3'>
            <div className='lg:w-1/2 w-full px-3'>
              <h1 className='lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] font-bold text-[#161616] lg:leading-[148.5%] lg:mb-6 mb-12 lg:text-left text-center'>Digitize your school and become future ready now</h1>
              <div className='lg:block hidden'>
                {" "}
                <Image src={heroImage} width={670} height={300} alt='' />
              </div>
            </div>
            <div className='lg:w-1/2 px-3 w-full'>
              <div className='bg-white p-6 rounded-[20px] user-form'>
                <form>
                  <div className='mb-6'>
                    <label className='text-sm font-bold block mb-3'>Your Name</label>
                    <input type='text' placeholder='' className='border border-[#DEDEDE] block py-[12px] px-4 rounded-[6px] w-full focus:outline-0' />
                  </div>
                  <div className='mb-6'>
                    <label className='text-sm font-bold block mb-3'>Name of your school</label>
                    <input type='text' placeholder='' className='border border-[#DEDEDE] block py-[12px] px-4 rounded-[6px] w-full focus:outline-0' />
                  </div>
                  <div className='mb-6'>
                    <label className='text-sm font-bold block mb-3'>Your phone numbes</label>
                    <div className='relative'>
                      <input type='text' placeholder='' className='border border-[#DEDEDE] block py-[12px] pr-4 pl-14 rounded-[6px] w-full focus:outline-0' />
                      <select className='absolute left-[5px] top-[13px] focus:outline-0 inline-block z-0 right-auto'>
                        <option>+91</option>
                      </select>
                    </div>
                  </div>
                  <div className='mb-6'>
                    <label className='text-sm font-bold block mb-3'>Your role in the school</label>
                    <select className='border border-[#DEDEDE] block py-[12px] px-4 rounded-[6px] w-full focus:outline-0'>
                      <option>Select Role</option>
                    </select>
                  </div>
                  <div>
                    <button type='submit' className='bg-[#F9C933] rounded-[6px] w-full py-4 font-semibold text-white'>
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
        <div className='innerDiv mx-auto'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='lg:w-1/2 md:w-1/2 w-full md:order-1 order-2'>
              <div>
                <Image src={techproIcon} width={80} height={80} alt='' />
              </div>
              <h2 className='text-black font-bold lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] mb-4'>Teach Pro</h2>
              <p className='text-[#444444]  leading-[223%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
              <div className='mt-6'>
                <a className='bg-[#F9C933] rounded-[6px] py-3 px-6 font-semibold text-white inline-block'>Get Started</a>
                <a className='font-semibold text-black px-3'>Support</a>
              </div>
            </div>
            <div className='lg:w-1/2 md:w-1/2 w-full md:order-2 order-1 md:mb-0 mb-6'>
              <Image src={techproImage} width={400} height={466} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
        <div className='innerDiv mx-auto'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='lg:w-1/2 md:w-1/2 w-full md:mb-0 mb-6'>
              <Image src={assessmentImage} width={400} height={466} alt='' />
            </div>
            <div className='lg:w-1/2 md:w-1/2 w-full'>
              <div>
                <Image src={assessmentIcon} width={80} height={80} alt='' />
              </div>
              <h2 className='text-black font-bold lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] mb-4'>Assessment</h2>
              <p className='text-[#444444]  leading-[223%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
              <div className='mt-6'>
                <a className='bg-[#F9C933] rounded-[6px] py-3 px-6 font-semibold text-white inline-block'>Get Started</a>
                <a className='font-semibold text-black px-3'>Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
        <div className='innerDiv mx-auto'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='lg:w-1/2 md:w-1/2 w-full md:order-1 order-2'>
              <div>
                <Image src={techproIcon} width={80} height={80} alt='' />
              </div>
              <h2 className='text-black font-bold lg:text-[50px] md:text-[50px] sm:text-[36px] text-[28px] mb-4'>Teach Pro</h2>
              <p className='text-[#444444]  leading-[223%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
              <div className='mt-6'>
                <a className='bg-[#F9C933] rounded-[6px] py-3 px-6 font-semibold text-white inline-block'>Get Started</a>
                <a className='font-semibold text-black px-3'>Support</a>
              </div>
            </div>
            <div className='lg:w-1/2 md:w-1/2 w-full md:order-2 order-1 md:mb-0 mb-6'>
              <Image src={techproImage2} width={400} height={466} alt='' />
            </div>
          </div>
        </div>
      </section>
      <style global jsx>{`
        footer,
        header {
          display: none !important;
        }
        main.main-container {
          padding: 0 !important;
        }
      `}</style>
    </>
  );
}
