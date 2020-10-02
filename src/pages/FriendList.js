import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import Label from '../components/Label';
import List from '../components/List';

import FRIEND_LIST_DATA from '../resources/FriendListData';

function filter(search) {
  return FRIEND_LIST_DATA.filter((friend) => {
    if (friend.name.includes(search)) {
      return friend;
    }
  });
}

export default function ChatList(props) {
  // 검색 기능
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(FRIEND_LIST_DATA);
  const getText = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    setFilteredData(filter(search));
  }, [search]);
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
        <SearchBar sendText={getText} placeholderName="이름으로 검색" />
      </Fixed>
      <List data={filteredData} from="FRIEND" route={props}></List>
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
