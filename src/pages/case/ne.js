import React from "react"
import '../../css/style.css'
import { Link } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseData from '../../components/casedata';

class Ne extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="​​Nationalencyklopedin"/>
          <div className="w-full">
            <h1 className="pr-0 sm:pr-12">​​Nationalencyklopedin</h1>
            <h2>
              ​Chances are, if you grew up in Sweden, you are familiar with Nationalencyklopedin; for decades, it’s been a prominent research tool (it was my generation’s Wikipedia), and it’s still an important learning resource for school kids today. Since it started in 1980, Nationalencyklopedin’s influence has spread to other countries in Europe and now includes the German equivalent Brockhaus.
            </h2>

            <Testimonial text="​​I have had the pleasure of working with Anton in a visual and UX redesign of our services. I am enthused and impressed by how Anton chooses simplicity over complexity and keeps the design interesting, appealing and accessible.<br><br>Furthermore, he is a humble and unassuming person that is a pleasure to work with. I would happily recommend Anton for your visual and/or UX needs." author="HUBERT KJELLBERG, PRESIDENT, BROCKHAUS & NATIONALENCYKLOPEDIN"/>

            <p>​​​​The use and reach of these knowledge products is broad and well established. But as the business has grown into new markets, the cohesive visual identity of the brand—so important for trust, credibility, and recognition—has started to break down as new materials and products reinterpret or deviate from the current brand guidelines. The company’s global CEO, Hubert Kjellberg, reached out to ask for my help updating their visual identity.</p>
            <p>After a quick look at their various products, I understood his concern. Their palette was made up of way too many colors, some of them in several shades, making it hard to define what the brand-specific colors were. They were using a total of six different fonts, none of which were particularly suited for on-screen reading. And to make things worse, some of their colors did not meet WCAG AA+ requirements for accessibility, which is bad news in any case but is even worse for an educational tool intended for use by anyone who needs it, regardless of impairments.</p>
            <p>I told him I’d love to help, but that we should first rethink what the project is actually about. You might remember I briefly mentioned this project in a blog post: Design Systems: Better UX through Defined Standards. There’s simply no point in creating a new logo and changing some colors unless there’s a plan for how to integrate these improvements into your actual products and the workflow for creating those products.</p>
            <p className="font-bold">Instead, my pitch suggested three things we should focus on:</p>
            <ol>
              <li><b>Visual identity:</b> This is a crucial piece of any brand. The colors and typography you adopt for your brand tell the user a lot about what kind of company you are and the values you hold—hence the word “identity.” An effective brand identity uses colors, typography, and imagery that match and communicate your values to users and customers.</li>
              <li><b>Design system:</b> Digital products aren’t just made from colors and typography, but from interactions and structures that form patterns. We need to make sure that the personality of the brand is conveyed in every part of the experience of using a product, and then create design patterns that we can reuse across our products. Patterns can involve things like buttons, navigation, interactions, and forms. Together, these elements and patterns form a design system. A well-built design system enables teams to build better products, faster, by making design reusable. This in turn makes scaling up and maintaining that cohesive look and feel possible.</li>
              <li><b>Design system resource:</b> With no common design language to unite a product, not only does the user experience break down, but so does the design process. To create alignment within design teams, particularly smaller teams with no dedicated design lead, there must be clear design conventions to follow—a shared source of truth. This is the function of a design system resource, which at its best is made up not only of a style guide with detailed specs for things like colors, fonts, and buttons, but also coded elements and design files that can be used by everyone on the team, from design to development.</li>
            </ol>

            <h2>Visual identity</h2>
            <p>I recommended that we keep both NE’s and Brockhaus’s logos as they are—they are well-known brands, and there was nothing wrong with the current logotypes.</p>
            <p>As for colors and typography, my main objective was to simplify. The colors needed to not only be WCAG AA+ compliant, but also feel modern and credible. The typography needed to be suited for a digital context, offer sharp readability even on smaller screens (you know kids read on their mobile phones, right?), and take licensing fees into account. On top of that, it should give the brand a little personality and youth appeal while still feeling trustworthy—like a young, cool teacher.</p>
            <p>The colors we chose were pulled from the brand’s existing colors, but simplified, showcasing how a simple palette can offer a wide range of possibilities.</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image1.childImageSharp.fluid} />

            <p>For typography, we opted for Proxima Nova (a classic) because of its excellent readability even in smaller sizes and the fact that it includes a broad set of characters. This was combined with an old favorite of mine, Berlingske Serif from Playtype, which has that perfect mix of traditional serif and modern quirkiness.</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image2.childImageSharp.fluid} />

            <h2>Design system</h2>
            <p>​​​​​​Based on the thinking behind <a href="https://www.antonsten.com/atomic-design/">Brad Frost’s Atomic Design</a>, I wanted to build a modular design system for NE. The basic idea is designing small elements, like buttons and text fields, that can be combined into bigger elements, like forms, which can in turn be combined to create full pages and templates. This way, all these components can be easily reused and recombined while still maintaining visual consistency, even across a large website or system of websites being worked on by lots of people.</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image3.childImageSharp.fluid} />

            <p>To start, I defined the colors and typography in more detail and for specific use cases. Then I defined key elements:</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image4.childImageSharp.fluid} />

            <p>And finally turned components into templates:</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image5.childImageSharp.fluid} />
            <Img className="w-full mt-12 mb-12" fluid={data.image6.childImageSharp.fluid} />
            <Img className="w-full mt-12 mb-12" fluid={data.image7.childImageSharp.fluid} />

            <h2>​​Design system resource</h2>
            <p>The idea behind a design system resource, which ideally takes the form of a website built with the design system, is to have a shared source of truth, so designers and anyone else who creates pages or products for a brand has a clear direction to follow. The visual identity will remain clear and consistent, regardless of future growth. Bonus: Because the design system website is built with the design system, it’ll always be up to date!</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image8.childImageSharp.fluid} />

            <p>I’ve found that this type of resource is also a great way for me to ensure the correct implementation of a design. Because the buttons, tables, lists, etc., are viewable both in the context of a full page and also as individual elements, it’s easy to spot any minor mistakes.</p>
            <p>It was a pleasure working with the team at NE and Brockhaus to define a design system that will be used for years to come. The brand’s identity is now more likely to remain intact as the company grows, but even better, the work improved an important digital tool used by kids all over Europe. With better readability and sharper color contrasts for enhanced accessibility, NE is more able to succeed in its mission to help kids learn.</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image9.childImageSharp.fluid} />
          </div>

          <CaseData expertise="User Experience, User Interface, Design Thinking, Branding" delivarables="Branding, Design, Process"/>

      </Layout>
    )
  }
}

export default Ne

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "ne_colors.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "ne_typography.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "ne_design_system.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "ne_desktop06.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "ne_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "ne_desktop02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "ne_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "ne_desktop05.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image9: file(relativePath: { eq: "ne_desktop04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
