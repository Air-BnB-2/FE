import React from "react";
import { Context } from "../context.js/Context";

export const Register = () => {
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: ""
  });

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
      <form onSubmit={handleSubmit} />
      <h1>Register a new account here: </h1>
      <input
        name="firstname"
        type="text"
        onChange={handleChange}
        value={credentials.firstname}
        placeholder="First Name"
      />
      <input
        name="lastname"
        type="text"
        onChange={handleChange}
        value={credentials.lastname}
        placeholder="Last Name"
      />
      <input
        name="username"
        type="text"
        onChange={handleChange}
        value={credentials.username}
        placeholder="Username"
      />
      <input
        name="email"
        type="text"
        onChange={handleChange}
        value={credentials.email}
        placeholder="Email"
      />
      <input
        name="password"
        type="text"
        onChange={handleChange}
        value={credentials.password}
        placeholder="Password"
      />
      <button>Submit</button>
    </>
  );
};
