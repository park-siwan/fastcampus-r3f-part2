import { Canvas } from '@react-three/fiber';
import Scene from '../components/Scene';
import React, { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

const variants = {
  initial: {
    rotateX: Math.PI / 2,
    rotateZ: 1,
  },
  animate: {
    rotateZ: [0, Math.PI],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

function FramerModel() {
  return (
    <motion.mesh variants={variants} initial={'initial'} animate={'animate'}>
      <cylinderGeometry args={[1, 1, 0.5, 8]} />
      <motion.meshBasicMaterial color={'hotpink'} />
    </motion.mesh>
  );
}
//  rotation={[Math.PI / 2, 0, 1]}
function Home() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach='background' args={['rgb(67, 127, 240) 100%)']} />
        <Suspense fallback={'loading'}>
          <Scene />
          {/* <FramerModel /> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default Home;
