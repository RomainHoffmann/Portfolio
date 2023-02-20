"use client"

import { motion } from "framer-motion"
import styled from "styled-components"
import { theme } from "../theme"

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;

  @media (min-width: ${theme.breakpoints.laptop}) {
    padding: 40px;
    height: 100%;
  }
`

const AboutContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  padding: 40px;
  max-width: 1400px;

  @media (min-width: ${theme.breakpoints.laptop}) {
    max-height: 800px;
  }
`

const AboutBorder = styled(motion.div)`
  position: absolute;
  align-items: center;
  font-size: 1.5rem;
  color: ${theme.colors.primary};
  width: 80%;
  height: 80%;

  ${({ top, bottom }: { top?: number; bottom?: number }) => {
    if (top === 0) {
      return `
      top: ${top};
      left: 0;
      border-top: 4px solid black;
      border-left: 4px solid black;
      `
    } else {
      return `
        bottom: ${bottom};
        right: 0;
        border-bottom: 4px solid black;
        border-right: 4px solid black;
    `
    }
  }}
`

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  flex: 1;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 10px 0;
  }
`

const ImageContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;

  @media (min-width: ${theme.breakpoints.laptop}) {
    display: flex;
  }

  div {
    aspect-ratio: 1/1;
    border-radius: 800px;
    overflow: hidden;
    background-color: yellow;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const AboutPage = () => (
  <AboutSection>
    <AboutContainer>
      <AboutBorder
        initial={{
          width: 0,
          height: 0,
        }}
        animate={{ width: "80%", height: "80%" }}
        transition={{ duration: 0.5 }}
        top={0}
      />

      <AboutBorder
        initial={{
          width: 0,
          height: 0,
        }}
        animate={{ width: "80%", height: "80%" }}
        transition={{ duration: 0.5 }}
        bottom={0}
      />
      <ContentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          ABOUT ME
        </h1>
        <p>
          Hi, I'm Romain Hoffman - a front-end web developer based in France. I
          specialize React to create engaging websites and applications that
          meet the unique needs of my clients.
        </p>
        <p>
          My interest in web development began several years ago, and I've honed
          my skills through a combination of self-study and formal training. I'm
          always eager to learn more about the latest tools and techniques.
        </p>
        <p>
          Thanks for taking the time to learn a bit more about me, and I look
          forward to connecting with you soon!
        </p>
      </ContentContainer>
      <ImageContainer>
        <div>
          <img src="/images/about.png" alt="" />
        </div>
      </ImageContainer>
    </AboutContainer>
  </AboutSection>
)

export default AboutPage
