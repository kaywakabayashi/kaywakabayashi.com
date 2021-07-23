import React from "react";
import { Message, Button } from "../styles/styles";
import ScrollInMotion from "../styles/motions";

const Work = () => {
  return (
    <>
      <Message>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={0.5}>
          Work
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
          <a href="https://lawistudios.com">
            <Button>LAWI STUDIOS</Button>
          </a>
        </ScrollInMotion>
      </Message>

      <Message>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={0.5}>
          PROJECTS
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
          <a href="https://efficiently.app">EFFICIENTLY APP</a>
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
          <a href="https://github.com/smc-tech-talk/Lets-Trade">LET'S TRADE</a>
        </ScrollInMotion>
      </Message>
    </>
  );
};

export default Work;
