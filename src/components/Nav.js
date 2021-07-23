import React from "react";
import { ContactWrapper, Button } from "../styles/styles";
import { Link as LinkS } from "react-scroll";
import "../index.css";

import { contactMotion } from "../styles/motions";

const Nav = () => {
  return (
    <>
      <ContactWrapper
        variants={contactMotion}
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
          duration={500}
          smooth={true}
        >
          <Button>CONTACT</Button>
        </LinkS>
      </ContactWrapper>
    </>
  );
};

export default Nav;
