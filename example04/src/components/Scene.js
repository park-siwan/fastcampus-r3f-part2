import { useEffect, useState } from 'react';
import Earth from './Earth';
import Weather from './Weather';
import Lights from './Lights';
import { getCityWeather } from '../utils/weatherApi';
import { cities } from '../utils/cities';
import { Bounds } from '@react-three/drei';
import { FocusWeather } from './FocusWeather';
const API = process.env.REACT_APP_API_KEY;

const Scene = () => {
  const [content, setContent] = useState(null);

  const getCitiesWeather = () => {
    const promises = cities?.map((city) => {
      return getCityWeather(city, API);
    });

    Promise.all(promises)
      .then((weatherDataArray) => {
        setContent(weatherDataArray);
      })
      .catch((error) => {
        console.error('Error Api', error);
      });
  };

  useEffect(() => {
    getCitiesWeather();
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <>
      <Lights />
      <Earth />
      <Bounds fit clip observe margin={0.7}>
        <FocusWeather>
          {content?.map((el, i) => {
            const angle = (i / (content.length - 1)) * Math.PI;
            const radius = 2;

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <Weather
                key={el.city + 'weather'}
                position={[x, y - 1.5, 0]}
                rotation-y={i + 1}
                cityName={el.city}
                weather={el.weatherData?.weather[0]?.main?.toLowerCase()}
              />
            );
          })}
        </FocusWeather>
      </Bounds>
    </>
  );
};

export default Scene;
