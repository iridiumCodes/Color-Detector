import React from 'react';

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState ({signInEmail : event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState ({signInPassword : event.target.value})
  }

  onSubmitSignin = () => {
  fetch('http://localhost:3000/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.state.signInEmail,
      password: this.state.signInPassword
    })
  })
    .then(response => response.json())
    .then( user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
    }
  })
  }
  

  render () {
    const { onRouteChange } =this.props;
    return ( 
      <main className="pa4 black-80">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center pa3 shadow-5">
        <div className="measure">
          <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
          </div>
          <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
          </fieldset>
          <div className="">
            <input onClick = {this.onSubmitSignin } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <p onClick = { () => onRouteChange('register') } href="#0" className="f6 link dim black db pointer">Register</p>
            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
          </div>
        </div>
      </article>
    </main>
    )
  }
}

export default Signin;