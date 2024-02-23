import React from 'react'

function Hero() {
  return (
    <section className=" mt-8 relative ">
      <img src="images/ring.png" alt=""  className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"/>
      <div className=" max-w-[1250px] mx-auto relative z-20 px-2">
        <div className=" flex justify-between flex-col sm:flex-row items-center">
          <div className=" text-white">
            <h1 className=" font-work font-bold text-3xl sm:text-5xl max-w-2xl ">
            Welcome to  <span className="text-grad font-64 text-2xl sm:text-4xl ">   FanTunez</span>   :  is revolutionising the Creator Economy via Tokenization and #watchtoearn
            </h1>

            <p className="text-white max-w-xl mt-4">
            FanTunez is enabling tokenization for YouTubers, allowing them to transform their vast audiences, into web 3.0 communities.
            </p>

            <div className="flex items-center gap-4 mt-5">
            <button type="button" className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c] ">Explorer</button>
            <button type="button" className="py-2 px-10  text-lg font-medium button-62 rounded-full border border-[#4d4c4c] ">Pitchdeck</button>
            </div>
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