import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby';

class Contact extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Contact"/>
            <h1>Contact</h1>
            <del className="mb-8">
              Do you think we’re a good match? If so, yay! <span role="img" aria-label="high five">🙏</span>
            </del>
            <p>
              One of my favorite things about this job is the variety, in clients and projects (as you can see from <Link to="work">my portfolio</Link>). So whether you’re a multi-national behemoth or a team that can all fit into a mid-size sedan, get in touch and tell me what you have in mind — I can’t wait to hear all about it!
            </p>
            <p>
              E-mail <a href="mailto:anton@antonsten.com">anton@antonsten.com</a> or text +46 733 142934 so I can get to know more about how I can help you.
            </p>
        </Layout>
      );
  }
}

export default Contact
