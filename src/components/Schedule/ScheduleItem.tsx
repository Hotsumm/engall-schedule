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
    try {
      await deleteScheduleById(id);
    } catch (error) {
      console.log(error);
    }
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
              <DeleteButton>
                <button
                  onClick={() => {
                    if (!schedule.id) return;
                    handleDeleteSchedule(schedule.day, schedule.id);
                  }}
                >
                  X
                </button>
              </DeleteButton>
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
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  border-bottom: 1px solid #cfcfcf;
`;

const ScheduleList = styled.div`
  width: 100%;
  padding: 20px 5px;
`;

const Schedule = styled.div`
  display: flex;
  padding: 10px 15px;
  background: #f4f4f4;
  border-radius: 5px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
  & + & {
    margin-top: 15px;
  }
`;

const ScheduleTime = styled.div`
  color: grey;
  font-size: 16px;
`;

const DeleteButton = styled.div`
  display: flex;
  button {
    background: grey;
    border-radius: 50%;
    padding: 2px;
    width: 18px;
    height: 18px;
    color: white;
    font-size: 12px;
  }
`;
