import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';
const Earth = () => {
  const glb = useLoader(GLTFLoader, '/models/earth.glb');
  const ref = useRef(null);
  const htmlRef = useRef(null);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.1;
  });
  const [isHover, setHover] = useState(false);
  return (
    <group position={[0, -1.5, 0]}>
      <mesh
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={1.3}
        rotation-x={Math.PI / 2}
        ref={ref}
      >
        <primitive object={glb.scene} />
      </mesh>
      {isHover && (
        <Html center ref={htmlRef} style={{ color: 'red' }}>
          <span className='rotation-icon'>
            <img alt='icon' src={'../icons/rotation.png'} />
          </span>
        </Html>
      )}
    </group>
  );
};

export default Earth;
