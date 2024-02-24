import React from 'react'

function Token() {
  return (
   <section className=' mt-10 mb-6'>

    <div className=' container-wrapper bg-secondary rounded-2xl py-12 px-4'>
    <div className=" mt-3 mb-6">
        <h1 className=" text-center text-2xl sm:text-2xl font-work font-bold font-64 uppercase text-grad ">
        What you can do with Creator Tokens?

        </h1>
      </div>

        <div className=' flex justify-center gap-6 items-center mb-6 mt-10 '>

            <p className=' border-2 border-[#47ef47] rounded-2xl py-4 px-6 text-2xl font-medium text-white bg-primary'>Buy NFT Moment packs</p>

            <p className=' border-2 border-[#47ef47] rounded-2xl py-4 px-6 text-2xl font-medium text-white bg-primary'>
            Physical event tickets
            </p>

        </div>

        <div className='flex justify-center items-center py-8 gap-[8rem]'>

        <div className="nft nft2 border-[#112411] border p-4 relative bg-grad rounded-full">
            <img
              src="images/foot.png"
              alt=""
              className=" rounded-full relative z-[100] h-auto sm:h-[350px] floating "
            />
          </div>

          <div>
          <p className=' border-2 border-[#47ef47] rounded-2xl py-4 px-6 text-2xl font-medium mt-3 text-white bg-primary'>Buy NFT Moment packs</p>
          <p className=' border-2 border-[#47ef47] rounded-2xl py-4 px-6 text-2xl font-medium mt-[2rem] text-white bg-primary'>Buy NFT Moment packs</p>
          <p className=' border-2 border-[#47ef47] rounded-2xl py-4 px-6 text-2xl font-medium mt-[2rem] text-white bg-primary'>Buy NFT Moment packs</p>
          <p className=' border-2 border-[#47ef47] rounded-2xl py-4 px-6 text-2xl font-medium mt-[2rem] text-white bg-primary'>Buy NFT Moment packs</p>
          </div>

        </div>

    </div>

   </section>
  )
}

export default Token