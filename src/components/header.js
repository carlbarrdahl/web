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
    label: "Projects",
    href: "#projects"
  },
  // {
  //   label: "Services",
  //   href: "#services"
  // },
  {
    label: "Contact",
    href: "#contact"
  }
  // {
  //   label: "Blog",
  //   href: "/articles"
  // }
]
const Nav = styled("nav")`flex justify-center items-center`
const Header = styled("header")`pa2`
Nav.Item = styled(Link)`f3-ns pa3 link dark-blue no-underline underline-hover`

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
        <Photo className="grow" fluid={data.fullImage.childImageSharp.fluid} />
      )}
    />
  </Link>
)
export default ({}) => (
  <Header>
    <Nav>
      <Home />
      {links.map(link => (
        <Nav.Item key={link.href} to={link.href}>
          {link.label}
        </Nav.Item>
      ))}
    </Nav>
  </Header>
)
