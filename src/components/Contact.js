import React, { useEffect, useContext } from "react";
import { Message, Button } from "../styles/styles";
import "../index.css";
import ScrollInMotion from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

const Contact = ({
  copySuccessMessage,
  instructions,
  setCopySuccessMessage,
  setInstructions,
}) => {
  const email = "wakabayashi@ucla.edu";
  const copiedMsg = "Email Copied :)";
  const thanksMsg = "Looking forward to hearing from you!";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(copiedMsg);
    setInstructions("");
  };

  useEffect(() => {
    setInterval(() => {
      if (copySuccessMessage === copiedMsg) {
        setCopySuccessMessage(thanksMsg);
      } else {
      }
    }, 2000);
  }, [copySuccessMessage, setCopySuccessMessage]);

  const { language } = useContext(LanguageContext);

  return (
    <>
      <Message>
        <ScrollInMotion duration={2} x={-200} hiddenOpacity={1} opacity={0.2}>
          {language === "EN" && <span> WAYS TO SAY HI </span>}
          {language === "GE" && <span>SCHAU VORBEI!</span>}
          {language === "JP" && <span>コンタクト</span>}
        </ScrollInMotion>
      </Message>
      <Message>
        <ScrollInMotion
          hover={1.1}
          y={15}
          duration={3}
          hiddenOpacity={0}
          opacity={1}
        >
          <p onClick={copyEmail}>
            {copySuccessMessage} {instructions}
          </p>
        </ScrollInMotion>
      </Message>
      <Message>
        <ScrollInMotion
          hover={1.1}
          y={20}
          duration={3}
          hiddenOpacity={0}
          opacity={1}
        >
          <a
            href="https://github.com/katsuyawakabayashi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button>GITHUB</Button>
          </a>
        </ScrollInMotion>
      </Message>

      <Message>
        <ScrollInMotion
          hover={1.1}
          y={30}
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
        </ScrollInMotion>
      </Message>
    </>
  );
};

export default Contact;
