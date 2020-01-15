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
    const height = document.getElementsByTagName('article')[0].clientHeight

    this.setState({
      articleHeight: height
    })

    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.currentScrollHeight !== newScrollHeight){
          this.setState({currentScrollHeight: newScrollHeight})
      }
    }
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
    const shouldShowFixed = this.state.currentScrollHeight > 180 && this.state.articleHeight > this.state.currentScrollHeight
    const opacity = shouldShowFixed ? 100 : 0

    return (
      <Layout location={this.props.location} title={siteTitle}>

        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          slug={pathName}
        />

        <article>
          <div className="w-full sm:flex flex-wrap">
            <div className="w-full sm:w-1/3 relative">
              <div style={{width: "inherit"}} className="fixed hidden sm:block -mt-12">
                <div style={{opacity}}>
                  <span className="text-xs uppercase mt-3 block font-sans tracking-wide text-grey">Now reading</span>
                  <h2 className="text-lg mt-3 pb-6 sm:pb-0 leading-tight sm:pr-6 w-32">{post.frontmatter.title}</h2>
                  <div className="flex justify-left">
                    <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.antonsten.com${pathName}&via=antonsten`} className="group flex relative items-center no-underline mr-1 hover-border-none border-none cursor-pointer no-hover no-after">
                      <img className="w-8 group-hover:hidden" src="/images/twitter-svg.svg" alt="Twitter"/>
                      <img className="w-8 hidden group-hover:block" src="/images/twitter-over.svg" alt="Twitter"/>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.antonsten.com${pathName}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}target="_blank" rel="noopener noreferrer" className="group flex relative no-underline items-center mx-1 hover-border-none border-none cursor-pointer no-hover no-after">
                      <img className="w-8 group-hover:hidden" src="/images/linkedin-svg.svg" alt="LinkedIn"></img>
                      <img className="w-8 hidden group-hover:block" src="/images/linkedin-over.svg" alt="LinkedIn"></img>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.antonsten.com${pathName}`}target="_blank" rel="noopener noreferrer" className="group flex relative no-underline items-center mx-1 hover-border-none border-none cursor-pointer no-hover no-after">
                      <img className="w-8 group-hover:hidden" src="/images/facebook-svg.svg" alt="Facebook"></img>
                      <img className="w-8 hidden group-hover:block" src="/images/facebook-over.svg" alt="Facebook"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-2/3">
              <h1>{post.frontmatter.title}</h1>
              <div className="blog-post" onClick= { this.handleClick } dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </article>

        <Form title="Get my bi-weekly newsletter" text='"Great laser focused UX content, told in an easy to understand way, helping to make sure I keep my eye on the UX ball."' />

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
