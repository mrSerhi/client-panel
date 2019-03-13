import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
// Components
import Spinner from "../layout/SpinnerLoader/Spinner";
import FormClient from "../Client/FormClient";
import LinkBackToDashboard from "../layout/BackToDashboard";

class EditClient extends Component {
  constructor(props) {
    super(props);

    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
    this.balanceRef = React.createRef();
  }

  handleFormSubmit = async e => {
    e.preventDefault();

    const { client, firestore, history } = this.props;
    const balanceVal = this.balanceRef.current.value;
    const updClient = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      email: this.emailRef.current.value,
      phone: this.phoneRef.current.value,
      balance: balanceVal === "" ? 0 : balanceVal
    };
    await firestore.update(
      { collection: "clients", doc: client.id },
      updClient
    );
    history.push("/");
  };

  render() {
    const [...refs] = [
      this.firstNameRef,
      this.lastNameRef,
      this.emailRef,
      this.phoneRef,
      this.balanceRef
    ];
    const { client } = this.props;

    return client ? (
      <React.Fragment>
        <LinkBackToDashboard />
        <FormClient
          data={client}
          refs={refs}
          formSubmit={this.handleFormSubmit}
        />
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(EditClient);
