import React from "react"
import styled from "styled-components"

// Images
import TkImg from "../components/tkLiveImg"

// Styles
import {
  SubCont,
  BannerTitle,
  BannerImgCont,
  BannerCont,
} from "../styles/mainStyles"

const Work = () => (
  <div id="live">
    <BannerCont>
      <BannerTitle>
        <h1>Performance</h1>
      </BannerTitle>
      <BannerImgCont>
        <TkImg />
      </BannerImgCont>
    </BannerCont>
    <SubCont style={{  }}>
      <p style={{  }}>
        A brief description of Jordan's performance schedule and some highlights of his career.
      </p>
      <FlexCont>
        <iframe
        title="Hard Work / Break Up Together by Theo Katzman"
          width="450"
          height="250px"
          src="https://www.youtube.com/embed/3qcjptTunXQ"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title="Pusher Lover / Case of You by Justin Timberlake and Joni Mitchell performed by Lohai"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/n1knAEiVv0s"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowFullScreen
        ></iframe>
        <iframe
          title="A Minute of Your Love by Caleb Hawley"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/IFzx8SYzj7Q"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          title="'91 Maxima Live by Cory Wong"
          width="450"
          height="250"
          src="https://www.youtube.com/embed/kWbQR_k1IFA"
          frameBorder="0"
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </FlexCont>
    </SubCont>
  </div>
)

const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1em;
`

export default Work
