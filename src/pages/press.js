import React from "react"
import styled from "styled-components"

// components
import TkImg from "../components/pressImage"

// Styles
import {
  BannerCont,
  BannerImgCont,
  BannerTitle,
  FlexCont,
} from "../styles/mainStyles"

const Press = () => {
  const press_articles = [
    {
      title: "A Conversation with Jordan Rose",
      article: "https://drumheadmag.com/a-conversation-with-jordan-rose/",
      img_url: "/drumhead-logo.png",
    },
    {
      title: "Jordan Rose - Movement and Touch, overcoming hearing loss",
      article:
        "http://www.workingdrummer.net/2020/04/30/267-jordan-rose-movement-and-touch-overcoming-hearing-loss-leading-ig-collabs/",
      img_url: "/working-drummer.png",
    },
    {
      title:
        "Jordan Rose - Drummer for Theo Katzman, Cory Wong, Caleb Hawley and More",
      article:
        "https://www.discussionsinpercussion.com/home/2020/4/1/170-jordan-rose-drummer-for-theo-katzman-cory-wong-caleb-hawley-amp-more",
      img_url: "/discusspercuss.jpeg",
    },
  ]

  return (
    <div id="press">
      <BannerCont>
        <BannerTitle>
          <h1>PRESS</h1>
        </BannerTitle>
        <BannerImgCont>
          <TkImg />
        </BannerImgCont>
      </BannerCont>
      <div>
        <FlexCont>
          {press_articles.map(article => {
            return (
              <ImgCont key={article.title}>
                <a
                  href={article.article}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledImg src={article.img_url} alt={article.title} />
                </a>
              </ImgCont>
            )
          })}
        </FlexCont>
      </div>
    </div>
  )
}

const ImgCont = styled.div`
  max-width: 400px;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100px;
`

export default Press
