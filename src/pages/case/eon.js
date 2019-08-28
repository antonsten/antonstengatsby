import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseData from '../../components/casedata';
import Cases from '../../components/cases';

class Eon extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="Eon"/>
          <div className="w-full">
            <h1 className="pr-0 sm:pr-12">E.ON Navigator</h1>
            <del>
              Helping facility managers track energy consumption and make proactive choices, for higher revenue and a healthier environment​ <span role="img">🌿</span>​
            </del>
            <Img className="w-full" fluid={data.image1.childImageSharp.fluid} />

            <h2>Tracking energy usage</h2>
            <p className="mb-12">One of the biggest expenses for a factory, a property management company, or any large-scale business is its energy consumption. This is why tracking energy use and identifying inefficiencies early is crucial. E.ON, a Fortune 100 company, asked me to find a way to make it easier for large-business customers to easily track their energy consumption. ​​ ​​The result, E.ON Navigator, is a suite of tools that puts businesses in control of their energy costs, revealing opportunities to spend and use less and improving the health of their business and—most importantly—the environment.</p>

            <Testimonial logo="/images/clients/eon.png" text="What impresses me most is the way Anton understand the underlying needs of the business, and translates that into a beautiful solution. Anton is very easy to work with and he is good at finding the balance between listening and pushing." author="ANNA BENGTSSON, E.ON"/>

            <h2 className="mt-12">Process</h2>

            <p>​​Working with E.ON has taught me one important lesson: Never be afraid to ask what may seem like stupid questions. Energy consumption and management are complicated subjects, so my focus was to present the data efficiently and logically while simplifying every function for ease of use. ​​ ​​I worked with the team at E.ON from 2014 to 2018, and this long relationship allowed us to try out different modes of working. We started out running the project in a typical way: brief → wireframes → design. Later on, we tried working with very rough wireframes, just pencil and paper or rough iPad sketches. Finally, we developed a thorough design system that let us focus more on building the product than refining the design.</p>

            <Img className="w-full" fluid={data.image2.childImageSharp.fluid} />
            <Img className="w-full" fluid={data.image3.childImageSharp.fluid} />
            <Img className="w-full" fluid={data.image4.childImageSharp.fluid} />
            <Img className="w-full" fluid={data.image5.childImageSharp.fluid} />
            </div>

            <CaseData link="https://navigator.eon.se/" expertise="Information Architecture, User Experience, User Interface" delivarables="Design, Process"/>

            <h2>Selected Cases:</h2>
            <Cases />
      </Layout>
    )
  }
}

export default Eon

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "eon_desktop04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "eon_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "eon_desktop02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "eon_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "eon_desktop05.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
