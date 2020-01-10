import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"
import Cases from '../../components/cases';


import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CaseImage from "../../components/case-image"

class Frank extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
        <SEO title="Apotek Hjärtat"/>
        <div className="w-full">
          <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h1 className="pr-0 sm:pr-12">Apotek Hjärtat</h1>
              <del>
                I was the acting UX-lead for Apotek Hjärtat, Sweden's second largest pharmacy, for 6 months during a larger website improvement.
              </del>

              <p className="mb-12">More often today, Swedes are conducting their pharmaceutical needs online - everything from ordering prescribed medications to getting their everyday over-the-counter medicines. Until 2009, only the state was allowed to run pharmacies. Pharmacies hitting the free market coincided with Swedes starting to do much of their purchasing online and this opened up a great opportunity for market innovation. </p>
            </div>
          </div>

          <CaseImage heading="Defining search" text="Search is key for any e-commerce. With Apotek Hjärtat we wanted to conceptualise search even more. So searching for 'headache' shouldn't only give you products. Categories, related searches and information related to the subject should all be visible. Defining the structure and hierarchy of the results was key."  image={data.image1.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">For Apotek Hjärtat, running a pharmacy online along with nearly 400 physical stores is no easy task. While some of their competitors choose to run the pricing game, always aiming to be the cheapest or have the fastest delivery, Apotek Hjärtat chooses to be different. Instead they are dedicated, when it comes to people's health and medical conditions, to creating the optimal service and experience to make sure the clients are getting exactly what they need in the moment they need it.</p>
            </div>
          </div>

          <CaseImage heading="Product page" text="A product page needs to be very dynamic if your products range from socks, medicine to beauty products." image={data.image2.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">
                I worked with Apotek Hjärtat during a transitional period of 6 months keeping track of weekly iterations and improvements as well as working on new, long-term feature builds.
              </p>
           </div>
          </div>

          <CaseImage wide={true} image={data.image3.childImageSharp.fluid}/>

        </div>
        <Cases />

      </Layout>
    )
  }
}

export default Frank

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "apotekhjartat01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "apotekhjartat02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "apotekhjartat03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
