import React, {Component} from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {bindActionCreators} from "redux"

import { logoutUser } from "../../actions/authentication"


class Logout extends Component{

    handleClick = (e) => {
        this.props.actions.logoutUser(this.props.history)
    }

    render(){ 
    return (<>
    <h2>TODO list
        <button onClick={this.handleClick}>logout</button>
    </h2>
    </>)
}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({logoutUser}, dispatch),
    };
  }

export default connect(null, mapDispatchToProps)( withRouter(Logout));