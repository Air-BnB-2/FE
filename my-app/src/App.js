import React, { Provider } from "react";
import "./App.css";

import { Login } from "./Component/Login";
import { Register } from "./Component/Register";

import { axiosWithAuth } from "./utils/axiosWithAuth";
import { Context } from "./context.js/Context";

const App = () => {
  const [listings] = useState(axiosWithAuth);
  return (
    <div className="App">
      <Context.Provider value={listings}>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Context.Provider>
    </div>
  );
};

export default App;
