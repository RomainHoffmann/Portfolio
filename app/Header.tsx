"use client"

import Link from "next/link"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { theme } from "./theme"
import { usePathname, useRouter } from "next/navigation"

const MOBILE_NAV_DURATION = 0.7

const navItem = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Works", path: "/works" },
  { name: "Contact", path: "/contact" },
]

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 60px;
  z-index: 1000;
`

const NavButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: 1px solid ${theme.colors.primary};
  cursor: pointer;
  margin: 10px;

  span {
    display: block;
    height: 3px;
    margin: 5px 0;
    background-color: ${theme.colors.primary};
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

      color: ${theme.colors.primary};
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.25rem;
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

const SelectedNavLine = styled(motion.div)`
  width: 90%;
  height: 3px;
  background-color: ${theme.colors.primary};
`

const SelectedNavLinePlaceHolder = styled(motion.div)`
  width: 90%;
  height: 3px;
  background-color: ${theme.colors.outline};
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
              <DesktopLink
                key={index}
                name={item.name}
                path={item.path}
              ></DesktopLink>
            ))}
          </ul>
        </DesktopNavContainer>
      </HeaderContainer>
      <AnimatePresence>
        {open && <MobileNav setOpen={setOpen}></MobileNav>}
      </AnimatePresence>
    </>
  )
}

const DesktopLink = ({ name, path }: { name: string; path: string }) => {
  const pathname = usePathname()
  const [selected, setSelected] = useState<boolean>(false)

  useEffect(() => {
    setSelected(pathname === path)
  }, [pathname])

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Link href={path}>{name}</Link>
      {selected ? (
        <SelectedNavLine layoutId="selectedNavLine"></SelectedNavLine>
      ) : (
        <SelectedNavLinePlaceHolder></SelectedNavLinePlaceHolder>
      )}
    </li>
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

const MobileNav = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
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
            <Link
              onClick={() => {
                setOpen(false)
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </MobileNavContainer>
  )
}

export default Header
