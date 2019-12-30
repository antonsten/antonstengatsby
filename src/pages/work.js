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
            <div className="w-full sm:flex flex-wrap">
              <div className="w-1/2 sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <h1>Creating Better User Experiences</h1>
                <p>My personal mission for the past 20 years has been to help companies connect with their customers in meaningful ways. In that time, I’ve created user-focused experiences that resulted in happier, better-served customers and higher sales.
                <br></br>That’s something I’m really proud of.</p>
              </div>
            </div>
          </div>

          <div className="sm:-mx-16">
            <div className="block sm:flex flex-wrap w-full mt-16 mb-16 bg-grey-lighter p-8 sm:p-16 text-black">
              <div className="w-1/2 sm:w-1/3"></div>
                <div className="w-full sm:w-2/3 pb-8">
                  <h2>Clients</h2>
                  <p>
                    I’ve worked with clients from almost every industry, and each one presents new, exciting challenges. With some companies, I’ve plugged into the in-house design or product team to help out with design, guidance, and asking/answering the provocative questions. But I’ve also worked with tiny startups operating out of someone’s living room.

                    Large or small, my clients always come with specific needs and goals—not to mention an array of constraints and business requirements that must be fulfilled—and I’m proud of the consistently positive results I’ve produced in each unique case.
                  </p>
                  <Link className="btn" to="/contact">Get in touch here.</Link>
              </div>
            </div>
          </div>

          <div className="block flex-wrap flex -mx-2 sm:-mx-4">

            <Testimonial logo="/images/clients/spotify.png" text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. He’s a great designer with <em>superior business understanding who always put the user in the front seat</em> and delivers bloody good work. If you ever get a chance to work with Anton, don’t miss it." author="christian wilsson, head of design - spotify"/>

            <div className="w-full mb-12 mt-12">
              <h2>Selected cases</h2>
              <div className="sm:flex border-b">
                <div className="w-full sm:w-1/3 mt-8">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
                <div className="w-full sm:w-2/3 -mt-1 sm:flex">
                  <p className="flex-1">
                    E.ON Navigator
                    <span className="block text-grey">
                      Strategy, UX and Visual Design
                    </span>
                  </p>
                  <Link className="mt-8 pt-2 text-red text-xs font-semibold no-after font-sans uppercase" to="/case/url">
                    View case
                  </Link>
                </div>
              </div>
              <div className="sm:flex border-b mt-3">
                <div className="w-full sm:w-1/3 mt-8">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
                <div className="w-full sm:w-2/3 -mt-1 sm:flex">
                  <p className="flex-1">
                    E.ON Navigator
                    <span className="block text-grey">
                      Strategy, UX and Visual Design
                    </span>
                  </p>
                  <Link className="mt-8 pt-2 text-red text-xs font-semibold no-after font-sans uppercase" to="/case/url">
                    View case
                  </Link>
                </div>
              </div>
              <div className="sm:flex border-b mt-3">
                <div className="w-full sm:w-1/3 mt-8">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
                <div className="w-full sm:w-2/3 -mt-1 sm:flex">
                  <p className="flex-1">
                    E.ON Navigator
                    <span className="block text-grey">
                      Strategy, UX and Visual Design
                    </span>
                  </p>
                  <Link className="mt-8 pt-2 text-red text-xs font-semibold no-after font-sans uppercase" to="/case/url">
                    View case
                  </Link>
                </div>
              </div>
            </div>

            <Testimonial logo="/images/clients/firstprinciple.png" text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. <em>He does what he says and never misses a deadline</em>, an unfortunate rarity these days that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>

            <div className="w-full mt-12 mb-12">
              <h2>Selected clients</h2>
              <div className="w-full flex-wrap mt-6 flex justify-between">
                <div className="w-1/3 py-6">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
                <div className="w-1/3 py-6">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
                <div className="w-1/3 py-6">
                  <img className="w-full pr-8 case-image" src="images/clients/nudie.png"/>
                </div>
                <div className="w-1/3 py-6">
                  <img className="w-full pr-8 case-image" src="images/clients/shavekit.png"/>
                </div>
                <div className="w-1/3 py-6">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
                <div className="w-1/3 py-6">
                  <img className="w-full pr-8 case-image" src="images/clients/apotekhjartat.png"/>
                </div>
              </div>
            </div>

            <Testimonial logo="/images/clients/firstprinciple.png" text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. <em>He does what he says and never misses a deadline</em>, an unfortunate rarity these days that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>

            <div className="w-full">
              <div className="sm:-mx-16">
                <div className="block sm:flex flex-wrap w-full mt-16 mb-16 bg-grey-lighter p-8 sm:p-16 text-black">
                  <div className="w-1/2 sm:w-1/3"></div>
                  <div className="w-full sm:w-2/3">
                    <h2>What I do</h2>
                  </div>
                  <div className="w-1/2 sm:w-1/3 mt-8">
                    <span className="font-sans uppercase text-xs">User experience design </span>
                  </div>
                  <div className="w-full sm:w-2/3 pb-8 -mt-1">
                    <p>Like it or not, these days your success is tied to how your user feels about you and your product. We can forge strong, long-term relationships with your users by taking the time to understand who those users are, how they interact with your product, and how your brand impacts them, and then designing with those insights in mind. So in the end, your product works the way your users expect and adds value to their lives.</p>
                  </div>
                  <div className="w-1/2 sm:w-1/3 mt-8">
                    <span className="font-sans uppercase text-xs">Conversion design</span>
                  </div>
                  <div className="w-full sm:w-2/3 pb-8 -mt-1">
                    <p>You know your e-commerce site could be converting better, but don’t know where to start to improve. Don’t worry, you’re not alone. Many e-commerce website owners spend way too much time struggling to keep their conversion rates up. I can help zero in on the issues that might be causing your high bounce rates and craft solutions to get your conversion rates where they should be.</p>
                  </div>
                  <div className="w-1/2 sm:w-1/3 mt-8">
                    <span className="font-sans uppercase text-xs">Speaking engagements</span>
                  </div>
                  <div className="w-full sm:w-2/3 pb-8 -mt-1">
                    <p>I’ll talk about creating engaging user experiences to anyone who’ll listen, and I’ve been privileged to speak to all sorts of audiences (and more than a few patient people I’ve cornered at parties). I believe when you are passionate about something, it’s important to share it with others. I’d love to talk to you and your crowd about UX, higher user engagement, improving business through design, or the challenges and rewards of being a one man company. <Link to="/contact">Get in touch here.</Link></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex">
              <div className="w-full sm:w-1/3"></div>
              <div className="w-full sm:w-2/3">
                <Form />
              </div>
            </div>
          </div>
        </Layout>
      );
  }
}

export default Grid
