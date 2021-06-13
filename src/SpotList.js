import React from "react";
import SpotCard from "./SpotCard";
import { useSelector } from "react-redux";

export const SpotList = () => {
  const { spots } = useSelector((state) => state);

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
