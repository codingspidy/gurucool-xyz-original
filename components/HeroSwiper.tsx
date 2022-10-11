// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import "./styles.css";
import Link from 'next/link';

export default function HeroSwiper() {
	return (
		<>
			<Swiper
				className='mySwiper'
				slidesPerView={1}
				spaceBetween={0}
				breakpoints={{
					// when window width is >= 640px
					640: {
						slidesPerView: 1,
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 2,
					},
					// when window width is >= 1280px
					1024: {
						slidesPerView: 3,
					},
				}}>
				<SwiperSlide>
					<div className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] lg:h-[calc(100vh-72px)] md:h-[calc(80vh-72px)] sm:h-[60vh] h-[50vh] bg-[url(../images/homeslider/bg-1.png)] bg-cover relative'>
						<div className='innerDiv h-full lg:px-[40px]'>
							<div className='h-full w-full bg-black absolute top-0 left-0 opacity-60 '></div>
							<div className='absolute lg:bottom-12 sm:bottom-36 bottom-[60px] lg:block flex justift-start flex-col px-3 lg:px-0'>
								<h1 className='text-primary md:text-3xl xl:text-4xl text-2xl leading-snug font-bold mb-4'>
									CONNECTING <br /> THE WORLD
								</h1>
								<p className='text-white text-lg mb-6 w-3/4'>An educational networking platform that connects learners and educators.</p>
								<Link href='/peopleold/connecting' passHref>
									<a className='text-primary text-sm font-small'>Learn More</a>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] lg:h-[calc(100vh-72px)] md:h-[calc(80vh-72px)] sm:h-[60vh] h-[50vh] bg-[url(../images/homeslider/bg-2.png)] bg-cover relative'>
						<div className='innerDiv h-full lg:px-[40px]'>
							<div className='h-full w-full bg-black absolute top-0 left-0 opacity-60 '></div>
							<div className='absolute lg:bottom-12 sm:bottom-36 bottom-[60px] lg:block flex justift-start flex-col px-3 lg:px-0'>
								<h1 className='text-primary md:text-3xl xl:text-4xl text-2xl leading-snug font-bold mb-4'>
									EMPATHIZING
									<br /> WITH YOU
								</h1>
								<p className='text-white text-lg mb-6 w-3/4'>A safe and supportive space for you to learn, grow and thrive.</p>
								<Link href='/peopleold/empathy' passHref>
									<a className='text-primary text-sm font-medium'>Learn More</a>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='pt-[60px] pb-[60px] sm:pt-[100px] sm:pb-[100px] lg:pt-[120px] lg:pb-[120px] lg:h-[calc(100vh-72px)] md:h-[calc(80vh-72px)] sm:h-[60vh] h-[50vh] bg-[url(../images/homeslider/bg-3.png)] bg-cover relative'>
						<div className='innerDiv h-full lg:px-[40px]'>
							<div className='h-full w-full bg-black absolute top-0 left-0 opacity-60 '></div>
							<div className='absolute lg:bottom-12 sm:bottom-36 bottom-[60px] lg:block flex justift-start flex-col px-3 lg:px-0'>
								<h1 className='text-primary md:text-3xl xl:text-4xl text-2xl leading-snug font-bold mb-4'>
									DEMOCRATIZING <br /> EDUCATION
								</h1>
								<p className='text-white text-lg mb-6 w-3/4'>
                                    An open school with free, quality and hyperlocal
                                    education.
                                </p>
								<Link href='/peopleold/democratizing' passHref>
									<a className='text-primary text-sm font-medium'>Learn More</a>
								</Link>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
