import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase"; // for login use firebase
// action
import { notifyUser } from "../../actions/notifyAction";
// components
import Alert from "../Layout/Alert";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmitForm = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { firebase, notifyUser } = this.props;
    try {
      await firebase.login({ email, password });
    } catch (e) {
      notifyUser(e.message, "errorLogin");
    }
  };

  render() {
    const { email, password } = this.state;
    const { message, messageType } = this.props.notify;
    const errorAlert =
      message && messageType === "errorLogin" ? (
        <Alert message={message} messageType={messageType} />
      ) : null;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="text-info text-center py-3">
                  <i className="fas fa-sign-in-alt" /> Login
                </h1>

                <form onSubmit={this.handleSubmitForm}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChangeInput}
                      placeholder="Type your email..."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChangeInput}
                      placeholder="******"
                      required
                    />
                  </div>
                  <input type="submit" value="Login" className="btn btn-info" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mx-auto mt-1">{errorAlert}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);
