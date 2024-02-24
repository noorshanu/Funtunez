import React from 'react'

function Benfits() {
  return (
    <section className=" bg-secondary py-12 mb-8 ">
    <div className=" container-wrapper">
      <div className=" mt-3 mb-6">
        <h1 className=" text-center text-2xl sm:text-4xl font-work font-bold font-64 uppercase text-grad ">
          Benefits for Fans
        </h1>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between gap-4 items-center">
          <div className="nft border-[#112411] border p-4 relative bg-grad">
            <img
              src="images/img2.jpg"
              alt=""
              className=" rounded-2xl relative z-[100] h-auto sm:h-[400px] floating "
            />
          </div>
          <div className=" max-w-xl ">
            <div className=" my-3">
              <h1 className="text-grad text-2xl sm:text-2xl font-work font-bold font-64 uppercase">
               Lets Get Started{" "}
              </h1>
              <div className="bg-white h-[3px] w-[240px] sm:w-[359px] my-2"> </div>
            </div>
          <div className=' flex items-center gap-4 my-4'>
            <img src="images/icon5.svg" alt="" className=' h-[100px]' />
            <p className=' font-medium text-lg sm:text-2xl text-[#c2c2c2]'> Watch your favorite Creators and earn Creator tokens, directly on YouTub</p>
          </div>

          <div className=' flex items-center gap-4 my-4'>
            <img src="images/icon6.svg" alt="" className=' h-[100px]' />
            <p className=' font-medium text-lg sm:text-2xl text-[#c2c2c2]'> Use Creator Tokens to vote & have your say in your favorite Creators decisions</p>
          </div>

          <div className=' flex items-center gap-4 my-4'>
            <img src="images/icon7.svg" alt="" className=' h-[100px]' />
            <p className=' font-medium text-lg sm:text-2xl text-[#c2c2c2]'>Use Creator Tokens to access exclusive perks from your favorite Creators</p>
          </div>
    

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
  )
}

export default Benfits