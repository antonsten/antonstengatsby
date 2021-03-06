import React from "react"
import '../../css/style.css'
import Cases from '../../components/cases';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseImage from "../../components/case-image"


class Frank extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
        <SEO title="Frank Body"/>
        <div className="w-full">
          <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h1 className="pr-0 sm:pr-12">Frank Body</h1>
              <del>
                Optimizing conversions while staying on-track with a strong brand personality for Australia’s number one babe; Frank.
              </del>
              <p className="mb-12">​​Frank Body, an e-commerce company founded in Australia, makes and sells coffee-based body scrubs. They’re known around the world for their sassy brand personality (by <a href="http://www.willowandblake.com/">Willow & Blake</a>) and stylish design (by <a href="https://loveandmoney.agency/">Love+Money</a>). ​​ ​​​Originally launched from the shared office space of Willow & Blake, Frank Body is now a global player with more than $20 million in annual revenue. But while Frank Body has nailed creating a unique brand voice, the company realized they needed to improve the user experience of their online store. This was the start of our long-term relationship.</p>
            </div>
          </div>

          <CaseImage wide={true} image={data.image1.childImageSharp.fluid}/>

          <Testimonial text="Anton has been across every aspect of the new website build and has given crucial advice in between the design & dev team and the company directors. His advice has been crucial to the success of the new store." author="ALEX BOFFA, CEO"/>

          <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h2 className="mt-12">Small changes = big $$$</h2>
              <p>​​I worked on the entire Frank Body buying process to ensure a cohesive, even enjoyable, user experience from end to end. At a high level, this involved improving the kinds of things every website needs to do well, like accessibility and page speed, and defining and answering user flow questions like what happens when a user orders something, and what happens when a product ships. But conversion optimization also entails paying attention to smaller but just as crucial details, like making sure CTAs are clear and eye-catching; using familiar, consistent terms in navigation and across the site; and building product pages so the three most important things—product name, price, CTA—are front and center, which is also important for Google search rank. All combined, and voila, you have yourself a high-converting great online store.</p>
            </div>
          </div>

          <CaseImage heading="Social guy" text="Leveraging the use of social media was one of the key successes of Frank so clearly it should it's featured prominently on the main page."  image={data.image2.childImageSharp.fluid}/>
          <CaseImage wide={true} image={data.image3.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p>​​While this might sound like a lot of work, it really isn’t. Conversion optimization can be done quickly and can result in thousands of dollars more in sales. Optimizing your e-commerce website is a common-sense move and often isn’t a large investment in terms of time, money, or technical changes. ​​ ​​Sometimes it’s the smallest things that make the biggest difference.</p>
            </div>
          </div>
        </div>
        <Cases />

      </Layout>
    )
  }
}

export default Frank

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "frank_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "frank_desktop02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "frank_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
