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
  LinkButton,
  LinkBox,
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
      <LinkBox>
        <LinkButton
          href="https://open.spotify.com/playlist/4eiG5l1VyBeWMudhiC9VDW?si=2M-WFvPOQVK5FwLIHZsOQg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 style={{ margin: "auto", position: "relative"}}>Listen to More . . .</h4>
        </LinkButton>
      </LinkBox>
    </div>
  )
}

export default Work
