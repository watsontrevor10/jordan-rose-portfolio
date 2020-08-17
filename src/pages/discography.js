import React from "react"
import Discography from "../components/discography"

// Images
import StudioImg from "../components/discoImage"

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
    <div id="disco">
      <BannerCont>
        <BannerTitle>
          <h1>DISCOGRAPHY</h1>
        </BannerTitle>
        <BannerImgCont>
          <StudioImg />
        </BannerImgCont>
      </BannerCont>
      <SubCont style={{}}>
        <Discography />
      </SubCont>
      <LinkBox>
        <LinkButton
          href="https://open.spotify.com/playlist/4eiG5l1VyBeWMudhiC9VDW?si=2M-WFvPOQVK5FwLIHZsOQg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 style={{ margin: "auto", position: "relative"}}>Hear More</h4>
        </LinkButton>
      </LinkBox>
    </div>
  )
}

export default Work
