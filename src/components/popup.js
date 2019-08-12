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
    console.log('lmao')
    this.setState(state => ({
      isVisible: !state.isVisible
    }));
  }

  render() {
    if(this.state.isVisible) {
      return (
        <div className="bg-blacker py-6 fixed w-full pin-b text-white flex items-center">
          <div className="max-w-lg mx-auto w-full px-4 sm:px-0">
            <p className="mb-0 pr-12 sm:pr-0">Due to a late cancellation on a project, I have availability from August 19. <Link className="text-white border-white" to="/contact">Let's talk!</Link></p>
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
