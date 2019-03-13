import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";

// child components
import FormClient from "./FormClient";
import LinkBackToDashboard from "../layout/BackToDashboard";

class AddClient extends Component {
  constructor(props) {
    super(props);

    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
    this.balanceRef = React.createRef();
  }
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: "",
    error: {}
  };

  validationForm = state => {
    const { firstName, lastName } = state;

    if (!firstName) {
      this.setState({
        error: { firstName: "You Should type the first name" }
      });
      return;
    } else if (firstName.length <= 5) {
      this.setState({
        error: { firstName: "name should be more than 5" }
      });
      return;
    }

    if (!lastName) {
      this.setState({
        error: { lastName: "You Should type the last name" }
      });
      return;
    } else if (!isNaN(lastName)) {
      this.setState({
        error: { lastName: "Please, type are words only, not a numbers" }
      });
      return;
    } else if (lastName.length < 3) {
      this.setState({
        error: { lastName: "The last name should be more than 3" }
      });
      return;
    }

    return state;
  };

  handleInputChange = e => {
    return this.setState({ [e.target.name]: e.target.value.trim() });
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const valid = this.validationForm(this.state);

    if (valid) {
      const { error, ...client } = valid;
      const { firestore, history } = this.props;

      if (client.balance === "") client.balance = 0;
      await firestore.add({ collection: "clients" }, client);
      history.push("/");
    }

    return;
  };

  render() {
    const [...refs] = [
      this.firstNameRef,
      this.lastNameRef,
      this.emailRef,
      this.phoneRef,
      this.balanceRef
    ];
    return (
      <section className="form-client">
        <LinkBackToDashboard />
        <FormClient
          data={this.state}
          onInputChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
          refs={refs}
        />
      </section>
    );
  }
}

export default firestoreConnect()(AddClient);
