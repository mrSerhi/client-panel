import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(prevProps, nextState) {
    const { auth } = prevProps;
    // checked if user as logged and change the local state
    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  handleLogoutClick = () => {
    const { firebase } = this.props;
    firebase.logout();
  };

  render() {
    const { isAuthenticated: isAuth } = this.state;
    const { email } = this.props.auth;
    const { allowRegistration } = this.props.settings;
    const navbarNavClass = "collapse navbar-collapse ";
    const showNavBar = !isAuth ? "d-none" : navbarNavClass;
    const signUp =
      !isAuth && allowRegistration ? (
        <div className="collapse navbar-collapse" id="signupNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="fas fa-sign-in-alt" /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <i className="fas fa-unlock-alt" /> Sign up
              </Link>
            </li>
          </ul>
        </div>
      ) : null;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info mb-2">
        <div className="container">
          <Link to="/" className="navbar-brand text-capitalize">
            <i className="fas fa-user-astronaut" /> client panel
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-main"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={showNavBar} id="navbar-main">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/settings" className="nav-link">
                  Settings
                </Link>
              </li>

              <li className="nav-item">
                <a href="#!" className="nav-link active disabled">
                  {email}
                </a>
              </li>
              <li className="nav-item">
                <button
                  onClick={this.handleLogoutClick}
                  className="btn nav-link"
                >
                  <i className="fas fa-sign-out-alt" /> Logout
                </button>
              </li>
            </ul>
          </div>
          {/* when needed registration */}
          {signUp}
        </div>
      </nav>
    );
  }
}

AppNavbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }))
)(AppNavbar);
