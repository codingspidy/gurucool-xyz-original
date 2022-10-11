/** @format */

import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const MyNavbar = () => {
  const router = useRouter();
  const [hideNav, setHideNav] = useState(false);
  function toggle() {
    setHideNav(!hideNav);
  }
  return (
    <header className='border-b border-[#e8eaed] lg:static fixed w-full bg-white z-250'>
      <div className='innerDiv'>
        <div className='lg:flex jlg:ustify-between lg:items-center'>
          <Link href='/' passHref>
            <a className='ml-[14px] md:mr-24 cursor-pointer p-0 mb-[-4px]'>
              <Image alt='logo' src='/logo.png' width='150px' height='50px' objectFit='contain'></Image>
            </a>
          </Link>
          <button onClick={toggle} className='flex items-center px-4 py-0 rounded-[8px] text-black border-black lg:hidden absolute top-[25px] right-[15px]'>
            <svg className='fill-current h-6 w-6' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
          <ul className='me-auto lg:flex lg:items-center lg:h-auto h-screen'
		  style={{
			display: hideNav ? 'block' : 'none',
		}}>
            <li className={router.pathname == "/" ? "border-b-2 border-primary" : "nonactive"}>
              <Link href='/' passHref>
                <a className='text-xl font-medium hover:text-primary xl:px-10 lg:px-9 px-3 py-[1rem] inline-block' onClick={toggle}>
                  {" "}
                  Our Story{" "}
                </a>
              </Link>
            </li>
            <li className={router.pathname == "/people" ? "border-b-2 border-primary" : "nonactive"}>
              <Link href='/people' passHref>
                <a className='text-xl font-medium hover:text-primary xl:px-10 lg:px-9 px-3 py-[1rem] inline-block' onClick={toggle}>
                  People
                </a>
              </Link>
            </li>
            <li className={router.pathname == "/tools" ? "border-b-2 border-primary" : "nonactive"}>
              <Link href='/tools' passHref>
                <a className='text-xl font-medium hover:text-primary xl:px-10 lg:px-9 px-3 py-[1rem] inline-block' onClick={toggle}>
                  Tools
                </a>
              </Link>
            </li>
            <li className={router.pathname == "/content" ? "border-b-2 border-primary" : "nonactive"}>
              <Link href='/content' passHref>
                <a className='text-xl font-medium hover:text-primary xl:px-10 lg:px-9 px-3 py-[1rem] inline-block' onClick={toggle}>
                  Content
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
