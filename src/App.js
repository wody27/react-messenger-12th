import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { FriendList, ChatList, Setting } from './routes';
import SideBarMenu from './components/SideBarMenu';

export default function App() {
  return (
    <Wrapper>
      <SideBarMenu />
      <Route path="/friend" component={FriendList} />
      <Route path="/chat" component={ChatList} />
      <Route path="/setting" component={Setting} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
  display: flex;
  flex-direction: row;
`;
