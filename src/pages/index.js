import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="UX-lead"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="">
        <h1 className="pr-0 sm:pr-12">Anton Sten leads UX for design-driven companies.</h1>
        <del className="mb-2">
          That’s me! My specialty? Using my design skills and business knowledge to not just make your digital product look pretty, but to make it work.
          <br></br><br></br>
          Here’s what I’ve done for people like you:
        </del>

        <ul className="pl-4">
          <li>Helped plan, build, and implement scaleable design systems for NE.se and city of Falkenberg</li>
          <li>Designed the shopping and buying experience for one of the world’s largest home retailers</li>
          <li>Set the UX and design strategy for Fortune 500 companies like E.ON</li>
          <li>Optimized e-commerce for a boost in conversions for skin care company Frank Body</li>
        </ul>

        <p>
          My clients have included big household names and smaller up-and-comers alike, including IKEA, Spotify, iZettle, Hyper Island, and Volvo. I also write about user experience and have been interviewed by publications like Adobe and .Net Magazine.
        </p>

        <p>
          My personal mission for the past 20 years has been to help companies connect with their customers in meaningful ways. In that time, I’ve created user-focused experiences that resulted in happier, better-served customers and higher sales.
        </p>

        <p>
          That’s something I’m really proud of. 
        </p>


        <h2 className="mt-16">Latest blog posts</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <p className="flex justify-between py-4 font-normal mb-0">
                  <Link className="no-underline text-black hover:text-orange" to={node.fields.slug}>
                    {title}
                  </Link>
                  <span>{node.frontmatter.date}</span>
                </p>
                
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title,
            permalink
          }
        }
      }
    }
  }
`
