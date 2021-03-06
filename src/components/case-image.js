import React from "react"
import Img from "gatsby-image"

class CaseImage extends React.Component {
  render() {
    let classes = "w-full sm:w-1/3 text-grey text-xs font-sans mr-8 leading-normal"
    classes += this.props.heading || this.props.text ? " py-6 sm:py-16" : ""
    classes += this.props.wide ? " hidden " : ""
    let wideClasses = this.props.wide ? "w-full py-1" : "w-full sm:w-2/3 py-1"

    return (
      <div className="sm:flex sm:-mx-16 bg-blue-lightest px-4 sm:px-16 mt-6 sm:mt-12">
        <div className={classes}>
          {this.props.heading &&
            <strong>
              {this.props.heading}
            </strong>
          }
          {this.props.text &&
            <span className="block">
              {this.props.text}
            </span>
          }
        </div>
        <div className={wideClasses}>
          <Img className="w-full mt-12 mb-12 shadow-xl" fluid={this.props.image} />
        </div>
      </div>
    )
  }
}

export default CaseImage
