import React from "react";

import {
  SectionTitle,
  RowContainer,
  ProfileName,
  LeftContainer,
  RightContainer,
  Image,
} from "../styles/styles";
import Cover from "../img/katsuya.jpg";
import "../index.css";
import Marquee from "react-fast-marquee";
import ScrollInMessage from "../styles/motions";

const Me = () => {
  return (
    <>
      <SectionTitle>
        <ScrollInMessage duration={2} x={-100} hiddenOpacity={1} opacity={0.2}>
          Me
        </ScrollInMessage>
      </SectionTitle>
      <RowContainer>
        <ScrollInMessage
          duration={1.5}
          x={-100}
          hiddenOpacity={0}
          opacity={0.7}
        >
          <LeftContainer>
            <Image src={Cover} />
          </LeftContainer>
        </ScrollInMessage>

        <ScrollInMessage duration={2} x={100} hiddenOpacity={0.1} opacity={1}>
          <RightContainer>
            <ProfileName>HI, I'M KATSUYA WAKABAYASHI</ProfileName>
            <Marquee speed={100}>
              <p>
                Love working with creators.
                <span className="px-2" />
              </p>
            </Marquee>
            <Marquee speed={100}>
              <p className="">
                Skilled in{" "}
                <span className="font-bold">
                  React.js, React Native, JavaScript, C++, Python
                </span>{" "}
                etc. <span className="px-2" />
              </p>
            </Marquee>
            <Marquee speed={100}>
              <p>
                Currently studying at <span className="font-bold">UCLA.</span>
                <span className="px-2" />
              </p>
            </Marquee>
          </RightContainer>
        </ScrollInMessage>
      </RowContainer>
    </>
  );
};

export default Me;
