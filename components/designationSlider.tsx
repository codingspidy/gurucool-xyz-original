import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import image1 from '../images/person-2.webp';
import image2 from '../images/person-5.webp';
import image3 from '../images/person-3.webp';

var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function DesignationSlider() {
	return (
		<div className='designationSlider'>
			<Slider {...settings}>
				<div className='px-4 flex flex-col md:flex-row md:justify-between md:items-center '>
					<div className=' flex flex-col justify-end max-w-[420px] h-[250px] flex-1 md:min-w-[358px] '>
						<article className='min-w-[250px]'>
							<div className='m-auto w-fit translate-y-3/4 '>
								<Image alt='tool' width='150px' height='150px' src={image1} className='rounded-full border-solid border-2 border-white'></Image>
							</div>
							<div className='flex bg-primary px-6 pt-28 pb-8 rounded-2xl '>
								<div className='flex-1'>
									<h1 className='text-2xl font-bold'>Adil Meraj</h1>
									<p className='text-xl'>Founder & CEO</p>
								</div>
								<Link href='#'>
									<a className='hover:text-inherit'>
										<i className='fa-brands fa-linkedin text-2xl'></i>
									</a>
								</Link>
							</div>
						</article>
					</div>
					<h1 className='text-3xl font-medium my-8 max-w-[40rem] md:ml-8 '>
						Rather than artificially flawless, we want Gurucool to be a <span className='text-primary'> beautifully flawed </span>
						community.
					</h1>
				</div>
				<div className='px-4 flex flex-col md:flex-row md:justify-between md:items-center'>
					<div className=' flex flex-col justify-end max-w-[420px] h-[250px] flex-1 md:min-w-[358px]  '>
						<article className='min-w-[250px]'>
							<div className='m-auto w-fit translate-y-3/4 '>
								<Image alt='tool' width='150px' height='150px' src={image3} className='rounded-full border-solid border-2 border-white'></Image>
							</div>
							<div className='flex bg-primary px-6 pt-28 pb-8 rounded-2xl '>
								<div className='flex-1'>
									<h1 className='text-2xl font-bold'>Hussain Jasani</h1>
									<p className='text-xl'>Mentor & Strategic Advisor</p>
								</div>
								<Link href='#'>
									<a className='hover:text-inherit'>
										<i className='fa-brands fa-linkedin text-2xl'></i>
									</a>
								</Link>
							</div>
						</article>
					</div>
					<h1 className='text-3xl font-medium my-8 max-w-[40rem] md:ml-8 '>
						Our
						<span className='text-primary'> strength and striving </span>
						is for our vision. Hopefully soon, we will have fireworks for those who cheer for education!
					</h1>
				</div>
				<div className='px-4 flex flex-col md:flex-row md:justify-between md:items-center'>
					<div className=' flex flex-col justify-end max-w-[420px] h-[250px] flex-1 md:min-w-[358px]  '>
						<article className='min-w-[250px]'>
							<div className='m-auto w-fit translate-y-3/4 '>
								<Image alt='tool' width='150px' height='150px' src={image2} className='rounded-full border-solid border-2 border-white'></Image>
							</div>
							<div className='flex bg-primary px-6 pt-28 pb-8 rounded-2xl '>
								<div className='flex-1'>
									<h1 className='text-2xl font-bold'>Khansa Fahad</h1>
									<p className='text-xl'>Co-Founder & COO</p>
								</div>
								<Link href='#'>
									<a className='hover:text-inherit'>
										<i className='fa-brands fa-linkedin text-2xl'></i>
									</a>
								</Link>
							</div>
						</article>
					</div>
					<h1 className='text-3xl font-medium my-8 max-w-[40rem] md:ml-8  '>
						A <span className='text-primary'>smart, fun and inspiring community</span>
						of people who believe in a learned and fair society- this is what we are building Gurucool into.
					</h1>
				</div>
			</Slider>
		</div>
	);
}
