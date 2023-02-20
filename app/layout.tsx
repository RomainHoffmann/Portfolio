"use client"

import { ReactNode } from "react"
import "../styles/globals.css"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children?: ReactNode; title?: string }) => {
  return (
    <>
      <html>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  )
}

export default Layout
