import { OrbitControls, RenderTexture, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Cube from './cube'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;


const Left = styled.div`
  flex: 1;
`;


const Right = styled.div`
  flex: 1;
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
  font-family: 'Open Sans';
`;

const Button = styled.button`
  width: 130px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov:25, position: [5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
            <Cube/>
        </Canvas>
        </Left>
        <Right>
          <Title>Pensez en-dehors de l'espace carrée</Title>
          <WhatWeDo>
            <Line src="./images/line.png"/>
            <Subtitle>Qui suis-Je</Subtitle>
          </WhatWeDo>
          <Desc>
            Je m'appelle Tehnoon Rizwan, un élève en Soutien Informatique du centre de Formation Professionelle
            <br />
             Léonard-De Vinci.
            <br />
            <br />
            Développeur et designer passionné par les arts.
            </Desc>
          <Button>Voir mes Oeuvres</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who