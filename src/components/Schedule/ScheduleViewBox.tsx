import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getSchedules } from '../../api/scheduleApi';
import ScheduleItem from './ScheduleItem';
import { ScheduleType, ScheduleByDayType } from '../../types/schedule';
import { weekList } from 'constants/weeks';

const ScheduleViewBox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [schedulesByDay, setSchedulesByDay] =
    useState<ScheduleByDayType | null>(null);

  const removeSchedule = (day: string, id: number) => {
    if (!schedulesByDay) return;
    const newDaySchedules = schedulesByDay[day].filter(
      schedule => schedule.id !== id,
    );
    setSchedulesByDay({
      ...schedulesByDay,
      [day]: [...newDaySchedules],
    });
    console.log(newDaySchedules);
  };

  const fetchClass = useCallback(async () => {
    setIsLoading(true);
    const initSchedulesByDay: ScheduleByDayType = {};
    weekList.map((week: string) => (initSchedulesByDay[week] = []));

    try {
      const schedules = await getSchedules();
      schedules.map((data: ScheduleType) =>
        initSchedulesByDay[data.day].push(data),
      );
    } catch (error) {
      console.log(error);
    }

    setSchedulesByDay(initSchedulesByDay);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchClass();
  }, [fetchClass]);

  if (isLoading) return <div>...Loading</div>;

  return (
    <Container>
      <ScheduleList>
        {schedulesByDay &&
          Object.entries(schedulesByDay).map(
            ([day, value]: [string, ScheduleType[]]) => (
              <ScheduleItem
                key={day}
                title={day}
                scheduleList={value}
                removeSchedule={removeSchedule}
              />
            ),
          )}
      </ScheduleList>
    </Container>
  );
};
export default ScheduleViewBox;

const Container = styled.div`
  width: auto;
  border: 1px solid #cfcfcf;
`;

const ScheduleList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
