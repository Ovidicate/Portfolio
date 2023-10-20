import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./map";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: seperate-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Title = styled.h1`
  font-weight: 200;
  font-family: Open Sans;
`

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`

const Button = styled.button`
  background-color: #da4eA2;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px;
`


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_huw9yc8",
        "template_e8wp4wi",
        ref.current,
        "tPyh9nhCxHgBSqiU-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
        <Map/>
        </Left>
        <Right>
        <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Me Contacter</Title>
            <Input placeholder='Nom' name='name'></Input>
            <Input placeholder='Email' name='email'></Input>
            <TextArea placeholder='Écrivez votre message' name='message' rows={10}/>
            <Button>Envoyer</Button>
            {success &&
              "Votre message a été envoyé. Nous vous réponderons bientôt :)"}
          </Form>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact