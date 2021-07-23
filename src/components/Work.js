import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Container,
  NavContainer,
  MainContainer,
  SectionContainer,
  Message,
  Button,
  SectionTitle,
  RowContainer,
  ProfileName,
  LeftContainer,
  RightContainer,
  Image,
} from "../styles/styles";
import Cover from "../img/katsuya.jpg";
import "../index.css";
import Marquee from "react-fast-marquee";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ScrollInMessage from "../styles/motions";

const Work = () => {
  return (
    <>
      <Message>
        <ScrollInMessage duration={2} x={-100} hiddenOpacity={0.5}>
          Work
        </ScrollInMessage>
      </Message>
      <Message>
        <ScrollInMessage
          hover={1.1}
          y={10}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a href="https://lawistudios.com">
            <Button>LAWI STUDIOS</Button>
          </a>
        </ScrollInMessage>
      </Message>

      <Message>
        <ScrollInMessage duration={2} x={-100} hiddenOpacity={0.5}>
          PROJECTS
        </ScrollInMessage>
      </Message>

      <Message>
        <ScrollInMessage
          hover={1.1}
          y={20}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a href="https://efficiently.app">EFFICIENTLY APP</a>
        </ScrollInMessage>
      </Message>

      <Message>
        <ScrollInMessage
          hover={1.1}
          y={35}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a href="https://github.com/smc-tech-talk/Lets-Trade">LET'S TRADE</a>
        </ScrollInMessage>
      </Message>
    </>
  );
};

export default Work;
