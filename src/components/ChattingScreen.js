import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Components
import Header from './Header';
import MessageSender from './MessageSender';
import MessageLine from './MessageLine';

// Data
import CHAT_LIST_DATA from '../resources/ChatListData';
import FRIEND_LIST_DATA from '../resources/FriendListData';

export default function ChattingScreen({ match }) {
  const isChat = match.url.split('/')[1] === 'chat' ? true : false;
  const index = match.params.index;

  const OPPONENT_PROFILE = isChat ? CHAT_LIST_DATA[index] : FRIEND_LIST_DATA[index];
  const MY_PROFILE_IMG =
    'https://user-images.githubusercontent.com/56102421/94894116-af3bd580-04c3-11eb-87d0-d77e6794203e.jpeg';
  const MSGLIST = [
    { user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
    { user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
    { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
    { user: false, content: '안녕 은아' },
    { user: false, content: 'ㅁㅎ?' },
    { user: true, content: '시원아 넌 최고의 팀장이야' },
    { user: false, content: '나도 아니까  ' },
    { user: false, content: '그만 말해줘도 돼' },
    { user: true, content: 'ㅠㅠ' },
  ];

  const [currentUser, setCurrentUser] = useState(false); // 현재 채팅하는 사람
  const [newMessageList, setNewMessageList] = useState(MSGLIST); // Re-Rendering하기 위하여 생성

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, [newMessageList]);

  const addMessageToList = (message) => {
    setNewMessageList(
      newMessageList.concat([
        {
          user: currentUser,
          content: message,
        },
      ])
    );
  };

  const changeUser = () => {
    setCurrentUser(!currentUser);
  };

  const chatting = newMessageList.map((msg, index) => {
    return (
      <MessageLine
        key={index}
        user={msg.user}
        profileImg={msg.user ? OPPONENT_PROFILE.image : MY_PROFILE_IMG}
        message={msg.content}
      ></MessageLine>
    );
  });

  return (
    <Wrapper>
      <Header
        user={currentUser ? OPPONENT_PROFILE.name : '이재용'}
        profileImg={currentUser ? OPPONENT_PROFILE.image : MY_PROFILE_IMG}
        {...{ changeUser }}
      ></Header>
      <EmptyChat></EmptyChat>
      {chatting}
      <EmptyChat></EmptyChat>
      <MessageSender addToList={addMessageToList}></MessageSender>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-left: 70px;
  padding: 0;

  background-color: #abc1d1;
`;

const EmptyChat = styled.div`
  height: 80px;
}
`;
