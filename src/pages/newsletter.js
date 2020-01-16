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
          <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
              <h1>Get my newsletter</h1>

              <p>
                I like to share what I have discovered about creating amazing user experiences, embracing creativity, and sustaining a successful career.
              </p>
            </div>
          </div>
          <div className="sm:-mx-16">
            <div className="sm:flex w-full mb-16 bg-black text-white">
              <div className="px-6 sm:px-12 flex w-full">
                <Form naked="true"/>
              </div>
            </div>
          </div>
          <Testimonial logo="/images/clients/winegallery.png" text="Great laser focused UX content, told in an easy to understand way, helping to make sure I keep my eye on the UX ball. Don’t miss out." author="Tom Walenkamp, The Wine Gallery"/>

        </Layout>
      );
  }
}

export default Contact
