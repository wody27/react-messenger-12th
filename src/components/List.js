import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import Cell from './Cell';
import CHAT_LIST_DATA from '../resources/ChatListData';

export default function List({ props }) {
  const { match, history } = props;
  return (
    <Wrapper>
      {CHAT_LIST_DATA.map((item, index) => {
        return (
          <Button key={index} onDoubleClick={() => history.push(`${match.url}/${index}`)}>
            <Cell key={index} name={item.name} img={item.image} message="dfasdfasd" />
          </Button>
        );
      })}
    </Wrapper>
  );
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

  background-color: white;
`;
