import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

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

export default store;
