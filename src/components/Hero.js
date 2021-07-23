import React from "react";
import { Message, Button } from "../styles/styles";
import { Link as LinkS } from "react-scroll";
import { shadowMessageMotion, messageMotion } from "../styles/motions";

const Hero = () => {
  return (
    <>
      <Message
        variants={shadowMessageMotion}
        initial="initial"
        animate="animate"
        transition="transition"
        whileHover="whileHover"
      >
        HELLO, I AM
      </Message>

      <Message
        variants={messageMotion}
        initial="initial"
        animate="animate"
        transition="transition"
        whileHover="whileHover"
      >
        <LinkS to="me" spy={true} offset={0} duration={500} smooth={true}>
          <Button>KATSUYA.</Button>
        </LinkS>
      </Message>

      <Message
        variants={shadowMessageMotion}
        initial="initial"
        animate="animate"
        whileHover="whileHoever"
      >
        I AM A PASSIONATE
      </Message>

      <Message
        variants={messageMotion}
        initial="initial"
        animate="animate"
        transition="transition"
        whileHover="whileHover"
      >
        <LinkS
          activeClass="active"
          to="work"
          spy={true}
          offset={0}
          duration={500}
          smooth={true}
        >
          <Button>FRONT-END DEVELOPER</Button>
        </LinkS>
      </Message>

      <Message
        variants={shadowMessageMotion}
        initial="initial"
        animate="animate"
        whileHover="whileHoever"
      >
        AND METICULOUS
      </Message>

      <Message
        variants={messageMotion}
        initial="initial"
        animate="animate"
        transition="transition"
        whileHover="whileHover"
      >
        <LinkS
          activeClass="active"
          to="contact"
          spy={true}
          offset={0}
          smooth={true}
          duration={500}
        >
          <Button>UI/UX DESIGNER.</Button>
        </LinkS>
      </Message>
    </>
  );
};

export default Hero;
