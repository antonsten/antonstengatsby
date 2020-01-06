import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"
import Noteroll from "../components/Noteroll";


class Notes extends React.Component {
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
          <div className="w-full sm:flex flex-wrap">
            <div className="w-1/2 sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h1 className="pr-0 sm:pr-12">Notes & Links</h1>
            </div>
          </div>

          <Noteroll />
          <Form/>
        </div>
      </Layout>
    )
  }
}

export default Notes

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
