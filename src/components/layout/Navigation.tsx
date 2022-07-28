import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">Engall</Link>
        </Logo>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background: #44a7c8;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`;

export default Navigation;
