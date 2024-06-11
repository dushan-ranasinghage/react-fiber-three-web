import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'

interface BoxProps extends React.ComponentProps<'mesh'> { }

const Box: React.FC<BoxProps> = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = 45;
      ref.current.rotation.y = 45;
    }
  })

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => {
        event.stopPropagation()
        hover(true)
      }}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function DirectionalLightScene() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null)

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
      />
      {directionalLightRef.current && (
        <directionalLightHelper args={[directionalLightRef.current]} />
      )}
      {/* Other scene objects */}
    </>
  )
}

const App: React.FC = () => {
  return (
    <Canvas>
      {/* <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
      <DirectionalLightScene />
      <Box position={[0, 0, 0]} />
      {/* <Box position={[1.2, 0, 0]} />
      <Box position={[0, 1.2, 0]} />
      <Box position={[0, -1.2, 0]} /> */}
    </Canvas>
  )
}

export default App