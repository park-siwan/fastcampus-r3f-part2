import { useBounds } from '@react-three/drei';
import { useEffect, useRef } from 'react';
export function FocusWeather({ children }) {
  const bounds = useBounds();
  const onClick = (e) => {
    e.stopPropagation();
    console.log(e.object);
    bounds.refresh(e.object).clip().fit();
  };
  const onPointerMissed = (e) => {
    if (e.button === 0) {
      bounds.refresh().fit();
    }
  };
  return (
    <group onClick={onClick} onPointerMissed={onPointerMissed}>
      {children}
    </group>
  );
}
