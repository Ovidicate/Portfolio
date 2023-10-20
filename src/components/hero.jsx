import React, { Suspense } from 'react'
import styled from 'styled-components'
import Navbar from './navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;


const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
  font-family: 'Gabarito';
  text-shadow: 5px 5px #5A5A5A;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-style: italic;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
  font-face: 'Open Sans';
`;

const Button = styled.button`
  width: 120px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Penser. Faire. Résoudre.</Title>
          <WhatWeDo>
            <Line src="./images/line.png"/>
            <Subtitle>Ce que je Fais</Subtitle>
          </WhatWeDo>
          <Desc>
            J'aime créer des expériences numériques agréables et centrées sur l'humain.
            <br /><br />
            Dans 5 ans, un ingénieur logiciels pour des grandes compagnies.
          </Desc>
          <Button>Apprendre Plus</Button>
        </Left>
        <Right>
        <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.7}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        <Img src="./images/moon.png"/>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero