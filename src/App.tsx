import React, { useRef } from 'react'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'

import Box from './components/Box';

const App: React.FC = () => {
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight ref={spotLightRef} position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      {spotLightRef.current && <spotLightHelper args={[spotLightRef.current]} color={0x000000} />}
      <pointLight ref={pointLightRef} position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {pointLightRef.current && <pointLightHelper args={[pointLightRef.current]} color={0x000000} />}
      <Box position={[1.2, 0, 0]} />
      <Box position={[-1.2, 0, 0]} rotate />
    </Canvas>
  )
}

export default App