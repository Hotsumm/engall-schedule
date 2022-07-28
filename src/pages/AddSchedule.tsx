import React from 'react';
import styled from 'styled-components';
import ScheduleLayout from '../components/Schedule/ScheduleLayout';
import ScheduleAddBox from '../components/Schedule/ScheduleAddBox';

const AddSchedule = () => {
  return (
    <Container>
      <ScheduleLayout title="Add class schedule" buttonText="Save">
        <Content>
          <ScheduleAddBox />
        </Content>
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
