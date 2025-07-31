// src/sections/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4"
    >
      {/* Starfield BG */}
      <div
        className="absolute inset-0 z-0 animate-pulseStars"
        style={{
          backgroundImage: `radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 100%)`,
          backgroundSize: "2000px 2000px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-saberTeal text-5xl md:text-7xl font-display font-bold drop-shadow-[0_0_20px_#00FFFF]"
      >
        Paarth Sharma
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="z-10 mt-4 max-w-xl text-starWhite text-lg md:text-xl"
      >
        Crafting next-gen software at the speed of light.
      </motion.p>
    </section>
  );
}
