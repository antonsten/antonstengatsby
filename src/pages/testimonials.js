import React from "react"

import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';
import { Link } from 'gatsby';
import SEO from "../components/seo"

class Testimonials extends React.Component {
  render() {
    const { data } = this.props
      return (
        <Layout>
          <SEO title="Testimonials"/>
            <h1>Don’t take my word for it</h1>
            <Testimonial text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. He does what he says and never misses a deadline, an unfortunate rarity these days that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>
            <Testimonial text="I have had the pleasure of working with Anton in a visual and UX redesign of our services. I am enthused and impressed by how Anton chooses simplicity over complexity and keeps the design interesting, appealing and accessible.<br><br>Furthermore, he is a humble and unassuming person that is a pleasure to work with. I would happily recommend Anton for your visual and/or UX needs." author="HUBERT KJELLBERG, PRESIDENT, BROCKHAUS & NATIONALENCYKLOPEDIN"/>
            <Testimonial text="Working with Anton was an easy, pleasant experience. Communication was clear and all deadlines were met. Anton is a great asset to have on your team for your project." author="CHARISSE GIBILISCO WIERUP, STRATEGIC BRANDING, HEADBRANDS"/>
            <Testimonial text="Anton is a true professional. He masters both detailed design skills as well as leadership skills to make sure the design is implemented. After his delivery of the design he spent considerable time on making sure it got correctly implemented by the coders. His devotion to quality and delivery was invaluable to finish our project." author="YASHAR MORADBAKHTI, CEO, YAYA INNOVATIONS"/>
            <Testimonial text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. He’s a great designer with superior business understanding who always put the user in the front seat and delivers bloody good work.<br><br>If you get a chance to work with Anton, don’t miss it." author="CHRISTIAN WILSSON, HEAD OF DESIGN, SPOTIFY"/>
            <Testimonial text="Outrageously good. Few people have Anton’s eye for details. I have hired Anton for several projects ranging from brand strategy, UX/UI makeovers to complete front-end designs. He has always delivered top notch, stellar work. I was deeply impressed by his ability to take an overly complex user interface and make it easy to use in just a few steps. You can easily tell that his decade of acquired knowledge in design and usability makes him stand out among other UX experts. It’s always reassuring to know he is on your side no matter what design project you have.<br><br>Anton earns my highest recommendation!" author="STEFAN HELGESSON, STRATEGIC DIRECTOR, KEYSTONE"/>
            <Testimonial text="I had the pleasure of working with Anton on one of our highest priority projects. He was able to quickly familiarize himself with the challenges at hand and produced conceptual UX designs that not only met the demands, but even exceeded expectations.<br><br>Anton has been a great co-creator with both a positive attitude and openness for feedback, as well as able to get the job done on time." author="GREG HENRIQUES, HEAD OF CUSTOMER EXPERIENCE, SWEDBANK"/>
            <Testimonial text="We went through a huge redesign as part of a mobile initiative for the business and migrate the site to a responsive design and optimise user journeys for mobile users. Anton was provided with wireframes and journey documents and got to work. He followed the brief but was not afraid to voice his opinion and advise where he felt things could be improved. The project was extremely well managed with clear milestones which eliminated scope creep. The result was an extremely clean and smart interface which has been great for our business. <br><br>The entire project was run remotely between our London office, Bulgaria office and Anton. We still marvel at the fact that we never spoke to one of the most important people of the overall project. Everything was communicated over email and Skype chat with zero dramas, exactly how we like it. <br><br>On top of all of that Anton is clearly ahead of the game when it comes to UX, Interface design and being a total professional. <br><br>Beware of friendly Swedish User Interface Designers who come equipped with positive open attitudes and sharp clean design principles. They are usually right, just nod and agree." author="TOM HARROW, CO-FOUNDER, SHAVEKIT"/>
            <Testimonial text="It’s quite simple really. If you hire Anton you will be very happy with the end result. <br><br>When we hired Anton he worked from his office in Malmö and the majority of our collaboration was made online. Usually this poses a problem when debating/talking about design but with Anton it worked effortlessly. He had no problem transforming our wishes into a design that felt spot on." author="JOEL SANDÉN, CREATIVE DIRECTOR, TELIA"/>
            <Testimonial text="I had the pleasure of working with Anton at IKEA Communications where he played an important role in the concept development of a global web project. He shared and activated his indepth knowledge and experience in web media- and design in a great manner. I would like to work with Anton again and can recommend him for any digital media project." author="JOHAN NY, IKEA"/>
            <Testimonial text="Anton was instrumental in providing excellent creative direction and support for a web project we worked on. Not only is he very talented and knowledgeable on digital and everything related to the web, he’s also a great guy to work with. I would have no hesitation in working with him again, should the opportunity present itself." author="ASIF ANSARI"/>
            <Testimonial text="We hired Anton for some freelance design work at Fjord and were thrilled with the results. Not only was he very responsive during the project briefing and negotiation process, he also was very flexible to our demanding project start time and schedule.<br><br>Once the work was under way, we realized Anton is extremely creative with a high-standard for what he produces. His design aesthetic is quite sophisticated and it’s obvious he sincerely cares about going the extra mile for his clients.<br><br>We look forward to collaborating with Anton again in the future!" author="JAMIE GUTIERREZ, SENIOR MANAGER OF TALENT ACQUISITION, ADIDAS"/>

            <p>Right now you’re probably feeling like you want to <Link to="/contact">reach out for a chat</Link>?</p>
        </Layout>
      );
  }
}

export default Testimonials
