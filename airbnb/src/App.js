import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login";
import LoginForm from "./Components/LoginForm";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <WrapperDiv>
        <Header />
        <br />
        <LoginForm>
          <Login />
        </LoginForm>
        {/*<Route></Route>*/}
      </WrapperDiv>
    </Router>
  );
}

export default App;
