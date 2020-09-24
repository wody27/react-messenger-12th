import React from 'react';
import styled, { css } from 'styled-components';

function MessageLine(props) {
    const { user, profileImg, message } = props;
    if (user) {
        return (
                <LeftUser>
                    <img src={profileImg} />
                    <ChatStyle>{message}</ChatStyle>
                </LeftUser>
        );
    } else {
        return (
                <RightUser>
                    <img src={profileImg} />
                    <ChatStyle>{message}</ChatStyle>
                </RightUser>
        );
    }
}
export default function MessageSender(props) {
    const { msglist, imglist } = props;
    return (
        <Wrapper>
            {msglist.map((msg, index) => {
                return (
                    <MessageLine
                        key={index}
                        user={msg.user}
                        profileImg={msg.user ? imglist.EUNKO : imglist.COOL}
                        message={msg.content}
                    ></MessageLine>
                );
            })}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    height: 80px;
    width: 100%;

    display: flex;
    flex-direction: column;

    flex-wrap: nowrap;
`;

const MessageLineStyle = styled.div`
    border: 1px solid black;
    border-radius: 10px;

    img {
        height: 60px;
        width: 60px;
        border-radius: 25px;

        margin: 7px;
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
    border: 1px solid black;
    border-radius: 10px;

    height: 25px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;
