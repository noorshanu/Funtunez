import Teams from "./Teams";

function Features() {
  return (
    <section className="relative py-10">
      <img
        src="images/rightring.png"
        alt=""
        className=" absolute right-0 top-0 "
      />

      <div className="container-wrapper">
        <div id="header" className=" my-3">
          <h1 className="text-grad text-4xl font-work font-bold font-64 text-center">
            What creator says about us
          </h1>
          <div
            id="line"
            className="bg-white h-[3px] w-[300px] mx-auto mt-6 mb-5"
          >
            {" "}
          </div>

          <p className="text-xl text-center text-white max-w-4xl mx-auto mb-8">
            we mention here what our Creators says . Here we will mention about
            #Feedback
          </p>
        </div>

        <div id="teams">
          <Teams />
        </div>
        {/* <div className=" flex justify-between items-center flex-col sm:flex-row my-4">
          <FeatureCard />

          <FeatureCard />
          <FeatureCard />
        </div> */}
      </div>
    </section>
  );
}

export default Features;
