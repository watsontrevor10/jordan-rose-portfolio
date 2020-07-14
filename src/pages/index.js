import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Pages
import About from "./about"
import Vids from "./vids"
import Live from "./live"
import Studio from "./studio"
import Press from "./press"
import Contact from "./contact"

// Styles
import { HeadText } from "../styles/mainStyles"
// Images
import HeaderImg from "../images/Logo-Header-Clear.png"

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Jordan Rose Drums" />
    </div>
    {/* Hero Image with overlay text */}
    <div id="home">
      <div style={{ opacity: ".3", }}>
        {/* <HeroImg /> */}
        <img src={HeaderImg} alt="Jordan Rose Drums" /> 
      </div>
      {/* Overlay Text */}
    </div>
    <HeadText>
      <h1
        style={{
          fontSize: "60px",
        }}
      >
        JORDAN JACKSON ROSE
      </h1>
    </HeadText>
    <About />
    <Vids />
    <Studio />
    <Live />
    <Press />
    <Contact />
  </Layout>
)

IndexPage.propTypes = {
  siteTitle: PropTypes.string,
}

IndexPage.defaultProps = {
  siteTitle: ``,
}

export default IndexPage
