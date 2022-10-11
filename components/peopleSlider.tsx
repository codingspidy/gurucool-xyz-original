// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import person1 from '../images/peopleslider/people-slider.png';
import person2 from '../images/peopleslider/khansa.jpg';
import person3 from '../images/peopleslider/hussain.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper';

// import "./styles.css";
import Link from 'next/link';
import Image from 'next/image';

export default function PeopleSlider() {
	return (
		<>
			<section className=' pb-[60px] sm:pb-[100px] lg:pb-[120px] '>
				<Swiper
					className='mySwiper'
					slidesPerView={1}
					spaceBetween={0}
					modules={[Pagination]}
					pagination={{
						clickable: true,
					}}>
					<SwiperSlide>
						<div className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] '>
							<div className='innerDiv'>
								<div className='sm:flex flex-col m-auto items-start justify-center gap-8 max-w-[340px] sm:max-w-none md:gap-16 sm:items-center sm:flex-row sm:justify-between'>
									<div className='min-w-[300px] min-h-[310px] sm:min-h-[340px] sm:min-w-[340px] relative flex rounded-2xl overflow-hidden '>
										<div className='w-full h-full absolute z-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]'></div>
										<Image src={person1} objectFit='cover' alt='person'></Image>
										<div className='absolute z-20  w-[80%] bottom-8 left-8 text-white'>
											<div className='flex w-full justify-between items-center'>
												<h1 className='font-semibold text-2xl'>Adil Meraj</h1>
												<i className='fa-brands fa-linkedin text-2xl'></i>
											</div>
											<h2 className='font-light'>Founder & CEO</h2>
										</div>
									</div>
									<h3 className='font-semibold text-2xl max-w-3xl md:text-3xl sm:mt-0 mt-6'>
										Rather than artificially flawless, we want Gurucool to be a<span className='text-primary'> beautifully flawed </span>
										community
									</h3>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] '>
							<div className='innerDiv'>
								<div className='sm:flex flex-col m-auto items-start justify-center gap-8 max-w-[340px] sm:max-w-none md:gap-16 sm:items-center sm:flex-row sm:justify-between'>
									<div className='min-w-[300px] min-h-[310px] sm:min-h-[340px] sm:min-w-[340px] relative flex rounded-2xl overflow-hidden '>
										<div className='w-full h-full absolute z-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]'></div>
										<Image src={person2} objectFit='cover' alt='person'></Image>
										<div className='absolute z-20  w-[80%] bottom-8 left-8 text-white'>
											<div className='flex w-full justify-between items-center'>
												<h1 className='font-semibold text-2xl'>Khansa Fahad</h1>
												<i className='fa-brands fa-linkedin text-2xl'></i>
											</div>
											<h2 className='font-light'>Co-Founder & COO</h2>
										</div>
									</div>
									<h3 className='font-semibold text-2xl max-w-3xl md:text-3xl sm:mt-0 mt-6'>
										A<span className='text-primary'> smart, fun and inspiring community </span>
										of people who believe in a learned and fair society- this is what we are building Gurucool into.
									</h3>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] '>
							<div className='innerDiv'>
								<div className='sm:flex flex-col m-auto items-start justify-center gap-8 max-w-[340px] sm:max-w-none md:gap-16 sm:items-center sm:flex-row sm:justify-between'>
									<div className='min-w-[300px] min-h-[310px] sm:min-h-[340px] sm:min-w-[340px] relative flex rounded-2xl overflow-hidden '>
										<div className='w-full h-full absolute z-10 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]'></div>
										<Image src={person3} objectFit='cover' alt='person'></Image>
										<div className='absolute z-20  w-[80%] bottom-8 left-8 text-white'>
											<div className='flex w-full justify-between items-center'>
												<h1 className='font-semibold text-2xl'>Hussain Jasani</h1>
												<i className='fa-brands fa-linkedin text-2xl'></i>
											</div>
											<h2 className='font-light'>Mentor & Stretegic Advisor</h2>
										</div>
									</div>
									<h3 className='font-semibold text-2xl max-w-3xl md:text-3xl sm:mt-0 mt-6'>
										Our
										<span className='text-primary'> strength and striving </span>
										is for our vision. Hopefully soon, we will have fireworks for those who cheer for education!
									</h3>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>
		</>
	);
}
