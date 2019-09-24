import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"
import Blogroll from "../components/blogroll"


class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.target.tagName.toLowerCase() === 'a') {
      if(!e.target.href.includes('antonsten.com')) {
        e.preventDefault()
        window.open(e.target.href)
      }
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
    const pathName = typeof window !== 'undefined' && window.location.pathname

    return (
      <Layout location={this.props.location} title={siteTitle}>

        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          slug={pathName}
        />

        <article>
          <h1>{post.frontmatter.title}</h1>

          <div className="blog-post" onClick= { this.handleClick } dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        <div className="w-full border-t border-b border-grey-lighter mt-12 mb-4">
          <div className="flex justify-center items-center my-3 text-xs uppercase font-sans tracking-wide font-bold">
          Please share:
            <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.antonsten.com${pathName}&via=antonsten`} className="flex items-center mx-2 hover-border-none border-none cursor-pointer">
              <img className="w-8" src="/images/twitter-svg.svg" alt="Twitter"></img>
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.antonsten.com${pathName}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}target="_blank" rel="noopener noreferrer" className="flex items-center mx-2 hover-border-none border-none cursor-pointer">
              <img className="w-8" src="/images/linkedin-svg.svg" alt="LinkedIn"></img>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.antonsten.com${pathName}`}target="_blank" rel="noopener noreferrer" className="flex items-center mx-2 hover-border-none border-none cursor-pointer">
              <img className="w-8" src="/images/facebook-svg.svg" alt="Facebook"></img>
            </a>
          </div>
        </div>

        <div className="w-full flex">
          <Form title="Get more writing like this" text="Sign up and get new writing, just like this, every other two weeks. Unsubscribe any time (I'm not a dickhead)."/>
        </div>
        <Blogroll />

        <h2 className="mt-16 pt-12">All writing</h2>
        <div className="w-full pb-12" /* onclick -> currentTarget if is a check host */>
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={i}>
                <p className="flex justify-between py-3 font-normal mb-0 border-b border-grey-light">
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tag
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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
