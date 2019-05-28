import React from "react"

class Form extends React.Component {
  render() {

    return (
      <form name={ this.props.name ? this.props.name : 'newsletter' } className="mt-12 block w-full bg-blacker rounded-sm p-8 text-white" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlifyid="mc-embedded-subscribe-form" action="/thankyou/">
        <strong className="text-xs uppercase tracking-wide text-white">{ this.props.title ? this.props.title : 'Sign up for updates' }</strong>
        <p className="leading-normal mt-4 pr-8">{ this.props.text ? this.props.text : 'Sign up and you’ll get new writing about design in your inbox every two weeks. ' }</p>
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <div className="w-full mt-6 block">
          <label for="email" class="text-white uppercase text-xs font-bold tracking-wide block w-full mb-2">e-mail</label>
          <input type="text" id="email" name="email" className="text-xs uppercase rounded-sm font-bold tracking-wide px-4 w-full sm:w-64 mr-4"/>
          <input type="submit" value="Sign up" className="btn mt-4 sm:mt-0"/>
        </div>
        <input type="hidden" name="form-name" value={ this.props.name ? this.props.name : 'newsletter' } />
      </form>
    )
  }
}

export default Form