import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <h1>About</h1>
    <p>{JSON.stringify(data.allContentfulAbout.nodes[0].about.about)}</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query MyQuery {
    allContentfulAbout {
      nodes {
        about {
          id
          about
        }
      }
    }
  }
`
