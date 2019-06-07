import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found"/>
        <div class="w-full mt-8 sm:mt-16 pt-2">
          <img className="w-full mb-8" src="/images/404.gif"/>
          <p>I’m honestly not really sure what made you end up here but this page doesn’t exist. Perhaps you were looking for <Link to="/blog">my blog</Link>, <Link to="/work">my work</Link> or my newsletter?</p>
          <p>Or you can start <Link to="/">fresh</Link>. Either way, I’m happy you’re here.</p>

          <Form/>

        </div>
      </Layout>
    )
  }
}




export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
