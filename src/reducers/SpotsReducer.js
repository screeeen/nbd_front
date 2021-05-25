/* eslint-disable import/no-anonymous-default-export */
// @flow

import * as types from "../ActionTypes";
const initialState = []; //new Layout();

export default (spot: Spot = initialState, action: Array) => {
  if (action.type === types.SET_SPOT) {
    return [...action.spot];
  }

  return spot;
};
