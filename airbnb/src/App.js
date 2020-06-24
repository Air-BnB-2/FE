import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;


function App() {
  return (
    <WrapperDiv>
      <Header/>
    </WrapperDiv>
  );
}

export default App;
