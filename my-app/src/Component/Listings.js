import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context.js/Context";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Listings = () => {
  const { id } = useContext(Context);
  const [listings, setListings] = useState([]);

  // const [key, setKey] = useState({
  //   property_type: "",
  //   amenities: "",
  //   room_type: "",
  //   accommodates: "",
  //   bathrooms: "",
  //   cancellation_policy: "",
  //   cleaning_fee: "",
  //   instant_bookable: "",
  //   zipcode: "",
  //   bedrooms: "",
  //   beds: ""
  // });

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axiosWithAuth()
      .get(`/${id}/listings`)
      .then(res => setListings(res.data))
      .catch(err => console.log("err", err));
  }

  function onDelete(listingId) {
    axiosWithAuth()
      .delete(`/${id}/listings/${listingId}`)
      .then(() => {
        getData();
      })
      .catch();
  }

  return (
    <>
      {listings.map(listing => (
        <div>
          <p>{listing.property_name}</p>
          <p>{listing.price}</p>
          <button onClick={() => onDelete(listing.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};
