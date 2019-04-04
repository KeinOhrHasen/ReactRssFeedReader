import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteTodos = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props => {
          return !localStorage.getItem("token") ? <Redirect to="/login"/> :
                 <Component {...props} />
        }}
    />
);
export default PrivateRouteTodos;