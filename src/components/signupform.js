import React from "react"

class Form extends React.Component {
  render() {

    return (
      <form className="mt-12 block w-full bg-blacker rounded-sm p-8 text-white">
        <strong className="text-xs uppercase text-orange tracking-wide">{ this.props.title ? this.props.title : 'Sign up for updates' }</strong>
        <p className="leading-normal mt-4 pr-8">{ this.props.text ? this.props.text : 'Sign up and you’ll get new writing about design in your inbox every two weeks. ' }</p>

        <div className="w-full mt-6 block">
          <input type="text" placeholder="email" className="text-xs uppercase rounded-sm font-bold tracking-wide px-4 w-full sm:w-64 mr-4"/>
          <input type="submit" value="Sign up" className="btn mt-4 sm:mt-0"/>
        </div>
      </form>
    )
  }
}

export default Form