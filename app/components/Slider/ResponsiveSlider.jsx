import React, { useRef } from "react";
import Slider from "react-slick";
import { BiStar } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import person1 from "public/person11.webp";
import person2 from "public/person9.webp";
import person3 from "public/person10.webp";
import person4 from "public/sj.jpeg";
import person5 from "public/person8.webp";

import NextImage from "@/components/atom/NextImage/NextImage";
const ResponsiveSlider = ({ reviews }) => {
  const sliderRef = useRef < Slider > null;

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  // const reviews = [
  //   {
  //     img: person4,
  //     name: "Sarah Johnson",
  //     rating: 5,
  //     review:
  //       "Joint Power Security Inc. has truly been a game-changer for our business. Their attention to detail and prompt response have ensured our premises are always secure. I highly recommend them!",
  //   },
  //   {
  //     img: person1,
  //     name: "David Williams",
  //     rating: 5,
  //     review:
  //       "I've had the pleasure of working with Joint Power Security Inc. for over a year now, and I must say, their professionalism is unmatched. Their team's commitment to our safety is commendable.",
  //   },
  //   {
  //     img: person2,
  //     name: "Emily Rodriguez",
  //     rating: 4,
  //     review:
  //       "Joint Power Security Inc. has been our go-to security partner for events, and they've consistently exceeded our expectations. Their proactive approach and reliability make them stand out.",
  //   },
  //   {
  //     img: person3,
  //     name: "Michael Brown",
  //     rating: 4,
  //     review:
  //       "Security is paramount in our line of work, and Joint Power Security Inc. has been instrumental in providing top-notch service. Their expertise and reliability are second to none.",
  //   },
  //   {
  //     img: person5,
  //     name: "Jennifer Thompson",
  //     rating: 4,
  //     review:
  //       "I can't speak highly enough of Joint Power Security Inc. Their dedication to ensuring our safety is evident in every interaction. Trustworthy, professional, and highly recommended!",
  //   },
  // ];

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((item, idx) => (
          // <div
          //   data-aos="fade-up"
          //   key={idx}
          //   className={` ${
          //     idx !== 0 && "hidden md:block"
          //   }  mr-5 bg-normal text-white p-8 sm:p-14 rounded-lg `}
          // >
          //   <p className="text-base sm:text-lg font-semibold">{item.review}</p>
          //   <div className=" flex gap-3 sm:gap-5 mt-7 items-center">
          //     <NextImage
          //       className="overflow-hidden !rounded-full h-24 w-24"
          //       src={item.img}
          //       alt="img"
          //     />
          //     <div className="">
          //       <p className="font-bold text-base md:text-xl mb-2.5">
          //         {item.name}
          //       </p>
          //       <div className="flex items-center gap-1 ">
          //         {[1, 2, 3, 4, 5].map((item) => (
          //           <BiStar size={20} className="text-[#ff9505]" key={item} />
          //         ))}
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div
            className={`feature-${
              idx + 1
            } mb-5 feature transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
            key={idx}
          >
            <Image src={item.img} width={50} height={50} alt={item.title} />
            <p className="my-3">{item.title}</p>
            <p className="text-sm mb-3 text-slate-400">{item.content}</p>
            <button className="text-primary underline text-sm">
              Learn more
            </button>
          </div>
        ))}
      </Slider>
      <div
        // data-aos=""
        className="flex justify-center items-center mt-12 gap-4"
      >
        <button
          onClick={previous}
          className="bg-normal w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowBackIosNew size={20} />
        </button>
        <button
          onClick={next}
          className="bg-normal w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
