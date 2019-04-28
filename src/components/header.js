import { Link } from "gatsby"
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
Nav.Item = styled(Link)`f3-ns pa3 dark-blue no-underline`

const Header = ({}) => (
  <header style={{ marginBottom: 8 }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
      }}
    >
      <Nav>
        <Link to="/" style={{ width: 48, height: 48, background: "#eee" }} />
        {links.map(link => (
          <Nav.Item key={link.href} to={link.href}>
            {link.label}
          </Nav.Item>
        ))}
      </Nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
