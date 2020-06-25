import React from "react";
import axios from "axios";

import { Property } from "../Component/Property";

export const Listings = () => {
  state = {
    listings: []
  };
  // componentDidMount() {
  //     getData();
  // }
  const getData = () => {
    axios
      .get("/:id/listings")
      .then(res => console.log("from listings"))
      .catch();
  };
  return (
    <>
      Listings:
      <p>{this.state.listings}</p>
      Property name and price:
      <Property />
    </>
  );
};
