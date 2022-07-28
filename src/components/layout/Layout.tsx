import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View>
      <Navigation />
      <Main>{children}</Main>
    </View>
  );
};

export default Layout;

const View = styled.div`
  max-width: 1440px;
`;

const Main = styled.main``;
