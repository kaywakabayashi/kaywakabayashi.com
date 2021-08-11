import React, { useContext } from "react";

import {
  RowContainer,
  ProfileName,
  LeftContainer,
  RightContainer,
  Image,
  Message,
} from "../styles/styles";
import Cover from "../img/katsuya.jpg";
import "../index.css";
import Marquee from "react-fast-marquee";
import ScrollInMotion from "../styles/motions";
import { LanguageContext } from "../contexts/LanguageContext";

const Me = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Message>
        <ScrollInMotion duration={2} x={-100} hiddenOpacity={1} opacity={0.2}>
          {language === "EN" && <span> Me</span>}
          {language === "GE" && <span> Profil</span>}
          {language === "JP" && <span> プロファイル</span>}
        </ScrollInMotion>
      </Message>
      <RowContainer>
        <ScrollInMotion duration={1.5} x={-100} hiddenOpacity={0} opacity={0.7}>
          <LeftContainer>
            <Image src={Cover} />
          </LeftContainer>
        </ScrollInMotion>

        <ScrollInMotion duration={2} x={100} hiddenOpacity={0.1} opacity={1}>
          <RightContainer>
            <ProfileName>
              {language === "EN" && <span> Hi, I'm Katsuya</span>}
              {language === "GE" && <span> Hi. Ich bin Katsuya</span>}
              {language === "JP" && <span> こんにちは, Katsuyaです</span>}

              <span style={{ opacity: 0.5 }}>(kah-tzooh-yah).</span>
            </ProfileName>
            <Marquee speed={100}>
              <p>
                {language === "EN" && <span> Love working with creators.</span>}
                {language === "GE" && (
                  <span>Ich arbeite gern mit kreativen menschen zusammen.</span>
                )}
                {language === "JP" && (
                  <span>クリエイターはわたしの戦友です.</span>
                )}

                <span className="px-2" />
              </p>
            </Marquee>
            <Marquee speed={100}>
              <p>
                {language === "EN" && <span> Skilled in </span>}
                {language === "GE" && <span>Erfahren in</span>}
                {language === "JP" && <span>スキル:</span>}
                <span className="font-bold">
                  React.js, React Native, JavaScript, C++, Python
                </span>{" "}
                {language === "EN" && <span> etc. </span>}
                {language === "GE" && <span>und weiteren. </span>}
                {language === "JP" && <span>etc. </span>}
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
                    <span className="font-bold">(UCLA).</span>{" "}
                  </span>
                )}
                {language === "JP" && (
                  <span>
                    カリフォルニア大学ロサンゼルス校在籍
                    <span className="font-bold">(UCLA).</span>{" "}
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
