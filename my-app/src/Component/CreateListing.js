import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const CreateListing = props => {
  const [credentials, setCredentials] = useState({
    name: "",
    propertyType: "",
    price: "",
    minNightStay: "",
    cleaningFee: "",
    numberOfGuests: "",
    amenities: ""
  });

  axiosWithAuth()
    .put("", credentials)
    .then(res)
    .catch(err => console.log(err));
  return (
    <>
      <form>
        <label>
          Name:
          <input />
        </label>
        <label>
          Property Type:
          <input />
        </label>
        <label>
          Price:$
          <input />
        </label>
        <label>
          Min. Night Stay:
          <input />
        </label>
        <label>
          Cleaning Fee:$
          <input />
        </label>
        <label>
          # of Guests:
          <input />
        </label>
        <label>
          Amenities:
          <input />
        </label>
      </form>
    </>
  );
};
