import React, { useEffect } from "react";
// import { calls } from "./calls";
import SpotCard from "./SpotCard";
import store from "./model/store";

export const SpotList = () => {
  const { spots } = store.getState((state) => state);
  console.log("store spots", spots);

  return (
    <>
      {spots.map((spot) => (
        <SpotCard spot={spot} key={spot.name + Date.now()} />
      ))}
    </>
  );
};

export default SpotList;
