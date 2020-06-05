import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"
import Blogroll from "../components/blogroll"


class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 0, currentScrollHeight: 0 }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
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
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          slug={pathName}
        />

        <article>
          <div className="w-full sm:flex flex-wrap">
            <div className="w-full sm:w-1/3 relative">
            </div>
            <div className="w-full sm:w-2/3">
              <h1>{post.frontmatter.title}</h1>
              <div className="blog-post" onClick= { this.handleClick } dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </article>
        <hr />
        <Form title="Get my bi-weekly newsletter" text='"A great resource for anybody with an interest in the psychology of design, user behaviour and digital experiences."' />

        <Blogroll />

        <h2 className="mt-16 pt-12 hidden">All writing</h2>
        <div className="w-full pb-12 hidden" /* onclick -> currentTarget if is a check host */>
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
