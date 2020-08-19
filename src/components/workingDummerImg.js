import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const WorkingDrummer = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "working-drummer.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
            originalName
            originalImg
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Discussions in Percussion Logo"
    />
  )
}

export default WorkingDrummer
