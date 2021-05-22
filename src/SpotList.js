import React, { useState, useEffect } from "react";
import { calls } from "./calls";

export const SpotList = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    calls
      .get(`spots/`)
      .then((response) => {
        const { data } = response;
        console.log(response.data);
        setSpots(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(spots);
  const pStyle = { textAlign: "left", paddingLeft: "20px" };
  const pBlue = { textAlign: "left", paddingLeft: "20px", color: "blue" };
  const divStyle = {
    border: "1px solid lightblue",
    borderRadius: "5px",
    margin: "10px",
    width: "90%",
  };

  return (
    <>
      {spots.map((spot) => (
        <div style={divStyle} key={spot.name + Date.now()}>
          <h3 style={pStyle}>{spot.name}</h3>
          <h5 style={pStyle}>{spot.location}</h5>
          <p style={pBlue}>{spot.spotType}</p>
          <p style={pStyle}>{spot.description}</p>
        </div>
      ))}
    </>
  );
};

export default SpotList;
