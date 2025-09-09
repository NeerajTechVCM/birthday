import React from "react";

export default function Balloons() {
  const balloons = Array.from({ length: 10 });
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-30vh] select-none z-0">
      <div className="relative h-[60vh] max-w-5xl mx-auto">
        {balloons.map((_, i) => (
          <span
            key={i}
            className={
              "absolute inline-block w-6 h-7 md:w-7 md:h-8 rounded-full shadow " +
              [
                "bg-rose-400/90",
                "bg-fuchsia-400/90",
                "bg-amber-300/90",
                "bg-sky-400/90",
                "bg-emerald-400/90",
              ][i % 5]
            }
            style={{
              left: `${(i * 10 + 5) % 95}%`,
              bottom: `${Math.random() * -20}vh`,
              animation: `floatUp ${10 + (i % 5)}s linear ${i * 0.6}s infinite`,
              borderBottomLeftRadius: "40%",
              borderBottomRightRadius: "40%",
            }}
          >
            <i
              className="absolute left-1/2 -translate-x-1/2 top-full block w-px h-10 md:h-12 bg-slate-700/30"
              aria-hidden
            />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg); opacity: .9; }
          50%  { transform: translateY(-50vh) rotate(8deg); }
          100% { transform: translateY(-100vh) rotate(-6deg); opacity: .8; }
        }
      `}</style>
    </div>
  );
}
