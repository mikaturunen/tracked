import * as React from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from '../actions'


export interface LoginWindowProps {
  username: string;
  password: string;
  onAttemptLogin: (username: string, password: string) => any;
}

const LoginWindow: React.SFC<LoginWindowProps> = (props) => {
  const attemptLogin = (event: any) => props.onAttemptLogin(props.username, props.password);

  return (
    <div>
      <label id='loginUsername'></label>
      <input type='text' id='loginUsername' />

      <label id='loginPassword'></label>
      <input type='password' id='loginPassword' />

      <button type='button' onClick={attemptLogin}>{`Login`}</button>
    </div>
  );
};

export default LoginWindow;
