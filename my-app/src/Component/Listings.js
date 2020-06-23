import React from "react";

export const Listings = props => {
  return (
    <>
      <h1>Listings</h1>
      <p>{props.name}</p>
      <p>{props.propertyType}</p>
      <p>{props.price}</p>
      <p>{props.minNightStay}</p>
      <p>{props.cleaningFee}</p>
      <p>{props.numberOfGuests}</p>
      <p>{props.amenities}</p>
    </>
  );
};
