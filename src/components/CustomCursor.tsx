// src/components/CustomCursor.tsx
import { useEffect, useState } from "react";
import LightsaberCursor from "./LightsaberCursor"; // import your SVG

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Track position
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Track hover over clickable elements
  useEffect(() => {
    const hoverables = document.querySelectorAll("a, button, input, textarea, label");
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  // Track click for pulse
  useEffect(() => {
    const handleClick = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 300); // pulse duration
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className="fixed z-[9999] pointer-events-none"
      style={{
        top: 0,
        left: 0,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Pulse Ring */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-saberTeal opacity-70 ${
          clicking ? "animate-ping" : "hidden"
        } w-10 h-10`}
      />

      {/* Lightsaber Cursor Icon */}
      <div
        className={`text-saberTeal transition-all duration-150 ${
          hovering ? "scale-125 opacity-100" : "scale-100 opacity-80"
        }`}
      >
        <div style={{ transform: "rotate(45deg)" }}>
        <LightsaberCursor size={100} />
        </div>
      </div>
    </div>
  );
}
