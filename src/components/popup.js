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
        <div className="hidden bg-grey-lighter fixed w-full pin-b text-black sm:flex items-center">
          <div className="max-w-xl mx-auto w-full px-2">
            <p className="pr-12 sm:pr-0 font-sans text-lg">"Great laser focused UX content, told in an easy to understand way, helping to make sure I keep my eye on the UX ball. <Link to="/newsletter">Don’t miss out."</Link></p>
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
