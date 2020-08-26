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

// Images
import HeroImg from "../components/heroImg"

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Jordan Rose Drums" />
    </div>
    <div>
      <div id="home">
        <div>
          <HeroImg />
        </div>
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
