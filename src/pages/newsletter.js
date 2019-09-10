import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import Form from "../components/signupform"
import SEO from "../components/seo"
import Testimonial from '../components/testimonial';

class Contact extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Sign up for my newsletter"/>
            <h1>Sign up for my newsletter</h1>

            <p>
              I like to share what I have discovered about creating amazing user experiences, embracing creativity, and sustaining a successful freelancing career.
            </p>

            <Form/>

            <Testimonial logo="/images/clients/winegallery.png" text="Great laser focused UX content, told in an easy to understand way, helping to make sure I keep my eye on the UX ball. Don’t miss out." author="Tom Walenkamp, The Wine Gallery"/>


        </Layout>
      );
  }
}

export default Contact
