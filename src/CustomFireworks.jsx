import React, { useEffect, useRef } from "react";

export default function CustomFireworks({ active = false }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 8;
      this.vy = (Math.random() - 0.5) * 8 - 5;
      this.alpha = 1;
      this.color = color;
      this.size = Math.random() * 3 + 2;
      this.gravity = 0.12 + Math.random() * 0.05;
      this.decay = 0.92 + Math.random() * 0.03;
      this.trail = [];
    }

    update() {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 5) this.trail.shift();

      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= this.decay;
      this.vy *= this.decay;
      this.alpha *= 0.96;
    }

    draw(ctx) {
      for (let i = 0; i < this.trail.length; i++) {
        const point = this.trail[i];
        ctx.globalAlpha = (this.alpha * (i + 1)) / this.trail.length;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, this.size * ((i + 1) / this.trail.length), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalAlpha = 1;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#f87171", "#fb923c", "#facc15", "#34d399", "#60a5fa", "#e879f9"];
    let particles = [];

    function spawnParticles() {
      const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
      const y = Math.random() * canvas.height * 0.4;
      const count = Math.floor(Math.random() * 30) + 20;
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }
    }

    function animate() {
      // Transparent background, no fillRect
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        if (p.alpha < 0.02) particles.splice(i, 1);
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    let duration = 7000;
    if (active) {
      const endTime = Date.now() + duration;

      (function loop() {
        spawnParticles();
        if (Date.now() < endTime) setTimeout(loop, 250);
      })();

      animate();
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        backgroundColor: "transparent",
      }}
    />
  );
}
