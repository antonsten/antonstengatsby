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
      <h2>Books</h2>

      <p>
        <a href="https://www.antonsten.com/books/user-experiences-matter" target="_blank">User Experiences that Matter</a> (2016)<br />
        <a href="https://www.antonsten.com/books/masteringfreelance" target="_blank">Mastering Freelance</a> (2017)
      </p>

        <h2>If You're Getting Started in UX</h2>
      <p>
        <a href="https://www.antonsten.com/whatsux/">What's a 'User Experience' Anyways?</a><br />
        <a href="https://www.antonsten.com/learn-ux/">How Do You Learn UX?</a><br />
        <a href="https://www.antonsten.com/uxdesigner/">Working as a UX Designer</a>
      </p>

        <h2>Next Steps in UX</h2>
      <p>
        <a href="https://www.antonsten.com/uxlead/">Working as a UX Lead</a><br />
        <a href="https://www.antonsten.com/uxstrategy/">Defining a UX Strategy</a><br />
        <a href="https://www.antonsten.com/writing-ux/">Writing as Part of the UX Process</a><br />
      </p>

        <h2>Thought-pieces</h2>
      <p>
        <a href="https://www.antonsten.com/ai-ethics/">AI Ethics - A New Skill for UX-Designers</a><br />
        <a href="https://www.antonsten.com/moral-implications-apps/">Designer Ethics & The Moral Implications of our Apps</a><br />
        <a href="https://www.antonsten.com/future-ux-designer/">The Future of the UX-Designer</a><br />
        <a href="https://www.antonsten.com/voiceinput-socialnorms/">Voice Input’s Effect on Social Norms</a>
      </p>

        <h2>The Work We Do</h2>
      <p>
        <a href="https://www.antonsten.com/chasinggrowth/">Chasing Growth</a><br />
        <a href="https://www.antonsten.com/newtools/">New Tools Don’t Always Equal Productivity</a><br />
        <a href="https://www.antonsten.com/designers-write/">Why Designers Need to Write</a><br />
        <a href="https://www.antonsten.com/tools/">The Tools I Use to Run My Business</a>
      </p>

      <h2>Featured Writing & Interviews Elsewhere</h2>
      <p>
        <a href="https://theblog.adobe.com/qa-with-anton-sten-author-of-user-experiences-that-matter/" target="_blank">Q&A With Anton Sten, Author of User Experiences that Matter</a> - Adobe<br />
        <a href="https://magazine.workingnotworking.com/magazine/2016/1/26/user-experiences-that-matter-by-anton-sten" target="_blank">What the F*#!ck is a UX Designer anyway</a> - Working not Working<br />
        <a href="https://modus.medium.com/designer-ethics-the-moral-implications-of-our-apps-f1d6bdb276e" target="_blank">It’s Time for a Code of Ethics for Designers</a> - Medium Modus<br />
        <a href="https://www.creativebloq.com/advice/the-art-of-going-freelance" target="_blank">The Art of Going Freelance</a> - .Net Magazine<br />
        <a href="https://www.beingfreelance.com/season-4/mastering-freelance-anton-sten-ux-designer-podcast" target="_blank">It Takes Time</a> - Being Freelance episode 100
      </p>

      <h2 id="from-newsletter">From My Newsletter</h2>
      <div className="w-full pb-12">

        {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tag = node.frontmatter.tag || null

            if(tag == 'newsletter') {
              return (
                <div key={node.fields.slug}>
                  <p className="flex justify-between py-3 font-normal mb-0 border-b border-grey-light mt-1 items-center">
                    <Link className="no-underline text-black hover:text-orange truncate" to={node.fields.slug}>
                      {title}
                    </Link>
                    <span className="hidden sm:block text-xs uppercase font-sans tracking-wide text-grey">{node.frontmatter.date}</span>
                  </p>

                </div>
              )
            }
          })}
        </div>

        <h2 id="bite-sized">Bite-sized Posts</h2>
        <div className="w-full pb-12">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tag = node.frontmatter.tag

            if(tag !== 'newsletter') {
              return (
                <div key={node.fields.slug}>
                  <p className="flex justify-between py-3 font-normal mb-0 border-b border-grey-light mt-1 items-center">
                    <Link className="no-underline text-black hover:text-orange truncate" to={node.fields.slug}>
                      {title}
                    </Link>
                    <span className="hidden sm:block text-xs uppercase font-sans tracking-wide text-grey">{node.frontmatter.date}</span>
                  </p>

                </div>
              )
            }
          })}
        </div>
      </div>
    )}
  />
)
