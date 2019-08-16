import React from "react"
import '../css/style.css'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Testimonial from '../components/testimonial';
import Client from '../components/client';
import Form from "../components/signupform"
import SEO from "../components/seo"

class Grid extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Work"/>
          <div className="w-full">
            <h1>Creating better user experiences</h1>
            <del>
              My personal mission for the past 20 years has been to help companies connect with their customers in meaningful ways. In that time, I’ve created user-focused experiences that resulted in happier, better-served customers and higher sales.
              <br></br>That’s something I’m really proud of.
            </del>

            <h2>Clients</h2>

            <p>
              I’ve worked with clients from almost every industry, and each one presents new, exciting challenges. With some companies, I’ve plugged into the in-house design or product team to help out with design, guidance, and asking/answering the provocative questions. But I’ve also worked with tiny startups operating out of someone’s living room.

              Large or small, my clients always come with specific needs and goals—not to mention an array of constraints and business requirements that must be fulfilled—and I’m proud of the consistently positive results I’ve produced in each unique case
            </p>
            <p>Here’s what I’ve done for people like you:
            <ul>
            <li>Helped plan, build, and implement scaleable design systems</li>
            <li>Designed the shopping and buying experience for IKEA</li>
            <li>Set the UX and design strategy for Fortune 500 companies like E.ON</li>
            <li>Optimized the user experience for a boost in conversions for e-commerces</li>
            </ul></p>
          </div>

          <div className="block flex-wrap flex -mx-2 sm:-mx-4">
          <Testimonial logo="/images/clients/spotify.png" text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. He’s a great designer with <em>superior business understanding who always put the user in the front seat</em> and delivers bloody good work. If you ever get a chance to work with Anton, don’t miss it." author="christian wilsson, head of design - spotify"/>

          <Client logo="/images/clients/lysa.png"/>
          <Client logo="/images/clients/eon.png" case="/case/eon" />
          <Client logo="/images/clients/izettle.png"/>

          <Testimonial logo="/images/clients/firstprinciple.png" text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. <em>He does what he says and never misses a deadline</em>, an unfortunate rarity these days that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>

          <Client logo="/images/clients/mercedes.png"/>
          <Client logo="/images/clients/elle.png"/>
          <Client logo="/images/clients/telia.png" case="/case/telia" />

          <Testimonial logo="/images/clients/swedbank.png" text="I had the pleasure of working with Anton on one of our highest priority projects. He was able to quickly familiarize himself with the challenges at hand and produced conceptual UX designs that not only met the demands, but even exceeded expectations. Anton has been a great co-creator <em>with both a positive attitude and openness for feedback</em>, as well as able to get the job done on time." author="GREG HENRIQUES, HEAD OF CUSTOMER EXPERIENCE, SWEDBANK"/>

          <Client logo="/images/clients/apotekhjartat.png"/>
          <Client logo="/images/clients/frank.png" case="/case/frank" />
          <Client logo="/images/clients/hyperisland.png"/>

          <Testimonial logo="/images/clients/5th.png" text="We've worked with Anton on many occasions; usually at each new iteration of our website. Anton is not only very responsive and easy to work with but <em>he provided a thorough and clear action list for us to follow</em>. As the way that we release products on our website is a little different to traditional retailers Anton needed to be creative with his solutions for us, which he was, and the results showed every time. A very fluid and successful partnership." author="Alex McBride, Founder, the 5th"/>

          <Client logo="/images/clients/ica.png"/>
          <Client logo="/images/clients/ericsson.png"/>
          <Client logo="/images/clients/fbg-kommun.png" case="/case/falkenberg-kommun" />

          <Testimonial case="/case/falkenberg" logo="/images/clients/fbg.png" text="Working with Anton was like catching up with a childhood friend.. Instantly he understood our situation, challenges as desires, and was able to give raw, honest, constructive feedback.  <em>He truly understands the business part and is able to conceptualise complex scenarios into clean UX designs</em> that appeal the end user.  Working with Anton was a grateful experience and I strongly recommend him for a positive and painless workflow." author="Kristján Fannar, Destination developer, Destination Falkenberg"/>

          <Client logo="/images/clients/nudie.png"/>
          <Client logo="/images/clients/volvo.png"/>
          <Client logo="/images/clients/cdon.png"/>

          <Testimonial case="/case/ne" logo="/images/clients/ne.png" text="I have had the pleasure of working with Anton in a visual and UX redesign of our services. <em>I am enthused and impressed by how Anton chooses simplicity over complexity and keeps the design interesting, appealing and accessible.</em> Furthermore, he is a humble and unassuming person that is a pleasure to work with." author="HUBERT KJELLBERG, PRESIDENT, BROCKHAUS & NATIONALENCYKLOPEDIN"/>

          <Client logo="/images/clients/absolutvodka.png"/>
          <Client logo="/images/clients/rga.png"/>
          <Client logo="/images/clients/suzuki.png"/>

          <Testimonial logo="/images/clients/keystone.png" text="Outrageously good. Few people have Anton’s eye for details. I have hired Anton for several projects ranging from brand strategy, UX/UI makeovers to complete front-end designs. He has always delivered top notch, stellar work. I was deeply impressed by his ability to take an overly complex user interface and make it easy to use in just a few steps. <em>You can easily tell that his decade of acquired knowledge in design and usability makes him stand out among other UX experts.</em> It’s always reassuring to know he is on your side no matter what design project you have." author="STEFAN HELGESSON, STRATEGIC DIRECTOR, KEYSTONE"/>

          <Testimonial text="We went through a huge redesign as part of a mobile initiative for the business and migrate the site to a responsive design and optimise user journeys for mobile users. Anton was provided with wireframes and journey documents and got to work. He followed the brief but was not afraid to voice his opinion and advise where he felt things could be improved. The project was extremely well managed with clear milestones which eliminated scope creep. The result was an extremely clean and smart interface which has been great for our business.
          <br><br>
          The entire project was run remotely between our London office, Bulgaria office and Anton. We still marvel at the fact that we never spoke to one of the most important people of the overall project. <em>Everything was communicated over email and Skype chat with zero dramas, exactly how we like it.</em> On top of all of that Anton is clearly ahead of the game when it comes to UX, Interface design and being a total professional.
          <br><br>
          Beware of friendly Swedish User Interface Designers who come equipped with positive open attitudes and sharp clean design principles. They are usually right, just nod and agree." author="TOM HARROW, MULTIPLE STARTUP FOUNDER"/>

              <div className="px-2 sm:px-4">
                <h2>User experience design</h2>
                <p>Like it or not, these days your success is tied to how your user feels about you and your product. We can forge strong, long-term relationships with your users by taking the time to understand who those users are, how they interact with your product, and how your brand impacts them, and then designing with those insights in mind. So in the end, your product works the way your users expect and adds value to their lives.</p>

                <h2>Conversion design</h2>
                <p>You know your e-commerce site could be converting better, but don’t know where to start to improve. Don’t worry, you’re not alone. Many e-commerce website owners spend way too much time struggling to keep their conversion rates up. I can help zero in on the issues that might be causing your high bounce rates and craft solutions to get your conversion rates where they should be.</p>

                <h2>Speaking engagements</h2>
                <p>I’ll talk about creating engaging user experiences to anyone who’ll listen, and I’ve been privileged to speak to all sorts of audiences (and more than a few patient people I’ve cornered at parties). I believe when you are passionate about something, it’s important to share it with others. I’d love to talk to you and your crowd about UX, higher user engagement, improving business through design, or the challenges and rewards of being a one man company. <Link to="/contact">Get in touch here.</Link></p>

                <Form/>
              </div>
            </div>
        </Layout>
      );
  }
}

export default Grid
