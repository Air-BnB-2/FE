import React, { useState } from "react";
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
    console.log("from");
    e.preventDefault()
      .post("/auth/login", credentials)
      .then(res => {
        console.log("from login", res);
        localStorage.setItem("token", res.credentials);
        credentials.history.push("/protected");
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
        <br />
        <label>
          <input
            name="password"
            type="text"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};
