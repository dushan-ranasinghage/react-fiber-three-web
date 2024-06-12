import React, { useRef } from 'react'
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'

import Box from './components/Box';
import Porsche from './models/Porsche';

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
      {/* <Box position={[1.2, 0, 0]} />
      <Box position={[-1.2, 0, 0]} rotate /> */}
      <Porsche scale={1} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
    </Canvas>
  )
}

export default App