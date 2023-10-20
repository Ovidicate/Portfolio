import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Productdesign from './productdesign'

const Four = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Productdesign/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Four