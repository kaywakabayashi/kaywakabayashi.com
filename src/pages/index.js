import React, { useState } from "react";
import {
  Container,
  NavContainer,
  MainContainer,
  SectionContainer,
} from "../styles/styles";
import "../index.css";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Work from "../components/Work";
import Me from "../components/Me";
import Contact from "../components/Contact";

function Home() {
  const email = "hello@katsuya.me";
  const [copySuccessMessage, setCopySuccessMessage] = useState();
  const [instructions, setInstructions] = useState("EMAIL ME");
  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Email Copied");
    setInstructions("");
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCopySuccessMessage("Looking forward to hearing from you!");
  //   }, 100000);
  //   return () => clearTimeout(timer);
  // }, [copySuccessMessage]);

  return (
    <>
      <Container id="container">
        <SectionContainer>
          <NavContainer id="nav">
            <Nav />
          </NavContainer>
          <MainContainer id="hero">
            <Hero />
          </MainContainer>
        </SectionContainer>
        <SectionContainer id="work">
          <Work />
        </SectionContainer>
        <SectionContainer id="me">
          <Me />
        </SectionContainer>
        <SectionContainer id="contact">
          <Contact
            copyEmail={copyEmail}
            copySuccessMessage={copySuccessMessage}
            instructions={instructions}
          />
        </SectionContainer>
      </Container>
    </>
  );
}

export default Home;
