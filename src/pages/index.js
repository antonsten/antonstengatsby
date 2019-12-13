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
          <div className="mt-4 block w-full mb-4 bg-grey-lighter p-16 text-black text-lg leading-normal">Anton Stén is a senior UX designer focused on helping clients having more <a href="/work">successful businesses through happier customers.</a></div>
          <img src="/images/idea.jpg" className="mb-12 w-1/2 mx-auto gatsby-image-small" />
          <h1 className="mt-16">Has This Ever Happened To You?</h1>
          <p className="mb-4 mt-4">You’re struck with a million-dollar idea for a shiny new digital product. You slave for months over it, throw yourself a launch party with signature cocktails, and—it fails miserably.
          <br /><br />

          …or, maybe you’re not facing a complete failure, but you’re seeing disappointing bounce rates, sagging app usage, or (heaven forbid) complaints from unhappy users.
          <br /><br />
          What happened? you ask. There should be a huge, adoring audience for this product! There may be one big, 800-pound-gorilla of a missing piece you didn’t consider carefully enough: <a href="/work">User Experience.</a>
          <br /><br />
          This is where I come in.
          </p>
<div className="block w-full mt-16 mb-16 bg-grey-lighter p-16 text-black">
          <h2>I lead UX for design-driven companies.</h2>

          <p>My speciality? Using my design skills and business knowledge to <em>not just make your digital product look pretty, but to make it work.</em>
          <br /><br />
          I help companies design experiences that put the user first. My common sense approach to UX can help you get that stellar product out of the trash bin and into users’ daily lives.
          <br /><br />
          My background in both design and business puts me in an ideal position to help you take your digital products from so-so to GREAT.
          </p>
</div>
          <Testimonial logo="/images/clients/spotify.png" text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. He’s a great designer with superior business understanding who always put the user in the front seat and delivers bloody good work. If you ever get a chance to work with Anton, don’t miss it." author="Christian Wilsson, Head of Design, Spotify"/>

          <Form title="Get a free email course" text="Great laser focused UX content, told in an easy to understand way, helping to make sure I keep my eye on the UX ball." />

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
