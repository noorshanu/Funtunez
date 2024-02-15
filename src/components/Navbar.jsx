import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaTelegram } from "react-icons/fa";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="z-[100] bg-secondary lg:bg-transparent">
        <div className=" max-w-[1250px] mx-auto bg-secondary border-[0.5px] border-[#07c301] h-14 lg:h-16 2xl:h-20 rounded-2xl flex justify-between lg:justify-between  gap-8 items-center px-4">
          <div>
            <img
              src="/images/logo.png"
              className="w-auto h-[20px]  sm:h-[29px] "
              alt=""
            />
          </div>
          <div className="items-center justify-between gap-8 text-base font-medium text-white hidden lg:flex">
            <Link
              to="contact"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Home
            </Link>
            <Link
              to="roadmap"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
             Ecosystem
            </Link>
            <Link
              to="about"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
           Creators
            </Link>
            <Link
              to="tokenomics"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
            Fans
            </Link>
            <Link
              to="tokenomics"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base flex items-center gap-4 border border-[#47ef47] rounded-full py-2 px-5 bg-[#0d0f11]"
            >
              <FaTelegram  className=" text-2xl" />

            Telegram
            </Link>
          </div>

          <button
            className="text-2xl text-white flex lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[1000] bg-secondary border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          !sidebarOpen ? "translate-x-[16rem]" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-white font-medium">
          <Link
            to="contact"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
             Home
          </Link>
          <Link
            to="roadmap"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Ecosystem
          </Link>
          <Link
            to="about"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
             Creators
          </Link>
          <Link
            to="tokenomics"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
          Fans
          </Link>
          <Link
              to="tokenomics"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base flex items-center gap-4 border border-[#47ef47] rounded-full py-2 px-5 bg-[#0d0f11]"
            >
              <FaTelegram  className=" text-2xl" />

            Telegram
            </Link>
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
      ></div>
    </>
  );
}

export default Navbar;
