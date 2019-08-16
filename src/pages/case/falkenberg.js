import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import CaseData from '../../components/casedata';

class Falkenberg extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="Falkenberg"/>
          <div className="w-full">
            <h1 className="pr-0 sm:pr-12">Falkenberg</h1>
            <del>
              ​​About an hour south of Gothenburg and an hour and a half north of Malmö lies the town of Falkenberg. It’s a beautiful little Swedish town with long beaches and lots of nature close by. Still, it’s not generally considered a vacation destination or a town to move your young family to. We set out to change that.
            </del>

            <p>​​​​Cities and municipalities tend to focus their web presence on the practical and governmental matters in their area. Falkenberg wanted to show that they aren’t like everyone else. They chose to create a website that wasn’t just an informational government site, but that spoke to everyone—locals, tourists, or people just passing through. They wanted people to know that in Falkenberg, there’s always something to do and something new to explore.</p>

            <h2>Know your users</h2>
            <p>​​I was tasked with creating the structure, information architecture, and the visual design of the website. One of the design challenges was that our target audience and their needs were just about as diverse as one could imagine. A given user could be looking for information about a museum, a restaurant, a place to stay for their visit, or even a good place for a stroll in the forest. ​​ ​​We quickly recognized that since the site’s users would often be literally mobile—out and about, exploring the town—the mobile version of the site had to be a top priority, as well as the usual suspects: <a href="https://www.antonsten.com/secret-feature/">speed</a>, <a href="https://www.antonsten.com/designing-for-accessibility/">accessibility</a>, and discoverability.</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image1.childImageSharp.fluid} />
            <Img className="w-full mt-12 mb-12" fluid={data.image2.childImageSharp.fluid} />

            <h2>A new way to filter</h2>
            <p>​​Discoverability is an interesting component. You want to use design patterns that users immediately feel familiar with. Users who know what they are looking for should be able to find their page immediately, through search and/or browsing the website. However, users who aren’t sure what they’re looking for need to be presented with a smorgasbord of clear options. ​​ ​​That’s why we decided to try a new set of filters. Rather than having traditional position-based filters like “Restaurants,” “Theaters,” or “Nature,” we experimented with feelings and activities. This lead to filtering events and places based on things like “Laughter” or “Eating.” Selecting “Eating” would deliver the expected restaurant choices, of course, but it also might suggest you pack a picnic basket and have lunch out in the open.</p>

            <Img className="w-full mt-12 mb-12" fluid={data.image3.childImageSharp.fluid} />
            <Img className="w-full mt-12 mb-12" fluid={data.image4.childImageSharp.fluid} />
            <p>Launching this robust, exciting new way to explore Falkenberg was just the first part of this project. We then moved on to the nitty-gritty of presenting <a href="/case/falkenberg-kommun/">practical city information in a clear and findable way</a> for Falkenberg’s residents.</p>

            <Testimonial text="I have known of Anton for quite some time, but it wasn’t until we did the website of the geographic location of Falkenberg that we first got the change to work together. Anton brought a sweet simplicity to that website and I knew that I wanted to work with him again when we redid the municipality’s web. So when we started to work on the municipality web accessibility had to go hand in hand with the design. I feel that Anton really made something beautiful and useful for people in Falkenberg, both visiting and for us who live here." author="MAGNUS ÖSTERHULT, FALKENBERGS KOMMUN"/>

          </div>

          <CaseData link="https://www.falkenberg.se/" expertise="Information Architecture, User Experience, User Interface" delivarables="Strategy, Design"/>

      </Layout>
    )
  }
}

export default Falkenberg

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "fbg_desktop01.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "fbg_desktop03.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "fbg_desktop02.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "fbg_desktop04.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
