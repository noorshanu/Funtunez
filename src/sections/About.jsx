import React from "react";

function About() {
  return (
    <section className="bg-secondary  py-12">
      <div className="container-wrapper ">
        <div className=" flex justify-between gap-4">
          <div className="nft border-[#112411] border p-4 relative bg-grad">
            <img
              src="images/about.jpg"
              alt=""
              className=" rounded-2xl relative z-[100] h-[400px] "
            />
          </div>
          <div className=" max-w-xl ">
            <div className=" my-3">
              <h1 className="text-grad text-4xl font-work font-bold font-64">
                About US{" "}
              </h1>
              <div className="bg-white h-[3px] w-[300px] my-2"> </div>
            </div>
            <p className=" text-white text-lg">
              Welcome to FanTunez, a dynamic ecosystem designed to power the
              creator economy. We're on a mission to provide a unique platform
              where creators can monetize their art and connect with fans
              through immersive metaverse experiences, exclusive NFTs, events,
              and merchandise.
            </p>
            <p className="text-white text-lg py-4">
              We believe in the trans-formative power of the creator economy,
              and we're committed to fostering a space where creators and fans
              can interact in meaningful ways.
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
