import '../styles/index.scss';
import type {AppProps} from 'next/app';
import Footer from '../components/Footer';
import MyNavbar from '../components/navbar';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Gurucool - Coolfluencing the world</title>
			</Head>
			<MyNavbar />
			<main className='pt-[68px] lg:pt-0 main-container'>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

export default MyApp;
