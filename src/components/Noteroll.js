import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => (
      <div className="sm:-mx-16">
        <div className="w-full pb-12">
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            //const pathName = typeof window !== 'undefined' && window.location.pathname
            const tag = node.frontmatter.tag

            if(tag !== 'newsletter') {
              return (
                <div className="sm:flex w-full items-center py-4" key={i}>
                  <div className="w-1/2 sm:w-1/3">
                    <span className="hidden sm:block text-xs uppercase font-sans tracking-wide text-grey">{node.frontmatter.date}</span>
                  </div>
                  <div className="w-full sm:w-2/3">
                    <Link className="relative text-lg font-serif leading-tight no-underline text-black" to={node.fields.slug}>
                      {title}
                    </Link>
                  </div>
                </div>
              )
            } else {
              return '';
            }
          })}
        </div>
      </div>
    )}
  />
)
