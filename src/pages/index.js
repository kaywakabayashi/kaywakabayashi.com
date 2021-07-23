import React, { useState } from "react";
import {
  Container,
  NavContainer,
  MainContainer,
  SectionContainer,
  Message,
  Button,
} from "../styles/styles";
import "../index.css";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Work from "../components/Work";
import Me from "../components/Me";
import ScrollInMessage from "../styles/motions";

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
          <Message>
            <ScrollInMessage
              duration={2}
              x={-200}
              hiddenOpacity={1}
              opacity={0.2}
            >
              WAYS TO SAY HI
            </ScrollInMessage>
          </Message>
          <Message>
            <ScrollInMessage
              hover={1.1}
              y={10}
              duration={3.5}
              hiddenOpacity={0}
              opacity={0.8}
              scale={1}
              hiddenScale={1.2}
            >
              <p onClick={copyEmail}>
                {copySuccessMessage} {instructions}
              </p>
            </ScrollInMessage>
          </Message>
          <Message>
            <ScrollInMessage
              hover={1.1}
              y={20}
              duration={3}
              hiddenOpacity={0}
              opacity={1}
            >
              <a
                href="https://github.com/katsuyaw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button>GITHUB</Button>
              </a>
            </ScrollInMessage>
          </Message>

          <Message>
            <ScrollInMessage
              hover={1.1}
              y={35}
              duration={3}
              hiddenOpacity={0}
              opacity={1}
            >
              <a
                href="https://linkedin.com/in/kats"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button>LINKEDIN</Button>
              </a>
            </ScrollInMessage>
          </Message>
        </SectionContainer>
      </Container>
    </>
  );
}

export default Home;
