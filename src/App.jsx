import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Collab from "./sections/Collab";
import Features from "./sections/Features";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <div className="mt-4">
        <Navbar />

        <Hero />

        <div className=" mt-8">
          <About />
        </div>

        <div className=" mt-8">
          <Features />
        </div>
        <div className=" mt-8">
         <Collab/>
        </div>
      </div>
    </>
  );
}

export default App;
