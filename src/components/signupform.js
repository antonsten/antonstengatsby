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

  componentDidMount() {
    let fathom = window.fathom || null;
    document.getElementById('sign-up-button').addEventListener('click', () => {
      if(fathom) {
        fathom('trackGoal', 'H0ZY7LWB', 0);
      }
    });
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
      <form name={ this.props.name ? this.props.name : 'newsletter' } onSubmit={ this.handleSubmit } className="sm:mt-8 sm:-mx-16 bg-blue-darker flex text-white p-8 sm:p-16" method="POST" data-netlify="true" netlify-honeypot="bot-field" netlifyid="mc-embedded-subscribe-form" action="/thankyou/">
        <div className="w-full sm:w-1/3"></div>
        <div className="w-full sm:w-2/3">
          { !this.props.naked &&
            <div>
              <h2 className="mt-0">{ title }</h2>
              <p className="italic font-serif pr-8 text-lg leading-tight text-white">{ text }</p>
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
            </div>
          }
          { !this.state.hasSignedUp &&
            <div className="w-full block flex flex-wrap">
              <label htmlFor="email" className="uppercase font-sans text-xs font-bold tracking-wide block w-full mb-2">e-mail</label>
              <div className="flex w-full mr-4">
                <input type="email" id="email" value={ email } required="required" onChange={this.handleChange} name="email" className="text-xs uppercase font-sans bg-white text-link font-bold tracking-wide px-4 mr-4 flex-1"/>
                <input type="submit" id="sign-up-button" value={ submit } className="btn"/>
              </div>
            </div>
          }
        </div>
        <input type="hidden" name="form-name" value={ this.props.name ? this.props.name : 'newsletter' } />
      </form>
    )
  }
}

export default Form
