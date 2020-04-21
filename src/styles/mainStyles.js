import styled, { keyframes } from "styled-components"

export const MainCont = styled.div`
  font-family: "covik-sans", sans-serif;
  margin: 0 auto;
  max-width: 960;
`

export const SubCont = styled.div`
  padding: 1.5rem 3.5rem 1.45rem;
`

export const HeadCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  top: 1em;
  left: 1em;
  z-index: 1;
`

export const HeadStick = styled.div`
  position: sticky;
`

export const HeadText = styled.div`
  position: absolute;
  width: 90%;
  top: 30%;
  left: 6%;
  color: white;
  text-align: center;
`

export const NavItem = styled.h3`
  padding-right: 0.7em;
  position: sticky;
`

export const BannerCont = styled.div`
  position: relative;
`

export const BannerTitle = styled.div`
  position: absolute;
  top: 2em;
  left: 3em;
  color: white;
  z-index: 1;
`

export const BannerSubtitle = styled.div`
  position: absolute;
  top: 10em;
  left: 18%;
  color: white;
  width: 60%;
  text-align: center;
  z-index: 1;
`

export const BannerImgCont = styled.div`
  margin: 0 1.4em 1em 0;
  box-shadow: 1px 3px 3px black;
  margin: auto;
  opacity: .8;
`
