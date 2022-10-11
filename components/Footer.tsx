import type {NextComponentType} from 'next';
import Link from 'next/link';
import {useState, useEffect} from 'react';
const Footer: NextComponentType = () => {
	const [showMe, setShowMe] = useState(false);
	const [showMe2, setShowMe2] = useState(false);
	const [showMe3, setShowMe3] = useState(false);
	function toggle() {
		setShowMe(!showMe);
	}
	function toggle2() {
		setShowMe2(!showMe2);
	}
	function toggle3() {
		setShowMe3(!showMe3);
	}
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<>
			<footer className='bg-black footer relative pt-[50px] pb-[80px] sm:pt-[80px] sm:pb-[80px] lg:pt-[100px] lg:pb-[100px]'>
				<div className='container-fluid'>
					<div className='lg:flex justify-between items-center border-b mb-12'>
						<div className='flex justify-between items-end lg:w-full pb-0 lg:pb-4'>
							<ul className='flex lg:mb-0 mb-3'>
								<li className='mr-3 text-white'>Follow us</li>
								<li className='mr-3'>
									<Link href='https://www.instagram.com/gurucool.xyz/?hl=en'>
										<a target='_blank' rel='noreferrer' className='text-primary text-xl'>
											<i className='fab fa-instagram'></i>
										</a>
									</Link>
								</li>
								<li className='mr-3'>
									<Link href='https://mobile.twitter.com/gurucool_xyz'>
										<a target='_blank' rel='noreferrer' className='text-primary text-xl'>
											<i className='fab fa-twitter'></i>
										</a>
									</Link>
								</li>
								<li className='mr-3'>
									<Link href='https://www.facebook.com/gurucool.xyz/'>
										<a target='_blank' rel='noreferrer' className='text-primary text-xl'>
											<i className='fab fa-facebook'></i>
										</a>
									</Link>
								</li>
								<li className='mr-3'>
									<Link href='https://www.linkedin.com/company/gurucool-eduverse/'>
										<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/gurucool-eduverse/' className='text-primary text-xl'>
											<i className='fab fa-linkedin'></i>
										</a>
									</Link>
								</li>
								<li className='mr-3'>
									<Link href='https://youngentrepreneurs2.quora.com/'>
										<a target='_blank' rel='noreferrer' className='text-primary text-xl'>
											<i className='fab fa-quora'></i>
										</a>
									</Link>
								</li>
							</ul>
							{showTopBtn && (
								<a className='text-white sm:text-4xl text-2xl sm:right-[50px] right-[20px] cursor-pointer' onClick={goToTop}>
									<i className='text-[22px] pb-4 lg:pb-0 fat fa-circle-arrow-up'></i>
								</a>
							)}
						</div>
						<div className='lg:w-1/2 lg:text-right hidden'>
							<ul className='flex lg:justify-end items-center lg:mt-0 mt-6'>
								<li className='hidden mr-3'>
									<Link href='#'>
										<a className='text-primary text-xl'>
											<i className='fas fa-globe'></i>
										</a>
									</Link>
								</li>
								<li className='hidden mr-3'>
									<select className='py-2 px-4 rounded'>
										<option>English</option>
										<option>हिंदी</option>
									</select>
								</li>
							</ul>
						</div>
					</div>
					<div className='sm:flex'>
						<div className='sm:w-1/3 sm:mb-0 mb-6'>
							<h4 className='font-medium text-primary text-[16px] lg:text-xl mb-3' onClick={toggle}>
								<span>More about us</span>
								<i className='fas fa-chevron-down block sm:hidden'></i>
							</h4>
							<ul
								className='footerLink sm:block'
								style={{
									display: showMe ? 'block' : 'none',
								}}>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/contact'>
										<a target='_blank' className='text-white text-sm'>
											Contact
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://blog.gurucool.xyz'>
										<a target='_blank' className='text-white text-sm'>
											Blogs
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://linktr.ee/gurucool.careers'>
										<a target='_blank' className='text-white text-sm'>
											Careers
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/explorelocation'>
										<a target='_blank' className='text-white text-sm'>
											Locations
										</a>
									</Link>
								</li>
								<li>
									<Link href='https://linktr.ee/gurucool.ship'>
										<a target='_blank' className='text-white text-sm'>
											Sail with Guruship
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='sm:w-1/3 sm:mb-0 mb-6'>
							<h4 className='font-medium text-primary text-[16px] lg:text-xl mb-3' onClick={toggle2}>
								<span>Highlights</span>
								<i className='fas fa-chevron-down block sm:hidden'></i>
							</h4>
							<ul
								className='footerLink sm:block'
								style={{
									display: showMe2 ? 'block' : 'none',
								}}>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/bits'>
										<a target='_blank' className='text-white text-sm'>
											Bits
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://asked.gurucool.xyz/'>
										<a target='_blank' className='text-white text-sm'>
											Asked
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://studyhelp.gurucool.xyz/'>
										<a target='_blank' className='text-white text-sm'>
											Study help
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/'>
										<a target='_blank' className='text-white text-sm'>
											Padhaai
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://group.gurucool.xyz/'>
										<a target='_blank' className='text-white text-sm'>
											Group
										</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='sm:w-1/3'>
							<h4 className='font-medium text-primary text-[16px] lg:text-xl mb-3' onClick={toggle3}>
								<span>Policy</span>
								<i className='fas fa-chevron-down block sm:hidden'></i>
							</h4>
							<ul
								className='footerLink sm:block'
								style={{
									display: showMe3 ? 'block' : 'none',
								}}>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/privacypolicy'>
										<a target='_blank' className='text-white text-sm'>
											Privacy Policy
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/cookiepolicy'>
										<a target='_blank' className='text-white text-sm'>
											Cookie Policy
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/termsofservice'>
										<a target='_blank' className='text-white text-sm'>
											Terms of Service
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/communitystandards'>
										<a target='_blank' className='text-white text-sm'>
											Community Standards
										</a>
									</Link>
								</li>
								<li className='mb-2'>
									<Link href='https://padhaai.gurucool.xyz/howourbusinessworks'>
										<a target='_blank' className='text-white text-sm'>
											How our Business Works
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='border-t mt-9'></div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
