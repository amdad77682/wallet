import React, { Component } from "react";
import { Switch, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";

import HomeRoute from "../modules/home/route/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Switch>
            <HomeRoute />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
