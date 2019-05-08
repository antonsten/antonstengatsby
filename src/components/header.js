import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="mb-12">
      <div className="max-w-xl mx-auto flex py-6 items-center justify-between">
        <Link to="/"><img alt="anton sten" style={{ width: '98px' }} src="/images/antonsten.svg"/></Link>
        <ul className="list-reset">
          <li className="inline-block pl-6">
            <Link className="text-black no-underline" to="/about" rel="prev">
              About
            </Link>
          </li>
          <li className="inline-block pl-6">
            <Link className="text-black no-underline" to="/work" rel="prev">
              Work
            </Link>
          </li>
          <li className="inline-block pl-6">
            <Link className="text-black no-underline" to="/writing" rel="prev">
              Writing
            </Link>
          </li>
          <li className="inline-block pl-6">
            <Link className="text-black no-underline" to="/work-with-me" rel="prev">
              Work with me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
