import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/creators/Hero";
import Eco from "../sections/Ecosystem/Eco";
import Tokenomic from "../sections/Ecosystem/Tokenomic";
import Benifit from '../sections/creators/Benifit';
import WhatWe from '../sections/creators/WhatWe';
import Cta from '../components/Cta';

function Creators() {
  return (
    <>
     <div className="mt-4">
        <Navbar />
      </div>

      <div className=" mt-4">
    <Hero/>
      </div>
      <div className='mt-4'>
        <Benifit/>

      </div>
<div className=' mt-4'>
  <WhatWe/>
</div>
<div className=' mt-4'>
  <Cta/>

</div>
     
      <div className=" border-t">
        <Footer />
      </div>
    </>
  )
}

export default Creators