import React, { useContext } from "react";
import { Message, Button } from "../styles/styles";
import { Link as LinkS } from "react-scroll";
import { shadowMessageMotion, messageMotion } from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

const Hero = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <Message
        variants={shadowMessageMotion}
        initial="initial"
        animate="animate"
        transition="transition"
        whileHover="whileHover"
      >
        {language === "EN" && <span>HELLO, I AM</span>}
        {language === "GE" && <span>HALLO. ICH HEIßE</span>}
        {language === "JP" && <span>こんにちは、わたしは</span>}
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
        {language === "EN" && <span>I AM A PASSIONATE</span>}
        {language === "GE" && <span>ICH BIN EIN LEIDENSCHAFTLICHER</span>}
        {language === "JP" && <span>わたしは情熱的な</span>}
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
          <Button>
            {language === "EN" && <span>FRONT-END DEVELOPER</span>}
            {language === "GE" && <span>FRONT-END ENTWICKLER</span>}
            {language === "JP" && <span>エンジニアであり</span>}
          </Button>
        </LinkS>
      </Message>

      <Message
        variants={shadowMessageMotion}
        initial="initial"
        animate="animate"
        whileHover="whileHoever"
      >
        {language === "EN" && <span>AND METICULOUS</span>}
        {language === "GE" && <span>UND AKRIBISCHER</span>}
        {language === "JP" && <span>神は細部に宿ると信じる</span>}
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
          <Button>
            {language === "EN" && <span> UI/UX DESIGNER.</span>}
            {language === "GE" && <span>UI/UX DESIGNER. </span>}
            {language === "JP" && <span>UI/UX デザイナーです. </span>}
          </Button>
        </LinkS>
      </Message>
    </>
  );
};

export default Hero;
