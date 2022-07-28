import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Router from './Router';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Router />
      </Container>
    </>
  );
};

export default App;

const Container = styled.div``;
