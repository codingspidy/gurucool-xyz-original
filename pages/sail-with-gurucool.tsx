import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import boatAnimation from '../lotties/boatanimation.json';
const SailWithGurucool = () => {
	return (
		<>
			<section className=''>
				<div className='innerDiv w-full'>
					<div>
						<h1 className="">Sail with Gurucool</h1>
					</div>
					<div className="relative">
					<Lottie className='boat-animation' animationData={boatAnimation} loop autoPlay  />
					</div>
				</div>
			</section>
			<style global jsx>{`
				footer {
					display: none !important;
				}
			`}</style>
		</>
	);
};

export default SailWithGurucool;
