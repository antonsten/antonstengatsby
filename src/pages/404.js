import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Wait, what's happening?</h1>
        <p>I'm honestly not really sure what made you end up here but this page doesn't exist. Perhaps you were looking for <link to="/blog">my blog</link>?<br /><br />
        Or you can <link to="https://antonsten.com/">start fresh</link>. Either way, I'm happy you're here.</p>
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
