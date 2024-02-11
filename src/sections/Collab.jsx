import React from 'react'

function Collab() {
  return (
   <section className=' bg-secondary py-12'>


    <div className=' container-wrapper'>
        <div className=' bg-primary shadow-md p-4 rounded-lg '>

        <div className=" flex justify-between flex-col sm:flex-row gap-4">
      
          <div className=" max-w-xl ">
            <div className=" my-3">
              <h1 className="text-grad text-4xl font-work font-bold font-64">
              For Creators
              </h1>
              <div className="bg-white h-[3px] w-[200px] sm:w-[430px] my-2"> </div>
            </div>
            <p className=" text-white text-lg">
            we mention about what we do for creators. Here we will mention about #create2earn as well

            </p>
            <p className="text-white text-lg py-4">
              We believe in the trans-formative power of the creator economy,
              and we're committed to fostering a space where creators and fans
              can interact in meaningful ways.
            </p>

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

          <div className="nft border-[#112411] border p-4 relative bg-grad">
            <img
              src="images/creat.jpg"
              alt=""
              className=" rounded-2xl relative z-[100] h-auto sm:h-[400px] "
            />
          </div>
        </div>

        </div>

    </div>

   </section>
  )
}

export default Collab