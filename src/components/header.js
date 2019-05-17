import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <header className="mb-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between w-full py-6">
          <Link to="/"><img alt="anton sten" style={{ width: '98px' }} src="/images/antonsten.svg"/></Link>
          <ul className="list-reset">
            <li className="inline-block pl-6">
              <Link className="text-black no-underline hover:text-orange" to="/about" rel="prev">
                About
              </Link>
            </li>
            <li className="inline-block pl-6">
              <Link className="text-black no-underline hover:text-orange" to="/work" rel="prev">
                Work
              </Link>
            </li>
            <li className="inline-block pl-6">
              <Link className="text-black no-underline hover:text-orange" to="/writing" rel="prev">
                Writing
              </Link>
            </li>
            <li className="inline-block pl-6">
              <Link className="text-black no-underline hover:text-orange" to="/work-with-me" rel="prev">
                Work with me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
