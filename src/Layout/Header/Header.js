import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {PATHS} from "../../constants/routes"
import {ACTIVE_LINK} from "../../constants/routes"

class Header extends Component {
  render () {
    return <header className="header">
      <NavLink to={PATHS.TODOS}  activeStyle={ACTIVE_LINK}>Todos</NavLink>
      <NavLink to={PATHS.SIGNUP} activeStyle={ACTIVE_LINK}>SignUp</NavLink>
      <NavLink to={PATHS.LOGIN}  activeStyle={ACTIVE_LINK}>Login</NavLink>
    </header>
  }
}

export default Header;
