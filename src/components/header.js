import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Styles
import { HeadCont, NavItem } from "../styles/mainStyles"

// Image/Logo
import JRLogo from "../images/jr-logo.png"
console.log(JRLogo)

const MobileNav = () => {
  return (
    <HeadCont>
      <div>
        <div style={{ padding: "0 10px 0 10px" }}>
          <StyleLink href="/">
            <img
              src={JRLogo}
              alt="Jordan Rose Logo"
              style={{ width: "80px", zIndex: "1" }}
            />
          </StyleLink>
        </div>
      </div>
      <div>
        {/* insert hambuger icon here */}
        hambuger
      </div>
      </HeadCont>
  )
}

const DesktopNav = () => {
  return (
    <header>
    {/* Desktop Nav */}
    <HeadCont>
      {/* JR logo */}
      <div>
        <div style={{ padding: "0 10px 0 10px" }}>
          <StyleLink href="/">
            <img
              src={JRLogo}
              alt="Jordan Rose Logo"
              style={{ width: "80px", zIndex: "1" }}
            />
          </StyleLink>
        </div>
      </div>
      {/* Nav items */}
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
}

const Header = ({ siteTitle }) => (
  <header>
    {/* Desktop Nav */}
    <HeadCont>
      {/* JR logo */}
      <div>
        <div style={{ padding: ".4em 5px 0 .3em" }}>
          <StyleLink href="/">
            <img
              src={JRLogo}
              alt="Jordan Rose Logo"
              style={{ width: "80px", zIndex: "1" }}
            />
          </StyleLink>
        </div>
      </div>
      {/* Nav items */}

      <NavItem>
        <StyleLink href="#about">ABOUT</StyleLink>
        <StyleLink href="#vids">VIDS</StyleLink>
        <StyleLink href="#studio">STUDIO</StyleLink>
        <StyleLink href="#disco">DISCOGRAPHY</StyleLink>
        <StyleLink href="#press">PRESS</StyleLink>
        <StyleLink href="#contact">CONTACT</StyleLink>
      </NavItem>
      <Button>
        Icon
      </Button>
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
  font-size: 18px;
  margin: 2em 0 0 .4em;
`

const Button = styled.button`
  font-size: 30px;
  margin-right: 30px;
  position: absolute;
  top: .6em;
  right: 0;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  float: right;
`
export default Header
