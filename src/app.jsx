import styled from "styled-components";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Who from "./components/who";
import Works from "./components/works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./images/bg.jpeg");
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function app() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default app;
