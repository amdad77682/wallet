import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import HomeComponent from "../components/WalletComponent";

class WalletContainer extends Component {
  render = () => {
    return <WalletComponent {...this.props} />;
  };
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...actions
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletContainer);
