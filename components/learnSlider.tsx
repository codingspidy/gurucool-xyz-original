import Slider from "react-slick";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import googleSearch from "../../images/google-search.png";
import mobileImg from "../../images/smart-learning.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LearnSlider() {
  return (
    <Slider {...settings}>
      <div>
        <Card
          className="cardContainer flex flex-col-reverse items-center justify-center gap-6 max-w-[20rem] border-none"
          style={{ width: "18rem" }}
        >
          <div className="w-[200px]">
            <Image src={mobileImg} alt="image"></Image>
          </div>
          <div>
            <Link href="#">
              <a className="mr-8 text-[#0d6efd]"> Get started </a>
            </Link>
            <Link href="#">
              <a className="text-[#0d6efd]"> Support</a>
            </Link>
          </div>
          <Card.Text className="text-center text-slate-500">
            Speak, scan, type, or draw to translate in over 100 languages.
          </Card.Text>
          <Card.Title className="heading">Search</Card.Title>
          <div className="flex m-auto">
            <Image width="50px" height="50px" src={googleSearch} alt=""></Image>
          </div>
        </Card>
      </div>
      <div>
        <Card
          className="cardContainer flex flex-col-reverse items-center justify-center gap-6 max-w-[20rem] border-none"
          style={{ width: "18rem" }}
        >
          <div className="w-[200px]">
            <Image src={mobileImg} alt="image"></Image>
          </div>
          <div>
            <Link href="#">
              <a className="mr-8 text-[#0d6efd]"> Get started </a>
            </Link>
            <Link href="#">
              <a className="text-[#0d6efd]"> Support</a>
            </Link>
          </div>
          <Card.Text className="text-center text-slate-500">
            Speak, scan, type, or draw to translate in over 100 languages.
          </Card.Text>
          <Card.Title className="heading">Search</Card.Title>
          <div className="flex m-auto">
            <Image width="50px" height="50px" src={googleSearch} alt=""></Image>
          </div>
        </Card>
      </div>
      <div>
        <Card
          className="cardContainer flex flex-col-reverse items-center justify-center gap-6 max-w-[20rem] border-none"
          style={{ width: "18rem" }}
        >
          <div className="w-[200px]">
            <Image src={mobileImg} alt="image"></Image>
          </div>
          <div>
            <Link href="#">
              <a className="mr-8 text-[#0d6efd]"> Get started </a>
            </Link>
            <Link href="#">
              <a className="text-[#0d6efd]"> Support</a>
            </Link>
          </div>
          <Card.Text className="text-center text-slate-500">
            Speak, scan, type, or draw to translate in over 100 languages.
          </Card.Text>
          <Card.Title className="heading">Search</Card.Title>
          <div className="flex m-auto">
            <Image width="50px" height="50px" src={googleSearch} alt=""></Image>
          </div>
        </Card>
      </div>
    </Slider>
  );
}
