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
        <SEO title = "Home"/>

          <div className="w-full">
            {/* <div className="w-full sm:flex flex-wrap bg-grey-lighter mb-12 text-black">
              <div className="w-1/2 sm:w-1/3 font-sans uppercase text-xs font-bold p-8">TL:DR;</div>
              <div className="w-full sm:w-2/3 leading-normal font-sans text-sm p-8"><strong>Anton Stén</strong> is a UX designer based in Lomma, Sweden. My work focuses on building intuitive, delightful and converting user experiences for digital products.</div>
              </div> */}
            <div className="w-full sm:flex flex-wrap">
              <div className="w-1/2 sm:w-1/3">
                <img src="/images/idea.jpg" className="pr-12 mt-4 gatsby-image-small" alt="Idea: Has This Ever Happened To You?"/>
              </div>
              <div className="w-full sm:w-2/3">
              <h1 className="leading-tight">Hello, I'm Anton. I lead UX for design-driven companies.</h1>
              <p>My speciality? Using my design skills and business knowledge to not just make your digital product look pretty, but <a href="/work">to make it work.</a>
              <br /><br />
              I help companies design experiences that put the user first. My common sense approach to UX can help you get that stellar product out of the trash bin and into users’ daily lives.
              <br /><br />
              My background in both design and business puts me in an ideal position to help you take your digital products from so-so to GREAT.
              </p>

<<<<<<< Updated upstream
                <br /><br />

                …or, maybe you’re not facing a complete failure, but you’re seeing disappointing bounce rates, sagging app usage, or (heaven forbid) complaints from unhappy users.
                <br /><br />
                What happened? you ask. There should be a huge, adoring audience for this product! There may be one big, 800-pound-gorilla of a missing piece you didn’t consider carefully enough: <em>User Experience.</em>
                <br /><br />
                <a href="/about">This is where I come in.</a>
                </p>
            </div>
          </div>

          <div className="sm:-mx-16">
            <div className="sm:flex w-full mt-16 mb-16 bg-grey-lightest p-8 sm:p-16 text-black">
              <div className="w-1/2 sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h2 className="leading-tight">I lead UX for design-driven companies.</h2>
                <p>My speciality? Using my design skills and business knowledge to <em>not just make your digital product look pretty, but <a href="/work">to make it work.</a></em>
                <br /><br />
                I help companies design experiences that put the user first. My common sense approach to UX can help you get that stellar product out of the trash bin and into users’ daily lives.
                <br /><br />
                My background in both design and business puts me in an ideal position to help you take your digital products from so-so to GREAT.
                </p>
              </div>
=======
>>>>>>> Stashed changes
            </div>
          </div>

          <Testimonial logo="/images/clients/svg/spotify-white.svg" alt="Spotify logo" text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. He’s a great designer with superior business understanding who always put the user in the front seat and delivers bloody good work. If you ever get a chance to work with Anton, don’t miss it." author="Christian Wilsson, Head of Design, Spotify"/>


                    <div className="w-full mt-12">
                      <div className="flex border-b pb-1">
                        <div className="w-1/3 px-2 sm:px-0"><img className="h-6 sm:h-8 mb-4" src="/images/clients/svg/spotify.svg" alt="Spotify logo"/></div>
                        <div className="w-1/3 px-2 sm:px-0"><img className="h-6 sm:h-8 mb-4" src="/images/clients/svg/superfriendly.svg" alt="superfriendly logo"/></div>
                        <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/apotekhjartat.svg" alt="apotekhjartat logo"/></div>
                     </div>
                     </div>

                     <div className="w-full mt-12">
                       <div className="flex border-b pb-1">
                         <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/lysa.svg" alt="lysa logo"/></div>
                         <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/firstprinciple.svg" alt="firstprinciple logo"/></div>
                         <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/swedbank.svg" alt="swedbank logo"/></div>
                      </div>
                      </div>

                      <div className="w-full mt-12">
                        <div className="flex border-b pb-1">
                          <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/nudie.svg" alt="nudie logo"/></div>
                          <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-4 mb-2" src="/images/clients/svg/volvo.svg" alt="volvo logo"/></div>
                          <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/izettle.svg" alt="izettle logo"/></div>
                       </div>
                       </div>


                       <div className="w-full mt-12">
                         <div className="flex border-b pb-1">
                           <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/ica.svg" alt="ica logo"/></div>
                           <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-4 mb-2" src="/images/clients/svg/hyperisland.svg" alt="hyperisland logo"/></div>
                           <div className="w-1/3 px-2 sm:px-0"><img className="h-4 sm:h-6 mb-4" src="/images/clients/svg/eon.svg" alt="eon logo"/></div>
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="sm:flex">
                          <div className="w-full sm:w-1/3"></div>
                          <div className="w-full sm:w-2/3"><p><a href="/testimonials">This is what they say.</a></p></div>
                          </div>
                        </div>




          <Form title="Get my bi-weekly newsletter" text='"A great resource for anybody with an interest in the psychology of design, user behaviour and digital experiences."' />
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
