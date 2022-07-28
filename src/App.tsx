import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Router from './Router';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  );
};

export default App;

const Container = styled.div``;
