import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 2]} />

      <mesh castShadow receiveShadow scale={2.6}>
        <icosahedronGeometry args={[1, 1]} />
        
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]} 
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" 
      dpr={1} 
      gl={{ antialias: true }} 
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;