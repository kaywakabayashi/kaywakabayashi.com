import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import Cover from "../img/katsuya.jpg";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkS,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Footer from "../components/Footer";

function Home() {
  const Container = styled(motion.div)`
    background-color: white;
    height: 100vh;
    scroll-snap-align: start;
  `;

  const SectionContainer = styled(motion.div)`
    padding: 1em 2em 0;
    background-color: transparent;
    scroll-snap-type: y mandatory;
    overflow-x: hidden;
    height: 100vh;
  `;

  const ContentContainer = styled(motion.div)`
    padding: 1em 0;
    border-radius: 25px;
    background-color: transparent;
    height: 100%;
  `;

  const Message = styled(motion.div)`
    color: black;
    font-size: 1.9em;
    @media (min-width: 320px) {
      font-size: 1.8em;
    }
    @media (min-width: 360px) {
      font-size: 2.5em;
    }
    @media (min-width: 481px) {
      font-size: 2.5em;
    }

    @media (min-width: 768px) {
      font-size: 3.5em;
    }
    @media (min-width: 1025px) {
      font-size: 5em;
    }
  `;
  const SectionTitle = styled(motion.div)`
    color: black;
    font-size: 1.9em;
    margin-bottom: 1rem;
    @media (min-width: 320px) {
      font-size: 1.8em;
    }
    @media (min-width: 360px) {
      font-size: 2.5em;
    }
    @media (min-width: 481px) {
      font-size: 2.5em;
    }

    @media (min-width: 768px) {
      font-size: 3.5em;
    }
    @media (min-width: 1025px) {
      font-size: 5em;
    }
  `;

  const RowContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 481px) {
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
    @media (min-width: 1025px) {
      flex-direction: row;
    }
  `;
  const ProfileName = styled.div`
    text-align: center;
  `;

  const ProfileContainer = styled(motion.div)`
    color: black;
    font-size: 0.5em;
    text-align: left;

    @media (min-width: 320px) {
      font-size: 1em;
    }
    @media (min-width: 360px) {
      font-size: 1.3em;
    }
    @media (min-width: 481px) {
      font-size: 1.3em;
      padding: 0 5rem;
    }

    @media (min-width: 768px) {
      font-size: 1.7em;
      text-align: left;
    }
    @media (min-width: 1025px) {
      font-size: 2em;
    }
  `;

  const Image = styled(motion.img)`
    object-fit: cover;
    height: 20rem;
    width: auto;
  `;

  const EmailContainer = styled(motion.button)`
    display: flex;
    justify-content: center;
    background-color: black;
    border-radius: 0.8rem;
    border-color: black;
    border-width: 0.2rem;
    color: white;
    padding: 0.5rem 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 13rem;

    @media (min-width: 769px) {
      right: 2.5rem;
      margin-right: 0;
    }
  `;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouse(event) {
    x.set(event.pageX);
    y.set(event.pageY);
  }
  const email = "hello@katsuya.me";
  const [copySuccessMessage, setCopySuccessMessage] = useState(email);
  const [instructions, setInstructions] = useState(email);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage(email);
    }, 995000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Copied");
    setInstructions("");
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return;
    }
    setInstructions(`click to copy`);
  }

  function hideInstruction() {
    setInstructions(`${email}`);
  }

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Container
        style={{ perspective: 1000 }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onMouseMove={handleMouse}
      >
        <SectionContainer id="top">
          <Message
            initial={{ opacity: 0.8 }}
            animate={{
              opacity: 0.03,
              x: 0,
              y: 5,
              transition: { duration: 3 },
            }}
            whileHover={{ scale: 1 }}
          >
            HELLO, I AM
          </Message>
          <div>
            <Message
              initial={{ opacity: 0.1, x: 0, y: 15 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 5,
                transition: { duration: 3 },
                scale: 1.1,
                originX: 0,
              }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 15px rgb(255, 255, 255)",
                originX: 0,
              }}
              transition={{ stiffness: 300 }}
            >
              <LinkS to="me" spy={true} offset={0} duration={500} smooth={true}>
                KATSUYA.
              </LinkS>
            </Message>
          </div>

          <Message
            initial={{ opacity: 0.8, x: 0, y: 0 }}
            animate={{
              opacity: 0.03,
              x: 0,
              y: 5,
              transition: { duration: 3 },
            }}
            whileHover={{ scale: 1 }}
          >
            I AM A PASSIONATE
          </Message>

          <Message
            initial={{ opacity: 0, x: 0, y: 15 }}
            animate={{
              opacity: 1,
              x: 0,
              y: 5,
              transition: { duration: 3 },
              scale: 1.1,
              originX: 0,
            }}
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 15px rgb(255, 255, 255)",
              originX: 0,
            }}
            transition={{ stiffness: 300 }}
          >
            <LinkS
              activeClass="active"
              to="work"
              spy={true}
              offset={0}
              duration={500}
              smooth={true}
            >
              FRONT-END DEVELOPER
            </LinkS>
          </Message>

          <Message
            drag
            initial={{ opacity: 0.8, x: 0, y: 0 }}
            animate={{
              opacity: 0.03,
              x: 0,
              y: 5,
              transition: { duration: 3 },
            }}
          >
            AND METICULOUS
          </Message>

          <Message
            initial={{ opacity: 0, x: 0, y: 15 }}
            animate={{
              x: 0,
              y: 5,
              opacity: 1,
              transition: { duration: 3 },
              scale: 1.1,
              originX: 0,
            }}
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 15px rgb(255, 255, 255)",
              originX: 0,
            }}
            transition={{ stiffness: 300 }}
            // whileTap={{
            //   scale: 1,
            //   transition: { duration: 3 },
            // }}
          >
            <LinkS
              activeClass="active"
              to="contact"
              spy={true}
              offset={0}
              smooth={true}
              duration={500}
            >
              UI/UX DESIGNER.
            </LinkS>
          </Message>
        </SectionContainer>
        <EmailContainer
          onClick={copyEmail}
          initial={{ opacity: 1 }}
          whileHover={{
            backgroundColor: "white",
            color: "black",
            opacity: 0.8,
            scale: 1.1,
          }}
        >
          {copySuccessMessage}
        </EmailContainer>
        <SectionContainer id="work">
          <ContentContainer>
            <SectionTitle
              initial={{ opacity: 0, x: -1000, y: 0 }}
              animate={{
                x: 0,
                y: 5,
                opacity: 1,
                transition: { duration: 6 },
                scale: 1.1,
                originX: 0,
              }}
            >
              Work
            </SectionTitle>
            <Message>
              <Link to="/projects">PROJECTS</Link>
            </Message>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer id="me">
          <ContentContainer>
            <SectionTitle
              initial={{ opacity: 0, x: -1000, y: 0 }}
              animate={{
                x: 0,
                y: 5,
                opacity: 1,
                transition: { duration: 3 },
                scale: 1.1,
                originX: 0,
              }}
            >
              Me
            </SectionTitle>
            <RowContainer>
              <Image src={Cover} />
              <ProfileContainer className="font-extralight">
                <ProfileName className="font-semibold">
                  KATSUYA WAKABAYASHI
                </ProfileName>
                <p>
                  Developer and Designer who have worked with fashion designers
                  and creators. Developing All-in-one productivity app,
                  Efficiently App.
                </p>
                <p>
                  Skilled in{" "}
                  <span className="font-bold">
                    React.js, React Native, JavaScript, C++, Python
                  </span>{" "}
                  etc.
                </p>
                <p>
                  Currently studying Computer Science and Linguistics at{" "}
                  <span className="font-bold">UCLA</span>
                </p>
              </ProfileContainer>
            </RowContainer>

            <p className="font-semibold"></p>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer id="contact">
          <ContentContainer>
            <Message
              initial={{ opacity: 1, x: -1000, y: 0 }}
              transition={{ delay: 3 }}
              animate={{
                x: 0,
                y: 5,
                opacity: 0.2,
                transition: { duration: 3 },
                scale: 1.1,
                originX: 0,
              }}
            >
              WAYS TO SAY HI
            </Message>
            <Message
              initial={{ opacity: 0, x: 0, y: 15 }}
              animate={{
                x: 0,
                y: 5,
                opacity: 1,
                scale: 1.1,
                originX: 0,
              }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 15px rgb(255, 255, 255)",
              }}
              transition={{ stiffness: 300 }}
              whileTap={{
                scale: 1.2,
              }}
            >
              <a href="mailto: hello@katsuya.me">EMAIL ME</a>
            </Message>
            <Message
              initial={{ opacity: 0, x: 0, y: 15 }}
              animate={{
                x: 0,
                y: 5,
                opacity: 1,
                scale: 1.1,
                originX: 0,
              }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 15px rgb(255, 255, 255)",
              }}
              transition={{ stiffness: 300 }}
              whileTap={{
                scale: 1.2,
              }}
            >
              <a
                href="https://github.com/katsuyaw"
                rel="noopener noreferrer"
                target="_blank"
              >
                GITHUB
              </a>
            </Message>
            <Message
              initial={{ opacity: 0, x: 0, y: 15 }}
              animate={{
                x: 0,
                y: 5,
                opacity: 1,
                scale: 1.1,
                originX: 0,
              }}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 15px rgb(255, 255, 255)",
              }}
              transition={{ stiffness: 300 }}
              whileTap={{
                scale: 1.2,
              }}
            >
              <a
                href="https://linkedin.com/in/kats"
                rel="noopener noreferrer"
                target="_blank"
              >
                LINKEDIN
              </a>
            </Message>
          </ContentContainer>
        </SectionContainer>
      </Container>
    </>
  );
}

export default Home;
