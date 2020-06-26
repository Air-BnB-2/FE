import React from "react";
import styled from "styled-components";
import { Listings } from "./Listings";
import { ListingsForm } from "../Component/ListingsForm";

const ListingsDashboard = props => {
  const { listingsForm } = props;

  return (
    <>
      <ListingsForm />
      <Listings />
    </>
  );
};

export default ListingsDashboard;
