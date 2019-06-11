import React from "react"
import Header from './header.js'
import '../css/style.css'
import Popup from '../components/popup'
import { Link } from "gatsby"

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
          <footer className="w-full py-4 mb-4 mt-16 flex justify-end">
            <ul className="list-reset float-right">
              <li className="inline-block pl-4">
                <Link className="text-black no-underline hover:text-orange" to="/contact">Contact</Link>
              </li>
              <li className="inline-block pl-4">
                <a rel="noopener noreferrer" target="_blank" className="text-black no-underline hover:text-orange" href="https://twitter.com/antonsten">Twitter</a>
              </li>
              <li className="inline-block pl-4">
                <a rel="noopener noreferrer" target="_blank" className="text-black no-underline hover:text-orange" href="https://www.linkedin.com/in/antonsten/">Linkedin</a>
              </li>
            </ul>
          </footer>
        </main>

        <Popup type="custom"/>
      </div>
    )
  }
}

export default Layout
