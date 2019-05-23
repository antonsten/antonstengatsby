import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import Form from '../../components/signupform';


class Masteringfreelance extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="Eon"/>
          <div className="w-full">
            <h1 className="pr-0 sm:pr-12">Mastering freelance</h1>

            <del>
              Helping facility managers track energy consumption and make proactive choices, for higher revenue and a healthier environment​
            </del>

            <Img className="w-full" fluid={data.image1.childImageSharp.fluid} />

            <h2>Tracking energy usage</h2>
            <p className="mb-12">One of the biggest expenses for a factory, a property management company, or any large-scale business is its energy consumption. This is why tracking energy use and identifying inefficiencies early is crucial. E.ON, a Fortune 100 company, asked me to find a way to make it easier for large-business customers to easily track their energy consumption. ​​ ​​The result, E.ON Navigator, is a suite of tools that puts businesses in control of their energy costs, revealing opportunities to spend and use less and improving the health of their business and—most importantly—the environment.</p>
            <hr/>
            <Testimonial text="What impresses me most is the way Anton understand the underlying needs of the business, and translates that into a beautiful solution. Anton is very easy to work with and he is good at finding the balance between listening and pushing." author="ANNA BENGTSSON, E.ON"/>
            <Form/>

          </div>
      </Layout>
    )
  }
}

export default Masteringfreelance

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "eon_desktop04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`