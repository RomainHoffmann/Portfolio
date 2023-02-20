import React from "react"
import styled from "styled-components"
import { theme } from "./theme"

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary};
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  height: 40px;

  @media (min-width: ${theme.breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${theme.breakpoints.laptop}) {
    font-size: 1rem;
  }
`

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} - All rights reserved
    </FooterContainer>
  )
}

export default Footer
