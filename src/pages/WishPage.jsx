import React from "react";
import Typewriter from "../components/Typewriter";
import Balloons from "../components/Balloons";

export default function WishPage({ profilePic, onContinue }) {
  const teacherName = "Anjali Ma'am";

  const gratitudeText = `Dear Ma'am, on your special day, I want to express my heartfelt gratitude for all the guidance, support, and encouragement you have given me. Your patience, wisdom, and dedication have inspired me to work harder and aim higher. I am truly thankful for the knowledge and values you have shared, which will stay with me forever. Wishing you a very Happy Birthday filled with joy, laughter, and love. May your day be as wonderful and inspiring as you are!`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-200 via-rose-100 to-amber-100 relative overflow-hidden">
      <Balloons />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl p-6">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-rose-600">
            🎂 Happy Birthday {teacherName}! 🎂
          </h1>
          <Typewriter text={gratitudeText} />

          {/* Continue Button */}
          <button
            onClick={onContinue}
            className="mt-4 px-6 py-2 bg-amber-400 rounded-2xl font-semibold shadow hover:scale-105 transition"
          >
            Continue ➡️
          </button>
        </div>

        {/* Right: Profile Pic */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Teacher"
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-md h-72 md:h-96"
          />
        </div>
      </div>
    </div>
  );
}
