import React, { useEffect } from "react";
import { Message, Button } from "../styles/styles";
import "../index.css";
import ScrollInMotion from "../styles/motions";

const Contact = ({
  copySuccessMessage,
  instructions,
  setCopySuccessMessage,
  setInstructions,
}) => {
  const email = "wakabayashi@ucla.edu";
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Email Copied :)");
    setInstructions("");
  };

  useEffect(() => {
    setInterval(() => {
      if (copySuccessMessage === "Email Copied :)") {
        setCopySuccessMessage("Looking forward to hearing from you!");
      } else {
      }
    }, 4000);
  }, [copySuccessMessage, setCopySuccessMessage]);

  return (
    <>
      <Message>
        <ScrollInMotion duration={2} x={-200} hiddenOpacity={1} opacity={0.2}>
          WAYS TO SAY HI
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
            href="https://github.com/katsuyaw"
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
