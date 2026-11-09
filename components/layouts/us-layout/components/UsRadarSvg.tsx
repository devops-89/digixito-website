"use client";
import React from "react";
import { Box } from "@mui/material";

const UsRadarSvg = () => {
  return (
    <Box
      sx={{
        width: { xs: 260, sm: 300, md: 340 },
        height: { xs: 260, sm: 300, md: 340 },
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Outer dashed circle */}
        <circle
          cx="200"
          cy="200"
          r="180"
          stroke="#D8D5CD"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />

        {/* Middle dashed circle */}
        <circle
          cx="200"
          cy="200"
          r="135"
          stroke="#E2DFD7"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* Inner thin circle */}
        <circle
          cx="200"
          cy="200"
          r="90"
          stroke="#ECEAE4"
          strokeWidth="1"
        />

        {/* Crosshairs */}
        <line x1="200" y1="10" x2="200" y2="390" stroke="#EBE8E0" strokeWidth="1" />
        <line x1="10" y1="200" x2="390" y2="200" stroke="#EBE8E0" strokeWidth="1" />

        {/* Azimuth / Radar ticks */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const r1 = i % 2 === 0 ? 174 : 177;
          const r2 = 186;
          const x1 = 200 + r1 * Math.cos(angle);
          const y1 = 200 + r1 * Math.sin(angle);
          const x2 = 200 + r2 * Math.cos(angle);
          const y2 = 200 + r2 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 6 === 0 ? "#111111" : "#A6A39C"}
              strokeWidth={i % 6 === 0 ? "2" : "1"}
            />
          );
        })}

        {/* Degree labels / Tech Callouts */}
        <text
          x="300"
          y="110"
          fill="#111111"
          fontSize="11"
          fontWeight="800"
          fontFamily="monospace"
        >
          SPRINT // 01
        </text>

        <text
          x="45"
          y="315"
          fill="#888888"
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
        >
          SEC // 01
        </text>

        <text
          x="285"
          y="335"
          fill="#888888"
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
        >
          SCALE // 99.9%
        </text>

        {/* Radar Blip dot */}
        <circle cx="280" cy="150" r="4" fill="#FFEF46" />
        <circle cx="280" cy="150" r="10" stroke="#FFEF46" strokeWidth="1.5" opacity="0.6">
          <animate
            attributeName="r"
            values="4;16;4"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0;0.8"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Center Target Disc */}
        <circle
          cx="200"
          cy="200"
          r="54"
          fill="#111111"
          stroke="#FFEF46"
          strokeWidth="2.5"
        />

        {/* Center Text "01" */}
        <text
          x="200"
          y="204"
          fill="#FFEF46"
          fontSize="24"
          fontWeight="900"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          01
        </text>

        {/* Center Subtext */}
        <text
          x="200"
          y="222"
          fill="#FFFFFF"
          fontSize="8"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="1"
          fontFamily="sans-serif"
        >
          METHODOLOGY
        </text>
      </svg>
    </Box>
  );
};

export default UsRadarSvg;

