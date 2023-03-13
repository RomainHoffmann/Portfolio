import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { Project } from "../../../types"
import { theme } from "../../theme"

const ItemContainer = styled(motion.div)`
  width: 100%;
  img {
    width: 100%;
    aspect-ratio: 16/9;
    background-color: red;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 500px;
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    max-width: 1200px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
`

const ItemBody = styled.div`
  width: 100%;
`

const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    padding: 1rem 0;
  }
`

const Button = styled.a`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.outline};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.outline};
    color: ${theme.colors.primary};
  }
`

const ItemContent = styled(motion.div)`
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    ${({ index }: { index: number }) => {
      if (index % 2 === 0) return "flex-direction: row;"
      else return "flex-direction: row-reverse;"
    }}
  }
`

const Item = ({ project, index }: { project: Project; index: number }) => {
  return (
    <ItemContainer
      initial={{ x: index % 2 !== 1 ? -200 : 200, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { delay: index * 0.2, bounce: 0 },
      }}
      viewport={{ once: true }}
      key={index}
    >
      <ItemContent index={index}>
        <img src="" alt="" />
        <ItemBody>
          <ItemTextContainer>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </ItemTextContainer>
          <ButtonContainer>
            <Button target="_blank" href={project.link}>
              Demo
            </Button>
            <Button target="_blank" href={project.link}>
              Source
            </Button>
          </ButtonContainer>
        </ItemBody>
      </ItemContent>
    </ItemContainer>
  )
}

export default Item
