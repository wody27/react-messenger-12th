import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SideBarMenu() {
  return (
    <Wrapper>
      <TopIcons>
        <Link to="/friend">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94892448-9b8e7000-04bf-11eb-8d14-fba287d101be.jpg"
            alt="친구"
          />
        </Link>
        <Link to="/chat">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94892455-a0532400-04bf-11eb-8e6d-5c50ca79640e.png"
            alt="채팅"
          />
        </Link>
        <Link to="/setting">
          <Img
            src="https://user-images.githubusercontent.com/56102421/94892451-9e896080-04bf-11eb-9e3e-35f3d5c72ee5.jpg"
            alt="설정"
          />
        </Link>
      </TopIcons>
      <BottomIcons>
        <Button>
          <Img
            src="https://user-images.githubusercontent.com/56102421/94892452-9f21f700-04bf-11eb-83ac-1b59cc80d4b1.png"
            alt="캘린더"
          />
        </Button>
        <Button>
          <Img
            src="https://user-images.githubusercontent.com/56102421/94892453-9f21f700-04bf-11eb-8dbe-70d3d6e2f832.png"
            alt="알람"
          />
        </Button>
        <Button>
          <Img
            src="https://user-images.githubusercontent.com/56102421/94892454-9fba8d80-04bf-11eb-8cfb-198dc358a8d4.png"
            alt="설정"
          />
        </Button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  color: red;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;

  margin: 0;
  padding: 0;
`;
