import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseData from '../../components/casedata';
import Cases from '../../components/cases';


class Frank extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="Apotek Hjärtat"/>
          <div className="w-full">
            <h1 className="pr-0 sm:pr-12">Apotek Hjärtat</h1>
            <del>
              I was the acting UX-lead for Apotek Hjärtat, Sweden's second largest pharmacy, for 6 months during a larger website improvement.
            </del>

            <p className="mb-12">More often today, Swedes are conducting their pharmaceutical needs online - everything from ordering prescribed medications to getting their everyday over-the-counter medicines. Until 2009, only the state was allowed to run pharmacies. Pharmacies hitting the free market coincided with Swedes starting to do much of their purchasing online and this opened up a great opportunity for market innovation. </p>

            <Img className="w-full mt-12 mb-12" fluid={data.image1.childImageSharp.fluid} />

<p className="mb-12">For Apotek Hjärtat, running a pharmacy online along with nearly 400 physical stores is no easy task. While some of their competitors choose to run the pricing game, always aiming to be the cheapest or have the fastest delivery, Apotek Hjärtat chooses to be different. Instead they are dedicated, when it comes to people's health and medical conditions, to creating the optimal service and experience to make sure the clients are getting exactly what they need in the moment they need it.</p>
<Img className="w-full mt-12 mb-12" fluid={data.image2.childImageSharp.fluid} />

<p className="mb-12">
  I worked with Apotek Hjärtat during a transitional period of 6 months keeping track of weekly iterations and improvements as well as working on new, long-term feature builds.
</p>
<Img className="w-full mt-12 mb-12" fluid={data.image3.childImageSharp.fluid} />

</div>

          <CaseData link="https://www.apotekhjartat.se/" expertise="User Experience, Visual Design, Team Lead" delivarables="Design system, Visual identity, User Experience"/>
          <h2>Selected Cases:</h2>
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
