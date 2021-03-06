import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import { Context } from "../context.js/Context";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SubmitButton = styled.button`
  height: 20px;
  width: 60px;
  display: flex;
  justify-content: center;
`;

function Login(props) {
  const { id, setId } = useContext(Context);
  const history = useHistory();

  const initialFormValues = {
    username: "",
    password: ""
  };

  const [users, setUsers] = useState([]);
  const [formState, setFormState] = useState(initialFormValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  // validation
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "username must be longer than 3 characters")
      .required("Username is a required field"),
    password: yup
      .string()
      .min(3, "password must be longer than 3 characters")
      .required("Password is a required field")
  });

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
        setFormErrors({
          ...formErrors,
          [event.target.name]: ""
        });
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [event.target.name]: error.formErrors
        });
      });
  };

  const formSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/login", formState)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setId(res.data.id);
        history.push("/protected");
        // setId();
        // setUsers([...users, response.data]);
        // console.log(response.data);

        // setFormState(initialFormValues);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onInputChange = event => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "submit"
          ? event.target.submit
          : event.target.value
    };
    validateChange(event);
    setFormState(newFormData);
  };

  return (
    <StyledForm className="form-container" onSubmit={formSubmit}>
      <label htmlFor="username">
        <input
          id="username"
          value={formState.username}
          type="text"
          name="username"
          placeholder="Username"
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="password">
        <input
          id="password"
          value={formState.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
        />
      </label>

      <SubmitButton id="submitBtn" disabled={buttonDisabled} type="submit">
        Login
      </SubmitButton>
    </StyledForm>
  );
}

export default Login;
