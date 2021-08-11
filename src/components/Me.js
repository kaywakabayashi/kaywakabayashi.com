import React, { useContext } from "react";

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
import ScrollInMotion from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

const Me = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <SectionTitle>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={1} opacity={0.2}>
          Me
        </ScrollInMotion>
      </SectionTitle>
      <RowContainer>
        <ScrollInMotion duration={1.5} x={-100} hiddenOpacity={0} opacity={0.7}>
          <LeftContainer>
            <Image src={Cover} />
          </LeftContainer>
        </ScrollInMotion>

        <ScrollInMotion duration={2} x={100} hiddenOpacity={0.1} opacity={1}>
          <RightContainer>
            <ProfileName>
              Hi, I'm Katsuya
              <span style={{ opacity: 0.5 }}>(kah-tzooh-yah)</span>
            </ProfileName>
            <Marquee speed={100}>
              <p>
                {language === "EN" && <span> Love working with creators.</span>}
                {language === "GE" && (
                  <span>ICH ARBEITE GERN MIT KREATIVEN MENSCHEN ZUSAMMEN.</span>
                )}
                Erfahren in React.js, React Native, Javascript und weiteren.
                <span className="px-2" />
              </p>
            </Marquee>
            <Marquee speed={100}>
              <p>
                {language === "EN" && <span> Skilled in </span>}
                {language === "GE" && <span>Erfahren in</span>}
                <span className="font-bold">
                  React.js, React Native, JavaScript, C++, Python
                </span>{" "}
                {language === "EN" && <span> etc. </span>}
                {language === "GE" && <span>und weiteren. </span>}
                <span className="px-2" />
              </p>
            </Marquee>
            <Marquee speed={100}>
              <p>
                {language === "EN" && (
                  <span>
                    Currently studying at{" "}
                    <span className="font-bold">UCLA.</span>{" "}
                  </span>
                )}
                {language === "GE" && (
                  <span>
                    Student an der University of California
                    <span className="font-bold">UCLA.</span>{" "}
                  </span>
                )}

                <span className="px-2" />
              </p>
            </Marquee>
          </RightContainer>
        </ScrollInMotion>
      </RowContainer>
    </>
  );
};

export default Me;
