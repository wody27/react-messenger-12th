import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import MessageSender from './MessageSender';

export default function ChattingScreen() {
    const EUNKO = 'https://img.techpowerup.org/200908/eun.png';
    const COOL = 'https://img.techpowerup.org/200908/NjRiY2JjOGU5YzQz.png';

    const MSGLIST = [
        { user: true, content: '안녕하세요 12기 프론트엔드 개발자분들' },
        { user: true, content: '저희의 대화를 마음껏 조작해보세요 💌' },
        { user: true, content: '상단에 프로필을 눌러서 발신자 변경하면 됩니당~' },
        { user: false, content: '안녕 은아' },
        { user: false, content: '뭐해 ?' },
        { user: true, content: '시원아 넌 최고의 팀장이야' },
        { user: false, content: '나도 아니까  ' },
        { user: false, content: '그만 말해줘도 돼' },
        { user: true, content: 'ㅠㅠ' },
    ];

	const [currentUser, setCurrentUser] = useState(false); // 현재 채팅하는 사람 
	const [newMSGList, setNewMSGList] = useState(MSGLIST); // Re-Rendering하기 위하여 생성
	
	const addMessageToList = (message) => {
		setNewMSGList(newMSGList.concat([{
			user: currentUser,
			content: message
		}]));
	}

	const changeUser = () => {
		setCurrentUser(!currentUser);
	}

	const chattingList = newMSGList.map((msg, index) => {
		return (
			<MessageLine
				key={index}
				user={msg.user}
				profileImg={msg.user ? EUNKO: COOL}
				message={msg.content}
			></MessageLine>
		);
	});

    return (
        <Wrapper>
			<Header 
				user={currentUser ? "고은" : "정쿨"} 
				profileImg={currentUser ? EUNKO: COOL}
				changeUser={changeUser}	
			></Header>
			{chattingList}
            <MessageSender addToList={addMessageToList}></MessageSender>
        </Wrapper>
    );
}

function MessageLine({ user, profileImg, message }) {
    if (user) {
        return (
                <LeftUser>
                    <img src={profileImg} alt="leftUser"/>
                    <ChatStyle>{message}</ChatStyle>
                </LeftUser>
        );
    } else {
        return (
                <RightUser>
                    <img src={profileImg} alt="rightUser"/>
                    <ChatStyle>{message}</ChatStyle>
                </RightUser>
        );
    }
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	margin-top: 80px;
	padding: 0;
`;

const MessageLineStyle = styled.div`

    img {
        height: 60px;
        width: 60px;
        border-radius: 25px;

		margin: 10px;
		
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.30);
	}

	align-items: center;
`;

const LeftUser = styled(MessageLineStyle)`
    display: flex;
    flex-direction: row;
`;

const RightUser = styled(MessageLineStyle)`
    display: flex;
    flex-direction: row-reverse;
	justify-content: flex-start;
	
`;

const ChatStyle = styled.div`
    height: 25px;

	background-color: white;

    display: flex;
    flex-direction: row;
	align-items: center;
	
	padding: 10px;
	
	border: none;
    border-radius: 10px;

	box-shadow: 0 0 10px rgba(0, 0, 0, 0.30);
`;
