"use client"

import { Canvas } from "@react-three/fiber"
import Experience from "../components/three/Experience"
import styled from "styled-components"
import { motion } from "framer-motion"
import { theme } from "./theme"

const HomeSection = styled.section`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  color: ${theme.colors.primary};

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: 20px;
    font-size: 2.5rem;
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    flex-direction: row;
    font-size: 4rem;
  }
`

const WorksButton = styled.button`
  background-color: #000;
  color: ${theme.colors.outline};
  border: none;

  font-size: 0.8em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 10px 20px;
  &:hover {
    background-color: ${theme.colors.outline};
    color: ${theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    margin: 20px;
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    margin: 0;
  }
`

const Hero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60%;

  @media (min-width: ${theme.breakpoints.laptop}) {
    width: 50%;
  }
`

const IndexPage = () => {
  return (
    <HomeSection>
      <Hero
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1
            style={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Hello, I'm Romain
          </h1>
          <h1
            style={{
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            A front-end developer
          </h1>
        </div>
        <WorksButton>See my works</WorksButton>
      </Hero>
      <Canvas
        style={{
          height: "80%",
          width: "clamp(30px, 80%, 800px)",
        }}
      >
        <Experience />
      </Canvas>
    </HomeSection>
  )
}

export default IndexPage
