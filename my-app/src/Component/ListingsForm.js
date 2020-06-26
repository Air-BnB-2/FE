import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Context } from "../context.js/Context";

export const ListingsForm = () => {
  const { id } = useContext(Context);

  const [listValues, setListValues] = useState({
    property_name: "",
    property_type: 0,
    amenities: 0,
    room_type: 0,
    accommodates: 0,
    bathrooms: 0,
    cancellation_policy: 0,
    cleaning_fee: 0,
    instant_bookable: 0,
    zipcode: 0,
    bedrooms: 0,
    beds: 0
  });

  const changeHandler = e => {
    const { name, value } = e.target;

    setListValues({
      ...listValues,
      [name]: name === "property_name" ? value : Number(value)
    });
    console.log(setListValues);
  };

  const submitHandler = e => {
    e.preventDefault();

    axiosWithAuth()
      .post(`/${id}/listings`, listValues)
      .then(res => {
        console.log("from post", res);
      })
      .catch(err => console.log("post error", err));
  };

  // function add() {
  //   axiosWithAuth()
  //     .put(`/${id}/listings/${listId}`, id )
  //     .then(res => console.log("add res", res))
  //     .catch(err => console.log("error", err));
  // }

  return (
    <>
      <form onSubmit={submitHandler}>
        <lable>
          Name:
          <input
            type="text"
            name="property_name"
            value={listValues.property_name}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Property Type:
          <input
            type="text"
            name="propert_type"
            value={listValues.property_type}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Amenities:
          <input
            type="text"
            name="amenities"
            value={listValues.amenities}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Room Type:
          <input
            type="text"
            name="room_type"
            value={listValues.room_type}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Accommodates:
          <input
            type="text"
            name="accommodates"
            value={listValues.accommodates}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          # Bathrooms
          <input
            type="text"
            name="bathrooms"
            value={listValues.bathrooms}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Cancellation Policy:
          <input
            type="text"
            name="cancellation_policy"
            value={listValues.cancellation_policy}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Cleaning Fee:
          <input
            type="text"
            name="cleaning_fee"
            value={listValues.cleaning_fee}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Instant Bookable:
          <input
            type="text"
            name="instant_bookable"
            value={listValues.instant_bookable}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          Zipcode:
          <input
            type="text"
            name="zipcode"
            value={listValues.zipcode}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          # Bedrooms:
          <input
            type="text"
            name="bedrooms"
            value={listValues.bedrooms}
            onChange={changeHandler}
          />
        </lable>
        <br />
        <lable>
          # Beds:
          <input
            type="text"
            name="beds"
            value={listValues.beds}
            onChange={changeHandler}
          />
        </lable>
        <button type="submit">SUBMIT</button>
        {/* <button onClick={() => add(id)}>ADD</button> */}
      </form>
    </>
  );
};
