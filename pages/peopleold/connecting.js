import Image from 'next/image';
import Link from 'next/link';
import connecting1 from '../../images/connecting-img1.jpg';
import connecting2 from '../../images/connecting-img2.jpg';
import socialMedia from '../../images/social-media.jpg';
import { useEffect, useState } from "react";
const Connecting = () => {
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
	  setLoading(true);
	}, []);
	useEffect(() =>{
	  setTimeout(() => setLoading(false), 2000);
	 })
	return (
		<>
			{/* {!isLoading ? ( */}
		<div>
			<div className='lg:h-[calc(100vh-84.4px)] overflow-hidden'>
				<div className='relative'>
					<div className='absolute w-full h-full bg-black opacity-60'></div>
					<div className='absolute top-[20%] left-[10%] text-white'>
						<h1 className='text-3xl leading-snug md:text-7xl md:leading-snug mb-4 md:mb-8 font-bold'>
							Connecting <br /> <span className='text-primary'> Purposefully </span>
						</h1>
						<p className='text-xl md:text-3xl font-light'>
							<i className='fa-regular font-light text-2xl md:text-4xl mr-4 md:mr-6 fa-circle-arrow-right'></i>
							Welcome to Eduverse
						</p>
					</div>
					<video muted autoPlay>
						<source src='/gurucool.mp4' type='video/mp4' />
					</video>
				</div>
			</div>
			{/* section Educverse */}
			<section className='section'>
				<div className='container-fluid'>
					<h1 className=' p-4 text-center text-enter text-3xl font-semibold mb-12 md:text-5xl'>
						<span className='text-primary'>Gurucool </span>Eduverse
					</h1>
					<p className='text-center m-auto max-w-xl font-medium text-xl sm:text-2xl mb-16'>We help you to connect purposefully with learners and educators, find communities, and grow together in a Phygital Reality.</p>
					<div className='flex gap-6 justify-center'>
						<Link href='https://www.facebook.com/gurucool.xyz/' passHref>
							<a className='hover:text-inherit'>
								<i className='fa-brands fa-facebook-square text-2xl sm:text-3xl'></i>
							</a>
						</Link>
						<Link href='https://www.instagram.com/gurucool.xyz/?hl=en' passHref>
							<a className='hover:text-inherit'>
								<i className='fa-brands fa-instagram text-2xl sm:text-3xl'></i>
							</a>
						</Link>
						<Link href='https://www.linkedin.com/company/gurucool-eduverse/mycompany/' passHref>
							<a className='hover:text-inherit'>
								<i className='fa-brands fa-linkedin text-2xl sm:text-3xl'></i>
							</a>
						</Link>
						<Link href='https://mobile.twitter.com/gurucool_xyz' passHref>
							<a className='hover:text-inherit'>
								<i className='fa-brands fa-twitter text-2xl sm:text-3xl'></i>
							</a>
						</Link>
					</div>
				</div>
			</section>
			{/* section grid */}

			<section className='section gap-4 grid md:grid-rows-[auto_auto] '>
				<h1 className='col-span-full text-xl font-medium text-[#677B8C]'>REPORTS SAY OTHERWISE</h1>
				<div className='container-fluid flex flex-col md:flex-row justify-between'>
					<div className='grid grid-rows-2 gap-4 mb-8 basis-1/3'>
						<div className='flex items-center bg-yellow-100 min-h-[200px] max-h-[200px]'>
							<Image alt='tool' src={socialMedia} className='w-100 h-[200px] max-h-[200px] min-h-[200px]' objectFit='cover'></Image>
						</div>
						<div className=' bg-[#c8e7fa] flex '>
							<Link href='https://www.healthline.com/health/how-social-media-is-ruining-relationships' passHref>
								<a className=' p-4 text-center text-xl font-medium m-auto text-[#136098]' target='_blank'>
									Social Media is Killing Your Friendships
								</a>
							</Link>
						</div>
					</div>
					<div className='grid grid-rows-2 gap-4 basis-1/2'>
						<div className='grid lg:grid-cols-2'>
							<div className=' bg-[#fbd6b7] flex '>
								<Link href='https://www.heinz.cmu.edu/media/2018/October/troll-farms-and-fake-news-social-media-weaponization' passHref>
									<a className=' p-4 text-center text-xl font-medium m-auto text-[#aa4829]' target='_blank'>
										Weaponizing Social Media: Troll Farms and Fake News
									</a>
								</Link>
							</div>
							<div className='flex'>
								<Image alt='tool' src={connecting1} height='800px' width='1500px' objectFit='cover'></Image>
							</div>
						</div>
						<div className='grid lg:grid-cols-2'>
							<div className='flex'>
								<Image alt='tool' src={connecting2} height='800px' width='1500px' objectFit='cover'></Image>
							</div>
							<div className=' bg-[#92c8ba] flex '>
								<Link href='https://www.hsph.harvard.edu/news/features/how-social-medias-toxic-content-sends-teens-into-a-dangerous-spiral/' passHref>
									<a className=' p-4 text-center text-xl font-medium m-auto text-[#194f53]' target='_blank'>
										How Social {"Media's"} Toxic Content Sends Teens into {"'A "}
										Dangerous
										{" Spiral'"}
									</a>
								</Link>
							</div>
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

export default Connecting;
