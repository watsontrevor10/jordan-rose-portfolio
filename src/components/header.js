import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Images
import HeroImg from "../components/heroImg"

// Styles
import { HeadCont, NavItem, HeadText } from "../styles/mainStyles"

const Header = ({ siteTitle }) => (
  <header>
    {/* Navbar */}
    <HeadCont>
      <NavItem>
        <StyleLink href="/">Home</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#about">About</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#live">Work</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#studio">Studio</StyleLink>
      </NavItem>
      <NavItem>
        <StyleLink href="#contact">Contact</StyleLink>
      </NavItem>
    </HeadCont>
    {/* Hero Image with overlay text */}
    <div style={{ position: "relative" }}>
      <div>
        <HeroImg />
      </div>
      {/* Overlay Text */}
      <HeadText>
        <h1
          style={{
            fontSize: "80px",
          }}
        >
          <StyleLink to="/">{siteTitle}</StyleLink>
        </h1>
      </HeadText>
    </div>
    {/* Nav Bar */}
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
