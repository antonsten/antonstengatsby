import React from "react"
import { graphql, Link } from "gatsby"

import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';
import SEO from "../components/seo"

class Thankyou extends React.Component {
  render() {
    const { data } = this.props
      return (
        <Layout>
          <SEO title="Thank you, preferences updated!"/>
            <h1>Your preferences are updated! <span role="img">🙏</span></h1>
            <p>
              Thank you! By telling me what you like, I'm able to better give you the content that you find interesting. Anything specific you're wondering about? <Link to="/contact">Let me know.</Link>
            </p>

        </Layout>
      );
  }
}

export default Thankyou
