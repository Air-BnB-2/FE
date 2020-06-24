import React from 'react';
import Form from './Components/RegistrationForm';
import FormContainer from './Components/FormContainer';
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <FormContainer>
          <Form/>
      </FormContainer>
    </div>
  );
}

export default App;
