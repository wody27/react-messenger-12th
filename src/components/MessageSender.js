import React, { useState } from 'react';
import styled from 'styled-components';


export default function MessageSender({addToList}) {

	function sendToChattingScreen(message) {
		addToList(message);
	}
    return (
        <Wrapper>
			<SenderForm sendToMessageSender={sendToChattingScreen}/>
            메세지보내는부분
        </Wrapper>
    );
}

function SenderForm({sendToMessageSender}) {

	const [message, setMessage] = useState('');

	const handleChangeMessage = (event) => {
		setMessage(event.target.value);
	};

	
	const handleSubmitMessage = (event) => {
		event.preventDefault();
		sendToMessageSender(message);
		setMessage('');
	}

	return (
		<form onSubmit={handleSubmitMessage}>
			<input 
				name="message"
				value={message}
				onChange={handleChangeMessage}
			/>
			<button type="submit">전송</button>
				
		</form>
	);
}
const Wrapper = styled.div`
	width: 100%;
	height: 80px;

	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	background-color: black;
`;

