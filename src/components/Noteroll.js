import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
            const pathName = typeof window !== 'undefined' && window.location.pathname
            const tag = node.frontmatter.tag

            if(tag !== 'newsletter') {
              return (
                <div key={i}>
                  <div className="w-full mt-12 mb-16 flex flex-wrap">
                    <div className="w-full sm:w-1/3">
                      <span className="text-xs uppercase mt-3 block font-sans tracking-wide text-grey">Quote from</span>
                      <h3 className="font-bold mt-3 pb-0 sm:pb-0 leading-tight sm:pr-6">{title}</h3>
                      <div className="flex justify-left pb-6">
                        <a href={`https://twitter.com/intent/tweet/?text=${node.frontmatter.title}&url=https://www.antonsten.com${pathName}&via=antonsten`} className="group flex relative items-center no-underline mr-2 hover-border-none border-none cursor-pointer no-hover no-after">
                          <img className="w-8 group-hover:hidden" src="/images/twitter-svg.svg" alt="Twitter"/>
                          <img className="w-8 hidden group-hover:block" src="/images/twitter-over.svg" alt="Twitter"/>
                        </a>
                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.antonsten.com${pathName}&title=${node.frontmatter.title}&source=${node.frontmatter.title}`}target="_blank" rel="noopener noreferrer" className="group flex relative no-underline items-center mx-1 hover-border-none border-none cursor-pointer no-hover no-after">
                          <img className="w-8 group-hover:hidden" src="/images/linkedin-svg.svg" alt="LinkedIn"></img>
                          <img className="w-8 hidden group-hover:block" src="/images/linkedin-over.svg" alt="LinkedIn"></img>
                        </a>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.antonsten.com${pathName}`}target="_blank" rel="noopener noreferrer" className="group flex relative no-underline items-center mx-1 hover-border-none border-none cursor-pointer no-hover no-after">
                          <img className="w-8 group-hover:hidden" src="/images/facebook-svg.svg" alt="Facebook"></img>
                          <img className="w-8 hidden group-hover:block" src="/images/facebook-over.svg" alt="Facebook"></img>
                        </a>
                      </div>
                    </div>
                    <div className="w-full sm:w-2/3 -mt-12 sm:-mt-16">
                      <p className="note-post" dangerouslySetInnerHTML={{ __html: node.html }} />
                    </div>
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
