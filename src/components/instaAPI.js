import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Insta = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            original
            mediaType
            id
          }
        }
      }
    }
  `)

  const instaData = data.allInstaNode.edges.map(insta => insta.node)
  console.log(instaData)

  return (
    <>
      {instaData.map(insta => (
        <div>
          <p>{insta.id}</p>
          {/* <iframe
            width="400"
            src={"https://www.instagram.com/p/" + insta.id}
            controls
          ></iframe> */}
        </div>
      ))}
      <video
        class="p-ZhK "
        playsinline=""
        poster="https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e15/26065257_1614476158635666_9134529040609181696_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=1QtStxpgg14AX8wjyoT&amp;oh=71046800537f55c90f7a4dd135d0b65f&amp;oe=5E98A34C"
        preload="none"
        src="https://scontent-den4-1.cdninstagram.com/v/t50.2886-16/26820580_2119887518235060_6658859854825783296_n.mp4?_nc_ht=scontent-den4-1.cdninstagram.com&amp;_nc_cat=100&amp;_nc_ohc=9FEwSxzkznkAX_3pLj_&amp;oe=5E9897D6&amp;oh=6887a40565ad72032118e04b2993c8e5"
        type="video/mp4"
      ></video>
    </>
  )
}

export default Insta
