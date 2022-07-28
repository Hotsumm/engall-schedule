import React from 'react';
import styled from 'styled-components';

type ScheduleLayoutProps = {
  title: string;
  children?: React.ReactNode;
  buttonText: string;
  onClickButton?: () => void;
};

const ScheduleLayout: React.FC<ScheduleLayoutProps> = ({
  children,
  title,
  onClickButton,
  buttonText,
}) => {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        <Button onClick={onClickButton}>{buttonText}</Button>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default ScheduleLayout;

const Container = styled.div`
  width: 100%;
  padding: 0 30px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 700;
  margin-bottom: 40px;
  h2 {
    height: 100%;
    font-size: 22px;
  }
`;

const Button = styled.button`
  background: #3175d8;
  color: white;
  padding: 15px 25px;
  border-radius: 15px;
`;

const Content = styled.div`
  width: 100%;
`;
