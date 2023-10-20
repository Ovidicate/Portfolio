/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 development.gltf --transform 
Files: development.gltf [1.48MB] > development-transformed.glb [99.41KB] (93%)
Author: FR Animation (https://sketchfab.com/fr.animation)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/challenge-gameboy-pacman-painting-8355000e963d4b3ea072802dfdeaf942
Title: Challenge Gameboy Pacman Painting
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('../images/development-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.gameboy} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/development-transformed.glb')
