/**
 * @file Porsche.tsx
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

import { useLayoutEffect } from 'react'
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import { applyProps } from '@react-three/fiber';


const Porsche = (props: JSX.IntrinsicElements['group']) => {
    const { scene, nodes, materials } = useGLTF('./porsche.glb');

    useLayoutEffect(() => {
        Object.values(nodes).forEach((node) => {
            if (node instanceof THREE.Mesh) {
                node.receiveShadow = node.castShadow = true;
            }
        })

        applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] })
        applyProps(materials.window, { color: 'black', roughness: 0, clearcoat: 0.1 })
        applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 1 })
        applyProps(materials.paint, { envMapIntensity: 2, roughness: 0.45, metalness: 0.8, color: '#555' })
    }, [nodes, materials]);

    return <primitive object={scene} {...props} />
}

export default Porsche;