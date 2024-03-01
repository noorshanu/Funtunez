import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);

  const addTimeline = (timeline) => {
    setTimelines((prevTimelines) => [...prevTimelines, timeline]);
  };

  const pauseAllTimelines = () => {
    timelines.forEach((timeline) => {
      timeline.pause(); // old version
      // timeline.call(() => timeline.pause());
    });
  };

  const resumeAllTimelines = () => {
    timelines.forEach((timeline) => timeline.play());
  };

  return (
    <TimelineContext.Provider
      value={{ addTimeline, pauseAllTimelines, resumeAllTimelines }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
