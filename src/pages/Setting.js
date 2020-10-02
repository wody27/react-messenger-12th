import React from 'react';
import styled from 'styled-components';

import Label from '../components/Label';
export default function Setting() {
  return (
    <Wrapper>
      <Fixed>
        <HStack>
          <Label label="더보기" />

          <Label label="Ver. 2.6.6" />
        </HStack>
      </Fixed>
      <Img
        src="https://user-images.githubusercontent.com/56102421/94956342-fd35f500-0526-11eb-867c-07e03702c901.png"
        alt=""
      />
      <VStack>
        <Label label="새소식" />
        <Label label="공지사항" />
        <Label label="환경설정" />
        <Label label="도움말" />
        <Label label="카카오톡 정보" />
      </VStack>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-left: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HStack = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: space-between;
`;

const VStack = styled.div`
  width: 100%;
  height: 300px;

  margin-left: 50px;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 70px;
  right: 16px;

  padding-left: 16px;
  padding-top: 16px;
  background-color: white;
`;

const Img = styled.img`
  width: 90px;
  margin-top: 150px;
`;
