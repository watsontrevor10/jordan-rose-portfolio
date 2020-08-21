import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const CoryImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cory-concert.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
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
