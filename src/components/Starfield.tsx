import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function Starfield() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 1] }}
    >
      <Stars
        radius={100} // how far stars spread
        depth={50}   // starfield depth
        count={10000} // number of stars
        factor={4}   // star size
        saturation={0}
        fade
        speed={1}    // animation speed
      />
    </Canvas>
  );
}
