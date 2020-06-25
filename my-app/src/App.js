import React, { useState, Provider } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRouter from "./Component/PrivateRoute";
import { Listings } from "./Component/Listings";

import { Login } from "./Component/Login";
import { Register } from "./Component/RegistrationForm";
import PrivateRoute from "./Component/PrivateRoute";
//import { Context } from "./context.js/Context";

const App = () => {
  const [listings] = useState(/*DATA*/);
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Listings} />
        <Route exact path="/register" component={Register} />

        {/* <Context.Provider value={listings}>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
          //
        </Route>
      </Context.Provider> */}
      </div>
    </Router>
  );
};

export default App;
