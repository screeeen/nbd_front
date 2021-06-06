/* eslint-disable import/no-anonymous-default-export */
// @flow

import * as types from "../ActionTypes";
const initialState = []; //new Layout();

export default (spot: Spot = initialState, payload: Array) => {
  if (payload.type === types.SET_SPOT) {
    return [...payload.spot];
  }

  return spot;
};
