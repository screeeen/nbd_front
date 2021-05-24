/* eslint-disable import/no-anonymous-default-export */
// @flow

// import Layout from "../model/entity/Layout";
import * as types from "../ActionTypes";

// const initialState: Layout = new Layout();

// export default (layout: Layout = initialState, action: Object) => {
export default (spot: Spot = initialState, action: Object) => {
  if (action.type === types.SET_SPOT) {
    return {
      ...spot,
      // ...layout.viewsGroup.splice(action.index, 0, action.index),
    };
  }

  return spot;
};
