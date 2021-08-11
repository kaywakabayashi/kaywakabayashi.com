import React, { useContext } from "react";
import {
  ContactWrapper,
  Button,
  LanguageSelectorContainer,
} from "../styles/styles";
import { Link as LinkS } from "react-scroll";
import { contactMotion } from "../styles/motions";
import LanguageContextProvider, {
  LanguageContext,
} from "../contexts/LanguageContext";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <LanguageSelectorContainer>
        <Button onClick={() => setLanguage("EN")}>
          {language === "EN" ? (
            <span style={{ opacity: 1 }}>EN</span>
          ) : (
            <span style={{ opacity: 0.5 }}>EN</span>
          )}
        </Button>
        <span>/</span>
        <Button onClick={() => setLanguage("GE")}>
          {language === "GE" ? (
            <span style={{ opacity: 1 }}>DE</span>
          ) : (
            <span style={{ opacity: 0.5 }}>DE</span>
          )}
        </Button>
        <span>/</span>
        <Button onClick={() => setLanguage("JP")}>
          {language === "JP" ? (
            <span style={{ opacity: 1 }}>日本語</span>
          ) : (
            <span style={{ opacity: 0.5 }}>日本語</span>
          )}
        </Button>
      </LanguageSelectorContainer>
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
          <Button>{language === "EN" && <span>Contact</span>}</Button>
          <Button>
            {language === "GE" && <span>Kontaktmöglichkeiten </span>}
          </Button>
          <Button>{language === "GE" && <span>コンタクト</span>}</Button>
        </LinkS>
      </ContactWrapper>
    </>
  );
};

export default Nav;
