import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    baseURL: "https://airbnb2beckend.herokuapp.com/api/",
    headers: {
      authorization: token
    }
  });
};
