import React from "react";
// import { calls } from "./calls";
import SpotCard from "./SpotCard";
// import store from "./model/store";
import { useSelector } from "react-redux";

export const SpotList = () => {
  // const { spots } = store.getState((state) => state);
  const { spots } = useSelector((state) => state);
  console.log("store spots", spots);

  return (
    <>
      {spots.length > 0 ? (
        spots.map((spot) => (
          <SpotCard spot={spot} key={spot.name + Date.now()} />
        ))
      ) : (
        <p>nothing found</p>
      )}
    </>
  );
};

export default SpotList;
