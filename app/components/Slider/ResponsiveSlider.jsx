"use client";
// import React, { useRef } from "react";
// import Slider from "react-slick";
// import { BiStar } from "react-icons/bi";
// import {
//   MdOutlineArrowBackIosNew,
//   MdOutlineArrowForwardIos,
// } from "react-icons/md";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Image from "next/image";
// const ResponsiveSlider = ({ reviews }) => {
//   const sliderRef = useRef(null);

//   const next = () => {
//     if (sliderRef.current) sliderRef.current.slickNext();
//   };

//   const previous = () => {
//     if (sliderRef.current) sliderRef.current.slickPrev();
//   };

//   const settings = {
//     // className: "center",
//     centerMode: true,
//     // centerPadding: "20px",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // autoplay: true,
//     autoplaySpeed: 600,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container w-full max-w-sm">
//       <Slider ref={sliderRef} {...settings}>
//         {reviews.map((item, idx) => (
//           <div
//             className={`mr-5 mb-5 cursor-pointer rounded w-full min-w-[300px]`}
//             key={idx}
//           >
//             <Image src={item.img} width={50} height={50} alt={item.title} />
//             <p className="my-3">{item.title}</p>
//             <p className="text-sm mb-3 text-slate-400">{item.content}</p>
//             <button className="text-primary underline text-sm">
//               Learn more
//             </button>
//           </div>
//         ))}
//       </Slider>
//       <div
//         // data-aos=""
//         className="flex justify-center items-center mt-12 gap-4"
//       >
//         <button
//           onClick={previous}
//           className="bg-white w-14 aspect-square rounded-full grid place-content-center"
//         >
//           <MdOutlineArrowBackIosNew size={20} className="text-black" />
//         </button>
//         <button
//           onClick={next}
//           className="bg-white w-14 aspect-square rounded-full grid place-content-center"
//         >
//           <MdOutlineArrowForwardIos size={20} className="text-black" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResponsiveSlider;

import React, { useRef } from "react";
import Slider from "react-slick";
import { BiStar } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

// import person1 from "public/person11.webp";
// import person2 from "public/person9.webp";
// import person3 from "public/person10.webp";
// import person4 from "public/sj.jpeg";
// import person5 from "public/person8.webp";

// import NextImage from "@/components/atom/NextImage/NextImage";
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

  return (
    <div className="w-[340px] m-auto">
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((item, idx) => (
          <div
            data-aos="fade-up"
            key={idx}
            className={`border border-red-800 ${
              idx !== 0 && "hidden md:block"
            }  mr-5 bg-normal text-white p-8 sm:p-14 rounded-lg `}
          >
            <p className="text-base sm:text-lg font-semibold">{item?.review}</p>
            <div className=" flex gap-3 sm:gap-5 mt-7 items-center">
              <Image
                className="overflow-hidden !rounded-full h-24 w-24"
                src={item?.img}
                alt="img"
              />
              <div className="">
                <p className="font-bold text-base md:text-xl mb-2.5">
                  {item?.name}
                </p>
                <div className="flex items-center gap-1 ">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <BiStar size={20} className="text-[#ff9505]" key={item} />
                  ))}
                </div>
              </div>
            </div>
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
          <MdOutlineArrowBackIosNew size={20} />
        </button>
        <button
          onClick={next}
          className="bg-white w-14 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
