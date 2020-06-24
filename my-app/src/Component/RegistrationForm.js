import React, { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";
import Link from "./Link";
import formSchema from "./FormSchema";
import * as yup from "yup";
import axios from "axios";
import Wrapper from "./FormWrapper";

export default function Form() {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  const [formState, setFormState] = useState(initialFormValues);

  const [errors, setErrors] = useState(initialFormValues);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [event.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors
        });
      });
  };

  const formSubmit = event => {
    event.preventDefault();
    axios
      .post("/auth/register", formState)
      .then(response => {
        setUsers([...users, response.data]);
        console.log("success", response.data);

        setFormState(initialFormValues);
        // Push to Login form or to Listing or CreateListings form
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const inputChange = event => {
    event.persist();

    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "button"
          ? event.target.submit
          : event.target.value
    };
    validateChange(event);
    setFormState(newFormData);
  };

  return (
    <Container>
      <form onSubmit={formSubmit}>
        <Wrapper>
          <div className="formHeading">
            <h1>Register</h1>
          </div>
          <div className="formInputs">
            <label htmlFor="firstName">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formState.firstName}
                onChange={inputChange}
              />
              <p className="errors">{errors.firstName}</p>
            </label>
          </div>
          <div className="formInputs">
            <label htmlFor="lastName">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formState.lastName}
                onChange={inputChange}
              />
              <p className="errors">{errors.lastName}</p>
            </label>
          </div>
          <div className="formInputs">
            <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formState.username}
                onChange={inputChange}
              />
              <p className="errors">{errors.username}</p>
            </label>
          </div>
          <div className="formInputs">
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={inputChange}
              />
              <p className="errors">{errors.email}</p>
            </label>
          </div>
          <div className="formInputs">
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={inputChange}
              />
              <p className="errors">{errors.password}</p>
            </label>
          </div>
          <div className="submitButton">
            <Button disabled={buttonDisabled} name="submit">
              Submit
            </Button>
          </div>
          <p>
            Already have an account?
            <br />
            <Link href="#">Log in here</Link>
          </p>
        </Wrapper>
      </form>
    </Container>
  );
}

// import React from "react";
// import { Context } from "../context.js/Context";

// export const Register = () => {
//   const [credentials, setCredentials] = useState({
//     firstname: "",
//     lastname: "",
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = e => {
//     e.preventDefault();
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post("/auth/register", credentials)
//       .then(res => {
//         //console.log(res)
//         localStorage.setItem("token" /*res.data.payload*/);
//         //props.history.push();
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} />
//       <h1>Register a new account here: </h1>
//       <input
//         name="firstname"
//         type="text"
//         onChange={handleChange}
//         value={credentials.firstname}
//         placeholder="First Name"
//       />
//       <input
//         name="lastname"
//         type="text"
//         onChange={handleChange}
//         value={credentials.lastname}
//         placeholder="Last Name"
//       />
//       <input
//         name="username"
//         type="text"
//         onChange={handleChange}
//         value={credentials.username}
//         placeholder="Username"
//       />
//       <input
//         name="email"
//         type="text"
//         onChange={handleChange}
//         value={credentials.email}
//         placeholder="Email"
//       />
//       <input
//         name="password"
//         type="text"
//         onChange={handleChange}
//         value={credentials.password}
//         placeholder="Password"
//       />
//       <button>Submit</button>
//     </>
//   );
// };
