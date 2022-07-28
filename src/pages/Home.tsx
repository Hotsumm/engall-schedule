import React from 'react';
import styled from 'styled-components';
import ScheduleLayout from '../components/Schedule/ScheduleLayout';
import ScheduleBox from '../components/Schedule/ScheduleBox';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateAddSchedulePage = (): void => {
    navigate('/addSchedule');
  };

  return (
    <Container>
      <ScheduleLayout
        title="Class Schedule"
        buttonText="Add Class Schedule"
        onClickButton={navigateAddSchedulePage}
      >
        <ScheduleBox />
      </ScheduleLayout>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
`;

export default Home;
