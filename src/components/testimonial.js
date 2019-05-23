import React from "react"
import { Link } from "gatsby"

class Testimonial extends React.Component {
  render() {
    let classes = 'testimonial mt-4 sm:mt-8 w-full';
    const innerHtml = { __html: this.props.text }

    return (
      <div className={ classes }>
        <blockquote className="bg-white p-8 rounded-sm">
          <div className="w-full h-full">
            { this.props.logo && <img alt={this.props.author} className="tesimonial-logo mb-4" src={ this.props.logo }/>}
            <div className="text-sm sm:text-lg" dangerouslySetInnerHTML={innerHtml}></div>
            <strong className="pt-6 inline-block tracking-wide text-orange text-xs uppercase">{this.props.author}</strong>
            { this.props.case &&
              <Link to={ this.props.case } className="btn-light mb-2" to={ this.props.case }><span>View case</span><img src="/images/arrow-right.svg"/></Link>
            }
          </div>
        </blockquote>
      </div>
    )
  }
}

export default Testimonial