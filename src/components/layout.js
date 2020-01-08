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
        <main className="max-w-xl mx-auto pt-16 pb-16">
          <div className="w-full mt-8 sm:mt-16 pt-2">
            {children}
          </div>
        </main>
        <div className="max-w-xl mx-auto mb-16">
          <footer className="w-full py-4 mb-4 mt-16 mb-16 flex justify-end">
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
        </div>
        <Popup type="custom"/>
      </div>
    )
  }
}

export default Layout
