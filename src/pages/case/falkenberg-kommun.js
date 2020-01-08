import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseImage from "../../components/case-image"

class Falkenberg extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="​​Falkenberg: Serving all citizens"/>
          <div className="w-full">
            <div className="sm:flex">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h1 className="pr-0 sm:pr-12">​​Falkenberg: Serving all citizens</h1>
                <del>
                  ​​Making practical, important information accessible and easy to find for 20,000 Falkenberg-ians.
                </del>
                <p>​​​​​​​​Since the beginning of time, city and municipality websites have been horrendous (well, since the beginning of Internet-time, anyway). They’re boring, poorly designed, PACKED with information, and they usually look like they’re built with a Wordpress template from 2007. ​​ ​​While the municipality of Falkenberg’s website wasn’t that bad, it did comprise almost 9,000 pages when we started this project. For a city with a population of just above 20,000, that’s a LOT of pages—are all of those pages really needed? Is there a better way to present all that information? Luckily for the people of Falkenberg, their city administration decided to explore the answers to those questions.</p>
              </div>
            </div>

            <CaseImage image={data.image1.childImageSharp.fluid}/>

            <div className="sm:flex mt-6 sm:mt-12">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h2>Information overload</h2>
                <p>​​​​​​This project involved two phases. First, I worked with the internal team to rebuild the site to <a href="case/falkenberg/">showcase all the cool stuff you can do in Falkenberg</a>, both to draw in tourists and help locals enjoy their city. Then, we set out to tackle the practical, governmental side of the city’s website. Turns out, there’s a lot of different types of information a citizen of Falkenberg might seek on the city website, like: ​​- My kid is approaching preschool. Where do I apply? ​​- My grandpa needs care in his home. Who do I speak to? ​​- Why is this road closed? ​​- I need to bury a dead horse. Can I do this in my yard? (This was a real edge case we encountered.)</p>

                <h2>​​Navigation and information</h2>
                <p>​We identified two types of core pages: Navigation pages that take the user forward and closer to their primary target, and information pages that clearly communicate and inform the user about a specific topic.</p>
              </div>
            </div>

            <CaseImage image={data.image2.childImageSharp.fluid}/>
            <CaseImage image={data.image3.childImageSharp.fluid}/>
            <CaseImage image={data.image4.childImageSharp.fluid}/>


            <div className="sm:flex mt-6 sm:mt-12">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h2>Accessible design</h2>
                <p>With the target audience of this website being the diverse residents of an entire town, accessibility was top priority. We made design and development decisions with the aim of meeting the WCAG AA+ criteria. ​​ ​​As icing on the cake, the dynamic between their internal team and myself couldn’t have been better; our collaboration created solid design choices that have also been implemented in the city’s printed materials.</p>
              </div>
            </div>

            <CaseImage image={data.image5.childImageSharp.fluid}/>

            <Testimonial text="​​I just saw some of the first design mockups for the city website. WOW! You’re so damn talented! I got a bit emotional—imagine that our municipality will have this kind of communication and design soon! THANK YOU." author="MONICA KLINGBORG, FALKENBERG KOMMUN"/>
          </div>
          
      </Layout>
    )
  }
}

export default Falkenberg

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "fbgk_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "fbgk_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "fbgk_desktop04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "fbgk_desktop05.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "fbgk_desktop02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
