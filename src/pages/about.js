import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';

class About extends React.Component {
  render() {
      return (
        <Layout>
            <h1>About</h1>
            <p>
              I’ve been making digital products for 20 years (yes, that IS a lot of websites). In that time, I’ve helped some big names provide awesome experiences for their users, by getting to know a brand’s audience and balancing careful attention to design, product planning, crafting copy, and much more.
            </p>
            <p>
              I spent the first decade of my career working for some world-renowned agencies, but now I work independently from my office in the lovely city of Lomma, Sweden. This way, my clients get the creative professional, the project manager, and the decision maker all in one, without the agency overhead.
            </p>
            <p>
              The company is just me and my co-founder, Meta, a 13-year-old miniature pinscher. When she’s not napping in the corner of my office, she’s silently critiquing my work. Or maybe she’s just trying to tell me it’s time for a walk..
            </p>

            <Testimonial text="It’s quite simple, really. If you hire Anton you will be very happy with the end result. When we hired Anton he worked from his office in Malmö and the majority of our collaboration was made online. Usually this poses a problem when debating/talking about design but with Anton it worked effortlessly. He had no problem transforming our wishes into a design that felt spot on.”" author="JOEL SANDÉN, CREATIVE DIRECTOR, TELIA"/>
        </Layout>
      );
  }
}

export default About
