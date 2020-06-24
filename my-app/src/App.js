import React, { Provider } from "react";
import "./App.css";
import Form from "./Component/RegistrationForm";
import FormContainer from "./Component/FormContainer";

import Header from "./Component/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Component/Login";

import { Context } from "./context.js/Context";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

//import { Login } from "./Component/Login"; wayne
//import { Register } from "./Component/Register"; wayne

//import { Context } from "./context.js/Context"; wayne

const App = () => {
  const [listings] = useState(/*DATA*/);
  return (
    <div className="App">
      <Context.Provider value={listings}>
        <Router>
          <WrapperDiv>
            <Header />
            <br />
            <Login />
            {/*<Route></Route*/}
          </WrapperDiv>
        </Router>

        <FormContainer>
          <Form />
        </FormContainer>
      </Context.Provider>
      {/* <Context.Provider value={listings}> wayne
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Context.Provider> */}
    </div>
  );
};

export default App;
