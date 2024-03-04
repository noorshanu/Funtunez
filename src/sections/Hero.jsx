function Hero() {
  return (
    <section className="mt-8 relative">
      <img
        src="images/ring.png"
        alt=""
        id="ring"
        className=" h-full sm:h-[800px] absolute left-0 -top-[35%]"
      />
      <div className="max-w-[1250px] mx-auto relative z-20 px-2">
        <div className=" flex justify-between flex-col sm:flex-row items-center">
          <div id="left" className="text-white">
            <h1 className=" font-work font-bold text-3xl sm:text-5xl max-w-2xl ">
              Welcome to{" "}
              <span className="text-grad font-64 text-2xl sm:text-4xl ">
                {" "}
                FanTunez
              </span>{" "}
              : Your One-Stop Destination in the Creator Economy!
            </h1>

            <p className="text-white max-w-xl mt-4">
              FanTunez offers an immersive ecosystem with an EVM blockchain
              crafted for creators to monetize their content and connect with
              fans. Welcome to the future of the creator economy.
            </p>

            <div id="btns" className="flex items-center gap-4 mt-5">
              <button
                type="button"
                className="py-2 px-10    font-medium button-62 text-lg rounded-full border border-[#4d4c4c] "
              >
                Explorer
              </button>
              <button
                type="button"
                className="py-2 px-10  text-lg font-medium button-62 rounded-full border border-[#4d4c4c] "
              >
                Pitchdeck
              </button>
            </div>
          </div>

          <div>
            <img
              src="images/hero-bg.png"
              id="hero-img"
              alt=""
              className=" h-auto sm:h-[500px]"
            />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
