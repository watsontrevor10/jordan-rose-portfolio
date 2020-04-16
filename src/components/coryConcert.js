import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CoryImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cory-concert.jpg" }) {
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
          alt="Cory Wong Live"
        />
      </div>
    </div>
  )
}

export default CoryImg
