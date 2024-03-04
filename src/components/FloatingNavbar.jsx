import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";

function FloatingNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //   useGSAP(
  //     () => {
  //       // gsap.to(".logo",);
  //       const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "elastic" } });

  //       addTimeline(tl);

  //       tl.fromTo(
  //         "#wrapper",
  //         { width: 0, y: -30, opacity: 0 },
  //         { width: "100%", y: 0, duration: 0.6, ease: "power2", opacity: 1 }
  //       )
  //         .fromTo(
  //           ".logo",
  //           { opacity: 0, y: -20 },
  //           { opacity: 1, y: 0, duration: 1 }
  //         )
  //         .fromTo(
  //           "#links > *",
  //           { opacity: 0, y: -20 },
  //           { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
  //           "<=.3"
  //         );
  //     },
  //     { scope: container }
  //   );

  return (
    <>
      <nav className="z-[10000] lg:fixed top-0 left-0 w-full">
        <div className="container-wrapper border-[#07c301] h-20 lg:h-[4.6rem] rounded-2xl flex justify-between lg:justify-between gap-8 items-center">
          <a href="/" id="logo" className="logo">
            <img
              src="/images/logo.png"
              className="w-auto h-[2.2rem] lg:h-[2.5rem]"
              alt=""
            />
          </a>

          <div
            id="links"
            className="items-center justify-between gap-8 text-base font-medium text-white hidden lg:flex"
          >
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Home
            </Link>
            <Link
              to="/ecosystem"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Ecosystem
            </Link>
            <Link
              to="/creator"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Creators
            </Link>
            <Link
              to="/fans"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Fans
            </Link>
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base flex items-center space-x-2 border border-[#47ef47] rounded-full py-1 px-5 bg-[#0d0f11]"
            >
              <FaTelegram className="text-xl" />
              <span>Telegram</span>
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
        className={`z-[20000] fixed top-0 right-0 w-[16rem] h-screen bg-secondary border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
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
            to="/ecosystem"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Ecosystem
          </Link>
          <Link
            to="/creator"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Creators
          </Link>
          <Link
            to="/fans"
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
            <FaTelegram className=" text-2xl" />
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

export default FloatingNavbar;
