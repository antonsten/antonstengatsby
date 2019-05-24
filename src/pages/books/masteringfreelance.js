import React from "react"
import '../../css/style.css'
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Testimonial from '../../components/testimonial';
import Form from '../../components/signupform';


class Masteringfreelance extends React.Component {
  render() {
  const { data } = this.props
    return (
      <Layout>
          <SEO title="Mastering Freelance - E-book"/>
          <div className="w-full">
            <h1 className="pr-0 sm:pr-12">Mastering Freelance - your guidebook about all the bits and pieces of a freelancing career.</h1>

            <del>
              All freelancers face the same challenges: <em>What are you offering? Who are your clients? How do you find your clients? What should you charge them?</em>
<br /><br />
              As if finding the answers to those questions wasn’t hard enough, freelancing can get pretty lonely too – making it even harder.
              I want to help you avoid these struggles and find your success even faster.
            </del>

            <Img className="w-full rounded-sm shadow-md" fluid={data.image1.childImageSharp.fluid} />

            <h2>Find success</h2>
            <p className="mb-12">Have you dreamed of freelancing while stuck in your cubicle? Have you already struck out on your own and are struggling to making ends meet? Don’t worry; you’re not alone. I set out on my freelancing journey ten years ago, struggled, found success, and haven’t looked back.
<br /><br />
Mastering Freelance is a guidebook for you if you’re thinking about starting this journey but are unsure about all of the bits and pieces that are necessary.
<br /><br />
The book covers things like finding your reason for freelancing (important), how to get your first clients (even more important), what to charge them (really really important).
<br /><br />
To top it all off, I’ve picked the brains of some of the best freelancers in the world, including <a href="http://jessicahische.is" target="_blank">Jessica Hische</a>, <a href="http://danmall.me" target="_blank">Dan Mall</a>, <a href="https://pjrvs.com" target="_blank">Paul Jarvis</a>, <a href="https://www.kaleighmoore.com" target="_blank">Kaleigh Moore</a> and many others!</p>

            <Testimonial text="I'm just dipping my toes into the freelancing pool now while still having the security of my permanent position. I'm already confident though that this is the life I'm looking for - a life with more flexibility and power to control - and a lot more personal responsibilities! I think it's important for any freelancer to try out new things. Making mistakes is inevitable, learning from them is what will make me successful!<br /><br />Mastering Freelance is one of the things that has made me take the leap from a steady pay check to a new life with possibilities. It gave me the right push I needed at the right moment so I’m super glad I bought it. "/>

            <h2>Here's what you'll learn</h2>
            <p className="mb-12">I’ve poured 10 years of freelancing experience into this book, so I’m confident that it’ll help you take confident steps towards success. I’ve intentionally kept it short; it’s just under 100 pages. Anyone can write a long book, but keeping it short and to the point required me to find the essence of every subject. A song doesn’t get better if it’s 10 minutes long versus 4, it’s just…longer. I wrote Mastering Freelance to get to the core of the subject and get you out and applying it!</p>
            <hr/>


            <h2>Contents</h2>
            <p className="mb-12">
            <strong>Why Freelance</strong><br />
            One of the most important things in becoming successful is understanding your reason. Why are you freelancing? What is that you’ll want to achieve? Financial freedom? Flexibility? Being your own boss? Whatever your reasons are, understanding them is the first step towards becoming the best freelancer you can be.
<br /><br />
            <strong>Getting Started</strong><br />
            So you’re ready to get started, and you’ve just quit your job! Great! Now what…? Turns out, no clients will be knocking on your door the first day of business. I’ll outline all the steps I took to transition from working full-time to working my-times.
<br /><br />
            <strong>Selling & Pricing</strong><br />
            One of the biggest concerns of freelancers are a variation of “How do I find clients?” and “What do I charge them?”. When you’re running your own business, this is something that you’re solely responsible for and that (obviously) is an important part of running your own business. Without paying clients, it’s just a hobby. I’ll teach you where to look for clients and what to charge them – with some help from Dan Mall who literally <a href="https://abookapart.com/products/pricing-design" target="_blank">wrote the book on Pricing!</a>
<br /><br />
            <strong>Making a successful career</strong><br />
            If you’re not happy, no amount of money will make you successful. Learn to embrace your happiness, keep your ducks happily in a row, and keep a realistic understanding of success and how it relates to your life.
<br /><br />
            <strong>Communication</strong><br />
            Even if you’re an introvert, you’ll be forced to communicate with clients, co-freelancers, and other stakeholders. I know this because I’ve been through all of it myself! Efficient communication is just showing up at the right time. Woody Allen was right: 90% of success is just showing up.
<br /><br />
            <strong>Marketing</strong><br />
            Digital marketing today is a mess and unless you’re a digital marketing expert knowing what to focus on can be a painful process. There’s just no time for a successful freelancer to provide value on Twitter and Facebook, run their blog, have a podcast, go to events, have webinars, and co-host a Slack group. So the key is selection. Let’s find out what works for you!
<br /><br />
            <strong>…plus much much more!</strong>

            </p>
            <hr/>

            <Form name="masteringfreelance" title="Get a free 4-day email course" text="Get a free preview of the book through 4 topics over 4 days"/>

            <hr/>
            <h2>About the author</h2>
            <p className="mb-12">Hey, I’m Anton Sten – a designer and a business owner. Last year I wrote a book called <a href="https://www.antonsten.com/books/user-experiences-matter/" target="_blank">User Experience that Matter</a> and through this book, <a href="https://www.antonsten.com/newsletter" target="_blank">my newsletter</a>, and <a href="https://www.antonsten.com/blog" target="_blank">blog</a>, I’ve helped hundreds of companies create better user experiences for their customers. Now my goal is to help you!
<br /><br />
A big part of successful freelancing is creating great user experiences for your customers. Applying my experience and knowledge in UX-design transformed my freelancing journey and it can do the same for yours!
<br /><br />
I live in Lomma, Sweden with my wife and dog (who is also my colleague, just one of the perks of being your own boss!). Feel free to connect with me on Twitter <a href="https://twitter.com/antonsten" target="_blank">(@antonsten)</a>.</p>
                                    <hr/>

<h2>I'm ready to transform my business</h2>
<p className="mb-12">Realizing the people just starting off with freelancing aren’t always the wealthiest target audience, my goal is to provide as much valuable content at the lowest price possible. There are no “packages” (this is just a cheap way to upsell you more stuff).
<br /><br />
For just $19 (or more, up to you) you’ll get:<br />
• The book (PDF + Mobi)<br />
• The exact templates I use to create invoices, proposals, and budgeting.<br />
• <s>The List of Tools I Use to Run My Business.</s><br /><br />

The <a href="https://www.antonsten.com/tools" target="_blank">List of Tools I Use to Run My Business</a> is now available and open to all and doesn't require a purchase.</p>

<a className="btn" href="https://gumroad.com/l/masteringfreelance?wanted=true" role="link">Buy Mastering Freelance</a>

<Testimonial text="I’m just starting up so everything is new right now and I don’t know what obstacles I might encounter but one thing that your book gave me is confidence in myself."/>
          </div>
      </Layout>
    )
  }
}

export default Masteringfreelance

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "masteringfreelance.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
