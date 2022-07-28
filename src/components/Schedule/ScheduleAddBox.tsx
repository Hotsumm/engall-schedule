import React from 'react';
import styled from 'styled-components';
import { weekList } from '../../constants/weeks';
import {
  hourSelectOption,
  miniteSelectOption,
} from '../../constants/selectOption';

const ScheduleAddBox = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Title>Start Time</Title>
          <StartTime>
            <StartTimeSelect>
              <Select>
                {hourSelectOption.map(hour => (
                  <option value={hour} key={hour}>
                    {hour}
                  </option>
                ))}
              </Select>
              <Select>
                {miniteSelectOption.map(minite => (
                  <option value={minite} key={minite}>
                    {minite}
                  </option>
                ))}
              </Select>
            </StartTimeSelect>
            <StartTimeButton>
              <Button>AM</Button>
              <Button>PM</Button>
            </StartTimeButton>
          </StartTime>
        </Section>
        <Section>
          <Title>Repeat On</Title>
          <Repeat>
            {weekList.map(week => (
              <Button key={week}>{week}</Button>
            ))}
          </Repeat>
        </Section>
      </Wrapper>
    </Container>
  );
};
export default ScheduleAddBox;

const Container = styled.div`
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
    margin-top: 80px;
  }
`;

const StartTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
`;

const StartTimeSelect = styled.div``;

const Select = styled.select`
  border: 1px solid #cfcfcf;
  padding: 10px 15px;
  & + & {
    margin-left: 10px;
  }
`;

const StartTimeButton = styled.div`
  gap: 0 10px;
`;

const Repeat = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid #cfcfcf;
  padding: 10px 15px;
  & + & {
    margin-left: 10px;
  }
`;
