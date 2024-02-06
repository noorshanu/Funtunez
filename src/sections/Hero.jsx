import React from "react";
import Button from "../components/Button";
import MarqueSection from "../components/MarqueSection";

function Hero() {
  return (
    <section className=" mt-8 relative ">
      <img src="images/ring.png" alt=""  className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"/>
      <div className=" max-w-[1250px] mx-auto relative z-20">
        <div className=" flex justify-between flex-col sm:flex-row items-center">
          <div className=" text-white">
            <h1 className=" font-work font-bold text-5xl max-w-2xl ">
            Welcome to  <span className="text-grad font-64 text-4xl ">   FanTunez</span>   and FanCon: Your Gateway to Immersive
              Experiences
            </h1>

            <p className="text-white max-w-xl mt-4">
              Dive into a world where art, fashion, and technology converge.
              Explore our metaverse, attend exciting events, and connect with
              creators and fans in unique ways.
            </p>

            <div className="flex items-center gap-4 mt-5">
            <button type="button" className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c] ">Explorer</button>
            <button type="button" className="py-2 px-10  text-lg font-medium button-62 rounded-full border border-[#4d4c4c] ">Create one</button>
            </div>
          </div>

          <div>
            <img src="images/hero-bg.png" alt="" className=" h-[500px]" />
          </div>
        </div>
      </div>
      <div>
        <MarqueSection/>
      </div>
    </section>
  );
}

export default Hero;
