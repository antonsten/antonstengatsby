import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';
import SEO from "../components/seo"

class Contact extends React.Component {
  render() {
      return (
        <Layout>
            <SEO title="Work With Me"/>
            <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
            <h1>Work With Me</h1>

            <p>
            If you’ve worked with agencies before, you can throw away all your expectations. Working with me is nothing like that. I am the only contact point you’ll ever have. I’ll never outsource your work. I’ll never charge you for a receptionist. I am a one-man company* and I have no intention of ever changing that <em>(* dogs not included)</em>.
            </p>

            <h2>A bit about my process</h2>
            <p>Flexibility and lots of communication are what smooth, successful projects are made of. You may have hired me to craft a top-notch user experience for your product, but your experience as my client is just as important to me.</p>
            <p>Here’s one of my biggest secrets to success: At the start of any new project, take the time to get on the same page and agree on two things—what the final product should look like, and when it needs to be finished. As for fees, my goal is to bring you the most value for every dollar. Sometimes that means I’ll advise you to work with someone who is more junior, or perhaps I’ll talk to your development team and see how we can best bootstrap solutions to lower your costs.</p>

            <h2>What do you mean by “what”?</h2>
            <p>First, we’ll get really clear on what the final product should look like. For example, if you need a branding package, I’ll need to know the file format specifications for the logotype and what you’d like included in the style guide. For a product strategy, we’d need to clearly outline what the strategy will cover, what questions it will answer, and how you want all this information delivered.</p>

            <h2>What do you mean by “when”?</h2>
            <p>I never miss a deadline. No, really. My secret is simple: I respect the project and set aside enough time to get it done correctly. I will never give you a date that can’t be met. That’s a two-way street, of course; I’ll rely on you to give me certain things on time so I can incorporate them into the project.</p>
            </div>
            </div>

            <Testimonial logo="/images/clients/svg/firstprinciple-white.svg" text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. <em>He does what he says and never misses a deadline</em>, an unfortunate rarity these days that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>

            <div className="sm:flex">
            <div className="w-full sm:w-1/3"></div>
            <div className="w-full sm:w-2/3">
            <h2>How much will all this cost?</h2>
            <p>My goal is to bring you the most value for every dollar. Remember, I’m just a guy who’s lucky enough to work for himself; I’m not going to gouge you on fancy client lunches or my employee’s retirement plan — Meta’s already retired.</p>
            <p>Sometimes that means I’ll advise you to work with someone who is more junior, or perhaps I’ll talk to your development team and see how we can best bootstrap solutions to lower your costs. Whatever the final price is, I know that you’ll be satisfied with the value the project has added to your company.</p>
            <p><em>Think of it this way:</em> Working with me is an investment, not an expense.</p>

            <h2>How do I fit into all of this?</h2>
            <p>Though you’re handing me the reins, I encourage you to be as involved in the project as you want to be. No one knows your business better than you, and by being part of the process you’ll help define the direction your company takes with its digital solution and branding.</p>
            <p>I love working with innovative people to make great products, so let’s make this a partnership.</p>
            <p><a className="btn" href="/contact">Ready to get started?</a></p>

            </div>
            </div>
        </Layout>
      );
  }
}

export default Contact
