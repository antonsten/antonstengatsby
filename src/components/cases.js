import React from "react"
import Client from '../components/client';


class Cases extends React.Component {
  render() {
    return (
      <div className="w-full mt-12">
        <div className="sm:flex">
          <div className="w-full sm:w-1/3"></div>
          <div className="w-full sm:w-2/3"><h2>Selected cases</h2></div>
          </div>
        </div>

        <div className="w-full mt-12">
          <div className="sm:flex border-b pb-1">
            <div className="w-full sm:w-1/3"><img className="h-4 sm:h-6" src="images/clients/svg/eon.svg"/></div>
              <div className="w-full sm:w-2/3">
                <p className="mt-0">Helping facility managers track energy consumption and make proactive choices, for higher revenue and a healthier environment​ 🌿​<br /><Link className="font-serif text-lg" to="/case/eon">View case</Link></p>

            </div>
         </div>

         <div className="sm:flex mt-6 border-b pb-1">
           <div className="w-full sm:w-1/3"><img className="h-4 sm:h-6" src="images/clients/frank.png"/></div>
           <div className="w-full sm:w-2/3">
             <p className="mt-0">Optimizing conversions while staying on-track with a strong brand personality for Australia’s number one babe; Frank.<br /><Link className="font-serif text-lg" to="/case/frank">View case</Link>
             </p>
           </div>
         </div>

        <div className="sm:flex mt-6 border-b pb-1">
          <div className="w-full sm:w-1/3"><img className="h-6 sm:h-8" src="images/clients/svg/telia.svg"/></div>
          <div className="w-full sm:w-2/3">
            <p className="mt-0">Helping Telia revitalize their support pages with more options, intuitive tools, and a responsive design.<br /><Link className="font-serif text-lg" to="/case/telia">View case</Link>
            </p>
          </div>
        </div>

        <div className="sm:flex mt-6 border-b pb-1">
          <div className="w-full sm:w-1/3"><img className="h-6 sm:h-8" src="images/clients/svg/jarfalla.svg"/></div>
          <div className="w-full sm:w-2/3">
            <p className="mt-0">Helping businesses in Järfälla to flourish through more accessible help and online tools.<br /><Link className="font-serif text-lg" to="/case/jarfalla">View case</Link>
            </p>
          </div>
        </div>

        <div className="sm:flex mt-6 border-b pb-1">
          <div className="w-full sm:w-1/3"><img className="h-6 sm:h-8" src="images/clients/svg/falkenberg.svg"/></div>
          <div className="w-full sm:w-2/3">
            <p className="mt-0">Making practical, important information accessible and easy to find for 20,000 Falkenberg-ians.<br /><Link className="font-serif text-lg" to="/case/falkenberg-kommun">View case</Link>
            </p>
          </div>
        </div>

        <div className="sm:flex mt-6 border-b pb-1">
          <div className="w-full sm:w-1/3"><img className="h-6 sm:h-8" src="images/clients/svg/fbg.svg"/></div>
          <div className="w-full sm:w-2/3">
            <p className="mt-0">Created an accessible, lightweight easy to navigate website for everyone interested in visiting the beautiful city of Falkenberg.<br /><Link className="font-serif text-lg" to="/case/falkenberg">View case</Link>
            </p>
          </div>
        </div>

        <div className="sm:flex mt-6 border-b pb-1">
          <div className="w-full sm:w-1/3"><img className="h-6 sm:h-8" src="images/clients/svg/ne.svg"/></div>
          <div className="w-full sm:w-2/3">
            <p className="mt-0">Helping Nationalencyklopedin modernize their visual identity, make it more digitally accessible and developed a design system.<br /><Link className="font-serif text-lg" to="/case/ne">View case</Link>
            </p>
          </div>
        </div>

        <div className="sm:flex mt-6">
          <div className="w-full sm:w-1/3"><img className="h-4 sm:h-6" src="images/clients/svg/apotekhjartat.svg"/></div>
          <div className="w-full sm:w-2/3">
            <p className="mt-0">Lead UX for Apotek Hjärtat, Sweden's second largest pharmacy, for 6 months during a larger website improvement.<br /><Link className="font-serif text-lg" to="/case/apotekhjartat">View case</Link>
            </p>
          </div>
        </div>

      </div>
    )
  }
}

export default Cases;
