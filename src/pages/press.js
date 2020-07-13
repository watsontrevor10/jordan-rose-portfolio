import React from "react"

// components
import PressComp from "../components/press"

// Styles
import {BannerCont, BannerImgCont, BannerTitle } from "../styles/mainStyles"

const Press = () => {
  return (
    <div id="press">
      <BannerCont>
        <BannerTitle>
          <h1>Press</h1>
        </BannerTitle>
        <BannerImgCont>
          {/* <StudioImg /> */}
        </BannerImgCont>
      </BannerCont>
      <PressComp />
    </div>
  )
}

export default Press
