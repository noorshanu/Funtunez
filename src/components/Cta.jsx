import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Cta() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "h2, p, button",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: "#box",
            toggleActions: "play pause restart reset",
            start: "top 60%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-primary py-12">
      <div className="container-wrapper">
        <div
          id="box"
          className="rounded-xl bg-secondary px-4 py-10 border border-[#47ef47]"
        >
          <h2 className=" font-work text-center text-lg sm:text-3xl text-white font-bold py-3 font-64 text-grad">
            Join the FanTunez Community
          </h2>

          <p className=" font-popins text-white text-base sm:text-lg max-w-4xl text-center mx-auto">
            By buying FanMerch, you become a part of the FanTunez community.
            {"You're"} not just a fan, {"you're"} a supporter, a patron, a part
            of the
            {"creator's"} journey. So wear your FanMerch with pride, knowing
            that
            {"you're"} a part of something bigger.
          </p>

          <div className=" py-4 flex justify-center">
            <button
              type="button"
              className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c] "
            >
              Explorer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
