/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

const NavLink = props => (
  <Styled.a as={Link} sx={{ variant: "styles.navlink", mr: 3 }} {...props} />
);
export default props => {
  return (
    <Styled.root sx={{}}>
      <header sx={{ variant: "styles.header" }} role="banner">
        <nav role="navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main role="main">{props.children}</main>
      <footer sx={{ py: 5 }} role="contentinfo">
        <small>&#9400; {new Date().getFullYear()} Carl Barrdahl</small>
      </footer>
    </Styled.root>
  );
};
