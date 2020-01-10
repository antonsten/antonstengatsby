import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseImage from "../../components/case-image"
import Cases from '../../components/cases';



class Telia extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="Telia"/>
          <div className="w-full">

            <div className="sm:flex">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h1 className="pr-0 sm:pr-12">Telia</h1>
                <h2>
                  Helping Telia revitalize their support pages with more options, intuitive tools, and a responsive design.
                </h2>

                <h2>My Internet connection is dead. I need help!</h2>
                <p className="mb-12">​​Think about it—a customer’s very first contact with your company may very well be at a crucial point: when something is going wrong and the customer needs answers. That’s why designing the support section of your website to foster a positive, successful interaction is so important. ​​ ​​For a multi-faceted organization like Telia, a telecom company serving much of Eastern Europe and Scandinavia, the issues a customer may encounter vary widely, from not having an Internet connection, to missing TV channels, to Wi-Fi router issues, just to name a few. These are services users pay good money for and that are a big part of their lives, so Telia wanted their online support experience to be as seamless as possible.</p>
              </div>
            </div>

            <Testimonial text="It’s quite simple really. If you hire Anton you will be extremely happy with the end result." author="JOEL SANDÉN, TELIA SONERA"/>

            <div className="sm:flex">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h2 className="mt-12">Users know best</h2>
                <p>At the start of the project, our theory was that a user coming to a support page just wanted their problem solved as quickly as possible, regardless of how that happened. Rather than jumping in and developing this vital piece of technology based purely on our assumptions—because that would just be silly—we conducted in-depth testing on real users to verify (and dismiss) some of our ideas and hypotheses. ​​ ​​As a starting point, we identified two typical routes to getting help: An official knowledge database created by the company, and an online forum where customers could both ask and answer questions. From there, we outlined several scenarios and tested. ​​ ​​One general thing our research revealed was the importance of a strong mobile experience: If a user’s home Internet connection isn’t working, their phone might be the only way they can get support, so the site had to be fully responsive and quick to load.</p>

                <h2>The testing</h2>
                <p>​​We asked users where on the site they’d look for help installing Spotify. Our assumption was that they’d look at “Other areas,” but a click map clearly showed that “Phone” or “Ask a question” were the most clicked areas.</p>
              </div>
            </div>

            <CaseImage heading="User click testing" text="A click map user testing showed us that our assumptions weren't inline with our user's actions." image={data.image1.childImageSharp.fluid}/>

            <div className="sm:flex">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <p>​​Throughout the different tests, “Discussions” attracted quite a few clicks. This supported our belief that user-to-user support should be a key feature (and would help with SEO).</p>
              </div>
            </div>

            <CaseImage wide={true} image={data.image2.childImageSharp.fluid}/>

            <div className="sm:flex">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <p>​​In the end, we incorporated both modes into our final design. For the most common problems, we created a huge knowledge database with video tutorials of things like installing your new router or setting up your new email address. For more advanced or uncommon problems, we decided to tap the knowledge of Telia customers with an online forum where users can both ask questions and provide answers, which turned out to be an excellent mode of online support.</p>
              </div>
            </div>

            <CaseImage heading="Options" text="One of our key insights was that it's important for users to quickly feel that they are on the right path to a solution."  image={data.image3.childImageSharp.fluid}/>
            <CaseImage wide={true} image={data.image4.childImageSharp.fluid}/>
            <CaseImage wide={true} image={data.image5.childImageSharp.fluid}/>
            <CaseImage heading="Mobile" text="For a solution like this one, it was especially crucial to have a fast, easy to understand mobile solution." image={data.image6.childImageSharp.fluid}/>

          </div>
          <Cases />

      </Layout>
    )
  }
}

export default Telia

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "telia_test_01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "telia_test_02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "telia_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "telia_desktop02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "telia_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "telia_mobile01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
