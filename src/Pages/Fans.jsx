import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Fans/Hero";

import Benifit from "../sections/Fans/Benfits";
import WhatWe from "../sections/Fans/Whatwedo";
import Cta from "../components/Cta";
import Token from "../sections/Fans/Token";

function Fans() {
  return (
    <>
     <div className="mt-4">
        <Navbar />
      </div>

      <div className=" mt-4">
        <Hero />
      </div>
      <div className="mt-4">
        <Benifit />
      </div>
      <div className=" mt-4">
        <WhatWe />
      </div>
      <div className=" mt-4">
        <Token/>

      </div>
      <div className=" mt-4">
        <Cta />
      </div>

      <div className=" border-t">
        <Footer />
      </div>
    </>
  )
}

export default Fans