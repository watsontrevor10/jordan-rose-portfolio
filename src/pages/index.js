import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Pages 
import About from './about'

// Styles
import { TextCont } from "../styles/mainStyles"

// Images

const IndexPage = () => (
  <Layout>
    <div style={{ backgroundColor: "#f9eff9" }}>
      <SEO title="Home" />
      <TextCont>
        <h3>
          Jordan is a freelance drummer out of New York City that performs a
          wide variety of genres and with a number of touring artists such as
          Theo Katzman and Caleb Howley, and groups localy in New York.
        </h3>
      </TextCont>
    </div>
    <About />
  </Layout>
)

export default IndexPage
