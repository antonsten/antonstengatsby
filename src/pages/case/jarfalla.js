import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CaseImage from "../../components/case-image"
import Cases from '../../components/cases';


class Frank extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
        <SEO title="Järfälla Kommun"/>
        <div className="w-full">
          <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h1 className="pr-0 sm:pr-12">Järfälla: Allowing businesses to flourish</h1>
              <del>
                Helping businesses in Järfälla to flourish through more accessible help and online tools.
              </del>
              <p className="mb-12">Having worked with <a href="/case/falkenberg-kommun">Falkenberg kommun</a> on a previous project, I thought I had a pretty good idea of what working with municipalities was like. Falkenberg wanted a new website, so they decided to re-do the entire thing. Järfälla, on the other hand, choose to approach it a bit differently. In 2018, they approached me to re-do only their homepage as well as a design an updated, improved visual style and design system for them. Every other page just got the updated style, but remained the same in terms of content. <br /><br />In 2019, they wanted to create a website for businesses in Järfälla, giving businesses a tool to find answers to their questions regarding permits, rules, and other helpful information. Having already established the design system, we were able to hit the ground running and quickly begin designing what pages could look like and what kind of flows we envision our users taking.</p>
            </div>
          </div>

          <CaseImage heading="User focused" text="We wanted to build a navigation that's based on our users."  image={data.image1.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12 mb-6 sm:mb-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">An important guideline that we wanted to follow was to begin each user journey from their point of view (I know, it sounds obvious but we both know it's not always the case!). So, instead of designing the navigation around the internal architecture of Järfälla's website, we choose to think about what kind of problems and issues would cause businesses to visit the site.</p>
            </div>
          </div>

          <CaseImage wide={true} image={data.image4.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12 mb-6 sm:mb-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">
              <b>We settled for giving users three major navigational paths:</b>
              <br />
              1. Based on their industry - this is something that would be a possible entry path for everyone<br /><br />
              2. Based on digital services and tools - these are actions that the user can perform straight away online <br /><br />
              3. Most used content during the current period - Restaurants will want to file permits for outdoor seating in the spring time but not so much in November. Offices will want improved outdoor lighting  in October through March, but probably not in the summertime.<br /><br />
              Through AI and user behavior, we can predict what services and tools we think our users will require.
              </p>
            </div>
          </div>

          <CaseImage wide={true} image={data.image3.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12 mb-6 sm:mb-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">From these three entry points, everything flows down onto guides and digital tools with checklists, important dates, and useful links.</p>
            </div>
          </div>

          <CaseImage wide={true} image={data.image5.childImageSharp.fluid}/>
        </div>
        <Cases />

      </Layout>
    )
  }
}

export default Frank

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "jarfalla_01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "jarfalla_02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "jarfalla_03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "jarfalla_04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "jarfalla_06.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
