import React from "react"
import '../css/style.css'
import Layout from "../components/layout"
import Form from "../components/signupform"
import SEO from "../components/seo"
import { Link } from "gatsby"

class Contact extends React.Component {
  render() {
      return (
        <Layout>
          <SEO title="Create Better User Experiences Email Course"/>
            <h1>Create Better User Experiences Email Course</h1>
            <del className="mb-8">
            My advice to every business owner I talk to is to invest in your product’s user experience. Success is directly tied to how your users feel about you and your product. You can ensure a stronger relationship from the beginning by taking the time to understand your user, the way they interact with your product, and how your brand influences them.
            </del>

            <h2>Do you want to learn how to create better user experiences?</h2>
            <p>How do you get your users to fall in love with your brand? My entire career has been focused on creating user experiences that do just that! Now I’m offering some of what I’ve learned to help you start achieving your goals. Sign up below and receive a FREE course on creating better user experiences.</p>
            <br />

            <p>Here’s whats included:</p>
            <ul className="pl-4">
              <li>Lesson 1: What is User Experience?</li>
              <li>Lesson 2: Why User Experiences are Important</li>
              <li>Lesson 3: The Most Important Thing You’ll Read About Your Website Today</li>
              <li>Lesson 4: 5 Things to Improve Your User Experience</li>
              <li>Lesson 5: Have You Heard of Maslow?</li>
            </ul>
            <Form name="userexperiencesmatter" title="Get a free email course" text="Sign up today to receive this FREE email course with a new lesson every day for the next 5 days!"/>
            <h2>Why does it matter? Let’s talk dollars and cents.</h2>
            <p>First to market no longer guarantees success. No matter how many features you add after release won’t erase the memory of that first, flawed iteration. Companies are starting to recognize that it’s far less expensive to be pro-active during development to prevent usability issues before they occur. The “we’ll fix that later in development” mindset doesn’t appeal to the customer who just wants the product to work. In fact, numerous business studies confirm that companies that embrace usability early on benefit from increased revenue, productivity, and customer loyalty. Happy customers = loyal customers.
            <br />
            Forrester Research published a study saying that “implementing a focus on customers’ experience increases their willingness to pay by 14.4 percent, reduces their reluctance to switch brands by 15.8 percent, and boosts their likelihood to recommend your product by 16.6 percent.”
            <br /><br />
            The numbers add up – User Experience is worth every penny.</p>
</Layout>
      );
  }
}

export default Contact
