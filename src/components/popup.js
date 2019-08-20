import React from "react"
import '../css/style.css'
import { Link } from 'gatsby';

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isVisible: true};

    this.hidePopup = this.hidePopup.bind(this);
  }

  hidePopup() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }));
  }

  render() {
    if(this.state.isVisible) {
      return (
        <div className="hidden bg-grey-lighter py-2 fixed w-full pin-b text-black sm:flex items-center">
          <div className="max-w-xl mx-auto w-full px-4">
            <p className="pr-12 sm:pr-0 font-sans text-base">Want a UX-course in your inbox? <Link to="/uxcourse">Get it for free!</Link></p>
          </div>
          <img onClick={ this.hidePopup }  className="absolute pin-r mr-8 my-auto cursor-pointer" alt="close" src="/images/close.svg"/>
        </div>
      )
    }
    else {
      return (
        <></>
      )
    }
  }
}

export default Popup
