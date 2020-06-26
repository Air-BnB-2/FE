import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ListingsForm = () => {
  axiosWithAuth()
    .post(`/${id}/listings`)
    .then(res)
    .catch(err => console.log(err));

  return (
    <>
      <lable>
        Property Type:
        <input />
      </lable>
      <lable>
        Amernities:
        <input />
      </lable>
      <lable>
        Room Type:
        <input />
      </lable>
      <lable>
        Accommodates:
        <input />
      </lable>
      <lable>
        # Bathrooms
        <input />
      </lable>
      <lable>
        Cancellation Policy:
        <input />
      </lable>
      <lable>
        Cleaning Fee:
        <input />
      </lable>
      <lable>
        Instant Bookable:
        <input />
      </lable>
      <lable>
        Zipcode:
        <input />
      </lable>
      <lable>
        # Bedrooms:
        <input />
      </lable>
      <lable>
        # Beds:
        <input />
      </lable>
    </>
  );
};
