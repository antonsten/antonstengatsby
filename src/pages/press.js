import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import '../css/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

class Press extends React.Component {
  render() {
    const { data } = this.props
      return (
        <Layout>
          <SEO title="Press-kit"/>
            <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
            <h1>Press-kit</h1>
            <p>No one enjoys answering the same (practical) questions over and over. So here are some copy-and-paste resources for media publishers and conference organizers. Please feel free to use these as-is without checking with me first (although I appreciate finding out <em>where you aim to use it!</em>). If you have additional questions, <a href="/contact">let's talk.</a></p>
            </div>
            </div>

            <div className="sm:-mx-16">
            <div className="sm:flex w-full mt-16 mb-16 bg-grey-lightest p-8 sm:p-16 text-black">
            <div className="w-1/3 text-grey font-sans leading-normal">
            Name:<br />
            Company:<br />
            Job Title:<br />
            Location:<br />
            Website:<br />
            Books:<br />
            Twitter:
            </div>

            <div className="w-2/3 font-sans leading-normal">
            Anton Sten<br />
            Le Petit Garcon (own consultancy)<br />
            UX Lead<br />
            Sweden<br />
            <a href="https://www.antonsten.com">https://www.antonsten.com</a><br />
            <a href="https://www.antonsten.com/books">https://www.antonsten.com/books</a><br />
            <a href="https://www.twitter.com/antonsten">@antonsten</a>
            </div>
            </div>
            </div>

            <div className="sm:flex">
            <div className="w-1/3 text-grey text-xs font-sans leading-normal uppercase">Bio short</div>
            <div className="w-full sm:w-2/3">
            <p>Anton is an award-winning consulting UX Lead, author and speaker from Sweden.</p>
            </div>
            </div>

            <div className="sm:flex">
            <div className="w-1/3 text-grey text-xs font-sans leading-normal uppercase">Bio medium</div>
            <div className="w-full sm:w-2/3">
            <p>Anton is an award-winning consulting UX Lead, author and speaker from Sweden. He works with companies to help them connect with their customers in meaningful ways.</p>
            </div>
            </div>

            <div className="sm:flex">
            <div className="w-1/3 text-grey text-xs font-sans leading-normal uppercase">Bio long</div>
            <div className="w-full sm:w-2/3">
            <p>Anton is an award-winning consulting UX Lead, author and speaker from Sweden. He works with companies to help them connect with their customers in meaningful ways through intuitive and engaging user experiences. This results in happier, better-served customers and higher sales.</p>
            </div>
            </div>

            <div className="sm:-mx-16">
            <div className="sm:flex w-full mt-16 mb-16 bg-grey-lightest p-8 sm:p-16 text-black">
            <div className="w-1/2 sm:w-1/3 text-grey text-xs font-sans mr-8 leading-normal pb-8"><strong>Picture</strong><br />Click image to download hi-res</div>
            <div className="w-full sm:w-2/3"><a href="/images/anton_hi-res.jpg"><img alt="Anton Sten" src="/images/anton_tall.jpg" /></a></div>
            </div>
            </div>

            <div className="sm:flex">
            <div className="w-1/3 text-grey text-xs font-sans leading-normal uppercase"></div>
            <div className="w-full sm:w-2/3">
            <p>Need anything else? <a href="/contact">Get in touch!</a></p>
            </div>
            </div>



          </Layout>
      );
  }
}

export default Press
