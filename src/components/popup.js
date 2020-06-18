import React from "react"
import "../css/style.css"
import { Link } from "gatsby"
import cookie from "react-cookies"

class Popup extends React.Component {
  constructor(props) {
    super(props)
    if (typeof cookie.load("isVisible") == "undefined") {
      cookie.save("isVisible", true, { path: "/" })
    }
    this.state = { isVisible: cookie.load("isVisible") }
    this.hidePopup = this.hidePopup.bind(this)
  }

  hidePopup() {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }))
    cookie.save("isVisible", false, { path: "/" })
  }

  render() {
    if (this.state.isVisible === "true") {
      return (
        <div className="hidden bg-blue-darkest fixed w-full pin-b text-black sm:flex items-center">
          <div className="max-w-xl mx-auto w-full">
            <p className="pr-12 sm:pr-12 font-serif text-base text-white my-4">All my books are now available for free! <strong><Link to="/books-are-free">Find out more.</Link></strong></p>
          </div>
          <img
            onClick={this.hidePopup}
            className="absolute pin-r mr-8 my-auto cursor-pointer"
            alt="close"
            src="/images/close.svg"
          />
        </div>
      )
    } else {
      return <></>
    }
  }
}

export default Popup
