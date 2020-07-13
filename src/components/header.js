import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Styles
import { HeadCont, NavItem } from "../styles/mainStyles"

const Header = ({ siteTitle }) => (
  <header>
    {/* Navbar */}
    <HeadCont>
      <NavItem>
        <StyleLink href="/">icon</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#about">ABOUT</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#vids">VIDS</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#studio">STUDIO</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#disco">DISCOGRAPHY</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#press">PRESS</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#contact">CONTACT</StyleLink>
      </NavItem>
    </HeadCont> 
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyleLink = styled.a`
  color: #fcfdfe;
  text-decoration: none;
`
export default Header
