import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import styled from "styled-components"
import Img from "gatsby-image"

const TkDrumset = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tk-drums.jpg" }) {
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
          alt="Jordan Rose TK Drumset"
        />
      </div>
    </div>
  )
}

export default TkDrumset
