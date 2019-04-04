import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/index'
const loggerMiddleware = createLogger()


// Configuring the Store. PreloadState is the initial State.
export function configureStore(preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,

    //Apply the middleware usign the Redux's provided applymiddleware function

    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )
  )
}