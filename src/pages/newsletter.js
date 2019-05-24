import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import Form from "../components/signupform"
import SEO from "../components/seo"
import { Link } from "gatsby"

class Contact extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Contact"/>
            <h1>Sign up for my newsletter</h1>
            <del className="mb-8">
              Esther Williams said, “wisdom is a useless gift unless you share it” and I couldn’t agree more.
            </del>
            <p>
              I like to share what I have discovered about creating amazing user experiences, embracing creativity, and sustaining a successful freelancing career.
            </p>
            <Form/>
        </Layout>
      );
  }
}

export default Contact
