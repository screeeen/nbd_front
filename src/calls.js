// HTTP request service

import axios from "axios";

export const calls = axios.create({
  baseURL: "http://localhost:8080/api",
  // baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// players
export const getAllSpots = async () => {
  calls
    .get(`spots/`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const addNewSpot = async (newSpot) => {
  calls
    .post(`spots/`, newSpot)
    .then((data) => console.log("sent", data))
    .catch((err) => console.log(err));
};
