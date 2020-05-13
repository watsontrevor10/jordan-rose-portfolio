import React, { useState } from "react"
import styled from "styled-components"
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
  FlexCont,
} from "../styles/mainStyles"

const Work = () => {
  const videos = [
    {
      id: 1,
      title: "Hard Work / Break Up Together by Theo Katzman",
      source: "https://www.youtube.com/embed/3qcjptTunXQ",
    },
    {
      id: 2,
      title:
        "Pusher Lover / Case of You by Justin Timberlake and Joni Mitchell performed by Lohai",
      source: "https://www.youtube.com/embed/n1knAEiVv0s",
    },
    {
      id: 3,
      title: "Caleb Hawley - Dive Bar",
      source: "https://www.youtube.com/embed/sCgxpS12L70",
    },
    {
      id: 4,
      title: "'91 Maxima Live by Cory Wong",
      source: "https://www.youtube.com/embed/kWbQR_k1IFA",
    },
    {
      id: 5,
      title: "Cory Wong feat. Charlie Hunter - Gumshu",
      source: "https://www.youtube.com/embed/mn6oiEsgzbo",
    },
    {
      id: 6,
      title: "Victoria Canal - Second (Live)",
      source: "https://www.youtube.com/embed/CCT7RRTRrdE",
    },
  ]
  

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
        {/* <p style={{}}>
          A brief description of Jordan's performance schedule and some
          highlights of his career.
        </p> */}
        {/* Embedded performance videos */}
        <Videos />
        <Discography />
      </SubCont>
    </div>
  )
}

export default Work
