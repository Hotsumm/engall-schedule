import React from 'react';
import styled from 'styled-components';
import ScheduleLayout from '../components/Schedule/ScheduleLayout';

const AddSchedule = () => {
  return (
    <Container>
      <ScheduleLayout title="Add class Schedule">
        <Content>AddSchedule Page</Content>
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

export default AddSchedule;
