import React from "react"
import { Link } from "gatsby"

class Testimonial extends React.Component {
  render() {
    let classes = 'testimonial mt-4 sm:mt-8 w-full';
    const innerHtml = { __html: this.props.text }

    return (
      <div className={ classes }>
        <blockquote className="p-8 rounded-none color-grey-lightest">
          <div className="w-full h-full">
            { this.props.logo && <img alt={this.props.author} className="tesimonial-logo mb-4" src={ this.props.logo }/>}
            <div className="text-lg sm:text-xl font-serif leading-tight" dangerouslySetInnerHTML={innerHtml}></div>
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
