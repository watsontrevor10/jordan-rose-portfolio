import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Pages
import About from "./about"
import Live from "./live"
import Studio from "./studio"
import Contact from "./contact"

// Styles
import { HeadText, } from "../styles/mainStyles"
// Images
import HeroImg from "../components/heroImg"

const IndexPage = ({ siteTitle }) => (
  <Layout>
    <div>
      <SEO title="Jordan Rose Drums" />
    </div>
    {/* Hero Image with overlay text */}
    <div>
      <div>
        <HeroImg />
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
    <Live />
    <Studio />
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
