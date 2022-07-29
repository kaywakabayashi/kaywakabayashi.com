import React, { useContext } from "react";
import { Message, Button, Header } from "../styles/styles";
import ScrollInMotion from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

const Work = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Header>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={0.5}>
          {language === "EN" && <span>Work </span>}
          {language === "GE" && <span>Arbeit</span>}
          {language === "JP" && <span>ワーク</span>}
        </ScrollInMotion>
      </Header>
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
          {language === "EN" && <span>Projects </span>}
          {language === "GE" && <span>Projekte</span>}
          {language === "JP" && <span>プロジェクト</span>}
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
            href="https://hexdom.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            "HEXDOM"
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
            href="https://eternal-card.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            "ETERNAL CARD"
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
            "EFFICIENTLY APP"
          </a>
        </ScrollInMotion>
      </Message>
    </>
  );
};

export default Work;
