import React, { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 24 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay(""); // reset text when text changes

    const id = setInterval(() => {
      if (i < text.length) {
        setDisplay((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <p className="text-lg md:text-xl leading-relaxed font-sans text-slate-900">
      {display}
    </p>
  );
}
