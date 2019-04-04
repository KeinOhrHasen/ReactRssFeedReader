import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import './styles/base.scss'
import MainLayout from "./Layout/Main"
import {PATHS} from "./constants/routes"
import NotFoundPage from "./components/NotFoundComponent/NotFoundPage"
import {Provider} from "react-redux"

// project
//  ---------AUTH--------
import SignUp from "./containers/authorization/signUpPage"
import LoginPage from "./containers/authorization/loginPage"
import PrivateRouteTodos from "./components/PrivateRouteTodos"

// ----------TODOS----------
import * as TodoActions from './actions/todoActions'
import {configureStore}  from "./store/index"

// Create a Store from the Configuration, we can pass a Initial State here
import TodoContainer from './containers/todos/todoContainer'

// set default values of feeds to Local Storage
if (!localStorage.getItem('feeds')){
  localStorage.setItem('feeds', JSON.stringify([{title: "NASA Breaking news", url:"https://www.nasa.gov/rss/dyn/breaking_news.rss", id:1}]))
}

const store = configureStore();

// At first dispatch a Get Todos Actions, So we'll recieve the Todos 
// fetched from the server at the start of the app
store.dispatch(TodoActions.GetTodos());   

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainLayout>
              <Switch>
                <Route exact path={PATHS.INDEX} render={() => (<Redirect to={PATHS.TODOS}/>) }/>
                <PrivateRouteTodos exact path={PATHS.TODOS} component={TodoContainer} />
                <Route exact path={PATHS.SIGNUP} component={SignUp} />
                <Route exact path={PATHS.LOGIN} component={LoginPage} />
                <Route exact component={NotFoundPage} />
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
