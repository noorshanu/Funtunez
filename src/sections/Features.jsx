import React from "react";
import FeatureCard from "../components/FeatureCard";
import Teams from "./Teams";

function Features() {
  return (
    <section className=" relative py-10 ">
      <img
        src="images/rightring.png"
        alt=""
        className=" absolute right-0 top-0 "
      />

      <div className="container-wrapper">
        <div className=" my-3">
          <h1 className="text-grad text-4xl font-work font-bold font-64 text-center">
            What creator says about us
          </h1>
          <div className="bg-white h-[3px] w-[300px] mx-auto my-2"> </div>

          <p className=" text-xl text-center text-white max-w-4xl mx-auto my-8">
            we mention here what our Creators says  . Here we will mention about #Feedback
            
          </p>
        </div>

        <div>
          <Teams />
        </div>
        {/* <div className=" flex justify-between items-center flex-col sm:flex-row my-4">
          <FeatureCard />

          <FeatureCard />
          <FeatureCard />
        </div> */}
      </div>
    </section>
  );
}

export default Features;
