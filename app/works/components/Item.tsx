import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { Project } from "../../../types"
import { theme } from "../../theme"

const ItemContainer = styled(motion.div)`
  width: 100%;
  height: 200px;
`

const ItemContent = styled(motion.div)`
  background-color: orange;
  width: 100%;
`

const Item = ({ project, index }: { project: Project; index: number }) => {
  return (
    <ItemContainer
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { delay: index * 0.1 },
      }}
      key={index}
    >
      <ItemContent>
        <h1>{project.name}</h1>
      </ItemContent>
    </ItemContainer>
  )
}

export default Item
