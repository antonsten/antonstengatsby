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

            <div className="w-full mt-12">
              <div className="sm:flex">
                <div className="w-full sm:w-1/3"></div>
                <div className="w-full sm:w-2/3"><h2>Selected cases</h2></div>
                </div>
              </div>

              <div className="w-full">
                <div className="sm:flex">
                  <div className="w-full sm:w-1/3"></div>
                    <div className="w-full sm:w-2/3 mb-8">
                    <p>
                      E.ON Navigator
                      <span className="block text-grey leading-tight">
                        Product design along with a full-fledged design system to allow E.ON to easily create new pages without loosing clarity.
                      </span>
                    </p>
                    <Link className="btn btn-wide" to="/case/eon">read more about e.on navigator</Link>
                  </div>
               </div>

              <div className="sm:flex">
                <div className="w-full sm:w-1/3"></div>
                <div className="w-full sm:w-2/3 mb-8">
                  <p>
                    E.ON Navigator
                    <span className="block text-grey leading-tight">
                      Product design along with a full-fledged design system to allow E.ON to easily create new pages without loosing clarity.
                    </span>
                  </p>
                  <Link className="btn btn-wide" to="/case/eon">read more about e.on navigator</Link>
                </div>
              </div>

            </div>

            <Testimonial logo="/images/clients/firstprinciple.png" text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. <em>He does what he says and never misses a deadline</em>, an unfortunate rarity these days that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>

            <div className="w-full mt-12 mb-12">
              <div className="sm:flex">
                <div className="w-full sm:w-1/3"></div>
                <div className="w-full sm:w-2/3">
                  <h2>Selected clients</h2>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2013-2014, 2018-2019
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-6" src="images/clients/svg/ikea.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>Lead UX</p>
                  </div>
                </div>
              </div>


              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2017-2018
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-6 sm:h-8" src="images/clients/svg/apotekhjartat.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>Lead UX</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2018
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-6 sm:h-8" src="images/clients/svg/lysa.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>UX design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2017
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-6" src="images/clients/svg/firstprinciple.png"/>
                  </div>
                  <div className="w-1/2">
                    <p>Product Design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2015
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-8" src="images/clients/svg/ica.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>UX design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2015
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-6" src="images/clients/svg/swedbank.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>UX design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2015
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-6" src="images/clients/svg/nudie.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>UX design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2014
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-6" src="images/clients/svg/volvo.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>UX design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2012
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-8" src="images/clients/svg/spotify.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>UX design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2010
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-6" src="images/clients/svg/izettle.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>Visual design</p>
                  </div>
                </div>
              </div>

              <div className="sm:flex items-center border-b pb-1 sm:pb-3 pt-3">
                <div className="w-full sm:w-1/3">
                  <span className="font-sans uppercase font-bold text-xs">
                    2003-2019
                  </span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center">
                  <div className="w-1/2">
                    <img className="h-4 sm:h-4" src="images/clients/svg/hyperisland.svg"/>
                  </div>
                  <div className="w-1/2">
                    <p>Teaching</p>
                  </div>
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

            <Form />

          </div>
        </Layout>
      );
  }
}

export default Grid
