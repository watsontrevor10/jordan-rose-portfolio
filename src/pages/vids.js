import React from "react"
import LazyLoad from "react-lazy-load"

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
        <LazyLoad offset={1000}>
          <Videos />
        </LazyLoad>
      </SubCont>
    </div>
  )
}

export default Vids
