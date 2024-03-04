import { useContext, useEffect, useState } from "react";
import Creators from "./Pages/Creators";
import Ecosystem from "./Pages/Ecosystem";
import Fans from "./Pages/Fans";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TimelineContext } from "./state/TimelineContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

function App() {
  const { pauseAllTimelines, resumeAllTimelines } = useContext(TimelineContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading === false) return;

    setInterval(() => {
      setLoading(false);
    }, 3000);
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
        <div className="bg-primary z-[1000] fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <img src="/images/fav.png" className="w-[80%] max-w-[30rem]" alt="" />

          <h1 className="font-64 text-white text-center text-2xl lg:text-5xl mt-8 mb-10">
            Fanzly.<span className="text-[rgba(7, 195, 1, 1)]">io</span>
          </h1>

          <div className="h-8 lg:h-12 w-[80%] max-w-[30rem] rounded-full border-4 border-white overflow-hidden relative">
            <div
              style={{ "--speed": "3000ms" }}
              className="reveal-from-left w-full h-full bg-[rgba(7,195,1,1)] absolute top-0 left-0"
            ></div>
          </div>
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
