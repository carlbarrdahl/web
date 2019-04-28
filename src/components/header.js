import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "tachyons-components"

const links = [
  {
    label: "About",
    href: "/"
  },
  {
    label: "Work",
    href: "#work"
  },
  // {
  //   label: "Services",
  //   href: "#services"
  // },
  {
    label: "Contact",
    href: "#contact"
  }
]
const Nav = styled("nav")`flex justify-center align-center`
const Header = styled("header")`pa2`
Nav.Item = styled(Link)`f3-ns pa3 dark-blue no-underline dim`

const Photo = styled(Img)`w3 br-100`
const Home = () => (
  <Link to="/">
    <StaticQuery
      query={graphql`
        query {
          fullImage: file(relativePath: { eq: "about/carl.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 120) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Photo
          className="grow"
          // style={{ width: 48, height: 48 }}
          fluid={data.fullImage.childImageSharp.fluid}
        />
      )}
    />
  </Link>
)
export default ({}) => (
  <Header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
      }}
    >
      <Nav>
        <Home />
        {links.map(link => (
          <Nav.Item key={link.href} to={link.href}>
            {link.label}
          </Nav.Item>
        ))}
      </Nav>
    </div>
  </Header>
)
