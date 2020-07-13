import React from "react"

// Styles
import {
  SubCont,
  BannerTitle,
  BannerImgCont,
  BannerCont,
  LinkButton,
  LinkBox,
} from "../styles/mainStyles"

// Images
import TkImg from "../components/tkLiveImg"

// Components
import Videos from "../components/videos"

const Vids = () => {
  return (
    <div id="vids">
      <BannerCont>
        <BannerTitle>
          <h1>Vids</h1>
        </BannerTitle>
        <BannerImgCont>
          <TkImg />
        </BannerImgCont>
      </BannerCont>
      <SubCont>
        <Videos />
      </SubCont>
    </div>
  )
}

export default Vids
