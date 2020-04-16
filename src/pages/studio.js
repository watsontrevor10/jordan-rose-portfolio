import React from "react"

// Images
import StudioImg from "../components/studioImg"

// Styles
import {
  SubCont,
  BannerImgCont,
  BannerTitle,
  BannerCont,
} from "../styles/mainStyles"

const Studio = () => (
  <div id="studio">
    <BannerCont>
      <BannerTitle>
        <h1>Studio Recording</h1>
      </BannerTitle>
      <BannerImgCont>
        <StudioImg />
      </BannerImgCont>
      {/* <BannerSubtitle>
        <h3>Studio Recording</h3>
      </BannerSubtitle> */}
    </BannerCont>
    <SubCont>
      <div style={{}}>
        <p>
          Jordan has a fully-equipped recording studio. He frequently records
          drum tracks from him home for professional recordings. This allows
          independent musicians to get quality drum tracks without having to pay
          for recording studio time through a professional studio, and it also
          allows artists to get quality drums tracks produced from anywhere the
          in world.
        </p>
      </div>
    </SubCont>
  </div>
)

export default Studio
