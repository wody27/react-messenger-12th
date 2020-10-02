import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { FriendList, ChatList, Setting } from './pages';
import SideBarMenu from './components/SideBarMenu';
import ChattingScreen from './components/ChattingScreen';

export default function App() {
  return (
    <Wrapper>
      <SideBarMenu />
      <Switch>
        <Route path="/friend/:index" component={ChattingScreen} />
        <Route path="/friend" component={FriendList} />
        <Route exact path="/chat/:index" component={ChattingScreen} />
        <Route exact path="/chat" component={ChatList} />
        <Route path="/setting" component={Setting} />
      </Switch>
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
