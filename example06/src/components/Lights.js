import { Environment, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

const Lights = () => {
  const drectRef = useRef();
  // useHelper(drectRef, DirectionalLightHelper, 'cyan')
  return (
    <>
      {/* <Environment preset="forest"/> */}
      <directionalLight
        ref={drectRef}
        position={[-5, 5, 5]}
        intensity={10}
        castShadow
        receiveShadow
      />
      <ambientLight intensity={1} color='white' />
    </>
  );
};

export default Lights;
