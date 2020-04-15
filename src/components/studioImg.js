import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TkLive = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "studio.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
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
      <div style={{ position: "relative" }}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Jordan Rose in the Studio"
        />
      </div>
    </div>
  )
}

export default TkLive
