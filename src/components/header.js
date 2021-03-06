import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Styles
import { HeadCont, NavItem } from "../styles/mainStyles"
import { FaBars } from "react-icons/fa"

// Image/Logo
import JRLogo from "../images/jr-logo.png"

const MobileMenu = props => {
  // Mobile menu triggered when user clicks FaBars icon at mobile screen widths
  return (
    <MobileContainer>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#about">
          <MenuItem>ABOUT</MenuItem>
        </StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#vids">
          <MenuItem>VIDS</MenuItem>
        </StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#studio">
          <MenuItem>STUDIO</MenuItem>
        </StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#disco">
          <MenuItem>DISCOGRAPHY</MenuItem>
        </StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#press">
          <MenuItem>PRESS</MenuItem>
        </StyleLink>
      </MobileMenuItem>
      <MobileMenuItem onClick={() => props.setMenu()}>
        <StyleLink href="#contact">
          <MenuItem>CONTACT</MenuItem>
        </StyleLink>
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
        <div style={{ padding: ".3em 5px .2em .3em", zIndex: "2" }}>
          <StyleLink href="#home">
            <Logo src={JRLogo} alt="Jordan Rose Logo" />
          </StyleLink>
        </div>
        {/* Desktop Nav items, css rules make desktop menu hidden at certain screen widths */}
        <NavItem>
          <StyleLink href="#about">
            <MenuItem>ABOUT</MenuItem>
          </StyleLink>
          <StyleLink href="#vids">
            <MenuItem>VIDS</MenuItem>
          </StyleLink>
          <StyleLink href="#studio">
            <MenuItem>STUDIO</MenuItem>
          </StyleLink>
          <StyleLink href="#disco">
            <MenuItem>DISCOGRAPHY</MenuItem>
          </StyleLink>
          <StyleLink href="#press">
            <MenuItem>PRESS</MenuItem>
          </StyleLink>
          <StyleLink href="#contact">
            <MenuItem>CONTACT</MenuItem>
          </StyleLink>
        </NavItem>
        {/* Mobile menu button, css media rules hide icon at certain screen widths */}
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

const Logo = styled.img`
  width: 80px;
  z-index: 1;

  @media (max-width: 600px) {
    width: 66px;
  }
`

const StyleLink = styled.a`
  color: #fcfdfe;
  text-decoration: none;
  font-size: 18px;
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
  transition: all 0.5s;

  :hover {
    color: #6bb1c3;
    /* color: #434c4f; */
    transition: 0.25s;
  }

  @media (min-width: 750px) {
    display: none;
  }

  @media (max-width: 600px) {
    font-size: 25px;
    top: 0.5em;
    margin-right: 20px;
  }
`

const MenuItem = styled.h4`
  color: #fcfdfe;
  text-decoration: none;
  margin: 0 0 0 0.7em;

  :hover {
    color: #6bb1c3;
    /* color: #434c4f; */
    transition: 0.25s;
  }
`

const MobileContainer = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  padding-top: 2em;
  height: 100%;
  overflow-x: hidden;
  background-color: #151616;
  opacity: 0.97;

  @media (min-width: 750px) {
    display: none;
  }
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
