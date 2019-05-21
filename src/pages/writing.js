import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/signupform"
import Testimonial from '../components/testimonial';

class Writing extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Writing"
        />
        <div className="w-full">
          <h1 className="pr-0 sm:pr-12">Writing</h1>
          <del className="mb-8">
            I believe that understanding grows from exercising your knowledge. I don’t just write to inspire others, but to stay on the leading edge of this industry.
          </del>

          <p>
            Sure, I’m super proud of the 20 years of design experience and 10 years of being a successful freelancer I have under my belt—sounds pretty legit, right?—but the truth is those years of experience came with tons of mistakes and setbacks.
          </p>

          <p>
            The books below are handy collections of tips, hard-won wisdom, and general guidelines for what I’ve found works (and doesn’t work) in design and in freelancing. I hope they’ll be a guide for those taking their first steps into these areas and help budding designers and freelancers take a shortcut to success, with fewer tears and ramen meals.
          </p>

          <div className="w-full mt-12 flex flex-wrap justify-between">

            <div className="w-full sm:w-1/2 pr-0 sm:pr-2 flex">
              <div className="bg-white p-8 border-dashed border flex flex-wrap">
                <h4 className="text-orange font-normal text-lg mb-2">User Experiences that Matter</h4>
                <p className="text-sm">With so many wildly successful businesses out there, we often wonder what they did to get there and how they stay there. Is there a magic bullet? Did they make a deal with the devil? </p>
                <p className="text-sm">It turns out that they just value their customers by creating great user experiences for them. Whether it’s their product, their website, or even their customer service – a business rises or falls on the experience their customers have.</p>

                <div className="flex w-full items-center mt-6 self-end">
                  <a className="btn mr-6" href="">Purchase $9</a>
                  <Link className="border-none text-xs uppercase font-bold tracking-wide">Find out more</Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mt-6 sm:mt-0 pl-0 sm:pl-2 flex">
              <div className="bg-white p-8 border-dashed border flex flex-wrap">
                <h4 className="text-orange font-normal text-lg mb-2">Mastering Freelance</h4>
                <p className="text-sm">What are you offering? Who are your clients? How do you find your clients? What should you charge them? </p>
                <p className="text-sm">All freelancers face these same challenges. As if finding the answers to those questions wasn’t hard enough, freelancing can get pretty lonely too – making it even harder. </p>
                <p className="text-sm">Mastering Freelance is here to help you discover those answers and find success faster.</p>

                <div className="flex w-full self-end items-center mt-6">
                  <a className="btn mr-6" href="">Purchase $19</a>
                  <Link className="border-none text-xs uppercase font-bold tracking-wide">Find out more</Link>
                </div>
              </div>
            </div>
          </div>

          <Testimonial text="Outrageously good. Few people have Anton’s eye for details. I have hired Anton for several projects ranging from brand strategy, UX/UI makeovers to complete front-end designs. I was deeply impressed by his ability to take an overly complex user interface and make it easy to use in just a few steps. You can easily tell that his decade of acquired knowledge in design and usability makes him stand out among other UX experts." author="Stefan Helgesson, Strategic Director, Keystone"/>

          <Form/>

          <h2 className="mt-16">All posts</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <p className="flex justify-between py-4 font-normal mb-0 border-dashed border-b border-grey">
                  <Link className="no-underline text-black hover:text-orange truncate" to={node.fields.slug}>
                    {title}
                  </Link>
                  <span className="hidden sm:block">{node.frontmatter.date}</span>
                </p>
                
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Writing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
            title,
            permalink
          }
        }
      }
    }
  }
`
