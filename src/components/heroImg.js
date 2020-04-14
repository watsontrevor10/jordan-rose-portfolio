import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import styled from "styled-components"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jordan-hero-wide.jpg" }) {
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
          alt="Jordan Rose Drums"
        />
      </div>
    </div>
  )
}

export default HeroImg