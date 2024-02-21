import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Hero from '../sections/Ecosystem/Hero'
import Eco from '../sections/Ecosystem/Eco'

function Ecosystem() {
  return (
<>
<div className="mt-4">
    <Navbar/>
</div>

<div className=' mt-4'>
   <Hero/>
</div>


<div className=' mt-8'>
  <Eco/>
</div>
<div className=" border-t">
    <Footer/>
</div>
</>
  )
}

export default Ecosystem