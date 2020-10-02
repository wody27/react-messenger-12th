import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBarMenu() {
  return (
    <Wrapper>
      <TopIcons>
        <Link to="/friend">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94908442-a1467e80-04dc-11eb-9fed-185b480a5b95.png"
            alt="친구"
          />
        </Link>
        <Link to="/chat">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94907909-d56d6f80-04db-11eb-9815-ab4959a057f5.png"
            alt="채팅"
          />
        </Link>
        <Link to="/setting">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94907250-d2be4a80-04da-11eb-9639-b2c93e849286.png"
            alt="설정"
          />
        </Link>
      </TopIcons>
      <BottomIcons>
        <Img
          className="alarm"
          src="https://user-images.githubusercontent.com/56102421/94907771-9b9c6900-04db-11eb-9717-50a9da542b0b.png"
          alt="알람"
        />
        <Img
          src="https://user-images.githubusercontent.com/56102421/94911096-91c93480-04e0-11eb-91e8-c159642129f6.png"
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
  height: 25px;

  margin: 0;
  padding: 6px 0;

  color: white;
  opacity: 0.5;

  .alarm {
    margin-bottom: 30px;
  }
`;
