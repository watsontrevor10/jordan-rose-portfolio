import styled, {  } from "styled-components"

export const MainCont = styled.div`
  font-family: "covik-sans", sans-serif;
  margin: 0 auto;
  max-width: 960;
`

export const SubCont = styled.div`
  padding: 1.7rem 3.5rem 1.45rem;
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
  padding: .5em 0 0 .5em;

  
  @media (max-width: 500px) {
    
  }
`

export const HeadText = styled.div`
  position: absolute;
  top: 40%;
  left: 14%;
  text-align: center;
`

export const NavItem = styled.ul`
  padding: .6em 0 0 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 750px) {
    display: none;
  }
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

  @media (max-width: 380px) {
    top: 1em;
    left: 0.5em;
  }
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
  margin: auto;
`

export const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1.3em 1em 1em 1em;
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

export const DivButton = styled.div`
  text-decoration: none;
  color: inherit;
  text-align: center;
  border: solid 1px black;
  padding: 2px;
`

export const LinkBox = styled.div`
  border: 2px solid black;
  padding: .3em;
  max-width: 8em;
  height: 2em;
  margin: 0 auto;
  margin-bottom: 2em;
  margin-top: 1em;
`

// Video.js styles
export const VidThumb = styled.div`
  width: 8em;
  height: auto;
  position: relative;
  margin-top: 1em;
  cursor: pointer;
  transition: transform .3s;
  :hover {
    transform: scale(1.2)
  }
`

export const VidFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin: auto;
  justify-content: center;
`

export const VideoContainer = styled.div`
  margin: 0 0 2dm auto;
  height: 35em;
  width: 100%;

  @media (max-width: 1200px) {
    height: 30em;
  }

  @media (max-width: 1000px) {
    height: 25em;
  }

  @media (max-width: 700px) {
    height: 20em;
  }

  @media (max-width: 600px) {
    height: 15em;
  }

  @media (max-width: 500px) {
    height: 12em;
  }
`