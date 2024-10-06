import { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SolarSystem from "./components/SolarSystem";
import { Vector3 } from "three";
import { Header } from "./components/header/Header";
import { Description } from "./components/description/Description";
import { Footer } from "./components/footer/Footer";

function App() {
  const [focusPosition, setFocusPosition] = useState<Vector3 | null>(null);

  const handleFocus = useCallback((position: Vector3) => {
    setFocusPosition(position);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Description />
        <div className="w-full h-screen bg-black">
          <Canvas
            camera={{ position: [0, 20, 40], fov: 60 }}
            style={{ width: "100vw", height: "80vh" }}
          >
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 0, 0]} intensity={1} />
            <Stars
              radius={300}
              depth={60}
              count={1000}
              factor={7}
              saturation={0}
            />
            <SolarSystem onFocus={handleFocus} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={0.1}
              maxDistance={200}
              target={focusPosition || new Vector3(0, 0, 0)}
            />
          </Canvas>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
