import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Styles
import { HeadCont, NavItem } from "../styles/mainStyles"
import { FaBars } from "react-icons/fa"

// Image/Logo
import JRLogo from "../images/jr-logo.png"
console.log(JRLogo)

const MobileMenu = props => {
  return (
    <MobileContainer>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#about">ABOUT</StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#vids">VIDS</StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#studio">STUDIO</StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#disco">DISCOGRAPHY</StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#press">PRESS</StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#contact">CONTACT</StyleLink>
      </MobileMenuItem>
    </MobileContainer>
  )
}

const Header = ({ siteTitle }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const setMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header>
      {/* Desktop Nav */}
      <HeadCont>
        {/* JR logo */}
        <div>
          <div style={{ padding: ".3em 5px .2em .3em" }}>
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
        <Button onClick={() => setMenu()}>
          <FaBars></FaBars>
        </Button>
        {toggleMenu ? <MobileMenu setMenu={setMenu} /> : ""}
      </HeadCont>
    </header>
  )
}

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
  margin: 2em 0 0 0.4em;
`

const Button = styled.button`
  font-size: 30px;
  margin-right: 30px;
  position: absolute;
  top: 0.45em;
  right: 0;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  float: right;
  z-index: 2;

  @media (min-width: 750px) {
    display: none;
  }
`

const MobileContainer = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100%;
  overflow-x: hidden;
  background-color: #151616;
  opacity: 0.97;
`

const MobileMenuItem = styled.button`
  color: #fcfdfe;
  text-decoration: none;
  font-size: 18px;
  margin: 2em 0 0 0.4em;
  background-color: transparent;
  border: none;
`
export default Header
