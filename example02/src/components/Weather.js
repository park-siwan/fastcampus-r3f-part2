import { useLoader } from '@react-three/fiber';
import { useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Weather = (props) => {
  const { position, weather } = props;
  const glb = useLoader(GLTFLoader, '/models/weather.glb');
  console.log(glb.nodes);

  //   let weatherModel;
  //   if (glb.nodes[weather]) {
  //     weatherModel = glb.nodes[weather].clone();
  //   } else {
  //     weatherModel = glb.nodes.cloud.clone();
  //   }
  const weatherModel = useMemo(() => {
    const cloneModel = glb.nodes[weather] || glb.nodes.cloud
    return cloneModel.clone()
  }, [weather]);

  return (
    <mesh position={props.position}>
      <primitive object={weatherModel} />
    </mesh>
  );
};

export default Weather;
