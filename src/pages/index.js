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
      <div>
        <h3>
          Jordan is a professional drummer and percussionist based out of New
          York City.
        </h3>
        <h3>
          Jordan has performed with a variety of artists in many different
          genres, toured with artists such as Theo Katzman, Cory Wong, and Caleb
          Hawley.
        </h3>
      </div>
    </div>
    <About />
    <Live />
    <Studio />
    <Contact />
  </Layout>
)

export default IndexPage
