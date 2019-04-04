import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import LoginForm from "../../components/authorization/loginForm";
import { loginUser } from "../../actions/authentication";


class LoginPage extends React.Component {
  submit = values => {
    this.props.actions.loginUser(values, this.props.history);
  }
  
  render() {
    return <LoginForm onSubmit={this.submit} />
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({loginUser}, dispatch),
  };
}

export default connect(null, mapDispatchToProps)( withRouter(LoginPage));
