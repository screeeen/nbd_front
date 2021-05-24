import { combineReducers } from "redux";

import SpotsReducer from "./SpotsReducer";

const rootReducer = combineReducers({
  spots: SpotsReducer,
});

export default rootReducer;
