import React from "react"
import { Link, graphql } from "gatsby"

import Testimonial from '../components/testimonial';
import Layout from "../components/layout"
import Form from "../components/signupform"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title = "Home"
        />
        <div className="w-full">
          <h1 className="pr-0 sm:pr-12">Anton Sten leads UX for design-driven companies.</h1>
          <del className="mb-4 mt-4">My specialty? Using my design skills and business knowledge to not just make your digital product look pretty, but to make it work.
          </del>

          <p className="mt-12">
            My clients have included big household names and smaller up-and-comers alike, including IKEA, Spotify, iZettle, Hyper Island, and Volvo.
          </p>

          <p>
            My personal mission for the past 20 years has been to help companies connect with their customers in meaningful ways. In that time, I’ve created user-focused experiences that resulted in happier, better-served customers and higher sales.
          </p>

          <p>
            That’s something I’m really proud of.
          </p>

          <Link to="/work" className="btn mt-4 mb-6">Find out more</Link>

          <Testimonial logo="/images/clients/spotify.png" text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. He’s a great designer with superior business understanding who always put the user in the front seat and delivers bloody good work. If you ever get a chance to work with Anton, don’t miss it." author="Christian Wilsson, Head of Design, Spotify"/>

          <Form/>

          <h2 className="mt-16">Latest posts</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <p className="flex justify-between py-3 font-normal mb-0 border-b border-light-grey">
                  <Link className="no-underline text-black hover:text-orange truncate" to={node.fields.slug}>
                    {title}
                  </Link>
                  <span className="hidden sm:block text-xs uppercase font-sans tracking-wide text-grey">{node.frontmatter.date}</span>
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
            title
          }
        }
      }
    }
  }
`
