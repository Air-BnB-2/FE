import React, { useState, Provider } from "react";
import styled from "styled-components";
import Header from "./Component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Component/RegistrationForm";
import FormContainer from "./Component/FormContainer";
import PrivateRoute from "./Component/PrivateRoute";

import ListingsDashboard from "./Component/ListingsDashboard";

import "./App.css";

import Login from "./Component/Login";
import LoginFormContainer from "./Component/LoginFormContainer";

import { Context } from "./context.js/Context";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

function App() {
  const [id, setId] = useState(null);
  const value = {
    id,
    setId
  };
  return (
    <div className="App">
      <Context.Provider value={value}>
        <Router>
          <Switch>
            <PrivateRoute path="/protected">
              <ListingsDashboard />
            </PrivateRoute>
            <Route>
              <WrapperDiv>
                <Header />
                <br />
                <LoginFormContainer>
                  <Login />
                </LoginFormContainer>
                <FormContainer>
                  <Form />
                </FormContainer>
                {/*<Route></Route>*/}
              </WrapperDiv>
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
