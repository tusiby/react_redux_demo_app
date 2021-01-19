import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const initState = {}

const loggerMiddleware = createLogger()
const enhancers = [applyMiddleware(thunk, loggerMiddleware)]

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  
export const store = createStore(rootReducer, initState, compose(...enhancers))



