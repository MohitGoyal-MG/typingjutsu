import { FC } from "react";
import { Quote } from "./repository";
const StatsDisplay = ({
  quote,
  startTime,
  endTime,
  numOfWords,
  onClickNextQuote,
  
}) => {
  const typeDurationInSeconds = (endTime - startTime) / 1000;
  const wps = numOfWords / typeDurationInSeconds;
  const wpm = Math.floor(wps * 60);
  return (
    <>
    <div className="w-full border rounded-xl p-8">
     
      <p className="mt-2">Your stats:</p>
      <ul>
        <li>Words Per Minute: {wpm}</li>
        <li>Words Per Second: {wps.toFixed(2)}</li>
      </ul>
     
    </div>
    </>
  );
};

export default StatsDisplay;