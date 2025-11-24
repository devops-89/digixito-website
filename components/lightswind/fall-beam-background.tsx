import React, { useEffect, useRef } from "react";

interface FallBeamBackgroundProps {
  className?: string;
  lineCount?: number;
  beamColorClass?: string;
  children?: React.ReactNode;
}

const FallBeamBackground: React.FC<FallBeamBackgroundProps> = ({
  className = "",
  lineCount = 20,
  beamColorClass = "cyan-400",
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const dynamicStyles = `
    .fall-beam-line {
      position: absolute;
      width: 1px;
      height: 100%;
      z-index: 10;
    }

    .fall-beam-line::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 80px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        var(--beam-glow-color)
      );
      animation: fall var(--ani-duration) var(--ani-delay) linear infinite;
    }

    @keyframes fall {
      0% { top: -100px; }
      100% { top: 100%; }
    }
    `;

  const getColorValue = (colorClass: string): string => {
    switch (colorClass) {
      case "green-400":
        return "rgba(74, 222, 128, 0.8)";
      case "cyan-400":
        return "rgba(34, 211, 238, 0.8)";
      case "blue-400":
        return "rgba(96, 165, 250, 0.8)";
      case "red-400":
        return "rgba(248, 113, 113, 0.8)";
      case "indigo-400":
        return "rgba(129, 140, 248, 0.8)";
      default:
        return "rgba(34, 211, 238, 0.8)";
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    container
      .querySelectorAll(".fall-beam-line")
      .forEach((line) => line.remove());

    const glowColor = getColorValue(beamColorClass);

    for (let i = 1; i <= lineCount; i++) {
      const line = document.createElement("div");
      line.classList.add("fall-beam-line");

      const leftPosition = `${i * (100 / lineCount) + Math.random() * 5 - 5}%`;

      const duration = 8 + Math.random() * 10 + "s";
      const delay = -Math.random() * 10 + "s";

      line.style.setProperty("left", leftPosition);
      line.style.setProperty("--ani-duration", duration);
      line.style.setProperty("--ani-delay", delay);
      line.style.setProperty("--beam-glow-color", glowColor);

      container.appendChild(line);
    }

    return () => {
      container
        .querySelectorAll(".fall-beam-line")
        .forEach((line) => line.remove());
    };
  }, [lineCount, beamColorClass]);

  return (
    <>
      <style>{dynamicStyles}</style>

      <div
        ref={containerRef}
        className={`${className}`}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          background: "transparent",
        }}
      >
        {children && (
          <div
            className="relative z-20 grid place-content-center h-full"
            style={{
              position: "relative",
              zIndex: 20,
              height: "100vh",
              display: "grid",
              placeContent: "center",
              padding: "16px",
              textAlign: "center",
            }}
          >
            {children}
            <div
              className="absolute inset-0 z-30 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%)",
              }}
            />
          </div>
        )}
        {/* Lines are injected dynamically in useEffect */}
      </div>
    </>
  );
};

export default FallBeamBackground;
