// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers'
// import App from './components/App'

// const store = createStore(rootReducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

const loggerMiddleware = createLogger({
  level: "info",
  collapsed: true,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(loggerMiddleware)
  )
);

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
