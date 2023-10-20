import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Illustration from './illustration'

const Three = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Illustration/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Three