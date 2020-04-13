import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
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
      {/* <HeroText>
        <Title>Jordan Rose</Title>
      </HeroText> */}
    </div>
  )
}

// const HeroText = styled.div`
//   position: absolute;
//   left: 35%;
//   top: 40%;
//   color: #2f6c68;
//   text-align: center;
// `

// const Title = styled.h1`
//   font-size: 80px;
// `
export default HeroImg
