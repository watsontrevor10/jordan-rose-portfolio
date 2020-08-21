import React from "react"
import LazyLoad from "react-lazy-load"
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
      title:
        "Jordan Rose - Drummer for Theo Katzman, Cory Wong, Caleb Hawley and More",
      article:
        "https://www.discussionsinpercussion.com/home/2020/4/1/170-jordan-rose-drummer-for-theo-katzman-cory-wong-caleb-hawley-amp-more",
      img_url:
        "http://alumni.umassband.com/wp-content/uploads/discussions-in-percussion-400x225.png",
    },
  ]

  return (
    <div>
      <FlexCont>
        {press_articles.map(article => (
          <ImgCont key={article.title}>
            <a href={article.article} target="_blank" rel="noopener noreferrer">
              <LazyLoad offset={1000}>
                <img src={article.img_url} alt={article.title} />
              </LazyLoad>
            </a>
          </ImgCont>
        ))}
      </FlexCont>
    </div>
  )
}

const ImgCont = styled.div`
  max-width: 400px;
`

export default Press
