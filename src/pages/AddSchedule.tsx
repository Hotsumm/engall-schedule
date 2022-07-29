import React from 'react';
import styled from 'styled-components';
import ScheduleLayout from '../components/Schedule/ScheduleLayout';
import ScheduleAddBox from '../components/Schedule/ScheduleAddBox';
import { useNavigate } from 'react-router-dom';

const AddSchedule = () => {
  const navigate = useNavigate();
  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <Container>
      <ScheduleLayout
        title="Add class schedule"
        buttonText="Back"
        onClickButton={handleBackClick}
      >
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
