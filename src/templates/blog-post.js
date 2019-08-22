import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"


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
        />

        <article>
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post" onClick= { this.handleClick } dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>


        <div className="w-full border-t border-b border-grey-lighter mt-12 mb-4">
          <div className="flex justify-center items-center my-3">
            <a href={`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=https://www.antonsten.com${pathName}&via=antonsten`} className="flex items-center mx-2 hover-border-none border-none cursor-pointer">
              <img className="w-8" src="/images/twitter-svg.svg"></img>
            </a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.antonsten.com${pathName}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}target="_blank" className="flex items-center mx-2 hover-border-none border-none cursor-pointer">
              <img className="w-8" src="/images/linkedin-svg.svg"></img>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.antonsten.com${pathName}`}target="_blank" className="flex items-center mx-2 hover-border-none border-none cursor-pointer">
              <img className="w-8" src="/images/facebook-svg.svg"></img>
            </a>
          </div>
        </div>

        <div className="block w-full float-left mb-16 bg-grey-lightest rounded-sm p-8 text-blacker">
        <p className="text-xs uppercase font-sans tracking-wide font-bold text-link mt-0">Now read:</p>
        <div class="rek-prediction" data-nrofhits="3" data-useh1forcontent="true" className="flex justify-between py-3 mb-0 border-b border-grey-light no-underline text-black hover:text-orange truncate font-serif text-xl"></div>
        </div>

        <div className="w-full flex">
          <Form title="Get more writing like this" text="Sign up and get new writing, just like this, every other two weeks. Unsubscribe any time (I'm not a dickhead)."/>
        </div>

        <h2 className="mt-16 pt-12">Latest writing</h2>
        <div className="w-full pb-12" /* onclick -> currentTarget if is a check host */>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
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
        <script type="text/javascript">
               window.rek_viewclick = true;
         </script>
        <script src="https://static.rek.ai/8a61c891.js"></script>
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
          }
        }
      }
    }
  }
`
