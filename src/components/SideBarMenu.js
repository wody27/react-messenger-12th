import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBarMenu() {
  return (
    <Wrapper>
      <Link to="/friend">친구</Link>
      <Link to="/chat">채팅</Link>
      <Link to="/setting">설정</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 20%;
  max-width: 150px;
  min-width: 80px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #423530;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
