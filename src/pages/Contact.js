import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contact-form"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>This is the contact page.</h1>
    <ContactForm />
  </Layout>
)

export default ContactPage
