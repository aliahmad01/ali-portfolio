import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.1} groundColor={"black"} />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        penumbra={1}
        angle={0.12}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.6}
        position={isMobile ? [0.5, -2.3, -0.5] : [0, -3.1, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQry = window.matchMedia("(max-width:850px)");
    // console.log(mediaQry);

    setIsMobile(mediaQry.matches);

    const handleMediaQryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQry.addEventListener("change", handleMediaQryChange);
    return () => {
      mediaQry.removeEventListener("change", handleMediaQryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
