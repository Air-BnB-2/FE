import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
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
      .post("/auth/register", credentials)
      .then(res => {
        //console.log(res)
        localStorage.setItem("token" /*res.data.payload*/);
        //props.history.push();
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h2>Or Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstname"
            type="text"
            onChange={handleChange}
            value={credentials.firstname}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            name="lastname"
            type="text"
            onChange={handleChange}
            value={credentials.lastname}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            name="username"
            type="text"
            onChange={handleChange}
            value={credentials.username}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            onChange={handleChange}
            value={credentials.email}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="text"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
