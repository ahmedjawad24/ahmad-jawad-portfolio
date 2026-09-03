"use client";

interface TechLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  withGlow?: boolean;
}

export default function TechLogoAJ({
  size = "md",
  className = "",
  withGlow = true,
}: TechLogoProps) {
  const sizeClasses = {
    sm: "w-7 h-7",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const pixelMap = {
    sm: 28,
    md: 40,
    lg: 48,
    xl: 64,
  };

  const px = pixelMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className} group cursor-pointer select-none`}
      aria-label="Ahmad Jawad Logo"
    >
      {/* Ambient Radial Aura Glow */}
      {withGlow && (
        <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[var(--accent-primary)] via-sky-400 to-[var(--accent-secondary)] opacity-35 blur-md group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />
      )}

      {/* World-Class Modern Geometric Monogram */}
      <svg
        width={px}
        height={px}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-300 ease-out group-hover:scale-105"
      >
        <defs>
          {/* Deep Obsidian Gradient Shield */}
          <linearGradient id="aj-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Laser-Cut Precision Border Gradient */}
          <linearGradient id="aj-neon-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary, #10b981)" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="var(--accent-secondary, #38bdf8)" />
            <stop offset="100%" stopColor="var(--accent-primary, #10b981)" />
          </linearGradient>

          {/* Letter 'A' Premium Shading */}
          <linearGradient id="aj-a-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="var(--accent-primary, #10b981)" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          {/* Letter 'J' Dynamic Sweep */}
          <linearGradient id="aj-j-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="var(--accent-secondary, #38bdf8)" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Crossbar Glow Beam */}
          <linearGradient id="aj-beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-primary, #10b981)" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="var(--accent-secondary, #38bdf8)" />
          </linearGradient>

          {/* Precision Monogram Drop Shadow */}
          <filter id="aj-depth-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* Master Rounded Chassis */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="18"
          fill="url(#aj-shield-grad)"
          stroke="url(#aj-neon-stroke)"
          strokeWidth="1.75"
        />

        {/* Subtle Inner Micro-Bevel */}
        <rect
          x="6.5"
          y="6.5"
          width="51"
          height="51"
          rx="14.5"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* Interlocking AJ Monogram Geometry */}
        <g filter="url(#aj-depth-shadow)">
          {/* 'A' Left Apex Arm */}
          <path
            d="M26 14.5L13.5 45.5H19.5L24 33.5H32.5L26 14.5Z"
            fill="url(#aj-a-body)"
          />

          {/* 'J' Architectural Descender & Hook */}
          <path
            d="M37.5 14.5H49.5V20.5H43.5V36C43.5 41.5 39.5 45.5 33.5 45.5C28.5 45.5 25 43.5 23.5 40.5L28.5 36.5C29.5 38 31.5 39.5 33.5 39.5C36 39.5 37.5 38 37.5 35.5V20.5H37.5V14.5Z"
            fill="url(#aj-j-body)"
          />

          {/* Glowing Fusion Crossbar */}
          <rect
            x="19"
            y="32"
            width="17"
            height="3.5"
            rx="1.75"
            fill="url(#aj-beam)"
          />

          {/* Luminous Apex Energy Node */}
          <circle
            cx="26"
            cy="14.5"
            r="2.2"
            fill="#ffffff"
          />
          <circle
            cx="26"
            cy="14.5"
            r="1"
            fill="var(--accent-primary, #10b981)"
          />
        </g>
      </svg>
    </div>
  );
}
