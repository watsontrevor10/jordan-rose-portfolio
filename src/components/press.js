import React from "react"
import styled from "styled-components"
import { FlexCont, SubHeader, StyleLink } from "../styles/mainStyles"

const Press = () => {
  //   const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "drumbeat.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100, maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //           originalName
  //           originalImg
  //         }
  //       }
  //     }
  //   }
  // `)
  const press_articles = [
    {
      article: "https://drumheadmag.com/a-conversation-with-jordan-rose/",
      img_url:
        "https://drumheadmag.com/wp-content/uploads/2017/05/dh-logo-beta-95h_blu.png",
    },
    {
      article:
        "http://www.workingdrummer.net/2020/04/30/267-jordan-rose-movement-and-touch-overcoming-hearing-loss-leading-ig-collabs/",
      img_url:
        "http://www.workingdrummer.net/wp-content/uploads/2017/05/cropped-WD_blk_rect_banner.png",
    },
    {
      article:
        "https://www.discussionsinpercussion.com/home/2020/4/1/170-jordan-rose-drummer-for-theo-katzman-cory-wong-caleb-hawley-amp-more",
      img_url: "Discussions in Percussion Podcast",
    },
  ]

  return (
    <div>
      <SubHeader>Press</SubHeader>
      <FlexCont>
        <ImgCont>
          <a href={press_articles[0].article}>
            <img src={press_articles[0].img_url} />
          </a>
        </ImgCont>
        <ImgCont>
          <a href={press_articles[1].article}>
            <img src={press_articles[1].img_url} />
          </a>
        </ImgCont>
        <ImgCont>
          <div style={{ border: "2px solid black", padding: ".3em"}}>
            <a href={press_articles[2].article} style={{ textDecoration: "none", color: "black" }}>
              <h3 style={{ margin: "auto", textAlign: "center", textDecoration: "none" }}>
                {press_articles[2].img_url}
              </h3>
            </a>
          </div>
        </ImgCont>
      </FlexCont>
    </div>
  )
}

const ImgCont = styled.div`
  max-width: 400px;
`

export default Press
