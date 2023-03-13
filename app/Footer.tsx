import React from "react"
import styled from "styled-components"
import { theme } from "./theme"
import { AnimatePresence, motion } from "framer-motion"
import gsap from "gsap"
import Link from "next/link"

const FooterContainer = styled(motion.footer)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
`

const ExpandButton = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${theme.colors.outline};
  border: none;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: ${theme.colors.outline};
    width: 15px;
    height: 4px;
    display: block;
    position: absolute;
  }

  span:nth-child(1) {
    transform: translateX(-25%) rotate(-45deg);
  }

  span:nth-child(2) {
    transform: translateX(25%) rotate(45deg);
  }
`

const FooterContent = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.outline};
`

const ExpandButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Footer() {
  const [visible, setVisible] = React.useState(false)

  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ExpandButtonContainer>
        <ExpandButton
          onClick={() => {
            setVisible(!visible)
          }}
        >
          <span></span>
          <span></span>
        </ExpandButton>
      </ExpandButtonContainer>
      <AnimatePresence>
        {visible && (
          <FooterContent
            initial={{ height: 0 }}
            animate={{ height: 120 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IconContainer>
              <Link target="_blank" href={"https://facebook.fr"}>
                <img src="/icons/facebook.png" alt="" />
              </Link>
              <Link target="_blank" href={"https://facebook.fr"}>
                <img src="/icons/facebook.png" alt="" />
              </Link>
              <Link target="_blank" href={"https://facebook.fr"}>
                <img src="/icons/facebook.png" alt="" />
              </Link>
              <Link target="_blank" href={"https://facebook.fr"}>
                <img src="/icons/facebook.png" alt="" />
              </Link>
            </IconContainer>
            <div
              style={{
                overflow: "hidden",
              }}
            >
              © {new Date().getFullYear()} - All rights reserved
            </div>
          </FooterContent>
        )}
      </AnimatePresence>
    </FooterContainer>
  )
}

export default Footer
