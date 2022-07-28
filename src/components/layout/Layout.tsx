import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View>
      <Container>
        <Navigation />
        <Main>{children}</Main>
      </Container>
    </View>
  );
};

export default Layout;

const View = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Main = styled.main`
  width: 100%;
  padding: 60px 0;
`;
