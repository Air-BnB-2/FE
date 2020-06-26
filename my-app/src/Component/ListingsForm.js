import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ListingsForm = () => {
  const [id, setId] = useState({
    property_type: "",
    amenities: "",
    room_type: "",
    accommodates: "",
    bathrooms: "",
    cancellation_policy: "",
    cleaning_fee: "",
    instant_bookable: "",
    zipcode: "",
    bedrooms: "",
    beds: ""
  });

  const changeHandler = e => {
    setId({
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/${id}/listings`, id)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  function add(listingId) {
    axiosWithAuth()
      .put(`/${id}/listings/${listingId}`, id)
      .then(res => console.log("add res", res))
      .catch(err => console.log(err));
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <lable>
          Property Type:
          <input
            type="text"
            name="propertyType"
            value={id.property_type}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Amenities:
          <input
            type="text"
            name="amenities"
            value={id.amenities}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Room Type:
          <input
            type="text"
            name="roomType"
            value={id.room_type}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Accommodates:
          <input
            type="text"
            name="accommodates"
            value={id.accommodates}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          # Bathrooms
          <input
            type="text"
            name="bathrooms"
            value={id.bathrooms}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Cancellation Policy:
          <input
            type="text"
            name="cancellationPolicy"
            value={id.cancellation_policy}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Cleaning Fee:
          <input
            type="text"
            name="cleaningFee"
            value={id.cleaning_fee}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Instant Bookable:
          <input
            type="text"
            name="instantBookable"
            value={id.instant_bookable}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Zipcode:
          <input
            type="text"
            name="zipcode"
            value={id.zipcode}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          # Bedrooms:
          <input
            type="text"
            name="bedrooms"
            value={id.bedrooms}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          # Beds:
          <input
            type="text"
            name="beds"
            value={id.beds}
            onChange={changeHandler}
          />
        </lable>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
