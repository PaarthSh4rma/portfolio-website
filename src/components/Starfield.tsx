// src/components/Starfield.tsx
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Starfield() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={100}
          depth={50}
          count={8000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
