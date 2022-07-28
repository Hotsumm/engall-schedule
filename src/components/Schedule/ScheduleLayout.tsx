import React from 'react';
import styled from 'styled-components';

type ScheduleLayoutProps = {
  title: string;
  children?: React.ReactNode;
};

const ScheduleLayout: React.FC<ScheduleLayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default ScheduleLayout;

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
`;
const Header = styled.header`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: 100%;
`;
