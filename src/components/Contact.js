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

const Contact = ({ copyEmail, copySuccessMessage, instructions }) => {
  return (
    <>
      <Message>
        <ScrollInMessage duration={2} x={-200} hiddenOpacity={1} opacity={0.2}>
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
    </>
  );
};

export default Contact;
