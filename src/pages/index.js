import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  AnimateSharedLayout,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Cover from "../img/katsuya.jpg";
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
import "../index.css";
import Marquee from "react-fast-marquee";

function Home() {
  const Container = styled(motion.div)`
    background-color: white;
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
  `;

  const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
  `;
  const MainContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: transparent;
    scroll-snap-type: y mandatory;
    height: 90%;
  `;

  const SectionContainer = styled(motion.div)`
    padding: 0 0.5em;
    background-color: transparent;
    scroll-snap-type: y mandatory;
    width: 100wh;
    height: 100%;
    min-height: 100%;
    overflow-y: scroll;
  `;

  const ContentContainer = styled(motion.div)`
    border-radius: 25px;
    background-color: transparent;
    height: 100%;
    @media (min-width: 768px) {
      padding: 1em 0;
    }
  `;

  const ContactWrapper = styled(motion.div)`
    color: black;
    font-size: 1em;
    margin: 0;
    text-align: right;
    margin: 0.5rem 0.5rem 0 0;
    padding: 0;
    @media (min-width: 320px) {
      font-size: 1.5em;
    }
    @media (min-width: 360px) {
      font-size: 1.7em;
    }

    @media (min-width: 768px) {
      font-size: 2em;
    }
  `;

  const Message = styled(motion.div)`
    color: black;
    font-size: 2em;
    margin-right: 2rem;

    @media (min-width: 320px) {
      font-size: 2em;
    }
    @media (min-width: 360px) {
      font-size: 2.6em;
    }
    @media (min-width: 376px) {
      font-size: 2.5em;
    }

    @media (min-width: 768px) {
      font-size: 3.5em;
    }
    @media (min-width: 1025px) {
      font-size: 5em;
    }
  `;

  const Button = styled(motion.button)`
    text-align: left;
    overflow-x: auto;
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
      font-size: 4em;
    }
  `;

  const RowContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1025px) {
      //flex-direction: row;
    }
  `;
  const ProfileName = styled(motion.div)`
    text-align: center;
    font-size: 0.5em;
  `;

  const LeftContainer = styled(motion.div)`
    margin: auto;

    @media (min-width: 1025px) {
      width: 20rem;
    }
  `;

  const RightContainer = styled(motion.div)`
    color: black;
    font-size: 1em;

    @media (min-width: 321px) {
      font-size: 2em;
    }

    @media (min-width: 481px) {
      font-size: 3.5em;
    }

    @media (min-width: 768px) {
      font-size: 3.5em;
    }
    @media (min-width: 1025px) {
      font-size: 5em;
    }
  `;

  const Image = styled(motion.img)`
    object-fit: cover;
    height: 15rem;
    width: auto;
    margin: auto;
  `;

  const email = "hello@katsuya.me";
  const [copySuccessMessage, setCopySuccessMessage] = useState();
  const [instructions, setInstructions] = useState("EMAIL ME");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("Looking forward to hearing from you!");
    }, 10000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Email Copied");
    setInstructions("");
  }

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const ScrollIn = ({
    children,
    duration,
    x,
    y,
    hiddenOpacity,
    opacity,
    hiddenScale,
    hover,
  }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: duration }}
        variants={{
          visible: { opacity: opacity, scale: 1, x: 0, y: 0, originX: 0 },
          hidden: { opacity: hiddenOpacity, scale: hiddenScale, x: x, y: y },
        }}
        whileHover={{ scale: hover, transition: { duration: 0.5 } }}
      >
        {children}
      </motion.div>
    );
  };

  const shadowMessageMotion = {
    initial: { opacity: 0.8, x: 0, y: 0 },
    animate: {
      opacity: 0.03,
      x: 0,
      y: 5,
      transition: { duration: 3 },
    },
  };

  const messageMotion = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 5,
      transition: { duration: 1 },
      scale: 1.1,
      originX: 0,
    },
    whileHover: {
      scale: 1.2,
      textShadow: "0px 0px 15px rgb(255, 255, 255)",
      transition: { duration: 1 },
      originX: 0,
    },
    transition: { duration: 3, stiffness: 100 },
  };

  const contactMotion = {
    initial: { opacity: 0, x: 200 },
    animate: {
      opacity: 0.5,
      x: 0,
      y: 5,
      transition: { duration: 3 },
    },
    whileHover: { scale: 1.05, opacity: 1 },
  };

  return (
    <>
      <Container
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        id="container"
      >
        <SectionContainer>
          <NavContainer>
            <ContactWrapper
              variants={contactMotion}
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
                duration={500}
                smooth={true}
              >
                <Button>CONTACT</Button>
              </LinkS>
            </ContactWrapper>
          </NavContainer>

          <MainContainer id="top">
            <Message
              variants={shadowMessageMotion}
              initial="initial"
              animate="animate"
              transition="transition"
              whileHover="whileHover"
            >
              HELLO, I AM
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
              I AM A PASSIONATE
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
                <Button>FRONT-END DEVELOPER</Button>
              </LinkS>
            </Message>

            <Message
              variants={shadowMessageMotion}
              initial="initial"
              animate="animate"
              whileHover="whileHoever"
            >
              AND METICULOUS
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
                <Button>UI/UX DESIGNER.</Button>
              </LinkS>
            </Message>
          </MainContainer>
        </SectionContainer>

        {/* <EmailContainer
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
        </EmailContainer> */}
        <SectionContainer id="work">
          <ContentContainer>
            <SectionTitle>
              <ScrollIn duration={2} x={-100} hiddenOpacity={0.5}>
                Work
              </ScrollIn>
              <ScrollIn
                hover={1.1}
                y={15}
                duration={1}
                hiddenOpacity={0.5}
                opacity={1}
              >
                <a href="https://lawistudios.com">LAWI STUDIOS/ WEB DESIGNER</a>
              </ScrollIn>
              <ScrollIn duration={2} x={-100} hiddenOpacity={0.5}>
                PROJECTS
              </ScrollIn>
              <ScrollIn
                hover={1.1}
                y={15}
                duration={2}
                hiddenOpacity={0.5}
                opacity={1}
              >
                <a href="https://efficiently.app">EFFICIENTLY APP</a>
              </ScrollIn>
              <ScrollIn
                hover={1.1}
                y={15}
                duration={3}
                hiddenOpacity={0.5}
                opacity={1}
              >
                <a href="https://github.com/smc-tech-talk/Lets-Trade">
                  LET'S TRADE
                </a>
              </ScrollIn>

              {/* <WorkImg1 src={Work1}></WorkImg1> */}
            </SectionTitle>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer id="me">
          <ContentContainer>
            <SectionTitle>
              <ScrollIn duration={2} x={-100} hiddenOpacity={1} opacity={0.2}>
                Me
              </ScrollIn>
            </SectionTitle>
            <RowContainer>
              <ScrollIn duration={1.5} x={-100} hiddenOpacity={0} opacity={0.7}>
                <LeftContainer>
                  <Image src={Cover} />
                </LeftContainer>
              </ScrollIn>

              <ScrollIn duration={2} x={100} hiddenOpacity={0.1} opacity={1}>
                <RightContainer>
                  <ProfileName>HI, I'M KATSUYA WAKABAYASHI</ProfileName>
                  <Marquee speed={120}>
                    <p>
                      Love working with creators.
                      <span className="px-5" />
                    </p>
                  </Marquee>
                  <Marquee speed={120}>
                    <p className="">
                      Skilled in{" "}
                      <span className="font-bold">
                        React.js, React Native, JavaScript, C++, Python
                      </span>{" "}
                      etc. <span className="px-5" />
                    </p>
                  </Marquee>
                  <Marquee speed={120}>
                    <p>
                      Currently studying at{" "}
                      <span className="font-bold">UCLA.</span>
                      <span className="px-5" />
                    </p>
                  </Marquee>
                </RightContainer>
              </ScrollIn>
            </RowContainer>

            <p className="font-semibold"></p>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer id="contact">
          <ContentContainer>
            <Message id="contact">
              <ScrollIn duration={2} x={-200} hiddenOpacity={1} opacity={0.2}>
                WAYS TO SAY HI
              </ScrollIn>
            </Message>
            <Message>
              <ScrollIn
                opacity={0.7}
                duration={5}
                hiddenOpacity={0.3}
                hiddenScale={1.3}
                hover={1.2}
              >
                <p onClick={copyEmail}>
                  {copySuccessMessage} {instructions}
                </p>
              </ScrollIn>
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
