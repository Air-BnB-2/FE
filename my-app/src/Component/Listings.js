import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

export const Listings = () => {
    state = {
        listings: []
    };
    componentDidMount() {
        getData();
    }
  const getData = () => {
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        console.log("from login", res);
        localStorage.setItem("token" /*res.data.payload*/);
        credentials.history.push("/protected");
      })
      .catch(err => console.log(err));
  };
  return(
      <>
<p>{this.state.listings}</p>
      </>
  )
};
