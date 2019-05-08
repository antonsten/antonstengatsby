import React from "react"

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

export default Testimonial