import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>This is the about page.</h1>
    <Link to="/">Back</Link>
  </Layout>
)

export default AboutPage
