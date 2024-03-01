import { useGSAP } from "@gsap/react";
import MarqueSection from "../components/MarqueSection";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { TimelineContext } from "../state/TimelineContext";

function Hero() {
  const container = useRef(null);
  const { addTimeline } = useContext(TimelineContext);
  const timeline = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 2,
        paused: true,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom 70%",
          toggleActions: "play pause resume reset",
        },
      });

      addTimeline(tl);

      tl.fromTo(
        "#left >*:not(#btns)",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.4 }
      )
        .fromTo(
          "#btns > *",
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 }
        )
        .fromTo(
          "#hero-img",
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1 },
          0.5
        );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="mt-8 relative">
      <img
        src="images/ring.png"
        alt=""
        id="ring"
        className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"
      />
      <div className="max-w-[1250px] mx-auto relative z-20 px-2">
        <div className=" flex justify-between flex-col sm:flex-row items-center">
          <div id="left" className="text-white">
            <h1 className=" font-work font-bold text-3xl sm:text-5xl max-w-2xl ">
              Welcome to{" "}
              <span className="text-grad font-64 text-2xl sm:text-4xl ">
                {" "}
                FanTunez
              </span>{" "}
              : Your One-Stop Destination in the Creator Economy!
            </h1>

            <p className="text-white max-w-xl mt-4">
              FanTunez offers an immersive ecosystem with an EVM blockchain
              crafted for creators to monetize their content and connect with
              fans. Welcome to the future of the creator economy.
            </p>

            <div id="btns" className="flex items-center gap-4 mt-5">
              <button
                type="button"
                className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c] "
              >
                Explorer
              </button>
              <button
                type="button"
                className="py-2 px-10  text-lg font-medium button-62 rounded-full border border-[#4d4c4c] "
              >
                Pitchdeck
              </button>
            </div>
          </div>

          <div>
            <img
              src="images/hero-bg.png"
              id="hero-img"
              alt=""
              className=" h-auto sm:h-[500px]"
            />
          </div>
        </div>
      </div>
      <div>
        <MarqueSection />
      </div>
    </section>
  );
}

export default Hero;
