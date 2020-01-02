import React from "react"
import { Link } from "gatsby"

class Testimonial extends React.Component {
  render() {
    let classes = 'testimonial mt-4 sm:mt-8 sm:-mx-16';
    const innerHtml = { __html: this.props.text }

    return (
      <div className={ classes }>
        <blockquote>
          <div className="w-full sm:flex h-full mt-16 block mb-16 bg-black p-8 sm:p-16 text-white">
            <div className="w-1/2 sm:w-1/3">
              { this.props.logo && <img style={{filter: "invert(100%)"}} alt={this.props.author} className="tesimonial-logo mb-4" src={ this.props.logo } />}
            </div>
            <div className="w-full sm:w-2/3">
              <div className="text-lg sm:text-lg font-serif leading-tight italic" dangerouslySetInnerHTML={innerHtml}></div>
              <div className="pt-6 font-sans inline-block tracking-wide text-xs uppercase font-bold">{this.props.author}</div><br />
              { this.props.case &&
                <Link to={ this.props.case } className="mb-2 uppercase text-link text-xs font-sans font-bold">View case</Link>
              }
            </div>
          </div>
        </blockquote>
      </div>
    )
  }
}

export default Testimonial
