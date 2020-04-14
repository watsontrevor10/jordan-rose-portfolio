import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Pages
import About from "./about"
import Live from "./live"
import Studio from "./studio"
import Contact from "./contact"

// Styles
import { MainCont } from "../styles/mainStyles"

// Images

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Jordan Rose Drums" />
    </div>
    <About />
    <Live />
    <Studio />
    <Contact />
  </Layout>
)

export default IndexPage
