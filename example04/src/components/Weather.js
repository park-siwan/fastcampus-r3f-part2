import { useFrame, useLoader } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { motion } from 'framer-motion-3d';
import { Html } from '@react-three/drei';
import { CityName } from './CityName';
const Weather = (props) => {
  const { position, rotation, weather, cityName } = props;
  const glb = useLoader(GLTFLoader, '/models/weather.glb');
  const ref = useRef(null);
  const [isHover, setHover] = useState(false);
  const weatherModel = useMemo(() => {
    const clonedModel = glb.nodes[weather] || glb.nodes.cloud;
    return clonedModel.clone();
  }, [weather]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <group position={position} rotation={rotation}>
      <motion.mesh
        onPointerEnter={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        ref={ref}
        whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}
      >
        <primitive object={weatherModel} />
      </motion.mesh>
      {isHover && <CityName name={cityName} />}
    </group>
  );
};

export default Weather;
