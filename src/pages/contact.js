import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';

import SEO from "../components/seo"
import { Link } from 'gatsby';

class Contact extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Contact"/>
          <div className="sm:flex">
          <div className="w-full sm:w-1/3"></div>
          <div className="w-full sm:w-2/3">
            <h1>Contact</h1>
              <p>Do you think we’re a good match? Great!</p>

              <p>One of my favorite things about this job is the variety, in clients and projects (as you can see from <Link to="/work">my portfolio</Link>). So whether you’re a multi-national behemoth or a team that can all fit into a mid-size sedan, get in touch and tell me what you have in mind — I can’t wait to hear all about it!
            </p>
            <p>
              E-mail <a href="mailto:anton@antonsten.com" onclick="fathom('trackGoal', 'PBKA0SF6', 0);">anton@antonsten.com</a> or (if really urgent!) text +46 733 142934 so I can get to know more about how I can help you.
            </p>
            </div>
            </div>
            <Testimonial logo="/images/clients/svg/telia-white.svg" text="<em>It’s quite simple really. If you hire Anton you will be very happy with the end result.</em><br><br>When we hired Anton he worked from his office in Malmö and the majority of our collaboration was made online. Usually this poses a problem when debating/talking about design but with Anton it worked effortlessly. He had no problem transforming our wishes into a design that felt spot on." author="JOEL SANDÉN, CREATIVE DIRECTOR, TELIA"/>


        </Layout>
      );
  }
}

export default Contact
