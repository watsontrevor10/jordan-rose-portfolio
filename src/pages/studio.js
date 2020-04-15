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
    <SubCont >
      <div style={{ }}>
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
    </SubCont>
  </div>
)

export default Studio
