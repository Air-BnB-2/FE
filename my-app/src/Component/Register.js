import React from "react";
import { Context } from "../context.js/Context";

export const Register = () => {
  return (
    <>
      <form onSubmit={} />
      <h1>Register a new account here: </h1>
      <input
        name="name"
        type="text"
        onChange={}
        value={}
        placeholder="First Name"
      />
      <input
        name="last-name"
        type="text"
        onChange={}
        value={}
        placeholder="Last Name"
      />
      <input
        name="username"
        type="text"
        onChange={}
        value={}
        placeholder="Username"
      />
      <input
        name="email"
        type="text"
        onChange={}
        value={}
        placeholder="Email"
      />
      <input
        name="password"
        type="text"
        onChange={}
        value={}
        placeholder="Password"
      />
      <button>Submit</button>
    </>
  );
};
