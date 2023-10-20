import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Development from './development'

const Two = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Development/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Two