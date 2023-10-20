import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;

`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Home = styled.a`
  font-style: bold;
  color: white;
  text-decoration: none;
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <Logo src="./images/tehnoon-logo.png"/>
        <List>
          <Home href='../index.html'>
            <ListItem>Repartir à Acceuil SPHERE QUÉBEC</ListItem>
          </Home>
        </List>
        </Links>
        <Icons>
          <Icon src="./images/search.png"/>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar