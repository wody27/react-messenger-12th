import React, { useState } from 'react';
import styled from 'styled-components';

import Cell from './Cell';

import CHAT_LIST_DATA from '../resources/ChatListData';
import FRIEND_LIST_DATA from '../resources/FriendListData';

export default function List({ from, route }) {
  const { match, history } = route;
  const [selected, setSelected] = useState(-1);
  const listData = from === 'CHAT' ? CHAT_LIST_DATA : FRIEND_LIST_DATA;
  const isChatList = from === 'CHAT' ? 'true' : 'false';

  const list = listData.map((item, index) => {
    return (
      <Button
        key={index}
        isSelected={selected === index ? true : false}
        onClick={() => setSelected(index)}
        onDoubleClick={() => {
          console.log(`${match.url}/${index}`);
          history.push(`${match.url}/${index}`);
        }}
      >
        <Cell key={index} name={item.name} img={item.image} message={item.message} list={isChatList} />
      </Button>
    );
  });

  return <Wrapper>{list}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 0;
  margin-top: 100px;
  padding: 0;

  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;

  padding: 0;

  border: none;

  background-color: ${(props) => (props.isSelected === true ? '#ededed' : 'white')};

  outline: none;
`;
