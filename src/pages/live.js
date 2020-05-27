import React from "react"
import Discography from "../components/discography"
import Videos from "../components/videos"
// Images
import TkImg from "../components/tkLiveImg"

// Styles
import {
  SubCont,
  BannerTitle,
  BannerImgCont,
  BannerCont,
} from "../styles/mainStyles"

const Work = () => {
  return (
    <div id="live">
      <BannerCont>
        <BannerTitle>
          <h1>Performance</h1>
        </BannerTitle>
        <BannerImgCont>
          <TkImg />
        </BannerImgCont>
      </BannerCont>
      <SubCont style={{}}>
        {/* Embedded performance videos */}
        <Videos />
        <Discography />
      </SubCont>
    </div>
  )
}

export default Work
