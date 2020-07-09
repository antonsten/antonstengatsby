import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"
import Cases from '../../components/cases';
import Testimonial from '../../components/testimonial';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CaseImage from "../../components/case-image"

class Toast extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
        <SEO title="Toast: On The Line"/>
        <div className="w-full">
          <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h1 className="pr-0 sm:pr-12">Toast: On The Line</h1>
              <del>After working with a large corporation for nearly a year, I was in need of a different work environment. I've been a fan of the <a href="https://superfriendlydesign.systems/about/">SuperFriendly work model</a> for years and known Dan and his work for even longer. I was randomly catching up with Dan, discussing my situation when he asked if I wanted to join a SuperFriendly project.</del>
              <p className="mb-12">With SuperFriendly being an all-remote, all-specialist company, it's far from your traditional agency. And while I've had lots of experience working remotely, I was excited, and to be honest, a bit scared of my first project with SuperFriendly. Being a fan of something can be scary on multiple levels - will my expectations be met? will I meet their's?</p>
            </div>
          </div>

          <CaseImage heading="On The Line" text="A place full of inspiration, knowledge, and helpful resources for restaurateurs." image={data.image2.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">The client, Toast, sells a POS system for restaurants and cafes. They came to SuperFriendly wanting to evolve their blog into a fully-featured media hub. Instead of just rebuilding the blog, we wanted to begin by understanding their customers better through user research. After all, it's vital to understand if a fully-featured media hub would solve their problem.
<br /><br />
When I joined the project, I was confused on what it was that we're  building. Turns out no one knew! Luckily, that was part of the brief - to explore options. Phew!
<br /><br />
Once the project had its kick off, we had weekly calls which provided the safe environment for everyone to casually explore and bounce ideas off from one another. While we were exploring, Erika Hall was busy talking to current and potential customers about where Toast could be of help in their daily life - making sure we were solving actual problems.
<br /><br />
A couple of weeks in, we met up in sunny Boston for a full day of workshopping. Erika shared her findings with the entire team and Dan facilitated a couple of exercises to help us define what we should be building.</p>
            </div>
          </div>

          <CaseImage heading="Boston, July 2019" text="Meeting up in-person for a day of workshopping." image={data.image5.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">While everyone on the team are total remote experts, meeting in person was really beneficial to the entire team. Initially I was a bit surprised at how relaxed the atmosphere was on our calls even, but things really took off after our time together.
<br /><br />
Following our workshop in Boston - and some great meals! - we parted ways and returned to our own offices - in Philadelphia, Dallas, San Fransisco, New Orleans and... Lomma, Sweden. Dan and I immediately started collaborating on design utilizing everything we learned from our meetings. It's been a while since I've been collaborating on design and boy can it make a product better. While Dan and I worked in design tools, TJ was simultaneously experimenting with the code. Within a week, we had an early idea ready to present to Toast.
              </p>
           </div>
          </div>

          <CaseImage wide={true} image={data.image1.childImageSharp.fluid}/>

          <Testimonial logo="/images/clients/svg/toast-white.svg" text="We came to Anton with a big, blue sky problem to solve. Anton has the rare ability to engage with user insights and business needs to produce a truly remarkable experience, which resulted in a product that out-performed our goals. Anton is open to exploring all kinds of solutions, and he taught us how to really serve our users. I'm grateful to have worked with him." author="Rachael Perry, Editor in Chief, Toast"/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">Together with Toast we defined early on what our success metrics are. After all, without knowing what success looks like - how can we be sure we've achieved it?
<br /><br />
We ended up building a design system and provided Toast with a strategy for better website circulation, increased email signups, and higher brand loyalty - topics that would cover all of the success factors we had defined together with Toast.
<br /><br />
I even got to share my expertise regarding building a qualitative, segmented email list. It was thrilling to enjoy the fast pace of a project like this again!
<br /><br />
Six weeks of iteration on design, build, and content saw a front-end prototype that was ready for a content management system integration, which Toast handled in-house.
              </p>
           </div>
          </div>

          <CaseImage wide={true} image={data.image3.childImageSharp.fluid}/>
          <CaseImage wide={true} image={data.image4.childImageSharp.fluid}/>

          <div className="sm:flex mt-6 sm:mt-12">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <p className="mb-12">
Before the launch, I worked with Toast again to help them add <em>'sauce'</em> to the website - subtle animations and fine-tuning some of the design elements. On the Line soft launched just before Christmas and the first numbers indicate that we've hit a home-run!
              </p>
           </div>
          </div>

        </div>
        <Testimonial logo="/images/clients/svg/superfriendly-white.svg" text="Anton is a renaissance man. It’s rare to find someone who can help in so many areas at such a thoughtful and high level of quality. Anton makes any team better." author="DAN MALL, FOUNDER & CREATIVE DIRECTOR, SUPERFRIENDLY"/>

        <Cases />

      </Layout>
    )
  }
}

export default Toast

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "toast_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "toast_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "toast_desktop04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "toast_desktop05.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "toast_workshop.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
