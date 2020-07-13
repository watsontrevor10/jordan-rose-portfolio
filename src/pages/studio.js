import React from "react"
import { LinkBox, LinkButton } from '../styles/mainStyles'

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
    </BannerCont>
    <SubCont>
      <div style={{}}>
        <p>
          The first time I recorded drums in a professional studio was when I
          was 12 years old with an eager garage band, Skyward, fronted by my
          older “rockstar” brother. I remember a distinct moment during that
          session when an intense feeling swept over me and I knew that I wanted
          to record drums for the rest of my life. I’m grateful that 20+ years
          later I’m still recording drums nearly every day and that my drum
          tracks have been heard millions of times around the world. My aim is
          to spread strong and positive energy by recording thoughtful, soulful,
          genuine, and musical drum tracks for songwriters and producers of all
          kinds.
        </p>
        <p>
          I’ve had the opportunity to record in world class commercial studios
          as well as engineer and record drums remotely from my personal studio.
          I’d love to talk more about recording drums and percussion for your
          album, EP, single, jingle, film score, and more. Please get in touch
          via the contact form below!
        </p>
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
    </SubCont>
  </div>
)

export default Studio
