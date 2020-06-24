import React from 'react';
import Form from './Components/RegistrationForm';
import ListingsForm from './Components/ListingsForm';
import FormContainer from './Components/FormContainer';
import { Route } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <Route path='/register'> */}
        {/* <FormContainer>
            <Form/>
        </FormContainer> */}
      {/* </Route> */} */}
      {/* <Route path='/listings'> */}
        <FormContainer>
          <ListingsForm/>
        </FormContainer>
      {/* </Route> */}
    </div>
  );
}

export default App;
