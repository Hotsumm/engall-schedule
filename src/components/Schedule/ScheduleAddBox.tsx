import React, { useState, useRef, ChangeEvent } from 'react';
import styled from 'styled-components';
import { weekList } from '../../constants/weeks';
import {
  hourSelectOption,
  miniteSelectOption,
} from '../../constants/selectOption';
import { postSchedules } from '../../api/scheduleApi';

const ScheduleAddBox = () => {
  const hourRef = useRef<HTMLSelectElement | null>(null);
  const miniteRef = useRef<HTMLSelectElement | null>(null);
  const [selectedTimePoint, setSelectedTimePoint] = useState<string>('AM');
  const [selectDayList, setSelectDayList] = useState<string[] | []>([]);

  const handleSelctTimePoint = (timePoint: string) => {
    setSelectedTimePoint(timePoint);
  };

  const handleSelectDay = (event: ChangeEvent): void => {
    const { checked, id } = event.target as HTMLInputElement;
    if (checked) {
      setSelectDayList([...selectDayList, id]);
      return;
    }

    if (checked) {
      const filterSelectDayList = selectDayList.filter(day => day !== id);
      setSelectDayList([...filterSelectDayList]);
    }
  };

  const checkIsSelectDay = (): boolean => {
    if (selectDayList.length === 0) return false;
    return true;
  };

  const checkIsTimeLimited = (
    hour: number,
    minite: number,
    timePoint: string,
  ): boolean => {
    if (hour === 11 && minite > 0 && timePoint === 'PM') return true;
    return false;
  };

  const handleSave = async () => {
    if (!hourRef.current || !miniteRef.current) return;
    const hour = hourRef.current.value;
    const minite = miniteRef.current.value;
    const timePoint = selectedTimePoint;

    if (!checkIsSelectDay()) return alert('요일을 선택해 주세요.');
    if (checkIsTimeLimited(Number(hour), Number(minite), timePoint))
      return alert('Class의 시작 시간의 범위는 0~23시까지 입니다.');

    try {
      selectDayList.map(
        async day =>
          await postSchedules({ day, time: `${hour}:${minite} ${timePoint}` }),
      );
    } catch (error) {
      console.log(error);
      return;
    }

    alert('Class가 추가되었습니다.');
  };

  return (
    <Container>
      <Wrapper>
        <Section>
          <Title>Start Time</Title>
          <StartTime>
            <Select ref={hourRef}>
              {hourSelectOption.map(hour => (
                <option value={hour} key={hour}>
                  {hour}
                </option>
              ))}
            </Select>
            :
            <Select ref={miniteRef}>
              {miniteSelectOption.map(minite => (
                <option value={minite} key={minite}>
                  {minite}
                </option>
              ))}
            </Select>
            <TimePoint>
              <TimePointButton
                onClick={() => handleSelctTimePoint('AM')}
                isFocus={selectedTimePoint === 'AM'}
              >
                AM
              </TimePointButton>
              <TimePointButton
                onClick={() => handleSelctTimePoint('PM')}
                isFocus={selectedTimePoint === 'PM'}
              >
                PM
              </TimePointButton>
            </TimePoint>
          </StartTime>
        </Section>
        <Section>
          <Title>Repeat On</Title>
          <RepeatDay>
            {weekList.map(week => (
              <RepeatDayItem key={week}>
                <input type="checkbox" id={week} onChange={handleSelectDay} />
                <Label htmlFor={week}>{week}</Label>
              </RepeatDayItem>
            ))}
          </RepeatDay>
        </Section>
      </Wrapper>
      <SaveButton onClick={handleSave}>Save</SaveButton>
    </Container>
  );
};
export default ScheduleAddBox;

const Container = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #cfcfcf;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 20px;
`;

const Title = styled.h3`
  height: 100%;
  margin-right: 20px;
  font-weight: 700;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & + & {
    margin-top: 60px;
  }
`;

const StartTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
`;

const Select = styled.select`
  border: 1px solid #cfcfcf;
  padding: 10px 15px;
`;

const TimePoint = styled.div`
  gap: 0 10px;
`;

const TimePointButton = styled.button<{ isFocus: boolean }>`
  padding: 10px 15px;
  border: 1px solid #cfcfcf;
  border: 1px solid ${props => (props.isFocus ? '#cfcfcf' : '#c5c5c5')};
  color: ${props => (props.isFocus ? 'black' : '#c5c5c5')};
  & + & {
    margin-left: 10px;
  }
`;

const RepeatDay = styled.div`
  display: flex;
`;

const RepeatDayItem = styled.div`
  & + & {
    margin-left: 10px;
  }
  input {
    display: none;
  }
  input:checked + label {
    border: 1px solid black;
    color: black;
  }
`;

const Label = styled.label`
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #c5c5c5;
  color: #c5c5c5;
`;

const SaveButton = styled.button`
  width: 150px;
  height: 40px;
  background: tomato;
  color: white;
  position: absolute;
  right: 10px;
  bottom: -50px;
  border-radius: 10px;
`;
