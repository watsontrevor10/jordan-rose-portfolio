import React from "react"

// Components
import TkDrum from "../components/tkDrumImg"

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
      <SubCont>
        <div>
          <div>
            <p>
              The feeling, the texture, the sound, the depth, the power, the
              sensitivity, the nuance, the groove, and so much more. I love
              everything about drums and am grateful to have been trusted behind
              a drum set with a variety artists whom I greatly respect, such as:
              Theo Katzman, Cory Wong, Caleb Hawley, Darren Criss, Charlie Puth,
              Pomplemoose, Charlie Hunter, Jeff Coffin, Joe Louis Walker, Louis
              Cato, Dear Evan Hansen (on Broadway), Rufus Wainwright, Ruel, SZA,
              Maddie Poppe, and others.
            </p>
            <p>
              When I was 20 I lost all of my hearing in my right ear due to an
              unexpected medical complication. After four major surgeries spread
              over the course of two years, my hearing was thankfully restored
              to a normal level. These two years of my life with only half of my
              hearing taught me more about music than all other years combined.
              I believe that music has the power to speak to our hearts and
              uplift our souls. Music is the universal language and I’m grateful
              for the opportunity I’ve had to share music in many parts of the
              world through live performance, education, and recordings.
            </p>
            <p>
              I’ve lived in Houston, the Hawaiian Islands, Utah, Boston, and
              currently reside in Brooklyn, NY with my beautiful wife, Jules.
            </p>
            <p>
              Please shoot me a note in the contact form for inquires about drum
              recording sessions (remote or in studio), gigs, tours, lessons (in
              person or online), or just to say hello. I look forward to
              chatting!
            </p>
          </div>
        </div>
      </SubCont>
    </div>
  )
}

export default About
