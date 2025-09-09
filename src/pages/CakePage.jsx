// CakePage.jsx
import React, { useState, useEffect } from "react";
import Balloons from "../components/Balloons";
import Cake from "../components/Cake";
import CustomFireworks from "../CustomFireworks";

export default function CakePage() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [countdown, setCountdown] = useState(null);

  // Trigger countdown on button click
  function handleBlowCandles() {
    setCountdown(5); // start countdown from 5
  }

  // Countdown effect
  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Countdown finished → show fireworks, greeting, and cake image change
      setCandlesBlown(true);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-fuchsia-200 via-rose-100 to-amber-100 relative overflow-hidden">
      {/* Balloons */}
      <Balloons />

      {/* Cake */}
      <div className="relative z-20 w-full max-w-2xl">
        <Cake candlesBlown={candlesBlown} countdown={countdown} />
      </div>

      {/* Blow Candles Button */}
      {!candlesBlown && countdown === null && (
        <button
          onClick={handleBlowCandles}
          className="mt-6 px-6 py-3 bg-amber-400 rounded-2xl font-semibold shadow hover:scale-105 transition z-30"
        >
          Blow Candles 🎂
        </button>
      )}

      {/* Countdown Display */}
      {countdown !== null && countdown > 0 && (
        <div className="absolute top-20 text-6xl md:text-8xl font-extrabold text-rose-600 animate-pulse text-center w-full z-30 pointer-events-none">
          {countdown}
        </div>
      )}

      {/* Custom Fireworks */}
      {candlesBlown && <CustomFireworks active={candlesBlown} />}

      {/* Greeting Text */}
      {candlesBlown && (
        <div className="absolute top-20 text-3xl md:text-5xl font-extrabold text-rose-600 animate-bounce text-center w-full z-30 pointer-events-none">
          🎉 Happy Birthday! Wishing you joy, love & laughter! 🎉
        </div>
      )}
    </div>
  );
}
