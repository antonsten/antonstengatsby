import React from "react"

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      text: this.props.text ? this.props.text : 'Sign up and you’ll get new writing about design in your inbox every two weeks.',
      title: this.props.title ? this.props.title : 'Sign up for updates',
      submit: 'Sign up',
      hasSignedUp: false
    }
  }

  encode(data) {
    return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&")
  }

  handleSubmit = e => {
    this.setState({
      submit: 'Signing up...'
    })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": this.props.name ? this.props.name : 'newsletter', ...this.state })
    })
    .then(() => {
        this.setState({
          text: 'I hate annoying sales and spam as much as you do, so I’ll always be respectful with your email (I mean, I’m a person just like you).',
          title: 'Thank you!',
          email: '',
          submit: 'Sign up',
          hasSignedUp: true
        })
      })
    .catch(error => {
      this.setState({
        submit: 'Sign up'
      })
      alert(error)
    });

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email, title, text, submit } = this.state

    return (
      <form name={ this.props.name ? this.props.name : 'newsletter' } onSubmit={ this.handleSubmit } className="mt-8 block w-full float-left mb-16 bg-grey-lighter border-color-grey-light rounded-sm p-8 text-blacker" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlifyid="mc-embedded-subscribe-form" action="/thankyou/">
        <strong className="text-xs uppercase font-sans tracking-wide text-link">{ title }</strong>
        <p className="leading-normal font-serif mt-4 pr-8">{ text }</p>
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        { !this.state.hasSignedUp &&
          <div className="w-full mt-6 block">
            <label htmlFor="email" className="uppercase font-sans text-xs font-bold tracking-wide block w-full mb-2">e-mail</label>
            <input type="email" id="email" value={ email } required="required" onChange={this.handleChange} name="email" className="text-xs uppercase rounded-sm font-bold tracking-wide px-4 w-full sm:w-64 mr-4"/>
            <input type="submit" value={ submit } className="btn mt-4 sm:mt-0"/>
          </div>
        }
        <input type="hidden" name="form-name" value={ this.props.name ? this.props.name : 'newsletter' } />
      </form>
    )
  }
}

export default Form
