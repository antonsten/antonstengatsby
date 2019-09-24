import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"
import Blogroll from "../components/blogroll";


class Writing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: 8
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 8};
    });
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Writing"/>
        <div className="w-full">
          <h1 className="pr-0 sm:pr-12">Writing</h1>
          <del className="mb-8">Esther Williams said, <i>“wisdom is a useless gift unless you share it”</i> and I couldn’t agree more.<br /><br />I like to share what I have discovered about creating amazing user experiences, embracing creativity, and sustaining a successful freelancing career.</del>
          <Blogroll />
          <Form/>
        </div>
      </Layout>
    )
  }
}

export default Writing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tag
          }
        }
      }
    }
  }
`
