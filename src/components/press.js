import React from "react"
import styled from "styled-components"
import { FlexCont } from "../styles/mainStyles"

const Press = () => {
  const press_articles = [
    {
      title: "A Conversation with Jordan Rose",
      article: "https://drumheadmag.com/a-conversation-with-jordan-rose/",
      img_url:
        "https://drumheadmag.com/wp-content/uploads/2017/05/dh-logo-beta-95h_blu.png",
    },
    {
      title: "Jordan Rose - Movement and Touch, overcoming hearing loss",
      article:
        "http://www.workingdrummer.net/2020/04/30/267-jordan-rose-movement-and-touch-overcoming-hearing-loss-leading-ig-collabs/",
      img_url:
        "http://www.workingdrummer.net/wp-content/uploads/2017/05/cropped-WD_blk_rect_banner.png",
    },
    {
      title: "Jordan Rose - Drummer for Theo Katzman, Cory Wong, Caleb Hawley and More",
      article:
        "https://www.discussionsinpercussion.com/home/2020/4/1/170-jordan-rose-drummer-for-theo-katzman-cory-wong-caleb-hawley-amp-more",
      img_url: "http://alumni.umassband.com/wp-content/uploads/discussions-in-percussion-400x225.png",
    },
  ]

  return (
    <div>
      {/* <SubHeader>Press</SubHeader> */}
      <FlexCont>
        <ImgCont>
          <a href={press_articles[0].article}>
            <img
              src={press_articles[0].img_url}
              alt={press_articles[0].title}
            />
          </a>
        </ImgCont>
        <ImgCont>
          <a href={press_articles[1].article}>
            <img
              src={press_articles[1].img_url}
              alt={press_articles[1].title}
            />
          </a>
        </ImgCont>
        <ImgCont>
            <a
              href={press_articles[2].article}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img src={press_articles[2].img_url} alt={press_articles[2].title} />
            </a>
        </ImgCont>
      </FlexCont>
    </div>
  )
}

const ImgCont = styled.div`
  max-width: 400px;
`

export default Press
