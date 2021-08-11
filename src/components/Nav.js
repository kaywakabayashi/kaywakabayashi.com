import React, { useContext } from "react";
import {
  ContactWrapper,
  Button,
  LanguageSelectorContainer,
} from "../styles/styles";
import { Link as LinkS } from "react-scroll";
import { contactMotion } from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

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
            {language === "GE" && (
              <span style={{ fontSize: "0.7em" }}>Kontaktmöglichkeiten </span>
            )}
          </Button>
          <Button>{language === "JP" && <span>コンタクト</span>}</Button>
        </LinkS>
      </ContactWrapper>
    </>
  );
};

export default Nav;
