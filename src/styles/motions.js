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

export const shadowMessageMotion = {
  initial: { opacity: 0.8, x: 0, y: 0 },
  animate: {
    opacity: 0.03,
    x: 0,
    y: 5,
    transition: { duration: 3 },
  },
};

export const messageMotion = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 5,
    transition: { duration: 1 },
    scale: 1.1,
    originX: 0,
  },
  whileHover: {
    scale: 1.2,
    textShadow: "0px 0px 15px rgb(255, 255, 255)",
    transition: { duration: 0.5 },
    originX: 0,
  },
  transition: { duration: 3, stiffness: 100 },
};

export const contactMotion = {
  initial: { opacity: 0, x: 200 },
  animate: {
    opacity: 0.5,
    x: 0,
    y: 5,
    transition: { duration: 3 },
  },
  whileHover: { scale: 1.05, opacity: 1 },
};

const ScrollInMessage = ({
  children,
  duration,
  x,
  y,
  hiddenOpacity,
  opacity,
  hiddenScale,
  hover,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: duration }}
      variants={{
        visible: { opacity: opacity, scale: 1, x: 0, y: 0, originX: 0 },
        hidden: { opacity: hiddenOpacity, scale: hiddenScale, x: x, y: y },
      }}
      whileHover={{ scale: hover, transition: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollInMessage;
