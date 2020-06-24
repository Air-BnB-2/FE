import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//import CONTEXT into here

export const Listings = props => {
  return (
    // NOT SURE IF THIS WILL BE A PLACE TO DELETE A LISTING..?
    // axiosWithAuth()
    // .delete("")
    // .then(res)
    // .catch(err => console.log(err))
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
