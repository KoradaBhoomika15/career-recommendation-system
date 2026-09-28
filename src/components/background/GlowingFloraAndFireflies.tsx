import React, { useEffect, useRef } from 'react';

export const GlowingFloraAndFireflies: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle, elegant fireflies
    const particleCount = Math.min(42, Math.max(22, Math.floor(window.innerWidth / 35)));
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 1.1,
      color: Math.random() > 0.4 ? '#38bdf8' : Math.random() > 0.5 ? '#60a5fa' : '#7dd3fc',
      alpha: Math.random() * 0.7 + 0.25,
      alphaSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.38 - 0.12, // subtle gentle upward drift
      twinkleOffset: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(time + p.twinkleOffset) * 0.15;
        p.y += p.vy + Math.cos(time + p.twinkleOffset) * 0.15;

        // Wrap around borders
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Twinkle pulse
        p.alpha += p.alphaSpeed;
        if (p.alpha > 0.9) {
          p.alpha = 0.9;
          p.alphaSpeed *= -1;
        } else if (p.alpha < 0.2) {
          p.alpha = 0.2;
          p.alphaSpeed *= -1;
        }

        // Draw soft glow firefly
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = Math.min(1, p.alpha + 0.2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* Deep Ocean Blue Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #020617 0%, #06193e 35%, #07224f 65%, #030d24 100%)'
        }}
      />

      {/* Ambient Blue Radial Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-sky-500/12 blur-[120px]" />

      {/* Dynamic Drifting Fireflies Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Floating Petals drifting down */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '12%', delay: '0s', duration: '14s', size: 16 },
          { left: '28%', delay: '4s', duration: '18s', size: 20 },
          { left: '46%', delay: '1s', duration: '16s', size: 14 },
          { left: '68%', delay: '7s', duration: '15s', size: 18 },
          { left: '84%', delay: '3s', duration: '20s', size: 15 },
          { left: '92%', delay: '9s', duration: '17s', size: 19 }
        ].map((petal, i) => (
          <div
            key={i}
            className="absolute -top-10 opacity-70"
            style={{
              left: petal.left,
              animation: `float-petal ${petal.duration} cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: petal.delay
            }}
          >
            <svg
              width={petal.size}
              height={petal.size * 1.4}
              viewBox="0 0 24 34"
              fill="none"
              style={{ filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.6))' }}
            >
              <path
                d="M12 0 C18 8, 24 18, 20 28 C16 34, 8 34, 4 28 C0 18, 6 8, 12 0 Z"
                fill="url(#petalGrad)"
                opacity="0.85"
              />
              <defs>
                <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#bae6fd" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>

      {/* SVG BLUE FLOWERS - Bottom Left: Glowing Blooming Lotus */}
      <div
        className="absolute -bottom-6 -left-6 md:bottom-0 md:left-2 w-[240px] md:w-[360px] lg:w-[420px] transition-transform animate-sway-slow origin-bottom-left"
        style={{ filter: 'drop-shadow(0 0 28px rgba(56, 189, 248, 0.45))' }}
      >
        <svg
          viewBox="0 0 400 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            {/* Lotus Petal Gradients */}
            <linearGradient id="lotusOuter" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#082f49" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>

            <linearGradient id="lotusInner" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#0369a1" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#e0f2fe" />
            </linearGradient>

            <linearGradient id="lotusCore" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            <filter id="bloomGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stems and graceful lily pads */}
          <path
            d="M20 360 C 60 300, 110 260, 190 240"
            stroke="url(#stemGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M5 360 C 80 340, 130 310, 175 255"
            stroke="url(#stemGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Lily Pad Base Leaf */}
          <path
            d="M20 340 C 40 310, 130 290, 180 330 C 130 350, 60 360, 20 340 Z"
            fill="#0369a1"
            fillOpacity="0.35"
            stroke="#38bdf8"
            strokeWidth="1.2"
          />

          {/* Lotus Flower Layer 1 (Outer Petals) */}
          <g filter="url(#bloomGlow)">
            {/* Leftmost outer petal */}
            <path
              d="M190 240 C 120 220, 80 180, 75 140 C 100 135, 145 180, 190 240 Z"
              fill="url(#lotusOuter)"
              opacity="0.9"
            />
            {/* Rightmost outer petal */}
            <path
              d="M190 240 C 260 220, 300 180, 305 140 C 280 135, 235 180, 190 240 Z"
              fill="url(#lotusOuter)"
              opacity="0.9"
            />
            {/* Intermediate outer left */}
            <path
              d="M190 240 C 140 180, 115 130, 120 90 C 150 95, 175 160, 190 240 Z"
              fill="url(#lotusOuter)"
              opacity="0.95"
            />
            {/* Intermediate outer right */}
            <path
              d="M190 240 C 240 180, 265 130, 260 90 C 230 95, 205 160, 190 240 Z"
              fill="url(#lotusOuter)"
              opacity="0.95"
            />
          </g>

          {/* Lotus Flower Layer 2 (Inner Vibrant Petals) */}
          <g>
            <path
              d="M190 240 C 160 160, 140 100, 155 60 C 175 75, 185 150, 190 240 Z"
              fill="url(#lotusInner)"
            />
            <path
              d="M190 240 C 220 160, 240 100, 225 60 C 205 75, 195 150, 190 240 Z"
              fill="url(#lotusInner)"
            />
            {/* Center Crown Petal */}
            <path
              d="M190 240 C 178 150, 175 70, 190 40 C 205 70, 202 150, 190 240 Z"
              fill="url(#lotusCore)"
            />
          </g>

          {/* Glowing Pollen Stamen Core */}
          <circle cx="190" cy="225" r="9" fill="#e0f2fe" filter="drop-shadow(0 0 8px #38bdf8)" />
          <circle cx="182" cy="221" r="3.5" fill="#38bdf8" />
          <circle cx="198" cy="221" r="3.5" fill="#38bdf8" />
          <circle cx="190" cy="217" r="4" fill="#ffffff" />
        </svg>
      </div>

      {/* SVG BLUE FLOWERS - Bottom Right: Swaying Bluebells & Hydrangea Blossom Cluster */}
      <div
        className="absolute -bottom-4 -right-4 md:bottom-0 md:right-2 w-[240px] md:w-[350px] lg:w-[410px] transition-transform animate-sway-gentle origin-bottom-right"
        style={{ filter: 'drop-shadow(0 0 26px rgba(96, 165, 250, 0.42))' }}
      >
        <svg
          viewBox="0 0 400 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            <linearGradient id="bellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="60%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>

            <linearGradient id="hydrangeaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="40%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {/* Curving Stem 1 (Bluebell Arch) */}
          <path
            d="M380 360 C 350 280, 310 180, 240 130 C 210 110, 180 120, 160 140"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Hanging Bluebell 1 */}
          <g transform="translate(155, 138) rotate(35)">
            <path
              d="M0 0 C 12 10, 18 25, 14 38 C 10 40, -10 40, -14 38 C -18 25, -12 10, 0 0 Z"
              fill="url(#bellGrad)"
            />
            {/* Bell Flared Rim */}
            <path
              d="M-15 38 C -8 44, 8 44, 15 38 C 12 36, -12 36, -15 38 Z"
              fill="#bfdbfe"
            />
            <circle cx="0" cy="40" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 5px #60a5fa)" />
          </g>

          {/* Hanging Bluebell 2 */}
          <g transform="translate(210, 115) rotate(15)">
            <path
              d="M0 0 C 10 8, 15 20, 12 32 C 8 34, -8 34, -12 32 C -15 20, -10 8, 0 0 Z"
              fill="url(#bellGrad)"
            />
            <circle cx="0" cy="33" r="2" fill="#ffffff" />
          </g>

          {/* Hanging Bluebell 3 */}
          <g transform="translate(265, 145) rotate(-15)">
            <path
              d="M0 0 C 10 8, 15 20, 12 30 C 8 32, -8 32, -12 30 C -15 20, -10 8, 0 0 Z"
              fill="url(#bellGrad)"
            />
            <circle cx="0" cy="31" r="2" fill="#ffffff" />
          </g>

          {/* Stem 2 (Hydrangea Cluster stalk) */}
          <path
            d="M390 360 C 370 290, 340 240, 310 200"
            stroke="#0369a1"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Hydrangea Blooming Cluster (Group of delicate 4-petal florets) */}
          <g transform="translate(305, 195)">
            {[
              { x: -28, y: -20, scale: 0.9, rot: 10 },
              { x: 5, y: -32, scale: 1.1, rot: 45 },
              { x: 32, y: -15, scale: 0.85, rot: 80 },
              { x: -35, y: 12, scale: 0.95, rot: 15 },
              { x: -5, y: 0, scale: 1.25, rot: 30 },
              { x: 28, y: 15, scale: 1.0, rot: 60 },
              { x: 2, y: 28, scale: 0.9, rot: 120 }
            ].map((floret, index) => (
              <g
                key={index}
                transform={`translate(${floret.x}, ${floret.y}) scale(${floret.scale}) rotate(${floret.rot})`}
              >
                {/* 4 Petals of each Hydrangea floret */}
                <circle cx="0" cy="-9" r="6.5" fill="url(#hydrangeaGrad)" opacity="0.92" />
                <circle cx="0" cy="9" r="6.5" fill="url(#hydrangeaGrad)" opacity="0.92" />
                <circle cx="-9" cy="0" r="6.5" fill="url(#hydrangeaGrad)" opacity="0.92" />
                <circle cx="9" cy="0" r="6.5" fill="url(#hydrangeaGrad)" opacity="0.92" />
                {/* Center glowing bead */}
                <circle cx="0" cy="0" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #38bdf8)" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Very faint bottom water horizon reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cyan-950/40 to-transparent" />
    </div>
  );
};
