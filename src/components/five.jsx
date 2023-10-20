import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Socialmedia from './socialmedia'

const Five = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Socialmedia/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Five