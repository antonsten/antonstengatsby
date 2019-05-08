import React from "react"
import Header from './header.js'
import '../css/style.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header/>
        <main className="max-w-xl mx-auto flex flex-wrap">
          {children}
          <footer className="w-full py-4 mb-4 mt-16 flex justify-end">
            <ul className="list-reset">
              <li className="inline-block pl-4">
                <a className="text-black no-underline" href="mailto:anton@antonsten.com">Email</a>
              </li>
              <li className="inline-block pl-4">
                <a className="text-black no-underline" href="https://twitter.com/antonsten">Twitter</a>
              </li>
              <li className="inline-block pl-4">
                <a className="text-black no-underline" href="https://www.linkedin.com/in/antonsten/">Linkedin</a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
    )
  }
}

export default Layout
