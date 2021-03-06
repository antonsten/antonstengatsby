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

      <header className="mb-12 fixed w-full ">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between w-full py-4">


            <div className="w-full sm:flex flex-wrap">
              <div className="w-full sm:w-1/3 flex justify-between pt-2">
                <Link className="no-underline no-after logo" to="/"><img alt="anton sten" style={{ width: '100px' }} src="/images/antonsten.svg"/></Link>                <div className="inline-block sm:hidden cursor-pointer" onClick={ this.showMenu }>
                  <img alt="menu" src="/images/menu.svg"/>
                </div>
              </div>
              <div className="w-full sm:w-2/3 hidden sm:flex">
                <ul className="list-reset text-right hidden sm:flex justify-between text-lg w-full">
                  <li className="inline-block pl-2">
                    <Link className="text-blue-darker no-underline" to="/about" rel="prev">
                      About
                    </Link>
                  </li>
                  <li className="inline-block pl-8">
                    <Link className="text-blue-darker no-underline" to="/work" rel="prev">
                      Work
                    </Link>
                  </li>
                  <li className="inline-block pl-8">
                    <Link className="text-blue-darker no-underline" to="/work-with-me" rel="prev">
                      Work With Me
                    </Link>
                  </li>
                  <li className="inline-block pl-8">
                    <Link className="text-blue-darker no-underline" to="/blog" rel="prev">
                      Writing
                    </Link>
                  </li>
                  <li className="inline-block pl-8">
                    <Link className="text-blue-darker no-underline" to="/contact" rel="prev">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            { this.state.isVisible &&
              <div className="mobile-menu">
                <ul className="list-reset pl-5 pr-5 mobile-menu__ul flex flex-wrap w-full">
                  <li className="w-1/2 mb-0 float-left text-center py-16 border-solid border-l border-b border-r border-grey-lighter">
                    <Link className="text-black no-underline" to="/about" rel="prefetch">
                      About
                    </Link>
                  </li>
                  <li className="w-1/2 mb-0 float-left text-center py-16 border-solid border-l border-b border-r border-grey-lighter">
                    <Link className="text-black no-underline" to="/work" rel="prefetch">
                      Work
                    </Link>
                  </li>
                  <li className="w-1/2 mb-0 float-left text-center py-16 border-solid border-l border-b border-r border-grey-lighter">
                    <Link className="text-black no-underline" to="/work-with-me" rel="prefetch">
                      Work With Me
                    </Link>
                  </li>
                  <li className="w-1/2 mb-0 float-left text-center py-16 border-solid border-l border-b border-r border-grey-lighter">
                    <Link className="text-black no-underline" to="/blog" rel="prefetch">
                      Writing
                    </Link>
                  </li>
                  <li className="w-1/2 mb-0 float-left text-center py-16 border-solid border-l border-b border-r border-grey-lighter">
                    <Link className="text-black no-underline" to="/contact" rel="prefetch">
                      Contact
                    </Link>
                  </li>
                  </ul>
                </div>
            }
          </div>
        </div>
      </header>
    )
  }
}

export default Header
