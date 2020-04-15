import React, { useState, useEffect } from "react"
import styled from "styled-components"

const QuoteCarousel = () => {
  const testimonial = [
    {
      name: "Joe Louis Walker",
      bio:
        "Multi-Grammy Award Winner, Member of the American Blues Hall of Fame",
      quote:
        "Jordan Rose performed with me for several years. At all times he was professional, positive, helpful, understanding, and most important, one of the most versatile, dynamic and creative drummer/musicians that I’ve ever had the privilege to perform with. . . . I know we will be hearing many great musical endeavors from him. So keep your eyes and ears open for Jordan Rose.",
    },
    {
      name: "Kenwood Dennard",
      bio:
        "Miles Davis, Herbie Hancock, Jaco Pastorius, Phish, Maceo Parker, Quincy Jones",
      quote:
        "Jordan Rose has an uncanny ability to manage his intuitive system for wholehearted fulfilling performance. In other words this young man totally rocks. I’ve heard him in blues, r and b, jazz and funky settings and he moves me each time.",
    },
    {
      name: "Robert Douglas Gay",
      bio: "Chaka Khan, David Bowie, The BeeGees, Marcus Miller",
      quote:
        "If ever a band leader, tour manager or musical director is in need of a drummer who can step in and play as if he’s been with the group since its inception, then Jordan Rose is unquestionably the drummer for you. . . . I’ve played with some of the most famous drummers the World has to offer. Such names as Buddy Rich, Steve Ferrone from Tom Petty and the Heart Breakers, as well as every other NYC session drummer. Jordan is RIGHT THERE WITH THE CREW! He’ll Give It To You Signed, Sealed, Delivered. ‘Nuf Said…",
    },
    // {
    //   name: "Joe Louis Walker",
    //   bio:
    //     "Multi-Grammy Award Winner, Member of the American Blues Hall of Fame",
    //   quote:
    //     "Whether gigging in Turkey, Cyprus, England, Italy (you get my drift), Jordan Rose was loved by the audience, and made friends/fans all over the world. I know we will be hearing many great musical endeavors from him. So keep your eyes and ears open for Jordan Rose.",
    // },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const quote = testimonial[activeIndex]

  const incrQuote = () => {
    if (activeIndex === testimonial.length - 1) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  setTimeout(() => incrQuote(), 5000)

  return (
    <>
      <MainCont>
        <QuoteCont>
          <div>
            <Quote>
              <q>{quote.quote}</q>
            </Quote>
            <span>
              <small>
                <b>{quote.name}</b>
              </small>
              <Quote>
                <i>{quote.bio}</i>
              </Quote>
            </span>
          </div>
        </QuoteCont>
      </MainCont>
    </>
  )
}

const MainCont = styled.div`
  width: auto;
  height: 16em;
  margin: auto auto 2em auto;
`

const QuoteCont = styled.div`
  max-width: 700px;
  height: 15em;
  margin: auto auto 2em auto;
  overflow: auto;
  text-align: center;
  padding: 1em;
  border-style: solid 1px grey;
  border-radius: 18px;
  box-shadow: 1px 3px 3px black;
  background-color: #eee;
`

const Quote = styled.p`
  font-size: 16px;
`

export default QuoteCarousel
