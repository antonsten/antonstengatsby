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
            <div className="sm:flex">
            <div className="w-full sm:w-1/3">
</div>
            <div className="w-full sm:w-2/3">
            <h1>I Make Digital Products Work</h1>
            <p>I know it’s a really bold statement, but I have the experience and knowledge to back it up.</p>
            <p>With my background in both design and business, I am in a great position to help your business decide on the right solutions for your digital products. I’m not here to make your product <i>just look pretty</i>, I’m here to <i>make it work</i> - happy users will result in a more profitable business. I am a firm believer in understanding the human element of design and knowing your audience. Your user wants to have a great experience with your brand – from start to finish – and I want to make that happen.</p>
            <p>
              I’ve been making digital products for 20 years (yes, that IS a lot of websites). In that time, I’ve helped some big names provide awesome experiences for their users, by getting to know a brand’s audience and balancing careful attention to design, product planning, crafting copy, and much more.
            </p>
            </div>
            </div>

            <div className="sm:-mx-16">
            <div className="sm:flex w-full mt-16 mb-16 bg-blue-lightest p-8 sm:p-16 text-blue-darkest">
            <div className="w-1/2 sm:w-1/3 text-grey text-xs font-sans mr-8 leading-normal pb-8"></div>
            <div className="w-full sm:w-2/3"><img alt="anton and meta" src="/images/anton_tall.jpg" /></div>
            </div>
            </div>

            <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
            <p>
            I spent the first decade of my career working for some world-renowned agencies, but now I work independently from my office in the lovely city of Lomma, Sweden. This way, my clients get the creative professional, the project manager, and the decision maker all in one, without the agency overhead.
            </p>
            </div>
            </div>

            <div className="sm:-mx-16">
            <div className="sm:flex w-full mt-16 mb-16 bg-blue-lightest p-8 sm:p-16 text-blue-darkest">
            <div className="w-1/2 sm:w-1/3 text-grey text-xs font-sans mr-8 leading-normal pb-8"><strong>This is Anfield</strong><br />Through years of trial and error, I've found the setting that optimizes my creative output.</div>
            <div className="w-full sm:w-2/3"><img src="/images/office_lomma.png" /></div>
            </div>
            </div>

            <div className="sm:-mx-16">
              <div className="sm:flex w-full bg-blue-darker p-8 sm:p-16 text-white">
                <div className="w-1/2 sm:w-1/3"></div>
                <div className="w-full sm:w-2/3 text-lg leading-normal">
                  <h2 className="leading-tight mt-0">Selected interviews</h2><br />
                  <a href="https://theblog.adobe.com/qa-with-anton-sten-author-of-user-experiences-that-matter/">Adobe</a><br />
                  <a href="https://magazine.workingnotworking.com/magazine/2016/1/26/user-experiences-that-matter-by-anton-sten">Working not Working</a><br />
                  <a href="https://www.creativebloq.com/advice/the-art-of-going-freelance">.Net magazine</a><br />
                  <a href="https://www.casestudy.club/interviews/anton-sten">Case Study Club</a><br />
                  <a href="https://www.beingfreelance.com/season-4/mastering-freelance-anton-sten-ux-designer-podcast">Being Freelance Podcast, Episode 100</a><br />
                  Want me to talk design, user experiences or freelancing on your podcast? <a href="/contact">Let's talk! </a>
                </div>
              </div>
            </div>


            <Testimonial logo="/images/clients/svg/fbg-white.svg" text="Working with Anton was like catching up with a childhood friend.. Instantly he understood our situation, challenges as desires, and was able to give raw, honest, constructive feedback.  He truly understands the business part and is able to conceptualise complex scenarios into clean UX designs that appeal the end user.  Working with Anton was a grateful experience and I strongly recommend him for a positive and painless workflow." author="Kristján Fannar, Destination developer, Destination Falkenberg"/>        </Layout>
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
