import React from "react"
import PropTypes from "prop-types"
import styled from "tachyons-components"

import Header from "./header"
import "./layout.css"

const Layout = styled("main")`w-100 bg-white-0125 dark-gray`
const Footer = styled("footer")`tc pa4`

const mapColor = ({ bg }) => `bg-${bg}`
export const Section = styled("section")`ph3 pv3 ph5-ns pb5 
${mapColor}`
// bb b--black-10
Section.Title = styled("h1")`f5 mt4 ttu tracked`

// export const Section = styled("section")`ph3 pv3 ph5-ns pb5`
export const Container = styled("div")`mw8 center`

export default ({ children }) => (
  <Layout>
    <Header />
    {children}
    <Footer>© {new Date().getFullYear()} Carl B</Footer>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
