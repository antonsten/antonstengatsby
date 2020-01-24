import React from "react"
import Img from "gatsby-image"

import '../css/style.css'
import Layout from "../components/layout"
import Testimonial from '../components/testimonial';
import { Link } from 'gatsby';
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
      return (
        <Layout>
          <SEO title="Resumé"/>
            <h1>Resumé</h1>
            <del>
              I’m a Swedish designer experienced in branding, UI, UX and product design working with clients globally. I help individuals, startups and small to large businesses look their best online by conceptualising and designing simple and clean interfaces for digital platforms that their customers love.
            </del>

            <h2>Work experience</h2>
            <p className="mb-12">
              <b>Le Petit Garcon, 2009 - Present</b><br></br>
              Le Petit Garcon is my personal design studio. My clients have ranged from global retailers to local coffee shops, tech startups to Fortune 500 companies, small studios to large agencies and everything in between.
              <br></br>Selected clients: IKEA, Spotify, Telia, E.On, Hyper Island, Swedbank
              <br></br><br></br>
              <Link to="/testimonials">Read what my clients say</Link>
            </p>


            <p>
              <b>Creative Director, Mubito, Malmö Sweden, 2008 - 2009</b><br></br>
              Mubito offered a unique direct-to-consumer platform for the music and entertainment industry. I had an overall responsibility for all creative work. I was also guiding and managing the creative team (both front-end coders and designers, around 10-15 persons) and I was responsible for developing the Mubito brand.
            </p>

            <Testimonial text="I had the pleasure to work with Anton on both a general and a project basis.
              Anton has a great knack of understanding not only the principles of design, but more importantly the user or commercial needs driving a particular creative challenge. We worked on numerous new media design and communication related projects together.
              Anton has a strong hands-on grasp of new media space and understands the implications of social networking and the new world of communication better than any creative I’ve met. I learn about a lot of new tools and apps from Anton.
              Personally, Anton is an intelligent, easy-going guy who’s fun to work with. There’s always time to discuss something interesting." author="ANDREW MARTYN, FOUNDER & CEO - MUBITO"/>

            <Testimonial text="Anton is an experienced and passionate Creative Director, with a great creative design mind, and the ability to deliver on this vision. Anton is also a great colleague - relaxed and fun to be around in a working environment, whilst maintaining the drive and focus required to exceed every client expectation." author="DANIEL KENNEDY, SENIOR DIGITAL PROJECT MANAGER - MUBITO"/>

            <p className="pt-12">
              <b>Senior Art Director, Bates Y&R, Copenhagen Denmark, 2008</b><br></br>
              Bates Y&R is the winner of the Advertising Effectiveness Awards 2004-2008. I was responsible for concept creation as well as art direction for interactive media. I was also responsible for trends in digital media to ensure highest quality in creativity and effectiveness.
              <br></br>Selected clients: Chrysler, Dodge, Danske Spil, DSB, Mercedes-Benz and Post Danmark
            </p>

            <Testimonial text="Anton is a very talented creator and also a person that I have enjoyed working with immensely. A definitive strength of his is that his creative solutions are also valid from a commercial point-of-view without losing creative edge. Working with Anton means that, as a Project Manager, you can always be sure that you will be able to deliver to the client with quality and on time." author="PÅL KATSLER, ACCOUNT DIRECTOR - BATES Y&R"/>

            <p className="pt-12">
              <b>Web Director, ANR.BBDO, Stockholm Sweden - 2006 - 2008</b><br></br>
              ANR.BBDO is considered amongst the best advertising agencies in Sweden and part of the BBDO network. I was responsible for concept creation and art direction and for interactive media. Managing projects in partnership with agencies like B-reel and Acne Digital and educating the company about digital media.
              <br></br>Clients: Bredbandsbolaget, Hyresgästföreningen, Mercedes-Benz, Arla and Folksam
            </p>

            <Testimonial text="Anton is a valued co-worker, always delivering great design. He is also one of the most well-oriented online-art directors I ever had the pleasure of working with; always keeping an eye out for new trends within design and tech within the fields of digital media." author="ULRIKA SCHREIL, ACCOUNT DIRECTOR - ANR BBDO"/>

            <p className="pt-12">
              <b>Art Director, Starring, Stockholm Sweden - 2004 - 2006</b><br></br>
              Starring (formerly Moonwalk Sthlm and now Syrup Sthlm) is one of Sweden’s most awarded agencies. I worked as an Art Director on major projects like amfpensions.se, ica.se, hm.com as well as Guldägget-winner Spray (Make Love not Spam).
              <br></br>Clients: AMF Pension, Pfizer, ICA, Björn Borg, Cancerfonden, Trygg Hansa, Ticket, H&M Rowells, SBAB and Spray
            </p>

            <p className="pt-12">
              <b>Art Director, Projector, Stockholm Sweden - 2002 - 2004</b><br></br>
              Formerly known as Kabel New Media, I was Designer / Art Director on major projects like gb.se and award winning campaigns for Absolut Vodka (Absolut Stella and Absolut Vanilia). I was also part of the creative team that was responsible for the launch of Ben & Jerry’s in Sweden.
              <br></br>Clients: GB Glace, Absolut Vodka, Electrolux, Ben & Jerry’s and EMI Virgin
            </p>

            <p className="pt-12">
              <b>Design intern, Lateral, London United Kingdom - 2001</b><br></br>
              Design internship as a part of my education at Hyper Island.
              <br></br>Clients: Levi’s, RSPCA and Boddingtons.
            </p>

            <p className="pt-12">
              <b>Designer, MIOS e-Solutions, Turku Finland - 2000</b>
            </p>

            <p className="pt-4">
              <b>Freelance Webdesigner, Mainostoimisto Bock’s Office, Vasa Finland - 1996-2000</b>
            </p>

            <p className="pt-12">
              <b>Freelance work, Le Petit Garcon 2003 - 2007</b><br></br>
              Art direction and animation work for selected clients, mostly within fashion, technology and music.
              <br/>Clients: Nokia, Diesel, Tiger of Sweden and Blueprint. In partnership with Tina Ahl, Jung Relations and Ytterborn & Fuentes 
            </p>


            <h2 className="mt-12">Education</h2>
            <p>
              IHM Business School - Business Management, 2010<br></br>
              Hyper Island - School of New Media Design, 2000 - 2002<br></br>
              MUG - Medarbetarutveckling i grupp, 2001
            </p>

            <h2>Awards and achievements</h2>
            <p>
            Hyper Island Digital Media 2018 - Module leader<br></br>
            Hyper Island Digital Media 2017 - Module leader<br></br>
            Hyper Island Digital Media 2015 - Module leader<br></br>
            Hyper Island Digital Media 2014 - Module leader<br></br>
            Hyper Island Master Class / HIMC – Working with ideas<br></br>
            Hyper Island Digital Media 2012 – Module leader: Branding & Visual Design Hyper Island Digital Media 2011 – Managing students in their design specialisation Hyper Island Master Class / HIMC – Q&A on future of advertising and digital<br></br>
            Module leader: Portfolio at Hyper Island, Karlskrona & Stockholm 2008-2009<br></br>
            Speaker at Hyper Island, Karlskrona 2005, 2006<br></br>
            Speaker at RMI Berghs, Stockholm 2005, 2006<br></br>
            The FWA - Björn Borg / Spring - Summer Collection 2006<br></br>
            Guldägg - Make Love Not Spam / Spray 2004<br></br>
            “Taschens 1000 favorite websites” - www.soulsampler.com 2002<br></br>
            Cresta Award Winner - Absolut Vanilia 2002<br></br>
            The FWA - Absolut Vanilia 2002<br></br>
            Cannes Cyber Lions Nominee - Absolut Vanilia<br></br>
            Revolution Awards - Best Campaign - Lost Change / Levi’s 2001<br></br>
            NMA Effectiveness award - Charity Category - RSPCA Online 2001 
            </p>

            <Link to="/contact" className="btn mt-12">Let's talk</Link>
        </Layout>
      );
  }
}

export default About

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "anton.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
