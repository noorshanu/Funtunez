import { useContext, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TimelineContext } from "../state/TimelineContext";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const container = useRef(null);
  const { addTimeline } = useContext(TimelineContext);

  useGSAP(
    () => {
      // gsap.to(".logo",);
      const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "elastic" } });

      addTimeline(tl);

      tl.fromTo(
        "#wrapper",
        { width: 0, y: -30, opacity: 0 },
        { width: "100%", y: 0, duration: 0.6, ease: "power2", opacity: 1 }
      )
        .fromTo(
          ".logo",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          "#links > *",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
          "<=.3"
        );
    },
    { scope: container }
  );

  return (
    <>
      <nav ref={container} className="z-[100] bg-secondary lg:bg-transparent">
        <div
          id="wrapper"
          className="max-w-[1250px] mx-auto bg-secondary border-[0.5px] border-[#07c301] h-14 lg:h-16 2xl:h-20 rounded-2xl flex justify-between lg:justify-between  gap-8 items-center px-4"
        >
          <a href="/" className="logo">
            <img
              src="/images/logo.png"
              className="w-auto h-[35px] sm:h-[55px] "
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
              className="cursor-pointer text-sm xl:text-base flex items-center gap-4 border border-[#47ef47] rounded-full py-2 px-5 bg-[#0d0f11]"
            >
              <FaTelegram className=" text-2xl" />
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
    </>
  );
}

export default Navbar;
