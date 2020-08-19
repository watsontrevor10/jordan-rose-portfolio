import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const DiscussPerc = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "discusspercuss.jpeg" }) {
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
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Discussions in Percussion Logo"
    />
  )
}

export default DiscussPerc
