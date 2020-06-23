import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  //   state = {
  //     credential: {
  //       name: "",
  //       password: ""
  //     },
  //     isLoading: false
  //   };
  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        //console.log(res)
        localStorage.setItem("token" /*res.data.payload*/);
        //props.history.push();
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={credentials.name}
          />
        </label>
        <label>
          <input
            name="password"
            type="text"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};
