import React from "react"
import Header from './header.js'
import '../css/style.css'
import Popup from '../components/popup'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={ this.props.children[0].props.title }>
        <Header/>
        <link rel="stylesheet" href="https://webfonts.fontstand.com/WF-014259-9ed29b97619b53286fcf805a38b05e02.css" type="text/css"/>
        <main className="max-w-xl mx-auto pt-16 pb-16">
          <div className="w-full mt-8 sm:mt-16 pt-2">
            {children}
          </div>
          <footer className="w-full py-4 mb-4 mt-16 flex justify-end">
            <ul className="list-reset float-right">
            <li className="inline-block pl-4">
              <a className="text-grey no-underline" href="/testimonials">Testimonials</a>
            </li>
            <li className="inline-block pl-4">
              <a className="text-grey no-underline" href="/newsletter">Newsletter</a>
            </li>
            <li className="inline-block pl-4">
              <a className="text-grey no-underline" href="/feed.xml">RSS</a>
            </li>
              <li className="inline-block pl-4">
                <a rel="noopener noreferrer" target="_blank" className="text-grey no-underline" href="https://twitter.com/antonsten">Twitter</a>
              </li>
              <li className="inline-block pl-4">
                <a rel="noopener noreferrer" target="_blank" className="text-grey no-underline" href="https://www.linkedin.com/in/antonsten/">LinkedIn</a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
    )
  }
}

export default Layout
