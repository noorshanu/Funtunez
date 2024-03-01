import { useContext, useEffect, useState } from "react";
import Creators from "./Pages/Creators";
import Ecosystem from "./Pages/Ecosystem";
import Fans from "./Pages/Fans";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TimelineContext } from "./state/TimelineContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { pauseAllTimelines, resumeAllTimelines } = useContext(TimelineContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading === false) return;

    setInterval(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (loading) {
      pauseAllTimelines();
      document.body.style.height = window.innerHeight + "px";
      document.body.style.overflowY = "hidden";
    } else {
      resumeAllTimelines();
      document.body.classList.remove("hide-scrollbar");
      document.body.style.height = "unset";
      document.body.style.overflowY = "auto";
      ScrollTrigger.refresh();
    }
  }, [loading, resumeAllTimelines, pauseAllTimelines]);
  return (
    <>
      {loading ? (
        <div className="bg-black z-[1000] fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-6">
          <img src="/images/fav.png" alt="" />

          <h1 className="font-64 text-white text-center text-5xl">
            Fanzly.<span className="text-[rgba(7, 195, 1, 1)]">io</span>
          </h1>
        </div>
      ) : null}

      <Router>
        {" "}
        {/* Wrap your entire application with the Router component */}
        <Routes>
          {/* English Routes */}

          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/creator" element={<Creators />} />
          <Route path="/fans" element={<Fans />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
