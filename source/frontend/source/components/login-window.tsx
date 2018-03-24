import * as React from 'react';

export interface LoginWindowProps {
    username: string;
    password: string;
}

export const LoginWindow: React.SFC<LoginWindowProps> = (props) => {
  const { username, password } = props;

  const attemptLogin = (event: any) => { console.log(event, username, password) };

  return (
    <div>
      <label htmlFor='login-username'> </label>
      <input id='login-username' type='text' />
      <label htmlFor='login-password' > </label>
      <input id='login-password' type='password' />
      <button type='button' onClick={event => attemptLogin(this.event)}>
        {`Login`}
      </button>
    </div>
  );
}
