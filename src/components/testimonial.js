import React from "react"

class Testimonial extends React.Component {
  render() {
    const location = window.location.href.includes("/work");

    let classes = location ? 'testimonial mt-4 sm:mt-8 w-full px2 sm:px-4' : 'testimonial mt-4 sm:mt-8 w-full';
    const innerHtml = { __html: this.props.text }

    return (
      <div className={ classes }>
        <blockquote className="bg-white p-8 rounded-sm border-dashed border">
          <div className="w-full h-full">
            { this.props.logo && <img alt={this.props.author} className="tesimonial-logo mb-4" src={ this.props.logo }/>}
            <div dangerouslySetInnerHTML={innerHtml}></div>
            <strong className="pt-6 inline-block tracking-wide text-orange text-xs uppercase">{this.props.author}</strong>
          </div>
        </blockquote>
      </div>
    )
  }
}

export default Testimonial