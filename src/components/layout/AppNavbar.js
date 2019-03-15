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
    const navbarNavClass = "collapse navbar-collapse ";
    const showNavBar = !isAuth ? "d-none" : navbarNavClass;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info mb-2">
        <div className="container">
          <Link to="/" className="navbar-brand text-capitalize">
            client panel
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
        </div>
      </nav>
    );
  }
}

AppNavbar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({ auth: state.firebase.auth }))
)(AppNavbar);
