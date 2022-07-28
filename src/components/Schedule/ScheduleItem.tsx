import React from 'react';
import styled from 'styled-components';
import { ScheduleType } from '../../types/schedule';
import { deleteScheduleById } from '../../api/scheduleApi';
import { getStartToEndTime } from '../../utils/translateTime';

type ScheduleItemProps = {
  title: string;
  scheduleList: ScheduleType[];
  removeSchedule: (day: string, id: number) => void;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  title,
  scheduleList,
  removeSchedule,
}) => {
  const handleDeleteSchedule = async (day: string, id: number) => {
    removeSchedule(day, id);
    await deleteScheduleById(id);
  };
  return (
    <Container>
      <Title>{title}</Title>
      <ScheduleList>
        {scheduleList.length > 0 &&
          scheduleList.map(schedule => (
            <Schedule key={schedule.id}>
              <ScheduleTime>
                {schedule.time} ~ {getStartToEndTime(schedule.time)}
              </ScheduleTime>
              <Button
                onClick={() => handleDeleteSchedule(schedule.day, schedule.id)}
              >
                X
              </Button>
            </Schedule>
          ))}
      </ScheduleList>
    </Container>
  );
};
export default ScheduleItem;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  border-bottom: 1px solid #cfcfcf;
`;

const ScheduleList = styled.div`
  width: 100%;
  height: 500px;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px 5px;
`;

const Schedule = styled.div`
  display: flex;
  padding: 5px 15px;
  background: #f7f6fb;

  & + & {
    margin-top: 15px;
  }
`;

const ScheduleTime = styled.div`
  color: grey;
  font-size: 16px;
`;

const Button = styled.button`
  right: 5px;
  border-radius: 50%;
  padding: 3px 4px;
  width: 20px;
  height: 20px;
  background: grey;
  color: white;
  font-size: 12px;
`;
