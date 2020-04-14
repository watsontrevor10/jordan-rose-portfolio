import React from "react"
import styled from "styled-components"

// Images
import TkImg from "../components/tkLiveImg"
import CoryImg from "../components/coryConcert"
import TkDrums from "../components/tkDrumImg"
import TkLive from "../components/tkConcert"

// Styles
import { MainCont } from "../styles/mainStyles"

const Work = () => (
  <div id="live" style={{ position: "relative" }}>
    <div
      style={{
        position: "absolute",
        top: ".5em",
        left: "1em",
        color: "white",
        zIndex: "1",
      }}
    >
      <h1>Work</h1>
    </div>
    <ImgCont>
      <TkImg />
    </ImgCont>
    <div
      style={{
        position: "absolute",
        top: "7.5em",
        left: "18%",
        color: "white",
        width: "60%",
        // maxWidth: "95%",
        textAlign: "center",
      }}
    >
      <h3>Drummer for live and studio sessions</h3>
      <h4>Theo Katzman, Cory Wong, Caleb Hawley, Lohai</h4>
    </div>
    <FlexCont>
      <iframe
        width="400px"
        height="250px"
        src="https://www.youtube.com/embed/3qcjptTunXQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/n1knAEiVv0s"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/IFzx8SYzj7Q"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/kWbQR_k1IFA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </FlexCont>
  </div>
)

const ImgCont = styled.div`
  margin: 0 1.4em 1em 0;
  box-shadow: 1px 3px 3px black;
  /* float: left; */
`

const FlexCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 10px;  */
`

export default Work
