import React from "react"

class CaseData extends React.Component {
  render() {
    return (
      <div className="bg-white p-8 mb-12 mt-12 rounded-sm font-sans border flex flex-wrap">
        <div className="w-full sm:w-1/3">
          <small className="text-black text-xs font-bold tracking-wide block mb-4 uppercase">EXPERTISE</small>
          <p className="text-sm mb-0">{ this.props.expertise }</p>
        </div>

        <div className="w-full sm:w-1/3 mt-6 sm:mt-0">
          <small className="text-black text-xs font-bold tracking-wide block mb-4 uppercase">DELIVARABLES</small>
          <p className="text-sm mb-0">{ this.props.delivarables }</p>
        </div>

        { this.props.link &&
          <div className="w-full sm:w-1/3 mt-6 sm:mt-0">
            <a rel="noopener noreferrer" target="_blank" className="text-xs uppercase font-bold tracking-wide float-right" href={ this.props.link }>View live</a>
          </div>
        }
      </div>
    )
  }
}

export default CaseData;
