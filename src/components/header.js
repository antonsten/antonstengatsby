import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isVisible: false};

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }));
  }

  render() {
    return (
      <header className="mb-12 fixed w-full">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between w-full py-6 border-dashed border-b border-grey">
            <Link to="/"><img alt="anton sten" style={{ width: '98px' }} src="/images/antonsten.svg"/></Link>
            <div className="inline-block sm:hidden cursor-pointer" onClick={ this.showMenu }>
              <img src="/images/menu.svg"/>
            </div>

            { this.state.isVisible &&
              <div className="mobile-menu">
                <ul className="list-reset pl-5 pr-5 mobile-menu__ul flex flex-wrap w-full">
                  <li className="w-1/2 float-left text-center py-16 border-dashed border-l border-b border-r border-grey">
                    <Link className="text-black no-underline hover:text-orange" to="/about" rel="prev">
                      About
                    </Link>
                  </li>
                  <li className="w-1/2 float-left text-center py-16 border-dashed border-r border-b border-grey">
                    <Link className="text-black no-underline hover:text-orange" to="/work" rel="prev">
                      Work
                    </Link>
                  </li>
                  <li className="w-1/2 float-left text-center py-16 border-dashed border-l border-b border-r border-grey">
                    <Link className="text-black no-underline hover:text-orange" to="/blog" rel="prev">
                      Writing
                    </Link>
                  </li>
                  <li className="w-1/2 float-left text-center py-16 border-dashed border-b border-grey border-r">
                    <Link className="text-black no-underline hover:text-orange" to="/work-with-me" rel="prev">
                      Work with me
                    </Link>
                  </li>
                </ul>
                <div className="w-full py-4 mb-4 mt-6">
                  <ul className="list-reset text-center">
                    <li className="inline-block px-4">
                      <a className="text-black no-underline hover:text-orange" href="mailto:anton@antonsten.com">Email</a>
                    </li>
                    <li className="inline-block px-4">
                      <a className="text-black no-underline hover:text-orange" href="https://twitter.com/antonsten">Twitter</a>
                    </li>
                    <li className="inline-block px-4">
                      <a className="text-black no-underline hover:text-orange" href="https://www.linkedin.com/in/antonsten/">Linkedin</a>
                    </li>
                  </ul>
                </div>
              </div>
            }

            <ul className="list-reset float-right hidden sm:inline-block text-lg">
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
                <Link className="text-black no-underline hover:text-orange" to="/blog" rel="prev">
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
}

export default Header
