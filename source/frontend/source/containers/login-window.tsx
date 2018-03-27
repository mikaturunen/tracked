import * as React from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from '../actions';
import LoginWindowComponent from '../components/login-window';

const mapStateToProps = (state: any) => ({
  username: state.username
});

const LoginWindow = connect(mapStateToProps, {
  onAttemptLogin: attemptLogin
})(LoginWindowComponent);

export default LoginWindow;
