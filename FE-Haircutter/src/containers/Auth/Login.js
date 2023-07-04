import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../store/actions';
import './Login.scss';
// import { Margin } from '@mui/icons-material';
// import { FormattedMessage } from 'react-intl';

class Login extends Component {
  constructor(props) {
    super(props);
    this.btnLogin = React.createRef();
  }

  render() {
    return (
      <div className="login-background">
        <form class="row g-3 needs-validation" novalidate>
          <div className="login-container">
            <div className="login-content row">
              <div className="col-12 text-center login">Login</div>
              <div className="col-12 form group">
                <label for="validationTooltip01" class="form-label" required>
                  UserName
                </label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter your name"
                  id="validationTooltip02"
                  required
                />
                <div class="valid-tooltip">Looks good!</div>
                <div class="invalid-tooltip">Please choose a unique and valid username.</div>
              </div>
              <div className="col-12 form group">
                <label>Password</label>

                <input
                  type="password"
                  for="validationTooltip01"
                  id="validationTooltip02"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="col-12">
                <button class="btn-login">Login</button>
              </div>
              <div className="col-12">
                <span className="forgot-password">Forgot Password?</span>
              </div>
              <hr />
              <div className="col-12 text-center ">
                <span> Or Login with</span>
              </div>
              <div className="col-12 social-login position-incline">
                <i class="fab fa-google "></i>
                <i class="fab fa-facebook-f "></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
