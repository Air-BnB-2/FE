import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;


function App() {

  return (
    <Router>
    <WrapperDiv>
        <Header/>
        <br/>
        <Login/>
        {/*<Route></Route>*/}
      
    </WrapperDiv>
    </Router>
  );
}

export default App;
