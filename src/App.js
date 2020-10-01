import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { FriendList, ChatList, Setting } from './pages';
import SideBarMenu from './components/SideBarMenu';
import ChattingScreen from './components/ChattingScreen';

export default function App() {
  return (
    <Wrapper>
      <SideBarMenu />
      <Route path="/friend" component={FriendList} />
      <Route exact path="/chat" component={ChatList} />
      <Route exact path="/chat/:index" component={ChattingScreen} />
      <Route path="/setting" component={Setting} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
  display: flex;
  flex-direction: row;
`;
