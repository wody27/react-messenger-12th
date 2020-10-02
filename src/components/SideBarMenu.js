import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBarMenu() {
  return (
    <Wrapper>
      <TopIcons>
        <Link to="/friend">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94927907-dadbb180-04fd-11eb-836d-d0f2dedf7abb.png"
            alt="친구"
          />
        </Link>
        <Link to="/chat">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94927901-d911ee00-04fd-11eb-9745-923c39c7bd27.png"
            alt="채팅"
          />
        </Link>
        <Link to="/setting">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94927894-d616fd80-04fd-11eb-8352-6a3cbf414695.png"
            alt="설정"
          />
        </Link>
      </TopIcons>
      <BottomIcons>
        <Img
          className="alarm"
          src="https://user-images.githubusercontent.com/56102421/94927897-d7e0c100-04fd-11eb-8d57-1f3ddea2abb9.png"
          alt="알람"
        />
        <Img
          src="https://user-images.githubusercontent.com/56102421/94926671-15444f00-04fc-11eb-9b98-f2142c434144.png"
          alt="설정"
        ></Img>
      </BottomIcons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 70px;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #423530;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopIcons = styled.div`
  margin-top: 75px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomIcons = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 25px;

  margin: 0;
  padding: 6px 0;

  color: white;
  opacity: 0.5;

  .alarm {
    margin-bottom: 30px;
  }
`;
