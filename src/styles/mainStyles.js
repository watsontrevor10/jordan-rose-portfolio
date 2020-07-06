import styled, {  } from "styled-components"

export const MainCont = styled.div`
  font-family: "covik-sans", sans-serif;
  margin: 0 auto;
  max-width: 960;
`

export const SubCont = styled.div`
  padding: 1.5rem 3.5rem 1.45rem;
`

export const SubHeader = styled.h1`
  text-align: center;
  padding: .5em;
`

export const HeadCont = styled.div`
  position: fixed;
  background-color: black;
  display: flex;
  flex-direction: row;  
  max-width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1em 0 0 1em;
`

export const HeadText = styled.div`
  position: absolute;
  width: 90%;
  top: 10%;
  left: 4%;
  color: white;
  text-align: center;
`

export const NavItem = styled.h4`
  padding: 0 .4em 0 .4em;
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
  /* opacity: .8; */
`

export const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1.3em 1em 1.3em 1em;
  row-gap: 1em;
  column-gap: 1em;
`

export const StyleLink = styled.a`
  color: #fcfdfe;
  text-decoration: none;
`

export const LinkButton = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;
`

export const LinkBox = styled.div`
  border: 2px solid black;
  padding: .5em;
  max-width: 10em;
  height: 2em;
  margin: auto;
  margin-bottom: 3em;
`