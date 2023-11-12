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

export default function Home() {
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
  const logos = [logo1, logo2, logo3, logo4];

  const countries = [
    country1,
    country2,
    country3,
    country4,
    country5,
    country6,
  ];

  return (
    <div className="relative min-h-screen pb-10">
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
              src={left_ellipse}
              height={100}
              width={450}
              className="absolute top-[-100px] left-0"
            />
            <Image
              src={right_ellipse}
              height={100}
              width={400}
              className="absolute top-[-70px] right-0"
            />
            <div className="relative z-20 hero min-h-[550px] w-[97%] m-auto flex items-center">
              <div className="flex flex-col gap-5">
                <div className="flex gap-2 items-center text-primary text-xs font-medium">
                  <p>SAFE //</p>
                  <p>SECURE //</p>
                  <p>PRIVATE.</p>
                </div>
                <div className="text-6xl my-3">
                  <p>Buy & sell crypto</p>
                  <p className="font-semibold mt-3">
                    fast <span className="font-normal">& </span> secure.
                  </p>
                </div>
                <div className="flex gap-10 items-center">
                  <button className="req-to-join-btn font-semibold px-7 py-3.5 rounded-3xl text-black flex items-center gap-3">
                    <span>Request to join</span>
                    <Image
                      src={black_arrow}
                      alt="arrow"
                      width={10}
                      height={6}
                    />
                  </button>
                  <button className="text-sm text-white border border-white font-semibold px-7 py-3.5 rounded-3xl flex items-center gap-3">
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
            <div className="relative z-20 features grid grid-cols-3 gap-5">
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
            <div className="relative z-20 mt-28 flex justify-center items-center gap-14">
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
              <div className="flex items-center justify-center gap-10 mt-10">
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
      <div className="bg-white min-h-[200px]"></div>
    </div>
  );
}
