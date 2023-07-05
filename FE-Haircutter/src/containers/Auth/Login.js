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
    this.state = {
      username: '',
      password: '',
      isShowPassword: false
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({ username: event.target.value }); //chinh sua trang thai input
    console.log(event.target.value);
  }; // in ra gia tri input
  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value }); //chinh sua trang thai input
    console.log(event.target.value);
  };
  handleLogin = () => {
    console.log('username: ', this.state.username, 'password: ', this.state.password);
    console.log('all state:', this.state);
  };
  handleShowHidePassword=()=>{
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
   
  }
  render() {
    return (
      <div className="login-background">
        <form class="row g-3 needs-validation" novalidate>
          <div className="login-container">
            <div className="login-content row">
              <div className="col-12 text-center login">Login</div>
              <div className="col-12 form group">
                <label for="validationTooltip01" className="form-label" required>
                  UserName
                </label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter your name"
                  value={this.state.username}
                  onChange={(event) => this.handleOnChangeUsername(event)}
                  id="validationTooltip01"
                  required
                />
                <div className="valid-tooltip">Looks good!</div>
                <div className="invalid-tooltip">Please choose a unique and valid username.</div>
              </div>
              <div className="col-12 form group">
                <label>Password</label>

                <div className='custom-input-password'>
                  <input
                    type={this.state.isShowPassword?"text":"password"}
                    for="validationTooltip01"
                    id="validationTooltip02"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={(event) => this.handleOnChangePassword(event)}
                    required
                  />
                  <span onClick={()=>{this.handleShowHidePassword()}}>  <i class={this.state.isShowPassword?"fas fa-eye":"fas fa-eye-slash"}></i></span>
                
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn-login"
                  onClick={() => {
                    this.handleLogin();
                  }}
                >
                  Login
                </button>
              </div>
              <div className="col-12">
                <span className="forgot-password">Forgot Password?</span>
              </div>

              <div className="col-12 text-center ">
                <span> Or Login with</span>
              </div>
              <div className="col-12 social-login position-incline">
                <i className="fab fa-google "></i>
                <i className="fab fa-facebook-f "></i>
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
