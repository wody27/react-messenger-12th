import React from 'react';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import Label from '../components/Label';
import List from '../components/List';

import FRIEND_LIST_DATA from '../resources/FriendListData';

export default function ChatList(props) {
  return (
    <Wrapper>
      <Fixed>
        <HStack>
          <Empty>
            <Label label="친구" />
            <FriendCount>{`${FRIEND_LIST_DATA.length}`}</FriendCount>
          </Empty>
          <Label label="친구이미지" />
        </HStack>
        <SearchBar placeholderName="이름으로 검색" />
      </Fixed>
      <List from="FRIEND" route={props}></List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-left: 70px;

  display: flex;
  flex-direction: column;
`;

const FriendCount = styled.span`
  margin-left: 5px;
  color: gray;
  font-size: 18px;
`;
const Empty = styled.div`
  display: flex;
  align-items: flex-end;
`;
const HStack = styled.div`
  width: 100%;
  height: 24px;

  display: flex;
  justify-content: space-between;
`;

const Fixed = styled.div`
  position: fixed;
  left: 70px;
  right: 16px;

  padding-left: 16px;
  padding-top: 16px;
  background-color: white;
`;
