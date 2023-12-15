"use client";
import { ImSpinner2 } from "react-icons/im";
import Header from "@/app/components/Header";
import Image from "next/image";
import black_arrow from "@/app/assets/images/arrow-right-black.png";
import white_arrow from "@/app/assets/images/arrow-right-white.png";
import right_ellipse from "@/app/assets/images/right-ellipse.png";
import left_ellipse from "@/app/assets/images/left-ellipse.png";
import feature1 from "./assets/images/swap.png";
import feature2 from "./assets/images/secure.png";
import feature3 from "./assets/images/send_funds.png";
import feature4 from "./assets/images/simplified_payment.png";
import feature5 from "./assets/images/get_paid.png";


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
import country7 from "./assets/images/uae-flag.png";
import playStore from "./assets/images/get_google_play.svg";
import appStore from "./assets/images/get_play_store.svg";

import { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import ResponsiveSlider from "./components/Slider/ResponsiveSlider";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  const form = useRef();
 
  const [user, setUser] = useState({ email: "", fullname: "" });
  const [loading, setLoading] = useState(false);

  const features = [
    {
      title: "Experience Zero Fee Swap",
      content:
        "Maximize your trades by instantly exchanging coins without any fees.",
      img: feature1,
    },
    {
      title: "Secure and Reliable P2P",
      content:
        "Safely deposit funds from your bank account and securely withdraw money using personalized P2P service.",
      img: feature2,
    },
    {
      title: "Easily Send and Receive Funds Using Usernames",
      content:
        "Connect with friends, family, and loved ones, sending money using their usernames.",
      img: feature3,
    },
    {
      title: "Simplified Payments Using Virtual Cards",
      content:
        "Effortlessly manage payments with Obiex's virtual credit and debit cards. Generate a virtual card to conveniently cover all your expenses.",
      img: feature4,
    },
    {
      title: "Get paid while keeping your crypto safe!",
      content:
        "Securely store your cryptocurrency and earn up to 10% interest on what you save.",
      img: feature5,
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
    country7,
  ];

 

  // const endpoint = "http://localhost/secrecy-backend/server.php";
  const endpoint = "https://secrecypay.com/server/server.php";

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(endpoint, user, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "*/*",
        },
      })
      .then((res) => {
        successNotification(res.data.message);
      })
      .catch((e) => {
        console.log(e.response.data.error);
        errorNotification(e.response.data.error);
      })
      .finally(() => setLoading(false));
  };

  const successNotification = (msg) =>
    toast.success(msg ?? "Successfully subscribed. Thank you!", {
      theme: "colored",
      hideProgressBar: true,
    });

  const errorNotification = (msg) =>
    toast.error(msg ?? "An error occured. Try again!", {
      theme: "colored",
      hideProgressBar: true,
    });

  const scrollToForm = () => {
    form.current.scrollIntoView();
  };

  return (
    <div className="relative min-h-screen">
      <div className="bg-black text-white pb-14">
        <Header scrollToForm={scrollToForm} />
        <main className="max-w-[1300px] px-5 m-auto h-full flex flex-col">
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
                  <button
                    onClick={scrollToForm}
                    className="req-to-join-btn font-semibold px-3 sm:px-7 py-3.5 rounded-3xl text-black flex items-center justify-center gap-3"
                  >
                    <span>Request to join</span>
                    <Image
                      src={black_arrow}
                      alt="arrow"
                      width={10}
                      height={6}
                    />
                  </button>
                  <button
                    onClick={scrollToForm}
                    className="text-sm text-white border border-white font-semibold px-3 sm:px-7 py-3.5 rounded-3xl flex items-center justify-center gap-3"
                  >
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
                  Amazing <br /> features
                </h4>
                <div className="text-slate-400 text-xs">
                  <ul className="list-disc disc-inside">
                    <li> Explore the World of Confidential Transactions</li>
                    <li>Engage in discreet cryptocurrency transactions </li>
                    <li>
                      Acquire and vend crypto at optimal rates without any
                      transaction fees.
                    </li>
                    <li>
                      Utilize dollar cards for seamless shopping and
                      confidential payments worldwide.
                    </li>
                    <li>
                      Swiftly exchange crypto without the need to wait for
                      blockchain confirmations.
                    </li>
                    <li>
                      Safely store your digital assets and earn up to 10%
                      interest on your cryptocurrency holdings.
                    </li>
                  </ul>
                </div>
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
                    width={60}
                    height={60}
                    alt={item.title}
                  />
                  <p className="my-3">{item.title}</p>
                  <p className="text-sm mb-3 text-slate-400">{item.content}</p>
                  <button
                    onClick={scrollToForm}
                    className="text-primary underline text-sm"
                  >
                    Learn more
                  </button>
                </div>
              ))}
            </div>
            <div className="relative z-20 features grid md:hidden gap-5">
              <div className="px-2">
                <h4 className="font-semibold leading-10 mb-3 text-4xl">
                  Amazing <br /> features
                </h4>
                <ul className="list-disc list-outside pl-3 flex flex-col gap-3">
                  <li> Explore the World of Confidential Transactions</li>
                  <li>Engage in discreet cryptocurrency transactions </li>
                  <li>
                    Acquire and vend crypto at optimal rates without any
                    transaction fees.
                  </li>
                  <li>
                    Utilize dollar cards for seamless shopping and confidential
                    payments worldwide.
                  </li>
                  <li>
                    Swiftly exchange crypto without the need to wait for
                    blockchain confirmations.
                  </li>
                  <li>
                    Safely store your digital assets and earn up to 10% interest
                    on your cryptocurrency holdings.
                  </li>
                </ul>
              </div>
              <div className="container">
                <ResponsiveSlider
                  reviews={features}
                  scrollToForm={scrollToForm}
                />
              </div>
            </div>

            <div className="mt-28">
              <p className="text-lg text-slate-500 text-center">
                Available in these countries
              </p>
              <div className="overflow-x-auto">
                <div className="min-w-[610px] sm:min-w-[840px] flex items-center justify-center gap-5 md:gap-10 mt-10">
                  {countries.map((item, idx) => (
                    <Image
                      key={idx}
                      src={item}
                      alt="country"
                      className="rounded-lg w-[70px] sm:w-[100px] sm:max-w-[100px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div
        ref={form}
        id="waitlist-form"
        className="bg-[#ebeff5] min-h-[200px] px-5 md:px-0 py-14"
      >
        <div className="max-w-[700px] m-auto">
          <form
            onSubmit={submitForm}
            className="my-7 text-white bg-black rounded-lg p-5 md:p-10 md:px-24"
          >
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
              value={user.fullname}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, fullname: e.target.value }))
              }
              type="text"
              name="fullname"
              placeholder="Fullname"
              className="outline-none w-full text-sm bg-[#D9D9D940] p-3 rounded-md"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="my-3 outline-none w-full text-sm bg-[#D9D9D940] p-3 rounded-md"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <button
              disabled={loading}
              type="submit"
              className="flex items-center justify-center gap-3 disabled:opacity-75 w-full text-sm text-white bg-primary font-medium px-7 py-3.5 rounded-md"
            >
              {loading ? (
                <ImSpinner2 className="animate-spin" size={20} />
              ) : null}
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
      <FAQ scrollToForm={scrollToForm} />
      {/* <div
        id="faq"
        ref={faq}
        className="scroll-pt-20 px-5 text-white pt-16 max-w-[1300px] mx-auto"
      >
        <div className="faqs" id="faqs">
          <h3 className="text-3xl font-semibold ">Have a Question?</h3>
          <p className="text-slate-400 text-sm mb-10">
            Get instant clarity and expert guidance.{" "}
          </p>
          <div className=" md:px-0 mt-10 flex flex-col md:flex-row md:items-start gap-14 md:gap-20 max-w-6xl m-auto">
            <div className="p-3 border-y md:border-y-0 overflow-x-auto md:w-[400px] flex md:grid gap-5">
              {faqs.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-7 py-3 rounded-md text-sm ${
                    activeCategory == idx && "bg-[#191919] text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="w-full md:w-[calc(100vw-400px)]">
              {faqs[activeCategory].faqs.map((item, idx) => (
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
        <div className="resources mt-32">
          <h3 className="text-[26px] font-semibold ">Resources</h3>
          <p className="text-slate-400 text-sm mb-10">
            Discover the hidden strategies and expert insights.{" "}
          </p>
          <div className="relative z-20 resources hidden md:grid grid-cols-1 md:grid-cols-3 gap-5">
            {resources.map((item, idx) => (
              <div
                className={`resource-${
                  idx + 1
                } resource transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
                key={idx}
              >
                <Image src={item.img} width={60} height={60} alt={item.title} />
                <p className="my-3">{item.title}</p>
                <p className="text-sm mb-3 text-slate-400">{item.content}</p>
                <button
                  onClick={scrollToForm}
                  className="text-primary underline text-sm"
                >
                  Learn more
                </button>
              </div>
            ))}
          </div>
          <div className="container block md:hidden">
            <ResponsiveSlider reviews={resources} scrollToForm={scrollToForm} />
          </div>
        </div>
      </div> */}
      <div className="bg-primary mt-32">
        <div className="max-w-[1300px] m-auto px-5 py-20 pb-28 flex gap-10 flex-col md:flex-row justify-between md:items-center">
          <div className="">
            <div className="text-4xl md:text-5xl my-3">
              <p>Buy & sell crypto</p>
              <p className="font-semibold mt-3">
                fast <span className="font-normal">& </span> secure.
              </p>
            </div>
            <p className="text-sm max-w-sm mt-3">
              Buy and sell crypto in a flash with Secrecy Pay. Fast, secure
              transactions made easy
            </p>
          </div>
          <div className="flex flex-col gap-7 md:mr-10">
            <p className="text-lg font-semibold">Download App (Coming Soon)</p>
            <div className="flex flex-col gap-5">
              <Image
                alt="arrow"
                src={playStore}
                height={50}
                width={150}
                className="cursor-pointer"
              />
              <Image
                alt="arrow"
                src={appStore}
                height={50}
                width={150}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="text-white pt-14 pb-5">
        <div className="text-sm flex flex-wrap justify-between gap-10 max-w-[1300px] px-5 m-auto">
          <div className="">
            <div className="flex items-center gap-1 ">
              <Image src={logo} alt="logo" width={20} height={30} />
              <span className="text-lg font-extrabold">SECRECY PAY</span>
            </div>
            <p className="max-w-xs text-sm mt-2 ">
              Buy and sell crypto in a flash with Secrecy Pay. Fast, secure
              transactions made easy
            </p>
          </div>
          <div className="mt-10 sm:mt-0">
            <h4 className="font-semibold text-base mb-5">Community</h4>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-primary">
                {" "}
                <a
                  target="_blank"
                  href="https://x.com/secrecypay?s=21&t=1cONdDNrW1DXiKkRQxYzgw"
                >
                  Twitter
                </a>{" "}
              </li>
              <li className="hover:text-primary">
                {" "}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/secrecy-pay/"
                >
                  LinkedIn
                </a>{" "}
              </li>
              <li className="hover:text-primary">
                {" "}
                <a target="_blank" href="https://t.me/+1LQb4qZwsxIzYTM0">
                  Telegram
                </a>{" "}
              </li>
              <li className="hover:text-primary">
                {" "}
                <a
                  target="_blank"
                  href="https://instagram.com/secrecypayhq?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                >
                  Instagram
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="mt-10 sm:mt-0">
            <h4 className="font-semibold text-base mb-7">Help</h4>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-primary">
                <a href="mailto:info@secrecypay.com">Help Center</a>
              </li>
              <li className="hover:text-primary cursor-pointer">
                <button onClick={() => faq.current.scrollIntoView()}>
                  FAQs
                </button>
              </li>
            </ul>
          </div>
          <div className="mt-10 sm:mt-0">
            <h4 className="font-semibold text-base mb-7">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="hover:text-primary">
                <a href="mailto:info@secrecypay.com">Mail</a>
              </li>
              <li className="hover:text-primary">
                <a href="tel:+1234567890">Phone</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-16 text-center text-sm text-white/80">
          © {new Date().getFullYear()} SecrecyPay
        </p>
      </footer> */}
      <Footer />
    </div>
  );
}
