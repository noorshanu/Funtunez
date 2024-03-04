import About from "../sections/About";
import Features from "../sections/Features";
import Collab from "../sections/Collab";
import Cta from "../components/Cta";
import LatestNews from "../sections/LatestNews";
import Footer from "../sections/Footer";
import HeroAnimated from "../components/HeroAnimated";
import MarqueSection from "../components/MarqueSection";

function Home() {
  return (
    <>
      <div>
        <HeroAnimated />

        <div className="max-lg:mt-16">
          <MarqueSection />
        </div>

        <div className="mt-8">
          <About />
        </div>

        <div className=" mt-8">
          <Features />
        </div>

        <div className=" mt-8">
          <Collab />
        </div>

        <div className=" my-4">
          <Cta />
        </div>

        <div className=" mt-4">
          <LatestNews />
        </div>

        <div className=" border-t">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
