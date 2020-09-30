import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBarMenu() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/friend">친구리스트사진</Link>
        </li>
        <li>
          <Link to="/chat">채팅리스트사진</Link>
        </li>
        <li>
          <Link to="/setting">설정</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 20vw;
  max-width: 300px;
  min-width: 80px;

  position: fixed;
  top: 0;
  left: 0;

  background-color: black;
  color: white;

  text-decoration: none;
`;
