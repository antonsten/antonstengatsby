import React from "react"
import '../css/style.css'

class Grid extends React.Component {
  render() {
      return (
        <div className="max-w-xl mx-auto">
          <div className="block flex-wrap flex -mx-2 sm:-mx-4">
            <Client logo="/images/clients/spotify.png"  link="https://www.spotify.com/get-desktop/"/>
            <Client logo="/images/clients/eon.png" case="/case/eon" />
            <Client logo="/images/clients/izettle.png" link="https://www.izettle.com/?stay"/>

            <Testimonial text="Whenever someone asks me if I know any good freelance UX designers I always answer with Anton. <span class='highlight'>He’s a great designer with superior business understanding who always put the user in the front seat and delivers bloody good work.</span> If you ever get a chance to work with Anton, don’t miss it." author="christian wilsson, head of design - spotify"/>

            <Client logo="/images/clients/mercedes.png"/>
            <Client logo="/images/clients/elle.png"/>
            <Client logo="/images/clients/telia.png" case="/case/telia" />

            <Testimonial text="Anton was thorough and a pleasure to work with. He’s a great collaborator and partner to work through product solutions alongside. <span class='highlight'>He does what he says and never misses a deadline, an unfortunate rarity these days</span> that you don’t have to worry about with Anton." author="TRAVIS SCHMEISSER, FOUNDER & PARTNER, FIRST PRINCIPLE"/>

            <Client logo="/images/clients/frank.png" case="/case/frank" />
            <Client logo="/images/clients/5th.png" link="https://www.shopify.com/enterprise/australian-ecommerce-fashion-the-5th"/>
            <Client logo="/images/clients/hyperisland.png" link="https://www.hyperisland.com"/>

            <Testimonial text="I have had the pleasure of working with Anton in a visual and UX redesign of our services. <span class='highlight'>I am enthused and impressed by how Anton chooses simplicity over complexity and keeps the design interesting, appealing and accessible.</span> Furthermore, he is a humble and unassuming person that is a pleasure to work with. " author="HUBERT KJELLBERG, PRESIDENT, BROCKHAUS & NATIONALENCYKLOPEDIN"/>

            <Client logo="/images/clients/swedbank.png"/>
            <Client logo="/images/clients/fbg.png" case="/case/falkenberg" />
            <Client logo="/images/clients/lysa.png" link="https://lysa.se"/>

            <Testimonial text="I had the pleasure of working with Anton on one of our highest priority projects. He was able to <span class='highlight'>quickly familiarize himself with the challenges at hand and produced conceptual UX designs that not only met the demands, but even exceeded expectations.</span> Anton has been a great co-creator with both a positive attitude and openness for feedback, as well as able to get the job done on time. " author="GREG HENRIQUES, HEAD OF CUSTOMER EXPERIENCE, SWEDBANK"/>

            <Client logo="/images/clients/apotekhjartat.png" link="https://www.apotekhjartat.se"/>
            <Client logo="/images/clients/ericsson.png"/>
            <Client logo="/images/clients/fbg-kommun.png" case="/case/falkenberg-kommun" />

            <Testimonial text="We hired Anton for some design work at Fjord and were thrilled with the results. Not only was he very responsive during the project briefing and negotiation process, he also was very flexible to our demanding project start time and schedule. Once the work was under way, we realized Anton is extremely creative with a high-standard for what he produces. <span class='highlight'>His design aesthetic is quite sophisticated and it’s obvious he sincerely cares about going the extra mile for his clients.</span>" author="JAMIE GUTIERREZ, SENIOR MANAGER OF TALENT ACQUISITION, ADIDAS"/>

            <Client logo="/images/clients/ne.png" case="/case/ne"/>
            <Client logo="/images/clients/absolutvodka.png"/>
            <Client logo="/images/clients/ica.png"/>

            <Testimonial text="We went through a huge redesign as part of a mobile initiative for the business and migrate the site to a responsive design and optimise user journeys for mobile users. Anton was provided with wireframes and journey documents and got to work. He followed the brief but was not afraid to voice his opinion and advise where he felt things could be improved. The project was extremely well managed with clear milestones which eliminated scope creep. The result was an extremely clean and smart interface which has been great for our business.
  <br><br>
  The entire project was run remotely between our London office, Bulgaria office and Anton. We still marvel at the fact that we never spoke to one of the most important people of the overall project. <span class='highlight'>Everything was communicated over email and Skype chat with zero dramas, exactly how we like it. On top of all of that Anton is clearly ahead of the game when it comes to UX, Interface design and being a total professional.</span>
  <br><br>
  Beware of friendly Swedish User Interface Designers who come equipped with positive open attitudes and sharp clean design principles. They are usually right, just nod and agree." author="TOM HARROW, MULTIPLE STARTUP FOUNDER"/>

            <Client logo="/images/clients/nudie.png" link="https://www.nudiejeans.com"/>
            <Client logo="/images/clients/volvo.png"/>
            <Client logo="/images/clients/cdon.png"/>

            <Testimonial text="I had the pleasure of working with Anton at IKEA where he played an important lead role in the concept development of our global website. He shared and activated his indepth knowledge and experience in design in a great manner. I would like to work with Anton again and can recommend him for any digital media project." author="johan ny, project manager, ikea"/>

            <Client logo="/images/clients/rga.png"/>
            <Client logo="/images/clients/keystone.png"/>
            <Client logo="/images/clients/suzuki.png"/>

            <Testimonial text="Outrageously good. Few people have Anton’s eye for details. I have hired Anton for several projects ranging from brand strategy, UX/UI makeovers to complete front-end designs. He has always delivered top notch, stellar work. I was deeply impressed by his ability to take an overly complex user interface and make it easy to use in just a few steps. <span class='highlight'>You can easily tell that his decade of acquired knowledge in design and usability makes him stand out among other UX experts.</span> It’s always reassuring to know he is on your side no matter what design project you have." author="STEFAN HELGESSON, STRATEGIC DIRECTOR, KEYSTONE"/>

          </div>
        </div>
      );
  }
}

export default Grid

class Testimonial extends React.Component {
  render() {
    let classes = 'testimonial flex px-2 sm:px-4 mt-4 sm:mt-8 w-full ';
    const innerHtml = { __html: this.props.text }

    return (
      <div className={ classes }>
        <blockquote className="">
          <div className="w-full h-full flex-wrap flex pt-2">
            <div dangerouslySetInnerHTML={innerHtml}></div>
            <strong className="pt-2">{this.props.author}</strong>
          </div>
        </blockquote>
      </div>
    )
  }
}

class Client extends React.Component {
  render() {
    let classes = 'client w-1/3 flex px-2 sm:px-4 mt-4 sm:mt-8 sm:h-48 '
    let imgClasses = 'case-image pb-6 sm:pb-0 pt-6 sm:pt-0 pl-6 sm:pl-12 pr-6 sm:pr-12'
    const noProps = !this.props.link && !this.props.case

    return (
      <div className={ classes }>
        <div className="w-full flex items-center justify-center h-full bg-white relative">
          { this.props.link &&
            <a rel="noopener noreferrer" target="_blank" className="no-underline" href={ this.props.link }>
              <img alt={this.props.logo} className={ imgClasses } src={ this.props.logo }/>
            </a>
          }
          { noProps &&
            <img alt={this.props.logo} className={ imgClasses } src={ this.props.logo }/>
          }
          { this.props.case &&
            <span className="w-full flex items-center justify-center h-full bg-white relative">
              <a className="no-underline" href={ this.props.case }>
                <img alt={this.props.logo} className={ imgClasses } src={ this.props.logo }/>
              </a>
              <a href={ this.props.case } className="case-link link invisible sm:visible">View case →</a>
            </span>
          }
        </div>
      </div>
    )
  }
}