import React from "react"
import { Link } from "gatsby"

class Client extends React.Component {
  render() {
    let classes = 'client w-1/3 flex px-2 sm:px-4 sm:h-48 '
    let imgClasses = 'case-image pb-6 sm:pb-0 pt-6 sm:pt-0 pl-6 sm:pl-12 pr-6 sm:pr-12'
    const noProps = !this.props.link && !this.props.case

    classes += this.props.spacingBottom ? this.props.spacingBottom : '';

    return (
      <div className={ classes }>
        <div className="w-full flex items-center justify-center h-full bg-grey-lightest relative">
          { this.props.link &&
            <a rel="noopener noreferrer" target="_blank" className="no-underline" href={ this.props.link }>
              <img alt={this.props.logo} className={ imgClasses } src={ this.props.logo }/>
            </a>
          }
          { noProps &&
            <img alt={this.props.logo} className={ imgClasses } src={ this.props.logo }/>
          }
          { this.props.case &&
            <span className="w-full flex items-center justify-center flex-wrap h-full relative">
              <Link className="no-underline" to={ this.props.case }>
                <img alt={this.props.logo} className={ imgClasses } src={ this.props.logo }/>
              </Link>
              <Link to={ this.props.case } className="text-center case-link mb-1 w-full absolute pin-b pb-4 font-sans text-xs uppercase tracking-wide font-bold link invisible sm:visible">View case</Link>
            </span>
          }
        </div>
      </div>
    )
  }
}

export default Client
