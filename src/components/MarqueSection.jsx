import React from "react";
import Marquee from "react-fast-marquee";

function MarqueSection() {
  return (
    <>
      <Marquee>
      <img src=" images/logo.png" alt="" className=" h-[50px] p-4" />

        <p className="font-64 text-grad p-4">Exclusive NFTs</p>

        <p className=" text-grad p-4">!!!!!!</p>
        <p className="font-64 text-grad p-4">Metaverse Experiences</p>

        <p className=" text-grad p-4">!!!!!!</p>

        <img src="images/fav.png" alt="" className=" h-[60px] p-4" />

        <p className="font-64 text-grad">Exclusive NFTs</p>
        <p className=" text-grad p-4">!!!!!!</p>
        <img src=" images/logo.png" alt="" className=" h-[50px] p-4" />
        <p className="font-64 text-grad p-4">Metaverse Experiences</p>
      </Marquee>
    </>
  );
}

export default MarqueSection;