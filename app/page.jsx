"use client";

import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import black_arrow from "@/app/assets/images/arrow-right-black.png";
import white_arrow from "@/app/assets/images/arrow-right-white.png";
import right_ellipse from "@/app/assets/images/right-ellipse.png";
import left_ellipse from "@/app/assets/images/left-ellipse.png";
import feature1 from "./assets/images/feature1.png";
import feature2 from "./assets/images/feature2.png";
import feature3 from "./assets/images/feature3.png";
import feature4 from "./assets/images/feature4.png";
import feature5 from "./assets/images/feature5.png";

import logo1 from "./assets/images/logo1.png";
import logo2 from "./assets/images/logo2.png";
import logo3 from "./assets/images/logo3.png";
import logo4 from "./assets/images/logo4.png";

import country1 from "./assets/images/country1.png";
import country2 from "./assets/images/country2.png";
import country3 from "./assets/images/country3.png";
import country4 from "./assets/images/country4.png";
import country5 from "./assets/images/country5.png";
import country6 from "./assets/images/country6.png";
import plus from "./assets/images/plus.png";

import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [activeFaq, setActiveFaq] = useState(0);
  const features = [
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature1,
    },
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature2,
    },
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature3,
    },
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature4,
    },
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature5,
    },
  ];
  const resources = [
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature1,
    },
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature2,
    },
    {
      title: "Feature",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.",
      img: feature3,
    },
  ];
  const logos = [logo1, logo2, logo3, logo4];

  const countries = [
    country1,
    country2,
    country3,
    country4,
    country5,
    country6,
  ];

  const categories = [
    "General",
    "Transactions",
    "Payment",
    "Returns",
    "Careers",
  ];

  const faqs = [
    {
      q: "What is Secrecy Pay and how do I use it?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas at elementum pretium. Non habitant morbi arcu eu et. Velit gravida egestas massa, volutpat mi egestas mauris nulla ac. Posuere in mauris feugiat sed porta nisi, ut massa. Leo ut massa in commodo, in egestas in ultrices.",
    },
    {
      q: "What is Secrecy Pay and how do I use it?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas at elementum pretium. Non habitant morbi arcu eu et. Velit gravida egestas massa, volutpat mi egestas mauris nulla ac. Posuere in mauris feugiat sed porta nisi, ut massa. Leo ut massa in commodo, in egestas in ultrices.",
    },
    {
      q: "What is Secrecy Pay and how do I use it?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas at elementum pretium. Non habitant morbi arcu eu et. Velit gravida egestas massa, volutpat mi egestas mauris nulla ac. Posuere in mauris feugiat sed porta nisi, ut massa. Leo ut massa in commodo, in egestas in ultrices.",
    },
    {
      q: "What is Secrecy Pay and how do I use it?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas at elementum pretium. Non habitant morbi arcu eu et. Velit gravida egestas massa, volutpat mi egestas mauris nulla ac. Posuere in mauris feugiat sed porta nisi, ut massa. Leo ut massa in commodo, in egestas in ultrices.",
    },
    {
      q: "What is Secrecy Pay and how do I use it?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas at elementum pretium. Non habitant morbi arcu eu et. Velit gravida egestas massa, volutpat mi egestas mauris nulla ac. Posuere in mauris feugiat sed porta nisi, ut massa. Leo ut massa in commodo, in egestas in ultrices.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="bg-black text-white pb-14">
        <header className="max-w-[1200px] m-auto px-5 relative z-20 flex justify-between items-center py-10">
          <div className="flex items-center gap-1 ">
            <Image src={logo} alt="logo" width={20} height={30} />
            <span>SECRECY PAY</span>
          </div>
          <button className="text-black join-btn font-semibold px-7 py-2.5 rounded-3xl text-sm">
            {" "}
            JOIN
          </button>
        </header>
        <main className="max-w-[1200px] px-5 m-auto h-full flex flex-col">
          <div className="">
            <Image
              alt="arrow"
              src={left_ellipse}
              height={100}
              width={450}
              className="absolute top-[-100px] left-0"
            />
            <Image
              alt="arrow"
              src={right_ellipse}
              height={100}
              width={400}
              className="absolute top-[-70px] right-0"
            />
            <div className="relative z-20 hero min-h-[550px] w-full sm:w-[97%] m-auto flex items-center">
              <div className="w-full flex flex-col gap-5">
                <div className="flex gap-2 items-center text-primary text-xs font-medium">
                  <p>SAFE //</p>
                  <p>SECURE //</p>
                  <p>PRIVATE.</p>
                </div>
                <div className="text-4xl md:text-6xl my-3">
                  <p>Buy & sell crypto</p>
                  <p className="font-semibold mt-3">
                    fast <span className="font-normal">& </span> secure.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-10">
                  <button className="req-to-join-btn font-semibold px-3 sm:px-7 py-3.5 rounded-3xl text-black flex items-center justify-center gap-3">
                    <span>Request to join</span>
                    <Image
                      src={black_arrow}
                      alt="arrow"
                      width={10}
                      height={6}
                    />
                  </button>
                  <button className="text-sm text-white border border-white font-semibold px-3 sm:px-7 py-3.5 rounded-3xl flex items-center justify-center gap-3">
                    <span>LEARN MORE</span>
                    <Image
                      src={white_arrow}
                      alt="arrow"
                      width={10}
                      height={6}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden relative z-20 features md:grid grid-cols-3 gap-5">
              <div className="px-2">
                <h4 className="font-semibold leading-10 mb-3 text-4xl">
                  Fantastic <br /> features
                </h4>
                <p className="text-slate-400 text-[15px]">
                  Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                  Porttitor sed tellus massa adipiscing egestas placerat.
                  Condimentum tempor lorem eu mi pretium nunc.
                </p>
              </div>
              {features.map((item, idx) => (
                <div
                  className={`feature-${
                    idx + 1
                  } feature transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
                  key={idx}
                >
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  <p className="my-3">{item.title}</p>
                  <p className="text-sm mb-3 text-slate-400">{item.content}</p>
                  <button className="text-primary underline text-sm">
                    Learn more
                  </button>
                </div>
              ))}
            </div>
            <div className="relative z-20 features grid md:hidden gap-5">
              <div className="px-2">
                <h4 className="font-semibold leading-10 mb-3 text-4xl">
                  Fantastic <br /> features
                </h4>
                <p className="text-slate-400 text-[15px]">
                  Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
                  Porttitor sed tellus massa adipiscing egestas placerat.
                  Condimentum tempor lorem eu mi pretium nunc.
                </p>
              </div>
              <div className="">
                {features.map((item, idx) => (
                  <div
                    className={`feature-${
                      idx + 1
                    } mb-5 feature transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
                    key={idx}
                  >
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt={item.title}
                    />
                    <p className="my-3">{item.title}</p>
                    <p className="text-sm mb-3 text-slate-400">
                      {item.content}
                    </p>
                    <button className="text-primary underline text-sm">
                      Learn more
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto relative z-20 mt-16 md:mt-28 flex justify-center items-center gap-5 md:gap-14">
              {logos.map((item, idx) => (
                <Image
                  key={idx}
                  src={item}
                  width={120}
                  height={30}
                  alt="logo"
                />
              ))}
            </div>
            <div className="mt-20">
              <p className="text-lg text-slate-500 text-center">
                Available in these countries
              </p>
              <div className="overflow-x-auto flex items-center justify-center gap-5 md:gap-10 mt-10">
                {countries.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item}
                    width={100}
                    height={40}
                    alt="country"
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-[#ebeff5] min-h-[200px] px-5 md:px-0 py-14">
        <div className="max-w-[700px] m-auto">
          <h3 className="text-2xl text-center font-semibold">
            Fantastic features
          </h3>
          <p className="text-sm text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            sed tellus <br /> adipiscing egestas placerat. Condimentum tempor
            lorem eu mi pretium nunc.
          </p>
          <div className="mt-7 text-white bg-black rounded-lg p-5 md:p-10 md:px-24">
            <h3 className="text-3xl text-center font-semibold tracking-wider leading-9">
              Our Membership <br />
              is almost here
            </h3>
            <p className="text-sm text-center mb-7 mt-3">
              Information and connections that help you execute and scale your
              idea or business. stay informed about out launch and become our
              first members.
            </p>
            <input
              type="text"
              placeholder="Fullname"
              className="outline-none w-full text-sm bg-[#D9D9D940] p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Email address"
              className="my-3 outline-none w-full text-sm bg-[#D9D9D940] p-3 rounded-md"
            />
            <button className="w-full text-sm text-white bg-primary font-medium px-7 py-3.5 rounded-md">
              Join the waitlist
            </button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-5">
            {features
              .filter((_, idx) => idx < 3)
              .map((item, idx) => (
                <div className="flex items-start gap-2" key={idx}>
                  <Image
                    key={idx}
                    src={item.img}
                    width={35}
                    height={35}
                    alt={item.title}
                    className="mt-2"
                  />
                  <div>
                    <p className="my-3 font-semibold">{item.title}</p>
                    <p className="text-[10px] mb-3 text-slate-400">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="px-5 text-white my-16 max-w-[1200px] mx-auto">
        <div className="faqs ">
          <h3 className="text-3xl font-semibold ">Have a Question?</h3>
          <p className="text-slate-400 text-sm mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10 flex flex-col md:flex-row md:items-start gap-20 max-w-5xl m-auto">
            <div className="overflow-x-auto md:w-[400px] flex md:grid gap-5">
              {categories.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-7 py-3 rounded-md text-sm ${
                    activeCategory == idx && "bg-[#191919] text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div>
              {faqs.map((item, idx) => (
                <div
                  onClick={() => setActiveFaq(idx)}
                  key={idx}
                  className="mb-3 cursor-pointer border-b border-slate-800 py-2"
                >
                  <div className="mb-2 flex items-center justify-between gap-10">
                    <p className="font-medium">{item.q}</p>
                    <Image
                      src={plus}
                      width={10}
                      height={10}
                      alt={"plus"}
                      className={`${
                        activeFaq == idx
                      } && 'origin-center rotate-45'`}
                    />
                  </div>
                  <p
                    className={`pb-2 text-sm text-slate-300 ${
                      activeFaq !== idx && "hidden"
                    }`}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="resources mt-20">
          <h3 className="text-[26px] font-semibold ">Resources</h3>
          <p className="text-slate-400 text-sm mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="relative z-20 resources grid grid-cols-1 md:grid-cols-3 gap-5">
            {resources.map((item, idx) => (
              <div
                className={`resource-${
                  idx + 1
                } resource transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
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
          </div>
        </div>
      </div>
      <div className="bg-primary mt-48">
        <div className="max-w-[1200px] m-auto px-5 py-20 flex gap-10 flex-col md:flex-row justify-between md:items-center">
          <div className="">
            <div className="text-4xl md:text-5xl my-3">
              <p>Buy & sell crypto</p>
              <p className="font-semibold mt-3">
                fast <span className="font-normal">& </span> secure.
              </p>
            </div>
            <p className="text-sm max-w-sm mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              sed tellus massa adipiscing egestas placerat. Condimentum tempor
              lorem eu mi pretium nunc.
            </p>
          </div>
          <div className="flex gap-10 items-center">
            <button className="req-to-join-btn-black text-center font-semibold px-7 py-2.5 rounded-2xl text-white bg-black flex items-center gap-3">
              <span>Request to join</span>
            </button>
          </div>
        </div>
      </div>
      <footer className="text-white pt-14 pb-5">
        <div className="text-sm flex flex-wrap justify-between gap-10 max-w-[1200px] px-5 m-auto">
          <div className="">
            <div className="flex items-center gap-1 ">
              <Image src={logo} alt="logo" width={20} height={30} />
              <span>SECRECY PAY</span>
            </div>
            <p className="max-w-xs text-sm mt-2 ">
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
              Porttitor sed tellus massa adipiscing egestas placerat.{" "}
            </p>
          </div>
          <div className="">
            <h4 className="font-semibold text-base mb-5">Company</h4>
            <ul className="flex flex-col gap-2">
              <li className="">About Us</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-base mb-5">Community</h4>
            <ul className="flex flex-col gap-2">
              <li className="">Twitter</li>
              <li>LinkedIn</li>
              <li>Telegram</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-base mb-5">Help</h4>
            <ul className="flex flex-col gap-2">
              <li className="">Help Center</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-semibold text-base mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-2">
              <li className="">Mail</li>
              <li>Phone</li>
            </ul>
          </div>
        </div>
        <p className="mt-16 text-center text-sm text-white/80">
          © 2023 SecrecyPay
        </p>
      </footer>
    </div>
  );
}
