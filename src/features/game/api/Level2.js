import { useEffect, useMemo, useState } from "react";
import { GameState } from "./game_state";

import StatsDisplay from "./stats_display";
import quote from "./quotes.json";
import { Link } from "react-router-dom";
 const Quote = () =>
  quote[1];
const inputId = "typingjutsu-input";

export default function Typingjutsu() {
  
  const [quote, setQuote] = useState();
  const [text, setText] = useState("");
  const [currentWord, setCurrentWord] = useState();
  const quotesSplit = useMemo(() => quote?.quote.split(" ") ?? [], [quote]);
  const [wordIdx, setWordIndex] = useState(0);
  const alreadyTypedWords = useMemo(
    () => quotesSplit.slice(0, wordIdx).join(" "),
    [quotesSplit, wordIdx]
  );
  const wordsToBeTyped = useMemo(
    () => quotesSplit.slice(wordIdx + 1, quotesSplit.length).join(" "),
    [quotesSplit, wordIdx]
  );
  const greenCorrectWord = useMemo(() => {
    if (currentWord) {
      let i = 0;
      while (i < text.length) {
        if (text[i] != currentWord[i]) {
          break;
        }
        i++;
      }
      return text.slice(0, i);
    }
    return "";
  }, [currentWord, text]);
  const [gameState, setGameState] = useState(GameState.WAITING);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const redWrongWord = useMemo(
    () => currentWord?.slice(greenCorrectWord.length, text.length),
    [greenCorrectWord, currentWord, text]
  );

  useEffect(() => {
    document.getElementById(inputId)?.focus();
  }, []);

  useEffect(() => {
    setWordIndex(0);
    setText("");
  }, [quotesSplit]);

  useEffect(() => {
    setCurrentWord(quotesSplit[wordIdx]);
  }, [wordIdx, quotesSplit]);

  useEffect(() => {
    const latestLetter = text?.charAt(text.length - 1);
    if (latestLetter != " " && wordIdx != quotesSplit.length - 1) return;
    const textWithoutTrailingSpace = text?.replace(/\s*$/, "");
    if (textWithoutTrailingSpace == currentWord) {
      setText("");
      setWordIndex(() => wordIdx + 1);
    }
  }, [text, currentWord, wordIdx, quotesSplit]);

  useEffect(() => {
    setGameState(GameState.PLAYING);
  }, []);

  useEffect(() => {
    if (gameState == GameState.PLAYING) {
      document.getElementById(inputId)?.focus();
      setQuote(Quote());
      setStartTime(Date.now());
    }
    if (gameState == GameState.VIEW_STATS) {
      setEndTime(Date.now());
    }
  }, [gameState]);

  useEffect(() => {
    const quoteFinished =
      quotesSplit.length == wordIdx && quotesSplit.length != 0;
    if (quoteFinished) {
      setGameState(GameState.VIEW_STATS);
    }
  }, [wordIdx, quotesSplit]);

  const [timer, setTimer] = useState(90); // Set the initial time in seconds
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isActive && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      return (
        <div>
         
        </div>
      )
    }
    return () => clearInterval(intervalId);
  }, [isActive, timer]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
   
  };

  const handleReset = () => {
setWordIndex(0);
setStartTime(Date.now())
setCurrentWord(quotesSplit[wordIdx]);
    setText("");
    setGameState(GameState.WAITING);
    setIsActive(true);
    setTimer(90); 
  };
  return (
    <>
    <h1 className=" text-4xl mx-7 mt-11 p-12 font-bold text-gray-900">Level 2: Medium</h1>
    <div className="px-20 mt-15"> 
      <p className="font-serif">
        <span className="text-green-600">{alreadyTypedWords} </span>
        <span className="text-green-600">{greenCorrectWord}</span>
        <span className="text-red-700 bg-red-200">{redWrongWord}</span>
        <span className="underline">{currentWord?.slice(text.length)}</span>
        <span className="text-black"> {wordsToBeTyped}</span>
      </p>
      <input
        className="w-full border-black border px-4 py-2"
        onInput={handlePause}
        onChange={(text) => setText(text.target.value)}
        value={text}
        disabled={gameState == GameState.VIEW_STATS}
        id={inputId}
      />

      { quote && gameState == GameState.VIEW_STATS && (
        <StatsDisplay
          startTime={startTime}
          endTime={endTime}
          quote={quote}
          numOfWords={quotesSplit.length}
        />
      ) }

      <Link to="/level3">
      <div>
       <button  className="rounded-md mt-3 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
        Next Level
       </button> 
      </div>
      </Link>
      <div className="mt-5"> 
      <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">Timer</h1>
      <div>
        <p className="font-semibold">Time remaining: {timer} seconds</p>
        <div>
        {!isActive ? (

<button    className="rounded-md mt-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 onClick={handlePause}>Pause</button>
) : (
<button    className="rounded-md mt-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
 onClick={handleStart}>Start</button>
)}
        </div>
       
       <div>
       <button     className="rounded-md mt-2 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleReset}>Reset</button>
       </div>

       
      </div>
    </div>
    </div>
    </>
   
  );
}
