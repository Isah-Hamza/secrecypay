import Image from "next/image";
import logo from "@/app/assets/images/logo.png";
import black_arrow from "@/app/assets/images/arrow-right-black.png";
import white_arrow from "@/app/assets/images/arrow-right-white.png";
import right_ellipse from "@/app/assets/images/right-ellipse.png";
import left_ellipse from "@/app/assets/images/left-ellipse.png";

export default function Home() {
  return (
    <div className=" bg-black min-h-screen">
      <div className="max-w-[1200px] m-auto px-5 text-white">
        <header className="flex justify-between items-center py-5">
          <div className="flex items-center gap-1 ">
            <Image src={logo} alt="logo" width={20} height={30} />
            <span>SECRECY PAY</span>
          </div>
          <button className="text-black join-btn font-semibold px-7 py-2.5 rounded-3xl text-sm">
            {" "}
            JOIN
          </button>
        </header>
        <main className="relative flex items-center">
          <Image />
          <div className="hero min-h-[550px] w-[95%] m-auto flex items-center">
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
                  <Image src={black_arrow} alt="arrow" width={10} height={6} />
                </button>
                <button className="text-white border border-white font-semibold px-7 py-3.5 rounded-3xl flex items-center gap-3">
                  <span>LEARN MORE</span>
                  <Image src={white_arrow} alt="arrow" width={10} height={6} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
