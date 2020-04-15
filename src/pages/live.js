import React from "react"
import styled from "styled-components"
import Insta from "../components/instaAPI"

// Images
import TkImg from "../components/tkLiveImg"
import CoryImg from "../components/coryConcert"
import TkDrums from "../components/tkDrumImg"
import TkLive from "../components/tkConcert"

// Styles
import {
  SubCont,
  BannerTitle,
  BannerImgCont,
  BannerCont,
} from "../styles/mainStyles"

const Work = () => (
  <div id="live">
    <BannerCont>
      <BannerTitle>
        <h1>Performance</h1>
      </BannerTitle>
      <BannerImgCont>
        <TkImg />
      </BannerImgCont>
      {/* <BannerSubtitle>
        <h3>Drummer for live and studio sessions</h3>
      </BannerSubtitle> */}
    </BannerCont>
    <SubCont style={{ backgroundColor: "#924431" }}>
      <FlexCont>
        <iframe
          width="450"
          height="250px"
          src="https://www.youtube.com/embed/3qcjptTunXQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/n1knAEiVv0s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/IFzx8SYzj7Q"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/kWbQR_k1IFA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </FlexCont>
    </SubCont>
  </div>
)

const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
`

export default Work
