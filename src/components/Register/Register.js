import React, { useState } from 'react';

function Register(props) {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const onNameChange = (event) => {
    setRegisterName(event.target.value);
  };

  const onEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const onSubmitRegister = () => {
    fetch('https://immense-meadow-72319.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          props.loadUser(user);
          props.onRouteChange('home');
        }
      });
  };

  const { onRouteChange } = props;
  return (
    <main className="pa4 black-80">
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center pa3 shadow-5">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                onChange={onNameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={onEmailChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={onPasswordChange}
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="lh-copy mt3">
            <input
              onClick={onSubmitRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Set Password and Login"
            />
            <p
              onClick={() => onRouteChange('signin')}
              href="#0"
              className="f6 link dim black db pointer"
            >
              &#8592; Go to Sign In
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Register;
