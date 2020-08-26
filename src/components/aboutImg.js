import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TkDrumset = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1500) {
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
          alt="Jordan Rose TK Drumset"
        />
      </div>
    </div>
  )
}

export default TkDrumset
