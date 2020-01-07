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
      <div className="w-full">
        <div className="sm:-mx-16 mb-16">
          <div className="sm:flex w-full mt-8 bg-grey-lightest p-8 sm:p-16 sm:pb-0 text-black">
            <div className="w-1/2 sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h2 className="leading-tight mt-0 mb-0">Curated content</h2>
            </div>
          </div>

          <div className="sm:flex w-full bg-grey-lightest p-8 sm:p-16 sm:pb-6 text-black">
            <div className="mb-6 w-1/2 sm:w-1/3 text-xs font-sans uppercase font-bold">Books</div>
            <div className="w-full sm:w-2/3 text-lg font-serif leading-tight">
              <a href="https://www.antonsten.com/books/user-experiences-matter" target="_blank" rel="noopener noreferrer">User Experiences that Matter</a> (2016)<br />
              <a href="https://www.antonsten.com/books/masteringfreelance" target="_blank" rel="noopener noreferrer">Mastering Freelance</a> (2017)
            </div>
          </div>

          <div className="sm:flex w-full bg-grey-lightest p-8 sm:p-16 sm:pb-6 text-black">
            <div className="mb-6 w-1/2 sm:w-1/3 text-xs font-sans uppercase font-bold">Getting started in UX</div>
            <div className="w-full sm:w-2/3 text-lg font-serif leading-tight">
              <a href="https://www.antonsten.com/whatsux/">What's a 'User Experience' Anyways?</a><br />
              <a href="https://www.antonsten.com/learn-ux/">How Do You Learn UX?</a><br />
              <a href="https://www.antonsten.com/uxdesigner/">Working as a UX Designer</a>
            </div>
          </div>

          <div className="sm:flex w-full bg-grey-lightest p-8 sm:p-16 sm:pb-6 text-black">
            <div className="mb-6 w-1/2 sm:w-1/3 text-xs font-sans uppercase font-bold">Grow within UX</div>
            <div className="w-full sm:w-2/3 text-lg font-serif leading-tight">
              <a href="https://www.antonsten.com/uxlead/">Working as a UX Lead</a><br />
              <a href="https://www.antonsten.com/uxstrategy/">Defining a UX Strategy</a><br />
              <a href="https://www.antonsten.com/writing-ux/">Writing as Part of the UX Process</a><br />
            </div>
          </div>

          <div className="sm:flex w-full bg-grey-lightest p-8 sm:p-16 text-black">
            <div className="mb-6 w-1/2 sm:w-1/3 text-xs font-sans uppercase font-bold">Most popular</div>
            <div className="w-full sm:w-2/3 text-lg font-serif leading-tight mb-6 sm:mb-12">
              <a href="https://www.antonsten.com/ai-ethics/">AI Ethics - A New Skill for UX-Designers</a><br />
              <a href="https://www.antonsten.com/moral-implications-apps/">Designer Ethics & The Moral Implications of our Apps</a><br />
              <a href="https://www.antonsten.com/future-ux-designer/">The Future of the UX-Designer</a><br />
          </div>
      </div>
  </div>

  <div className="sm:flex w-full mt-16">
    <div className="w-1/2 sm:w-1/3"></div>
    <div className="w-full sm:w-2/3">
      <h2 className="leading-tight">From my newsletter</h2>
    </div>
  </div>

  <div className="w-full pb-12">
    <div className="sm:flex w-full items-center py-4">
      <div className="w-1/2 sm:w-1/3">
      </div>
      <div className="w-full sm:w-2/3">
        <Link className="text-sm sm:text-lg font-serif leading-tight text-black" to="/newsletter">
          Subscribers get these posts first. Sign up!
        </Link>
      </div>
    </div>
    {data.allMarkdownRemark.edges.map(({ node }, i) => {
        const title = node.frontmatter.title || node.fields.slug
        const tag = node.frontmatter.tag || null
        if(tag === 'newsletter') {
          return (
            <div className="sm:flex w-full items-center py-4" key={i}>
              <div className="w-1/2 sm:w-1/3">
                <span className="hidden sm:block text-xs uppercase font-sans tracking-wide text-grey">{node.frontmatter.date}</span>
              </div>
              <div className="w-full sm:w-2/3">
                <Link className="text-sm sm:text-lg font-serif leading-tight no-underline text-black" to={node.fields.slug}>
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
