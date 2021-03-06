import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//  BrowserRouter
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// protect authentication routes
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated
} from "./utils/protectAuth";

import { Provider } from "react-redux";
import store from "./store";
// Components
import AppNavbar from "./components/Layout/AppNavbar";
import Dashboard from "./components/Layout/Dashboard";
import AddClient from "./components/Client/AddClient";
import EditClient from "./components/EditClient/EditClient";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Settings from "./components/Settings/Settings";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/login"
                  component={UserIsNotAuthenticated(Login)}
                />
                <Route
                  exact
                  path="/"
                  component={UserIsAuthenticated(Dashboard)}
                />
                <Route
                  exact
                  path="/client/add"
                  component={UserIsAuthenticated(AddClient)}
                />
                <Route
                  exact
                  path="/client/edit/:id"
                  component={UserIsAuthenticated(EditClient)}
                />
                <Route
                  exact
                  path="/client/:id"
                  component={UserIsAuthenticated(ClientDetails)}
                />
                <Route
                  exact
                  path="/settings"
                  component={UserIsAuthenticated(Settings)}
                />
                <Route
                  exact
                  path="/signup"
                  component={UserIsNotAuthenticated(SignUp)}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
