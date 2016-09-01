import React from 'react';
import { connect } from 'react-redux';
import * as fromActions from '../actions';

export const Login = React.createClass({
  onLogin() {
    const { dispatch } = this.props;

    dispatch(fromActions.startLoging());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">
          <div className="row">
            <div className="columns small-centered small-10 medium-6 large-4">
              <div className="callout callout-auth">
                <h3>Login</h3>
                <p>
                  Login with GitHub account below.
                </p>
                <button onClick={this.onLogin} className="button">Login With Github</button>
              </div>
            </div>
          </div>
        </h1>
      </div>
    );
  }
});

export default connect()(Login);