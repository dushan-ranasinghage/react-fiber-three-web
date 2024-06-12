/**
 * @file DirectionalLightScene.tsx
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2024 - ResearchIt All Rights Reserved.
 */

import React, { useRef } from 'react'
import * as THREE from 'three';

const DirectionalLightScene = () => {
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

export default DirectionalLightScene