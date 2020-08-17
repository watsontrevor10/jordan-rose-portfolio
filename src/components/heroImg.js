import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "JR-Website-Hero-Final-1.jpg" }) {
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
      <div>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Jordan Rose Drums"
        />
      </div>
    </div>
  )
}

export default HeroImg
