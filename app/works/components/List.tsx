"use client"

import React from "react"
import styled from "styled-components"
import { Project } from "../../../types"
import { theme } from "../../theme"
import Item from "./Item"

const ProjectListContainer = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`

console.log(process)

const List = ({ items }: { items: Project[] }) => {
  return (
    <ProjectListContainer>
      {items.map((project, index) => {
        return <Item project={project} index={index} key={index}></Item>
      })}
    </ProjectListContainer>
  )
}

export default List
