import React from "react"

import '../css/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

class Thankyou extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Thank you"/>
            <h1>Yes! <span role="img" aria-label="high five">🙏</span></h1>
            <p>
            Please allow for up to 15 minutes for the book to show up in your inbox. If it doesn’t, <a href="mailto:anton@antonsten.com">please email me</a> and we’ll sort it out!
            <br></br>I hate annoying sales and spam as much as you do, so I’ll always be respectful with your email (I mean, I’m a person just like you)
            </p>

            <img class="w-full mt-12 mb-16" src="/images/did-we-just-become-best-friends-yep.gif" alt="Did we just become best friends? Yep!"/>

        </Layout>
      );
  }
}

export default Thankyou
