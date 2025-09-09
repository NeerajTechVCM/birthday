import React, { useState } from "react";
import litImage from "/cake.png";
import blownImage from "/cake2.png";

export default function Cake({ onBlowCandles }) {
  const [candlesLit, setCandlesLit] = useState(true);

  function handleBlow() {
    setCandlesLit(false);
    if (onBlowCandles) onBlowCandles();
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <div className="relative w-80 md:w-96 lg:w-[28rem] h-64 md:h-80 lg:h-[24rem]">
        <img
          src={candlesLit ? litImage : blownImage}
          alt="cake"
          className="w-full h-full object-contain"
        />
      </div>

      <button
        onClick={handleBlow}
        className="mt-6 px-6 py-2 bg-amber-400 rounded-2xl font-semibold shadow hover:scale-105 transition"
      >
        Blow Candles 🎂
      </button>
    </div>
  );
}
