// Cake.jsx
import React from "react";
import litImage from "/cake.png";
import blownImage from "/cake2.png";

export default function Cake({ candlesBlown, countdown }) {
  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      {/* Cake Image */}
      <div className="relative w-80 md:w-96 lg:w-[28rem] h-64 md:h-80 lg:h-[24rem]">
        <img
          src={candlesBlown ? blownImage : litImage}
          alt="cake"
          className="w-full h-full object-contain transition-all duration-700 ease-in-out"
        />
      </div>
    </div>
  );
}
