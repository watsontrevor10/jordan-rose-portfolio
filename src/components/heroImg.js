import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "JR-Website-Hero-Final-1.jpg" }) {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 1500, jpegProgressive: true) {
            ...GatsbyImageSharpFluid
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
