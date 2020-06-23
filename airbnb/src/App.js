import React from 'react';
import Form from './Components/Registration';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Register</h1>
      <Form/>
    </div>
  );
}

export default App;
