import React from 'react';
import styled from 'styled-components';
import ScheduleLayout from '../components/Schedule/ScheduleLayout';

const Home = () => {
  return (
    <Container>
      <ScheduleLayout title="Class Schedule">
        <Content>Home Page</Content>
      </ScheduleLayout>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
`;

const Content = styled.div`
  width: 100%;
`;

export default Home;
