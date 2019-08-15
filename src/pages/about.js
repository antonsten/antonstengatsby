import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
      return (
        <Layout>
          <SEO title="About"/>
            <Img className="mb-12" fluid={data.fileName.childImageSharp.fluid} />
            <h1>Hi, I’m Anton and I make digital products work</h1>
            <del>I know it’s a really bold statement, but I have the experience and knowledge to back it up. </del>
            <p>With my background in both design and business, I am in a great position to help your business decide on the right solutions for your digital products. I’m not here to make your product <i>just look pretty</i>, I’m here to <i>make it work</i> - happy users will result in a more profitable business. I am a firm believer in understanding the human element of design and knowing your audience. Your user wants to have a great experience with your brand – from start to finish – and I want to make that happen.</p>
            <p>
              I’ve been making digital products for 20 years (yes, that IS a lot of websites). In that time, I’ve helped some big names provide awesome experiences for their users, by getting to know a brand’s audience and balancing careful attention to design, product planning, crafting copy, and much more.
            </p>
            <p>
              I spent the first decade of my career working for some world-renowned agencies, but now I work independently from my office in the lovely city of Lomma, Sweden. This way, my clients get the creative professional, the project manager, and the decision maker all in one, without the agency overhead.
            </p>
            <p>
              The company is just me and my co-founder, Meta, a 13-year-old miniature pinscher. When she’s not napping in the corner of my office, she’s silently critiquing my work. Or maybe she’s just trying to tell me it’s time for a walk..
            </p>
            <Testimonial logo="/images/clients/fbg.png" text="Working with Anton was like catching up with a childhood friend.. Instantly he understood our situation, challenges as desires, and was able to give raw, honest, constructive feedback.  He truly understands the business part and is able to conceptualise complex scenarios into clean UX designs that appeal the end user.  Working with Anton was a grateful experience and I strongly recommend him for a positive and painless workflow." author="Kristján Fannar, Destination developer, Destination Falkenberg"/>        </Layout>
      );
  }
}

export default About

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "anton-sten.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
