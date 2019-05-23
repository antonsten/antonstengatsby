import React from "react"
import Header from './header.js'
import '../css/style.css'
import Popup from '../components/popup'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header/>
        <main className="max-w-xl mx-auto pt-16 pb-16">
          <div className="w-full mt-8 sm:mt-16 pt-2">
            {children}
          </div>
          <footer className="w-full py-4 mb-4 mt-16 flex justify-end">
            <ul className="list-reset">
              <li className="inline-block pl-4">
                <a className="text-black no-underline hover:text-orange" href="mailto:anton@antonsten.com">Email</a>
              </li>
              <li className="inline-block pl-4">
                <a className="text-black no-underline hover:text-orange" href="https://twitter.com/antonsten">Twitter</a>
              </li>
              <li className="inline-block pl-4">
                <a className="text-black no-underline hover:text-orange" href="https://www.linkedin.com/in/antonsten/">Linkedin</a>
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
