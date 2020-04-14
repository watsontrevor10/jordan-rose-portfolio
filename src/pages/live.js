import React from "react"
import styled from "styled-components"

import TkImg from "../components/tkLiveImg"

// Styles
import { MainCont } from "../styles/mainStyles"

const Live = () => (
  <div id="live">
    <div>
      <h1>Live</h1>
    </div>
    
      <ImgCont>
        <TkImg />
      </ImgCont>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    
  </div>
)

const ImgCont = styled.div`
  width: 50%;
  margin: 0 1.4em 1em 0;
  max-width: 30rem;
  box-shadow: 1px 3px 3px black;
  float: left;
`

const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
`

export default Live
