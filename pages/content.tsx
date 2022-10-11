/** @format */

import Image from "next/image";
import Link from "next/link";
import MobileSlider from "../components/mobileSlider";

import contentHero from "../images/content/content-hero.png";
import contentCard1 from "../images/content/hyperlocal.png";
import contentCard2 from "../images/content/quality.png";
import contentCard3 from "../images/content/Accessible.png";

import learnCard1 from "../images/content/learn-card1.png";
import learnCard2 from "../images/content/learn-card2.png";
import learnCard3 from "../images/content/learn-card3.png";
import learnCard4 from "../images/content/learn-card4.png";
import learnCard5 from "../images/content/learn-card5.png";
import { useEffect, useState } from "react";
const Content = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });
  return (
    <>
      {/* {!isLoading ? ( */}
      <div>
        {/* Hero section*/}
        <section className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
          <div className='innerDiv bg-white lg:px-0'>
            <div className='grid items-center justify-items-center sm:grid-cols-2 sm:grid-rows-[auto_auto_auto] lg:grid-cols-3 '>
              <h1 className='text-4xl sm:text-5xl font-semibold leading-snug text-center mb-12'>
                Content is the <br />
                <span className='text-5xl sm:text-6xl text-primary font-bold'>Queen.</span>
              </h1>
              <div className='mb-12 tooles-images'>
                <Image src={contentHero} alt='heroImage'></Image>
              </div>
              <p className='text-center text-lg mb-12 col-span-full lg:col-auto relative'>Creativity and psychosis often go hand in hand. Or, for that matter, genius and madness. Or, for that matter, creation and curation.</p>
              <div className='col-span-full'>
                <a href='https://blog.gurucool.xyz/' className='bg-primary hover:text-inherit text-lg font-medium py-3 px-8 rounded-xl inline-block'>
                  {" "}
                  Our Gambit
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* How it works section */}
        <section className='bg-[#fff3cd] pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
          <div className='innerDiv '>
            <h1 className='text-3xl sm:text-4xl font-semibold text-center mb-16'>
              How <span>Guru</span>cool works
            </h1>
            <div className='flex flex-wrap justify-between items-center -mx-6'>
              <div className='lg:w-1/3 md:w-1/2 w-full px-6 lg:mb-0 mb-6'>
                <div className='flex flex-col justify-center items-center bg-white rounded-3xl p-8'>
                  <div className='mb-6 w-[110px] h-[110px] bg-primary rounded-full flex justify-center items-center'>
                    <Image src={contentCard3} alt='card' width={80} height={55} />
                  </div>
                  <h1 className='text-center text-xl lg:text-2xl mb-4 font-semibold'>Accessible</h1>
                  <p className='text-center text-sm leading-[28px]'>Almost all the great tools and content pools that Gurucool makes are available to all the learners and educators.</p>
                </div>
              </div>
              <div className='lg:w-1/3 md:w-1/2 w-full px-6 lg:mb-0 mb-6'>
                <div className='flex flex-col justify-center items-center bg-white rounded-3xl p-8'>
                  <div className='mb-6 w-[110px] h-[110px] bg-primary rounded-full flex justify-center items-center'>
                    <Image src={contentCard2} alt='card' width={80} height={55} />
                  </div>
                  <h1 className='text-center text-xl lg:text-2xl mb-4 font-semibold'>Quality</h1>
                  <p className='text-center text-sm leading-[28px]'>The best content from the best of open sources and educators in the world are aggregated and curated on Gurucool.</p>
                </div>
              </div>
              <div className='lg:w-1/3 md:w-1/2 w-full px-6 lg:mb-0 mb-6'>
                <div className='flex flex-col justify-center items-center bg-white rounded-3xl p-8'>
                  <div className='mb-6 w-[110px] h-[110px] bg-primary rounded-full flex justify-center items-center'>
                    <Image src={contentCard1} alt='card' width={80} height={55} />
                  </div>
                  <h1 className='text-center text-xl lg:text-2xl mb-4 font-semibold'>Hyperlocal</h1>
                  <p className='text-center text-sm leading-[28px]'>With more than 20+ regional and international languages, Gurucool is making hyperlocal education possible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Learning is fun */}
        <section className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] hidden'>
          <div className='innerDiv bg-white'>
            <h1 className='text-4xl sm:text-5xl font-semibold leading-snug sm:leading-snug text-center mb-12'>
              Learning is <br />
              <span className='text-5xl sm:text-6xl text-primary font-bold'>Fun.</span>
            </h1>
            <MobileSlider />
          </div>
        </section>
        {/* Start learning with gurucool */}
        <section className='bg-[#f3f4f8] pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
          <div className='m-auto'>
            <div className='lg:flex items-center justify-center gap-16 '>
              <div className='flex flex-col justify-center items-center lg:items-start'>
                <h1 className='text-3xl sm:text-4xl mb-6 text-center leading-snug font-semibold lg:text-left'>Start learning with Gurucool</h1>
                <p className='text-center max-w-3xl mb-8 m-auto lg:text-left'>Get unlimited access to structured courses & doubt clearing sessions</p>
                <div className='m-auto lg:mr-auto lg:ml-0'>
                  <Link href='#' passHref>
                    <a className='bg-primary hover:text-inherit text-base font-medium py-3 px-8 rounded-xl inline-block'> Find out more</a>
                  </Link>
                </div>
              </div>
              <div className='grid gap-8 md:grid-cols-2 mt-16 items-center justify-items-center'>
                <div className='w-[250px] md:w-[280px] bg-white rounded-2xl p-4 pb-0 pr-0'>
                  <h1 className='text-xl mb-1'>Cool Categories</h1>
                  <h2 className='font-bold text-xl mb-4'>100+</h2>
                  <div className='flex flex-1 justify-end rounded-2xl overflow-hidden'>
                    <Image src={learnCard1} alt='card'></Image>
                  </div>
                </div>
                <div className='w-[250px] md:w-[280px] bg-white rounded-2xl p-4 pb-0 pr-0'>
                  <h1 className='text-xl mb-1'>Campus</h1>
                  <h2 className='font-bold text-xl mb-4'>5k+</h2>
                  <div className='flex flex-1 justify-end rounded-2xl overflow-hidden'>
                    <Image src={learnCard2} alt='card'></Image>
                  </div>
                </div>
                <div className='w-[250px] md:w-[280px] bg-white rounded-2xl p-4 pb-0 pr-0'>
                  <h1 className='text-xl mb-1'>Courses</h1>
                  <h2 className='font-bold text-xl mb-4'>1.5k+</h2>
                  <div className='flex flex-1 justify-end rounded-2xl overflow-hidden'>
                    <Image src={learnCard3} alt='card'></Image>
                  </div>
                </div>
                <div className='w-[250px] md:w-[280px] bg-white rounded-2xl p-4 pb-0 pr-0'>
                  <h1 className='text-xl mb-1'>Hours of content</h1>
                  <h2 className='font-bold text-xl mb-4'>1M+</h2>
                  <div className='flex flex-1 justify-end rounded-2xl overflow-hidden'>
                    <Image src={learnCard4} alt='card'></Image>
                  </div>
                </div>
                <div className='w-[250px] md:w-[280px] bg-white rounded-2xl p-4 pb-0 pr-0'>
                  <h1 className='text-xl mb-1'>Community</h1>
                  <h2 className='font-bold text-xl mb-4'>300k+</h2>
                  <div className='flex flex-1 justify-end rounded-2xl overflow-hidden'>
                    <Image src={learnCard5} alt='card'></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Become a guru */}
        {/* <section className="bg-[url('../images/content/content-bg.png')] bg-cover bg-center relative pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]">
				<div className='absolute top-0 lef-0 w-full h-full bg-black opacity-75'></div>
				<div className='innerDiv'>
					<div className='relative text-white py-16'>
						<h1 className='text-3xl sm:text-4xl font-semibold text-center mb-4 sm:text-left'>You can become a Guru Creator too!</h1>
						<p className='mb-8 text-center sm:text-left sm:text-lg'>Share tour knowledge, live off passion and be your own boss</p>
						<div className='m-auto flex justify-center sm:justify-start'>
							<Link href='#' passHref>
								<a className='bg-primary text-black text-base text-center sm:text-left font-medium py-3 px-8 rounded-xl'> Find out more</a>
							</Link>
						</div>
					</div>
				</div>
			</section> */}
        <section className='tutor-section pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
          <div className='innerDiv mx-auto'>
            <div className=' relative'>
              <div className="bg-[url('../images/BitStarAbout.png')] bg-cover md:py-[100px] py-[80px] sm:pl-12 sm:pr-12 px-9 lg:pr-0 flex items-center h-full rounded-[50px]">
                <div className='flex items-center flex-wrap -mx-3'>
                  <div className='lg:w-7/12 md:w-9/12 md:mb-0 mb-5 px-3'>
                    <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold text-white leading-tight'>You can become a BITSTAR too!</h3>
                    <p className='text-white my-6'>Create fun, creative and purposeful {"Bits"} and be a Coolfluencer.</p>
                    <Link href='https://padhaai.gurucool.xyz/bits' passHref>
                      <a className='bg-primary text-black sm:px-9 px-6 py-2 rounded-xl inline-block sm:text-xl text-lg font-medium'>Explore</a>
                    </Link>
                  </div>
                  <div className='lg:w-1/5 md:w-1/4 px-3'>
                    <div className='bg-white rounded-[10px]'>
                      <div className='p-4'>
                        <h5 className='m-0 text-black font-medium text-xl'>Davina</h5>
                        <p className='m-0 text-black text-sm'> Purpose Coach</p>
                        <span className='m-0 text-black text-sm'>
                          <span className='text-primary text-lg'>&#9733;</span> <strong>5</strong> (54 Reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* sharing is caring */}
        <section className='bg-primary  pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px]'>
          <div className='innerDiv'>
            <div className=' flex flex-col'>
              <h1 className='text-3xl sm:text-4xl font-semibold text-center mb-8'>Sharing is caring.</h1>
              <p className='text-center sm:text-lg max-w-3xl mb-8 m-auto'>We encourage learners to engage in meaningful conversations and educators to share their knowledge freely and for free</p>
              <div className='m-auto'>
                <Link href='#' passHref>
                  <a className='bg-[#202020] text-white text-base font-medium py-3 px-8 rounded-xl inline-block'> Find out more</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* : (
				<div className='text-center'>
				<a className="play-btn  h-screen flex justify-center items-center absolute inset-0 z-[999] bg-[rgba(0,0,0,1)]" id="pre-loader">
				  <svg width="404" height="411" viewBox="0 0 404 411" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.99999 114.55C9.36999 114.36 5.79 102.47 12 92.08C15.4 86.37 20.49 83.22 25.76 80.62C48.97 69.13 74.06 68.39 74.06 68.39C98.3473 67.6797 122.649 69.1624 146.67 72.82C173.286 76.8737 199.482 83.3198 224.94 92.08C244.597 99.3128 263.534 108.372 281.5 119.14C287.688 122.926 293.475 127.332 298.77 132.29C303.7 136.89 307.31 140.29 310.55 145.89C312.61 149.48 317.38 157.78 316.35 168.52C315.45 177.98 310.52 184.33 306.42 189.61C300.99 196.61 295.72 200.35 287.42 206.12C273.218 216.121 257.607 223.953 241.1 229.36C235.45 231.17 230.93 232.3 227.19 233.18C213.72 236.36 187.67 241.73 144.65 246.48C144.15 242.48 143.44 236.48 142.65 229.2C141.18 215.58 140.41 206.36 140.05 202.45C138.56 187.359 136.007 172.392 132.41 157.66C131.669 154.486 130.697 151.371 129.5 148.34C126.92 141.8 125.23 140.62 124.15 140.08C122.63 139.349 120.913 139.134 119.26 139.47C117.126 140.081 115.281 141.436 114.06 143.29C107.7 151.97 99.33 159.01 92.66 167.45C84.91 177.25 85.51 175.73 74.93 189C69.71 195.55 67.03 198.92 63.46 203.83C52.66 218.69 50 225.19 49.09 227.52C46.64 233.86 45.49 237.77 45.27 241.74C44.9258 245.614 45.3959 249.518 46.65 253.2C49.09 260.02 53.93 263.89 56.89 266.2C62.5 270.57 68.52 272.9 77.22 274.91C89.3474 277.681 101.792 278.811 114.22 278.27C114.01 283.56 113.82 290.19 113.77 297.84C113.77 302.58 113.71 312.84 114.22 326.27C114.65 337.43 114.94 345.15 116.06 355.78C117.187 365.956 119.13 376.025 121.87 385.89C123.274 391.284 125.773 396.332 129.21 400.72C131.271 403.476 133.936 405.723 137 407.29C139.158 408.356 141.487 409.033 143.88 409.29C147.546 409.641 151.239 409.01 154.58 407.46C152.79 392.73 151.71 380.77 151.07 372.91C150.01 360.02 149.47 349.76 147.7 308.91C147.14 295.77 146.7 284.68 146.33 276.5C152.7 275.89 161.77 274.93 172.62 273.44C199.53 269.76 219.7 265.28 235.75 261.67C257.51 256.79 274.69 252.1 286.05 248.83C298.24 245.32 304.34 243.57 310.81 241.19C324.71 236.08 342.35 229.59 360.03 215.35C370.346 207.375 379.239 197.712 386.33 186.77C392.11 177.77 400.33 164.94 401.92 146.56C404.5 117.37 388.59 95.96 384.49 90.61C379.36 83.92 374.65 80.04 365.23 72.27C350.442 60.1199 334.342 49.6616 317.23 41.09C290.63 27.65 268.71 21.92 248.44 16.63C231.835 12.2825 214.994 8.89353 198 6.48C181.9 4.2 162.82 1.58 137.46 2.2C121.979 2.59982 106.548 4.13056 91.29 6.78C76.57 9.33 66.69 11.11 54 16.26C42.85 20.79 31 25.73 20.06 37.36C12.7328 44.7249 7.28011 53.7407 4.16 63.65C0.849999 74.56 1.50999 83.52 2.01999 90.55C2.99999 103.9 6.70999 114.74 7.99999 114.55Z" stroke="#f9c933" strokeWidth="4" strokeMiterlimit="10" />
					<path d="M117.85 172.57C117.85 174.57 117.85 177.57 117.85 181.28C117.72 195.64 117.01 206.19 116.7 211.09C116.16 219.75 115.55 232.4 115.32 249.15C112.41 249.37 108.23 249.62 103.17 249.73C101.53 249.73 94.76 249.89 85.75 249.38C79.69 249.04 76.24 248.61 72.22 247.43C70.6631 246.977 69.131 246.443 67.63 245.83C68.81 242.78 70.63 238.48 73.02 233.45C77.6791 224.025 83.1251 215.009 89.3 206.5C90.97 204.1 96.23 196.66 102.94 188.73C107.19 183.73 109.31 181.22 111.2 179.56C112.981 178.011 114.651 176.341 116.2 174.56C116.94 173.71 117.49 173 117.85 172.57Z" stroke="#f9c933" strokeWidth="4" strokeMiterlimit="10" />
				  </svg>
				</a>
			  </div>
					  )} */}
    </>
  );
};

export default Content;
