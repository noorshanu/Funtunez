import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Ecosystem/Hero";
import Eco from "../sections/Ecosystem/Eco";
import Tokenomic from "../sections/Ecosystem/Tokenomic";

function Creators() {
  return (
    <>
     <div className="mt-4">
        <Navbar />
      </div>

      <div className=" mt-4">
        <Hero />
      </div>

     
      <div className=" border-t">
        <Footer />
      </div>
    </>
  )
}

export default Creators