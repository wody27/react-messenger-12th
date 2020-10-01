import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Label from '../components/Label';

export default function ChatList() {
  return (
    <Wrapper>
      <Fixed>
        <HStack>
          <Label label="친구 644" />
          <Label label="친구이미지" />
        </HStack>
        <SearchBar placeholderName="이름으로 검색" />
      </Fixed>
      <Scroll></Scroll>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 16px;
  margin-left: 86px;

  display: flex;
  flex-direction: column;
`;

const HStack = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: space-between;
`;

const Fixed = styled.div`
  position: fixed;
  top: 16px;
  left: 86px;
  right: 16px;
`;

const Scroll = styled.div``;
