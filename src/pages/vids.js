import React from "react"

// Styles
import {
  SubCont,
  BannerTitle,
  BannerImgCont,
  BannerCont,
} from "../styles/mainStyles"

// Images
import VidImg from "../components/vidsImage"

// Components
import Videos from "../components/videos"

const Vids = () => {
  return (
    <div id="vids">
      <BannerCont>
        <BannerTitle>
          <h1>VIDS</h1>
        </BannerTitle>
        <BannerImgCont>
          <VidImg />
        </BannerImgCont>
      </BannerCont>
      <SubCont>
        <Videos />
      </SubCont>
    </div>
  )
}

export default Vids
