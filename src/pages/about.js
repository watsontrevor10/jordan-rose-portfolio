import React from "react"

// Components
import TkDrum from "../components/tkDrumImg"
import Press from "../components/press"

// Styles
import {
  SubCont,
  BannerImgCont,
  BannerCont,
  BannerTitle,
} from "../styles/mainStyles"

const About = () => {
 
  return (
    <div>
      <BannerCont id="about">
        <BannerTitle>
          <h1>About</h1>
        </BannerTitle>
        <BannerImgCont>
          <TkDrum />
        </BannerImgCont>
      </BannerCont>
      <SubCont >
        <div>
          <div>
            <p>
              Jordan is a professional drummer and percussionist based out of
              New York City.
            </p>
            <p>
              Jordan has performed with a variety of artists in many different
              genres, toured with artists such as Theo Katzman, Cory Wong, Lohai and
              Caleb Hawley.
            </p>
          </div>
        </div>
        <div>
          <Press />
        </div>
      </SubCont>
      {/* <QuoteCarousel /> */}
    </div>
  )
}

export default About
