"use client"

import styled from "styled-components"
import ContactForm from "./components/ContactForm"

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const page = () => {
  return (
    <ContactSection>
      <ContactForm></ContactForm>
    </ContactSection>
  )
}

export default page
