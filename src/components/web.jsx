import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Webdesign from './webdesign'

const Web = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Webdesign/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}

export default Web