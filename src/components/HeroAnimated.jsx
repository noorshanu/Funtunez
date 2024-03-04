import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import FloatingNavbar from "./FloatingNavbar";
import { TimelineContext } from "../state/TimelineContext";

function HeroAnimated() {
  const container = useRef(null);
  const { addTimeline } = useContext(TimelineContext);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      const tlMobile = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play pause restart restart",
        },
      });

      addTimeline(tlMobile);

      mm.add("(max-width:1023px)", () => {
        tlMobile.fromTo(
          "#left h1, #left p, #left button, #hero-img",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, stagger: 0.2, scale: 1 }
        );
      });

      mm.add("(min-width:1024px)", () => {
        const tl = gsap.timeline({
          delay: 0,
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: container.current,
            scrub: 1.6,
            pin: true,
            end: "+=2500px",
          },
        });

        gsap.set("#hero-img", { x: "50%", right: "50%", y: "-50%" });

        tl.fromTo(
          "#texts > *",
          {
            x: function (index) {
              return index % 2 == 0 ? "+=-100px" : "+=100px";
            },
          },
          {
            x: 0,
            duration: 2,
            ease: "power2.inOut",
          }
        )

          .fromTo("#img-line", { width: 0 }, { width: "150%", duration: 2 }, 0)
          .fromTo(
            "#hero-img",
            {
              right: "50%",
              translateX: "50%",
            },
            {
              right: 0,
              translateX: "0",
              duration: 2,
              ease: "power2.inOut",
            },
            0
          )
          .to(
            "#texts >*:not(#scaled-div)",
            {
              opacity: 0.2,
              filter: "blur(2px)",
              duration: 1,
              ease: "power1",
            },
            // ">=-1.2"
            0.6
          )

          .fromTo(
            "#hero-img",
            { right: "50%", translateX: "50%" },
            {
              right: 0,
              translateX: "0",
              duration: 2,
              ease: "power2.inOut",
            },
            0
          )

          .fromTo(
            "#left h1, #left p, #left button",
            { x: 80, opacity: 0, scale: 0.8 },
            { x: 0, opacity: 1, stagger: 0.4, scale: 1, duration: 2 },
            ">=-.7"
          )
          .fromTo(
            "#logo, #links>*",
            { opacity: 0, x: 100, ease: "power2.inOut" },
            { x: 0, opacity: 1, stagger: 0.4, duration: 1 },
            "<"
          )
          .to(
            "#scaled-div",
            {
              scaleX: 1,
              duration: 4,
            },
            ">=-3.5"
          );

        // addTimeline(tl);
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="">
      <FloatingNavbar />

      <div
        id="texts"
        className="max-lg:hidden fixed top-0 left-0 w-full h-full flex flex-col justify-between py-10 font-64 text-white overflow-hidden [&_h1]:opacity-60 before:content-[''] before:absolute before:top-0 before:left-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-primary before:to-transparent before:z-50
        
        after:content-[''] after:absolute after:top-0 after:right-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-primary after:to-transparent after:z-50
        "
      >
        <div
          id="scaled-div"
          className="content-[''] absolute top-0 left-0 w-full h-full bg-primary z-50 scale-x-[0] origin-left"
        ></div>

        <div className="text-3xl flex justify-center items-center space-x-20 [&>*]:flex-shrink-0 relative">
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
        </div>

        <div className="text-2xl flex justify-center items-center space-x-20 [&>*]:flex-shrink-0 relative">
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
        </div>

        <div className="text-3xl flex justify-center items-center space-x-20 [&>*]:flex-shrink-0 relative">
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
        </div>

        <div className="text-2xl flex justify-center items-center space-x-20 [&>*]:flex-shrink-0 relative">
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
        </div>
        <div className="text-3xl flex justify-center items-center space-x-20 [&>*]:flex-shrink-0 relative">
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
          <h1>Fanzly.io</h1>
        </div>
      </div>

      <div className="container-wrapper lg:min-h-screen lg:flex items-center relative max-lg:mt-5 max-lg:space-y-16">
        <div id="left" className="text-white">
          <h1 className="font-work font-bold text-3xl sm:text-4xl xl:text-5xl lg:max-w-[14em] w-full">
            Welcome to{" "}
            <span className="text-grad font-64 text-[.7em]"> FanTunez</span> :
            Your One-Stop Destination in the Creator Economy!
          </h1>

          <p className="text-white lg:max-w-xl mt-4">
            FanTunez offers an immersive ecosystem with an EVM blockchain
            crafted for creators to monetize their content and connect with
            fans. Welcome to the future of the creator economy.
          </p>

          <div id="btns" className="flex items-center gap-4 mt-5">
            <button
              type="button"
              className="py-1.5 xl:py-2 px-6 xl:px-10 font-medium button-62 text-base xl:text-lg rounded-full border border-[#4d4c4c]"
            >
              Explorer
            </button>
            <button
              type="button"
              className="py-1.5 xl:py-2 px-6 xl:px-10 text-base xl:text-lg font-medium button-62 rounded-full border border-[#4d4c4c] "
            >
              Pitchdeck
            </button>
          </div>
        </div>

        <div
          id="hero-img"
          className="max-lg:max-w-[30rem] max-lg:mx-auto w-full lg:w-[28%] xl:w-[37%] relative lg:absolute top-1/2 right-0 shadow-[0_0_3rem_.5rem_black] rounded-3xl z-50"
        >
          <img
            src="/images/hero-bg-cropped-min.png"
            className="w-full rounded-3xl"
            alt=""
          />

          <div
            id="img-line"
            className="overflow-hidden border-2 border-white rounded-full h-20 w-[150%] lg:w-[170%] bg-gradient-to-r from-primary/60 to-sky-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 -z-10"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroAnimated;
