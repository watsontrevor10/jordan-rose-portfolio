import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Pages
import About from "./about"
import Vids from "./vids"
import Live from "./discography"
import Studio from "./studio"
import Press from "./press"
import Contact from "./contact"

// Styles
import { HeadText } from "../styles/mainStyles"
// Images
import HeaderImg from "../components/heroImg"
import HeroImg from "../components/heroImg"

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Jordan Rose Drums" />
    </div>
    {/* Hero Image with overlay text */}
    <div>
      {/* <HeadText>
        <h1
          style={{
            fontSize: "60px",
          }}
        >
          JORDAN JACKSON ROSE
        </h1>
      </HeadText> */}
      <div id="home">
        <div>
          <HeroImg />
        </div>
        {/* Overlay Text */}
      </div>
    </div>
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
