"use client"

import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { theme } from "./theme"

const MOBILE_NAV_DURATION = 0.7

const navItem = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
]

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: flex-end;
  height: 60px;
`

const NavButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${theme.colors.primary};
  border: none;
  outline: 1px solid ${theme.colors.outline};
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;

  span {
    display: block;
    height: 3px;
    margin: 5px 0;
    background-color: ${theme.colors.outline};
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`

const MobileNavContainer = styled(motion.nav)`
  width: 100%;
  position: fixed;
  top: 60px;
  overflow: hidden;
  z-index: 1000;

  ul {
    background-color: ${theme.colors.outline};

    li {
      width: 100%;
      border-bottom: 1px solid ${theme.colors.primary};

      a {
        display: block;
        width: 100%;
        height: 100%;
        color: ${theme.colors.primary};
        text-decoration: none;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 500;
  }
`

const DesktopNavContainer = styled.nav`
  display: none;
  width: 100%;
  justify-content: center;

  ul {
    display: none;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 700px;
  }

  li {
    list-style: none;
    a {
      text-decoration: none;

      color: ${theme.colors.outline};
      font-size: 1.2rem;
      font-weight: 600;
      padding: 10px;
      letter-spacing: 1px;
    }
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    display: flex;
    ul {
      display: flex;
    }
  }
`

function Header() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <HeaderContainer>
        <MobileNavButton setOpen={setOpen} open={open}></MobileNavButton>
        <DesktopNavContainer>
          <ul>
            {navItem.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </DesktopNavContainer>
      </HeaderContainer>
      <AnimatePresence>{open && <MobileNav></MobileNav>}</AnimatePresence>
    </>
  )
}

const MobileNavButton = ({
  setOpen,
  open,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}) => (
  <NavButtonContainer
    onClick={() => {
      setOpen(!open)
    }}
  >
    <span></span>
    <span></span>
    <span></span>
  </NavButtonContainer>
)

const MobileNav = () => {
  return (
    <MobileNavContainer
      initial={{
        height: "0px",
      }}
      animate={{
        height: "auto",
        transition: {
          duration: MOBILE_NAV_DURATION,
        },
      }}
      exit={{
        height: "0px",
        transition: {
          duration: MOBILE_NAV_DURATION,
        },
      }}
    >
      <motion.ul
        initial={{
          y: "-100%",
        }}
        animate={{
          y: "0%",
          transition: {
            duration: MOBILE_NAV_DURATION,
          },
        }}
        exit={{
          y: "-100%",
          transition: {
            duration: MOBILE_NAV_DURATION,
          },
        }}
      >
        {navItem.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </motion.ul>
    </MobileNavContainer>
  )
}

export default Header
