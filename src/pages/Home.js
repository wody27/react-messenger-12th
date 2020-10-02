import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Wrapper>
      <HStack>
        <Title>wody's Kakaotalk </Title>
        <Img
          src="https://user-images.githubusercontent.com/56102421/94937531-a7535400-050a-11eb-99fd-76c93e6caff6.png"
          alt=""
        />
      </HStack>
      <SubTitle>좌측 사이드바를 눌러주세요!</SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #abc1d1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  margin-right: 30px;
`;

const Img = styled.img``;

const SubTitle = styled.h3``;
