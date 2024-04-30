import { Environment, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper, SpotLight } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
const Lights = () => {
  const lightRef = useRef();
  // useHelper(lightRef, DirectionalLightHelper, 3, 'cyan');

  useFrame((_, delta) => {
    // if (lightRef.current) {
    //   lightRef.current.intensity = Math.sin(delta) * 0.5 + 0.5;
    // }
  });
  useFrame(() => {
    // 0.01씩 y축을 중심으로 회전합니다.
    lightRef.current.rotation.y += 1;
  });
  return (
    <>
      <Environment preset='forest' />
      {/* <directionalLight
        scale={1}
        ref={lightRef}
        position={[-5, 5, 5]}
        intensity={10}
        castShadow
      /> */}
      {/* <directionalLight
        ref={lightRef}
        color='white'
        position={[-15, 5, 5]}
        scale={0.5}
        intensity={20}
      /> */}
      {/* <ambientLight intensity={2} color='white' /> */}
      {/* <ambientLight intensity={0.1} /> */}
      <spotLight
        ref={lightRef}
        position={[5, 5, 5]} // 빛의 위치
        angle={1} // 빛의 각도
        penumbra={1} // 빛의 경계 부드러움
        intensity={1000} // 빛의 세기
        castShadow // 그림자 효과 활성화
        shadow-mapSize-width={2048} // 그림자 해상도
        shadow-mapSize-height={2048} // 그림자 해상도
      />
      {/* <mesh receiveShadow castShadow>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color='blue' />
      </mesh> */}
    </>
  );
};

export default Lights;
