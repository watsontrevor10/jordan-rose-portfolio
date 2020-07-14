import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1500) {
            ...GatsbyImageSharpFluid
            originalName
            originalImg
          }
        }
      }
    }
  `)

  return (
    <div>
      <div style={{ position: "relative", marginBottom: "0", paddingBottom: "0" }}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Jordan Rose Drums"
          style={{ marginBottom: "0", paddingBottom: "0"}}
        />
      </div>
    </div>
  )
}

export default HeroImg
