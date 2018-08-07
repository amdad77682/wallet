import React from "react";
import { bindActionCreators } from "redux";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomeContainer from "../containers/HomeContainer";

class HomeRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/home"} component={HomeContainer} />
        <Route render={() => <div>Page not found</div>} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(null, mapDispatchToProps)(HomeRoute);
