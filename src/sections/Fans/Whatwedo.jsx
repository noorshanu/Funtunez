import React from "react";

function Whatwedo() {
  return (
    <section className=" pt-6 mb-4">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center gap-5">
          <div className=" max-w-[650px] w-full">
            <img src="images/creat.png" alt="" className=" relative z-50" />
          </div>

          <div>
            <h1 className=" text-white text-2xl sm:text-6xl mb-4">
            What we do for Fans?
            </h1>

            <div>
              <h3 className=" text-white text-lg sm:text-2xl mt-2">
                1. Earn Creator tokens while watching YouTube
              </h3>
              <p className=" ml-4 text-[#c2c2c2] mt-3 mb-5 text-lg sm:text-base">
              An opportunity for fans to earn Creator tokens completely free, directly on YouTube when watching their favorite Creators. If a viewer has the XCAD plugin, and watches 80% or more of a tokenized Creators video, they will be rewarded with the Creators token.
              </p>

              <h3 className=" text-white text-lg sm:text-2xl mt-2">
                1. Viewers can use Creator tokens to vote & access perks

              </h3>
              <p className=" ml-4 text-[#c2c2c2] mt-3 mb-5 text-lg sm:text-base">
              Vote on polls from their favorite Creators, the more tokens a viewer holds, the more weight their vote carries, rewarding the most loyal fans. Fans can also purchase exclusive perks with Creator tokens.
              </p>

              <h3 className=" text-white text-lg sm:text-2xl mt-2">
                1. XCAD provides a fan tokenization platform for Creators
              </h3>
              <p className=" ml-4 text-[#c2c2c2] mt-3 mb-5 text-lg sm:text-base">
                This means Creators are able to launch their own fan token,
                increasing fan engagement, loyalty and furthering monetization.
              </p>

              <h3 className=" text-white text-lg sm:text-2xl mt-2">
                1. XCAD provides a fan tokenization platform for Creators
              </h3>
              <p className=" ml-4 text-[#c2c2c2] mt-3 mb-5 text-lg sm:text-base">
                This means Creators are able to launch their own fan token,
                increasing fan engagement, loyalty and furthering monetization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whatwedo;
