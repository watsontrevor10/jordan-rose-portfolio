import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const VidsImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vidsImg.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
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
          alt="Jordan Rose videos header image"
        />
      </div>
    </div>
  )
}

export default VidsImage
