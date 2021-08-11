import React, { useContext } from "react";
import { Message, Button } from "../styles/styles";
import ScrollInMotion from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

const Work = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <Message>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={0.5}>
          {language === "EN" && <span>Work </span>}
          {language === "GE" && <span>Arbeit</span>}
        </ScrollInMotion>
      </Message>
      <Message>
        <ScrollInMotion
          hover={1.1}
          y={10}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a
            href="https://lawistudios.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>LAWI STUDIOS</Button>
          </a>
        </ScrollInMotion>
      </Message>

      <Message>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={0.5}>
          {language === "EN" && <span>PROJECTS </span>}
          {language === "GE" && <span>PROJEKTE</span>}
        </ScrollInMotion>
      </Message>

      <Message>
        <ScrollInMotion
          hover={1.1}
          y={20}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a
            href="https://eternal-card.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            "ETERNAL CARD"(NFT)
          </a>
        </ScrollInMotion>
      </Message>

      <Message>
        <ScrollInMotion
          hover={1.1}
          y={20}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a
            href="https://efficiently.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            "EFFICIENTLY APP"(React)
          </a>
        </ScrollInMotion>
      </Message>

      <Message>
        <ScrollInMotion
          hover={1.1}
          y={35}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a
            href="https://github.com/smc-tech-talk/Lets-Trade"
            rel="noopener noreferrer"
            target="_blank"
          >
            "LET'S TRADE"(C++)
          </a>
        </ScrollInMotion>
      </Message>
      <Message>
        <ScrollInMotion
          hover={1.1}
          y={35}
          duration={2}
          hiddenOpacity={0.5}
          opacity={1}
        >
          <a
            href="https://player.vimeo.com/video/538200578"
            rel="noopener noreferrer"
            target="_blank"
          >
            "DROP IT!"(Music video)
          </a>
        </ScrollInMotion>
      </Message>
    </>
  );
};

export default Work;
