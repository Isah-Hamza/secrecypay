"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { BiStar } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
const ResponsiveSlider = ({ reviews }) => {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    // className: "center",
    centerMode: true,
    // centerPadding: "20px",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 600,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container w-full max-w-sm">
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((item, idx) => (
          <div
            className={`mr-5 mb-5 cursor-pointer rounded w-full min-w-[300px]`}
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
          className="bg-white w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowBackIosNew size={20} className="text-black" />
        </button>
        <button
          onClick={next}
          className="bg-white w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowForwardIos size={20} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
