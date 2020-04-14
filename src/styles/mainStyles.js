import styled, { keyframes } from "styled-components"

export const MainCont = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1rem 2rem 1.45rem;
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

const appear = keyframes`
 0% {opacity: 0;}
  100% {opacity: 1;}
`

export const HeadText = styled.div`
  position: absolute;
  width: 90%;
  top: 30%;
  left: 5%;
  color: #fcfdfe;
  text-align: center;
  /* animation:  2s linear;
  animation-delay: 1s; */
`

export const NavItem = styled.h3`
  padding-right: 0.7em;
  position: sticky;
`
