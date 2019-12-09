import React from "react"
import { Link } from "gatsby"

class Testimonial extends React.Component {
  render() {
    let classes = 'testimonial mt-4 sm:mt-8 w-full';
    const innerHtml = { __html: this.props.text }

    return (
      <div className={ classes }>
        <blockquote>
          <div className="w-full h-full mt-8 block mb-16 bg-black p-8 text-white">
            { this.props.logo && <img style={{filter: "invert(100%)"}} alt={this.props.author} className="tesimonial-logo mb-4" src={ this.props.logo } />}
            <div className="text-lg sm:text-lg font-italic font-serif leading-tight" dangerouslySetInnerHTML={innerHtml}></div>
            <strong className="pt-6 inline-block tracking-wide text-xs uppercase">{this.props.author}</strong><br />
            { this.props.case &&
              <Link to={ this.props.case } className="mb-2 uppercase font-bold text-link text-xs font-sans">View case</Link>
            }
          </div>
        </blockquote>
      </div>
    )
  }
}

export default Testimonial
