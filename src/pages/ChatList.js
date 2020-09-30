import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Label from '../components/Label';

export default function ChatList() {
  return (
    <Wrapper>
      <HStack>
        <Label label="채팅" />
        <Label label="채팅방이미지" />
      </HStack>
      <SearchBar />
      <Scroll></Scroll>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 16px;

  display: flex;
  flex-direction: column;
`;

const HStack = styled.div`
  width: 100%;
  height: 4%;

  display: flex;
  justify-content: space-between;
`;

const Scroll = styled.div``;