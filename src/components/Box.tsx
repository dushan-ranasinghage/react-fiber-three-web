/**
 * @file Box.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'

interface BoxProps extends React.ComponentProps<'mesh'> {
  rotate?: boolean;
}

/**
 * 
 * @example <Box position={[1.2, 0, 0]} />
 * @example <Box position={[1.2, 0, 0]} rotate />
 * 
 * @param param0 
 * @returns 
 */
const Box: React.FC<BoxProps> = ({ rotate = false, ...meshProps }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current && rotate) {
      ref.current.rotation.x += delta;
    }
  })

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...meshProps}
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

export default Box;