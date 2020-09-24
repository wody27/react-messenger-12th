import React from 'react';
import styled from 'styled-components';

export default function Header({user, profileImg}) {
	return (
	<Wrapper>
		<img src={profileImg}/>
		<Stack>
			<h2>{user}</h2>
			<div>현재 활동중</div>
		</Stack>
	</Wrapper>
	);
}
const Wrapper = styled.div`
// 상단에 고정
	position: fixed;
	top: 0;
	width: 100%;

	height: 80px;
	background-color: white;
	opacity: 0.9;

	display: flex;
	flex-direction: row;
	
	img {
		width: 70px;
		height: 70px;

		opacity: 1.0;
		border-radius: 15px;
		padding: 5px;
		margin-left: 15px;
	}
`;
const Stack = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin-left: 10px;
	h2 {
		margin: 0;
		margin-bottom: 5px;
	}
`;