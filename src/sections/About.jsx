import React from "react";

function About() {
  return (
    <section className="bg-secondary  py-12">
      <div className="container-wrapper ">
        <div className=" flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="nft border-[#112411] border p-4 relative bg-grad">
            <img
              src="images/vision.png"
              alt=""
              className=" rounded-2xl relative z-[100] h-auto sm:h-[400px] floating "
            />
          </div>
          <div className=" max-w-xl ">
            <div className=" my-3">
              <h1 className="text-grad text-2xl sm:text-4xl font-work font-bold font-64 uppercase">
                Our Vision{" "}
              </h1>
              <div className="bg-white h-[3px] w-[240px] sm:w-[359px] my-2"> </div>
            </div>
            <p className=" text-white text-lg">
              Revolutionizing the interaction between creators and fans. At
              FanTunez, we are building a dynamic ecosystem with an EVM
              blockchain to empower the creator economy. Our mission is to
              provide a unique space where creators can not only monetize their
              art but also engage with fans through immersive, gamified VR/AR
              experiences, exclusive FanTokens, events, and merchandise.
            </p>
            <p className="text-white text-lg py-4">
              We believe in the transformative power of the creator economy and
              are committed to providing a space where creators can connect with
              their fans in meaningful ways. At FanTunez, we are leading the
              #create2earn and #engage2earn revolution, reimagining the future
              of creative engagement.
            </p>

            <div>
              <div className="flex items-center gap-4 mt-5">
                <button
                  type="button"
                  className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c] "
                >
                  Explorer
                </button>
                <button
                  type="button"
                  className="py-2 px-10  text-lg font-medium   text-white underline "
                >
                  Lean More..
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
