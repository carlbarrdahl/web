import React from "react"
import PropTypes from "prop-types"
import styled from "tachyons-components"

import Header from "./header"
import "./layout.css"

const Layout = styled("main")`w-100 bg-white-0125 dark-gray`
const Footer = styled("footer")`tc`

const mapColor = ({ bg, color }) => `bg-${bg} ${color}`
export const Section = styled("section")`ph3 pv5 ph5-ns pb5 
${mapColor}`
// bb b--black-10
Section.Title = styled("h1")`f5 ttu tracked mb3`

// export const Section = styled("section")`ph3 pv3 ph5-ns pb5`
export const Container = styled("div")`mw8 center`

export default ({ children }) => (
  <Layout>
    {/* <Header /> */}
    {children}
    <Section bg="navy" color="near-white">
      <Container>
        <Footer>© {new Date().getFullYear()} Carl B</Footer>
      </Container>
    </Section>
  </Layout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
