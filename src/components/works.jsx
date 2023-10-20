import React, { useState } from "react";
import styled from "styled-components";
import Two from "./two";
import Four from "./four";
import Three from "./three";
import Five from "./five";
import One from "./web";

const data = [
  "Conception Web",
  "Dévéloppement",
  "Illustration",
  "Conception Produit",
  "Réseaux Sociaux",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 74px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  overflow:hidden; 
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &:hover {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          color: pink;
        }
      }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Concepteur Web");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Conception Web" ? (
            <One />
          ) : work === "Dévéloppement" ? (
            <Two />
          ) : work === "Illustration" ? (
            <Three />
          ) : work === "Conception Produit" ? (
            <Four />
          ) : (
            <Five/>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;