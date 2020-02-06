import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import Form from '../../components/signupform';

class Masteringfreelance extends React.Component {
  componentDidMount() {
      let fathom = window.fathom || null;
      document.getElementById('buy-button').addEventListener('click', () => {
        if(fathom) {
          fathom('trackGoal', '6CCBFV82', 0);
        }
      });
    }
  render() {
  const { data } = this.props

    return (
      <Layout>
          <SEO title="User Experiences that Matter - E-book"/>
          <div className="w-full">
          <Img fluid={data.image1.childImageSharp.fluid} />
            <h1 className="pr-0 sm:pr-12">User Experiences that Matter e-book</h1>

            <del>
              Great user experiences create happy, loyal users. They love spending time and money with companies who have invested in their experience. But where do you start in creating a great user experience? Let this book help you with that.
            </del>

            <h2>What's inside</h2>
            <p className="mb-12">With so many wildly successful businesses out there, we are left wondering what they did to get there and how they stay there. Is there a magic bullet? Did they make a deal with the devil? The answer is actually far more simple than you’d imagine. <em>It turns out that they just value their customers by creating great user experiences for them.</em> Whether it’s their product, their website, or even their customer service – a business rises or falls on the experience their customers have.<br /></p>
            <p className="mb-12"><strong>In User Experiences that Matter, I give you an introduction to creating great user experiences by focusing on the human using the product.</strong></p>
            <Testimonial logo="/images/clients/keystone.png" text="Outrageously good. Few people have Anton’s eye for details. I have hired Anton for several projects ranging from brand strategy, UX/UI makeovers to complete front-end designs. He has always delivered top notch, stellar work. I was deeply impressed by his ability to take an overly complex user interface and make it easy to use in just a few steps. <em>You can easily tell that his decade of acquired knowledge in design and usability makes him stand out among other UX experts.</em> It’s always reassuring to know he is on your side no matter what design project you have." author="STEFAN HELGESSON, STRATEGIC DIRECTOR, KEYSTONE"/>

            <h2>What is UX Design?</h2>
            <p className="mb-12">
            Let’s start by understanding what User Experience really is, what it isn’t, and why it matters. Our first chapters will clear these up as I think it’s important that we are all on the same page.<br />
<ul>
<li>UX Design Explained</li>
<li>UI Design – UX’s Nephew</li>
<li>What UX Is and What It Isn’t</li>
<li>Everyone is a UX Designer, Even You!</li>
<li>The Extra Effort for Great UX</li>
<li>UX Design as a Problem Solver</li>
</ul></p>
<h2>Creating User Experiences</h2>
<p className="mb-12">
One of the virtues I hold dear as a UX Designer is my curiousity about how things work. I’ve had the opportunity to meet and work with so many talented people that I could likely do an entire book with just interviews.
<ul>
<li>Emil Ovemar, TocaBoca</li>
<li>Marcus Woxneryd, ustwo</li>
<li>James Gill, GoSquared</li>
<li>Paul Jarvis</li>
<li>Mikael Cho, Unsplash</li>
<li>Kieran Rheaume, DesignerNews</li>
</ul></p>

<h2>Designing for People</h2>
<p className="mb-12">User Experiences are created out of love and a deep desire to make things better. These final chapters will cover just this – the importance of creating something for PEOPLE rather than “users”.
<ul>
<li>Growing Relationsships by Understanding Value</li>
<li>Time vs. Attention</li>
<li>UX is Much More Than Software</li>
<li>MVP – Minimum Viable Product</li>
<li>Pain, Dream, Fix</li>
<li>Designing with Emotions in Mind</li>
<li>Change is Quick, Results Take Time</li>
<li>Built to Last</li>
</ul></p>
            <hr/>

            <Form name="userexperiencesmatter" title="Get a free email course" text="Get a preview of the book through this 5 day free email course"/>

<h2>Improve Your User Experience Now</h2>
<p className="mb-12">Get User Experiences that Matter and get all my insight into how to craft your customer’s experiences and grow your business.
<br /><br />
For just $9 (or more, up to you) you’ll get:<br />
<ul>
<li>The book (PDF & Mobi)<br /></li>
<li>Audiobook (mp3)<br /></li>
<li>Worksheets<br /></li>
<li><s>The List of Tools I Use to Run My Business.*</s></li>
</ul>

<a className="btn" href="https://gumroad.com/l/userexperiencesmatter" id="buy-button">Buy User Experiences that Matter</a>

<Testimonial text="Anton is clearly ahead of the game when it comes to UX, Interface design and being a total professional. Beware of friendly Swedish User Interface Designers who come equipped with positive open attitudes and sharp clean design principles. They are usually right, just nod and agree."/>
<p>
* The <a href="https://www.antonsten.com/tools" target="_blank" rel="noopener noreferrer">List of Tools I Use to Run My Business</a> is now available and open to all and doesn't require a purchase.</p>
</p>


            <h2>About the author</h2>
            <p className="mb-12">
            Anton believes in helping those around him create amazing user experiences through hard work and attention to detail. For the <a href="/work" target="_blank" rel="noopener noreferrer">past 20 years</a>, he has worked in the digital space gaining experience and insight into how to best impact the design world. Since starting his freelance business 10 years ago, he has worked with companies like IKEA and Spotify to deliver one of a kind experiences to their users.<br />
            Recently Anton has shared what he has learned through his books, User Experiences that Matter and <a href="https://www.antonsten.com/books/masteringfreelance" target="_blank" rel="noopener noreferrer">Mastering Freelance</a>. These provide the unique opportunity to help those just starting out find success in their fields.<br />
            When he isn’t creating better user experiences, Anton enjoys spending time with his wife and their dog – ideally with a coffee outside in the sun.</p>
<hr/>
          </div>


      </Layout>
    )
  }
}

export default Masteringfreelance

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "ux-book.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
