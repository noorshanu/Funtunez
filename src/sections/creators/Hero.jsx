import React from 'react'

function Hero() {
  return (
    <section className=" mt-8 relative ">
      <img src="images/ring.png" alt=""  className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"/>
      <div className=" max-w-[1250px] mx-auto relative z-20 px-2">
        <div className=" flex justify-between flex-col sm:flex-row items-center">
          <div className=" text-white">
            <h1 className=" font-work font-bold text-3xl sm:text-5xl max-w-2xl ">
            Welcome to  <span className="text-grad font-64 text-2xl sm:text-4xl ">   FanTunez</span>   : we Helps YouTubers to grow in a saturated space
            </h1>

            <p className="text-white max-w-xl mt-4">
            YouTube is an extremely popular platform, more and more people want to make YouTube a career. There are over 38 Million active channels. Starting out is hard, it's very hard to get traction, how do you build up your audience?
            </p>

           
          </div>

          <div className='bg-[#47ef474d] rounded-full p-4 blur-md'>
            <img src="images/eco.png" alt="" className=" h-auto  floating relative z-30" />
          </div>
        </div>
      </div>
      <div>
    
      </div>
    </section>
   
  )
}

export default Hero