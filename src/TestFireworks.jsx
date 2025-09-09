import React, { useState } from "react";
import CustomFireworks from "./CustomFireworks"; // ye wahi file jisme maine fireworks code diya

export default function TestCustomFireworks() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true); // fire fireworks
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-rose-500 text-white rounded-2xl shadow-lg font-bold hover:scale-105 transition mb-6"
      >
        Launch Fireworks 🎆
      </button>

      {/* Fireworks canvas */}
      <CustomFireworks active={active} />
    </div>
  );
}
