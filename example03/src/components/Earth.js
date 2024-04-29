import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Earth = () => {
  const glb = useLoader(GLTFLoader, '/models/earth.glb');

  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh
      scale={1.3}
      rotation-x={-Math.PI / 2}
      ref={ref}
      position={[0, -1.5, 0]}
    >
      <primitive object={glb.scene} />
    </mesh>
  );
};

export default Earth;
