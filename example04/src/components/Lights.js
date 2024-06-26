import { useHelper, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

const Lights = () => {
  const drectRef = useRef();
  // useHelper(drectRef, DirectionalLightHelper, 'cyan')
  return (
    <>
      <Environment preset='forest' />
      <directionalLight
        ref={drectRef}
        position={[0, 5, 5]}
        intensity={1}
        castShadow
      />
      <ambientLight intensity={2} color='white' />
    </>
  );
};

export default Lights;
