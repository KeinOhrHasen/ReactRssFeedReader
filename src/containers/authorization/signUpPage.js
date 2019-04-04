import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SignUpForm from "../../components/authorization/signUpForm";
import { registerUser } from "../../actions/authentication";

class SignUpPage extends React.Component {
  
  submit = values => {
    this.props.actions.registerUser(values, this.props.history);
  }

  render() {
    return <SignUpForm onSubmit={this.submit} />
  }
}


function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({registerUser}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)( withRouter(SignUpPage));
